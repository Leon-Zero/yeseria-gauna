import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  // Al cargar la página, revisamos la preferencia del usuario
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  // Función para alternar tema
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-3 py-2 rounded-lg
                 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300
                 transition-colors duration-300 h-full"
    >
      {isDark ? <FaSun /> : <FaMoon />}
      <span>{isDark ? "Claro" : "Oscuro"}</span>
    </button>
  );
}
