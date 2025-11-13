import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const router = useRouter();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (section) =>
    setOpenSubmenu(openSubmenu === section ? null : section);

  const scrollToContact = async () => {
    setIsOpen(false);
    if (router.pathname !== "/") {
      await router.push("/#contact-section");
    }
    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const menuItems = [
    {
      label: "Yesería",
      path: null,
      sub: [
        { label: "Cielorrasos", path: "/cielorrasos" },
        { label: "Paredes", path: "/paredes" },
        { label: "Molduras", path: "/molduras" },
      ],
    },
    {
      label: "Albañilería",
      path: null,
      sub: [
        { label: "Mampostería", path: "/mamposteria" },
        { label: "Microcemento", path: "/microcemento" },
        { label: "Revestimientos", path: "/revestimientos" },
      ],
    },
    {
      label: "Pintura",
      path: null,
      sub: [
        { label: "Interior", path: "/pintura-interior" },
        { label: "Exterior", path: "/pintura-exterior" },
        { label: "Refacciones", path: "/pintura-refacciones" },
      ],
    },
    { label: "Acerca de Nosotros", path: "/acerca-de-nosotros", sub: [] },
    { label: "Contacto", path: null, action: scrollToContact, sub: [] },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link href="/">
            <img src="/logo.png" alt="Logo Yesería Gauna" className="nav-img" />
          </Link>
        </div>

        {/* Botón móvil */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitch />
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="btn-toggle"
          >
            ☰
          </button>
        </div>

        {/* Menú */}
        <ul className={`nav-menu ${isOpen ? "top-16" : "top-[-500px]"}`}>
          {menuItems.map((item, idx) => {
            const isActive = item.path && router.pathname === item.path;
            return (
              <li key={idx} className="nav-item">
                {item.sub?.length > 0 ? (
                  <>
                    <button
                      className="nav-button"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label} ▾
                    </button>

                    {/* Submenú escritorio */}
                    <ul className="nav-submenu">
                      {item.sub.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.path}
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Submenú móvil */}
                    {openSubmenu === item.label && (
                      <ul className="nav-submenu-mobile">
                        {item.sub.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.path}
                              className="nav-subitem"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.action ? (
                  <button onClick={item.action} className="nav-button">
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={`nav-button ${isActive ? "nav-active" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Switch de Modo Oscuro */}
          <div className="hidden md:block">
            <ThemeSwitch />
          </div>
        </ul>
      </div>
    </nav>
  );
}
