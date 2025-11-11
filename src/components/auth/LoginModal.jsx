import { useState } from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";

export default function LoginModal({ isOpen, onClose }) {
  const [mode, setMode] = useState("login"); // "login" o "register"

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        <div className="mb-4 flex justify-center gap-4">
          <button
            className={`px-3 py-1 rounded-md ${
              mode === "login"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-600"
            }`}
            onClick={() => setMode("login")}
          >
            Iniciar Sesión
          </button>
          <button
            className={`px-3 py-1 rounded-md ${
              mode === "register"
                ? "bg-green-600 text-white"
                : "bg-gray-200 dark:bg-gray-600"
            }`}
            onClick={() => setMode("register")}
          >
            Registrarse
          </button>
        </div>

        {mode === "login" ? (
          <Login onSuccess={onClose} /> // cierra modal al iniciar sesión
        ) : (
          <Register onSuccess={() => setMode("login")} /> // cambia a login tras registrarse
        )}
      </div>
    </div>
  );
}
