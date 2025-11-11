// src/components/auth/LogoutButton.jsx
import { supabase } from "../../../lib/supabaseClient";

export default function LogoutButton({ onLogout }) {
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("❌ Error al cerrar sesión:", error);
    } else {
      if (typeof onLogout === "function") onLogout();
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
    >
      Cerrar sesión
    </button>
  );
}
