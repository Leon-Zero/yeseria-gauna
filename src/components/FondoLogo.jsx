// FondoLogo.jsx
import React, { useEffect, useState } from "react";

export default function FondoLogo() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detecta cambios en la clase 'dark' del <html>
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Inicializamos
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  // Cambia el logo de fondo según el tema
  const logoStyle = {
    backgroundImage: isDark
      ? "url('/logo-dark.png')" // si quieres otro logo en modo oscuro
      : "url('/logo.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "180px",
    backgroundColor: "transparent",
    opacity: 0.15,
    zIndex: 0,
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-all duration-500"
      style={logoStyle}
    />
  );
}
