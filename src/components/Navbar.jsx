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
    <nav className="bg-blue-800 dark:bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Inicio */}
        <div className="flex items-center gap-2">
          <Link href="/" passHref>
            <img
              src="/yesero.jpg"
              alt="Logo Yesería Gauna"
              className="w-8 h-8 object-contain rounded-full"
            />
          </Link>
          <Link href="/" className="text-2xl font-bold hover:text-blue-300 transition">
            Inicio
          </Link>
        </div>

        {/* Switch de Modo Oscuro */}
        <div className="hidden md:block">
          <ThemeSwitch />
        </div>

        {/* Botón móvil */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeSwitch />
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="text-white focus:outline-none text-3xl"
          >
            ☰
          </button>
        </div>

        {/* Menú */}
        <ul
          className={`md:flex md:items-center md:gap-4 absolute md:static bg-blue-800 dark:bg-gray-900 w-full md:w-auto left-0 md:left-auto transition-all duration-300 ${
            isOpen ? "top-16" : "top-[-500px]"
          }`}
        >
          {menuItems.map((item, idx) => {
            const isActive = item.path && router.pathname === item.path;
            return (
              <li key={idx} className="relative md:mx-2 group border-b rounded-lg md:border-none  dark:bg-gray-700">
                {item.sub.length > 0 ? (
                  <>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded flex justify-between items-center transition"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label} ▾
                    </button>

                    {/* Submenu escritorio */}
                    <ul className="hidden md:absolute md:top-full md:left-0 md:bg-blue-700 dark:md:bg-gray-800 md:shadow-lg md:rounded md:group-hover:block">
                      {item.sub.map((sub, i) => (
                        <li key={i}>
                          <Link
                            href={sub.path}
                            className="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-gray-700 rounded transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* Submenu móvil */}
                    {openSubmenu === item.label && (
                      <ul className="md:hidden bg-blue-700 dark:bg-gray-800 w-full shadow-lg rounded">
                        {item.sub.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.path}
                              className="block px-6 py-2 hover:bg-blue-600 dark:hover:bg-gray-700 rounded transition"
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
                  <button
                    onClick={item.action}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-600 dark:hover:bg-gray-700 rounded transition"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className={`block px-4 py-2 hover:bg-blue-700 dark:hover:bg-gray-700 rounded transition ${
                      isActive ? "bg-blue-900 dark:bg-gray-800 font-semibold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
