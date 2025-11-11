// src/components/comments/SupabaseComments.jsx
import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

export default function SupabaseComments({ currentUser, onRequireAuth }) {
  const ADMIN_UUID =
    process.env.NEXT_PUBLIC_ADMIN_UUID ||
    "f9155190-087f-4e16-bdee-64d8412f4d2"; // tu admin de prueba

  const [comments, setComments] = useState([]);
  const [message, setMessage] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editMessage, setEditMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const commentsEndRef = useRef(null);
  const commentsListRef = useRef(null);
  const hasLoaded = useRef(false);

  // === Comentarios de prueba local ===
  const TEST_USERS = {
    admin: { id: ADMIN_UUID, name: "Admin" },
    normal: { id: "741eceb6-415c-4387-bed0-5016313e958e", name: "Usuario" }
  };

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && comments.length === 0) {
      setComments([
        {
          id: "c1",
          user_id: TEST_USERS.admin.id,
          message: "Comentario de Admin",
          created_at: new Date().toISOString(),
          profiles: { name: TEST_USERS.admin.name }
        },
        {
          id: "c2",
          user_id: TEST_USERS.normal.id,
          message: "Comentario de Usuario normal",
          created_at: new Date().toISOString(),
          profiles: { name: TEST_USERS.normal.name }
        }
      ]);
      setIsLoading(false);
    }
  }, [comments.length]);

  // ✅ Canal Realtime
  useEffect(() => {
    setIsLoading(true);
    fetchComments();

    const channel = supabase
      .channel("comments-realtime")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "comments" },
        (payload) => {
          console.log("📡 Realtime event recibido:", payload);

          if (payload.eventType === "INSERT" || payload.eventType === "UPDATE") {
            fetchComments();
          }

          if (payload.eventType === "DELETE") {
            setComments((prev) =>
              prev.filter((c) => c.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe((status) => {
        console.log("🔌 Canal Supabase status:", status);
      });

    return () => supabase.removeChannel(channel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hasLoaded.current) {
      hasLoaded.current = true;
      return;
    }
    if (commentsListRef.current) {
      commentsListRef.current.scrollTo({
        top: commentsListRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [comments]);

  async function fetchComments() {
    const { data, error } = await supabase
      .from("comments")
      .select("*, profiles(name)")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("❌ fetchComments error:", error);
      setComments([]);
    } else {
      setComments(data);
    }
    setIsLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const trimmed = message.trim();
    if (!currentUser) {
      if (typeof onRequireAuth === "function") onRequireAuth();
      return;
    }
    if (!trimmed || isSubmitting) return;

    setIsSubmitting(true);
    const tempId = uuidv4();
    const displayName =
      currentUser.user_metadata?.full_name ||
      currentUser.user_metadata?.name ||
      currentUser.email?.split("@")[0] ||
      "Tú";

    const temp = {
      id: tempId,
      user_id: currentUser.id,
      message: trimmed,
      created_at: new Date().toISOString(),
      is_temp: true,
      profiles: { name: displayName },
    };
    setComments((prev) => [...prev, temp]);

    try {
      const { data, error } = await supabase
        .from("comments")
        .insert([{ user_id: currentUser.id, message: trimmed }])
        .select("*, profiles(name)")
        .single();

      if (error) {
        console.error("❌ Insert error:", error);
        setComments((prev) => prev.filter((c) => c.id !== tempId));
      } else {
        setComments((prev) =>
          prev.map((c) => (c.id === tempId ? data : c))
        );
        setMessage("");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDelete(id) {
    if (!confirm("¿Seguro que deseas eliminar este comentario?")) return;
    const commentToDelete = comments.find((c) => c.id === id);
    if (!commentToDelete) return;
    setComments((prev) => prev.filter((c) => c.id !== id));
    const { error } = await supabase.from("comments").delete().eq("id", id);
    if (error) {
      console.error("❌ Delete error:", error);
      setComments((prev) => [...prev, commentToDelete]);
    }
  }

  function startEditing(comment) {
    setEditingId(comment.id);
    setEditMessage(comment.message);
  }

  async function saveEdit(id) {
    if (!editMessage.trim()) return;
    const original = comments.find((c) => c.id === id);
    if (!original) return;
    const originalMessage = original.message;

    setComments((prev) =>
      prev.map((c) => (c.id === id ? { ...c, message: editMessage } : c))
    );

    const { error } = await supabase
      .from("comments")
      .update({ message: editMessage })
      .eq("id", id);

    if (error) {
      console.error("❌ Update error:", error);
      setComments((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, message: originalMessage } : c
        )
      );
    }

    setEditingId(null);
    setEditMessage("");
  }

  const isAdmin = currentUser?.id === ADMIN_UUID;

  return (
    <div className="flex-1 p-4 rounded-lg bg-blue-50 dark:bg-gray-800 shadow-md">
      <div className="mb-2 font-bold text-lg text-gray-900 dark:text-gray-100">
        Comentarios ({comments.length})
      </div>

      {!isLoading && !currentUser && (
        <div className="bg-yellow-100 text-yellow-800 p-3 rounded-md mb-4 text-sm">
          ⚠️ Debes iniciar sesión para poder comentar.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={currentUser ? "Escribe tu comentario..." : "Inicia sesión para comentar..."}
          className="border p-2 rounded-md dark:bg-gray-700 dark:text-gray-100"
          disabled={!currentUser}
        />
        <button
          type="submit"
          disabled={isSubmitting || !currentUser || !message.trim()}
          className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : currentUser ? "Enviar Comentario" : "Necesitas Iniciar Sesión"}
        </button>
      </form>

      <div ref={commentsListRef} className="comments-list flex flex-col gap-4 overflow-y-auto max-h-[400px]">
        {isLoading ? (
          <div className="text-center text-gray-500 dark:text-gray-400">
            Cargando comentarios...
          </div>
        ) : (
         comments.map((comment) => {
  // Determinar el nombre a mostrar
  const authorName = comment.is_temp
    ? comment.profiles?.name || "Tú" // comentarios recién enviados por el usuario actual
    : comment.profiles?.name || (comment.user_id === ADMIN_UUID ? "Admin" : "Sin nombre"); // comentarios antiguos o admin

  const canManage = currentUser && (isAdmin || comment.user_id === currentUser.id);

  return (
    <div
      key={comment.id}
      className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-700 ${
        comment.is_temp ? "opacity-60" : ""
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-lg">
          {authorName?.[0]?.toUpperCase() ?? "U"}
        </div>
        <div className="flex-1">
          <strong
            className={`text-green-700 dark:text-green-300 ${
              comment.is_temp ? "italic" : ""
            }`}
          >
            {authorName} {comment.is_temp ? "(Enviando...)" : ""}
          </strong>

          {editingId === comment.id ? (
            <div className="mt-2">
              <textarea
                value={editMessage}
                onChange={(e) => setEditMessage(e.target.value)}
                className="border p-2 rounded-md w-full dark:bg-gray-600 dark:text-white"
              />
              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => saveEdit(comment.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  onClick={() => setEditingId(null)}
                  className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-gray-500"
                >
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <p className="mt-1 text-gray-800 dark:text-gray-200">
              {comment.message}
            </p>
          )}

          <small className="text-gray-500 dark:text-gray-400 mt-2 block">
            {new Date(comment.created_at).toLocaleString()}
          </small>
        </div>
      </div>

      {editingId !== comment.id && canManage && (
        <div className="flex gap-3 mt-3 justify-end">
          <button
            type="button"
            onClick={() => startEditing(comment)}
            className="text-blue-500 hover:underline"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => handleDelete(comment.id)}
            className="text-red-500 hover:underline"
          >
            Eliminar
          </button>
        </div>
      )}
    </div>
  );
})

        )}
        <div ref={commentsEndRef} />
      </div>
    </div>
  );
}
