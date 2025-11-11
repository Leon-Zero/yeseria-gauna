// src/components/comments/Comments.jsx
import { useState, useEffect } from "react";
import { supabase } from "../../../lib/supabaseClient.js";
import SupabaseComments from "./SupabaseComments.jsx";
import FacebookComments from "./FacebookComments.jsx";
import LoginModal from "../auth/LoginModal.jsx";

export default function Comments() {
  const [currentUser, setCurrentUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let subscription;

    async function init() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrentUser(user ?? null);

      // Escucha cambios de sesión
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        setCurrentUser(session?.user ?? null);
        if (session?.user) setShowLoginModal(false); // cerrar modal al login
      });
      subscription = data?.subscription;
    }

    init();

    return () => {
      if (subscription) subscription.unsubscribe();
    };
  }, []);

  const openLogin = () => setShowLoginModal(true);
  const closeLogin = () => setShowLoginModal(false);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setCurrentUser(null);
    setLoading(false);
  };

  return (
    <>
      <div className="comments-section relative z-10 max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {/* Mostrar login o logout según sesión */}
          <div className="mb-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900 shadow-md flex justify-between items-center">
            {currentUser ? (
              <>
                <p className="text-sm text-green-700 dark:text-green-300">
                  Sesión iniciada como{" "}
                  <span className="font-semibold">
                    {currentUser.user_metadata?.full_name ||
                      currentUser.email ||
                      "Usuario"}
                  </span>
                </p>
                <button
                  onClick={handleLogout}
                  disabled={loading}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition disabled:opacity-50"
                >
                  {loading ? "Cerrando..." : "Cerrar sesión"}
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Inicia sesión para dejar un comentario.
                </p>
                <button
                  onClick={openLogin}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Iniciar Sesión
                </button>
              </>
            )}
          </div>

          {/* Componente de comentarios Supabase */}
          <SupabaseComments
            currentUser={currentUser}
            onRequireAuth={openLogin}
          />
        </div>

        <FacebookComments />
      </div>

      {/* Modal de login */}
      <LoginModal isOpen={showLoginModal} onClose={closeLogin} />
    </>
  );
}
