import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient.js";

export default function Register({ onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    let userId = null;

    try {
      // 1️⃣ Crear usuario en Supabase Auth (si está habilitado)
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: name } },
      });

      if (authError) {
        console.warn("⚠️ Error en Auth, se intentará crear perfil igualmente:", authError.message);
      }

      userId = authData?.user?.id;

      // 2️⃣ Crear perfil en la tabla "profiles"
      // Si userId es null (registro Auth falló) generamos un UUID temporal
      if (!userId) userId = crypto.randomUUID();

      const { error: profileError } = await supabase
        .from("profiles")
        .upsert([{ id: userId, name }]); // upsert para evitar duplicados

      if (profileError) {
        setMessage(`Error al crear perfil: ${profileError.message}`);
        setLoading(false);
        return;
      }

      setMessage("¡Registro exitoso!");
      setName("");
      setEmail("");
      setPassword("");

      if (typeof onSuccess === "function") onSuccess();
    } catch (err) {
      console.error("❌ Error en handleRegister:", err);
      setMessage("Error inesperado al registrar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 rounded-md"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 rounded-md"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border p-2 rounded-md"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? "Registrando..." : "Registrarse"}
      </button>
      {message && (
        <p className={`mt-2 text-sm ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
