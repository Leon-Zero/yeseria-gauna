import React from "react";
import FondoLogo from "../FondoLogo";

export default function Revestimientos() {
  const images = [
    "/albaImg/revestimientos1.jpg",
    "/albaImg/revestimientos2.jpg",
    "/albaImg/revestimientos3.jpg",
    "/albaImg/revestimientos4.jpg",
    "/albaImg/revestimientos5.jpg",
    "/albaImg/revestimientos6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen  dark:bg-gray-900">
      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título optimizado */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Revestimientos y Pisos Profesionales en Buenos Aires y AMBA
      </h1>

      {/* Descripción ampliada */}
      <div className="text-gray-700 mb-6 text-center max-w-3xl mx-auto relative z-10 space-y-4  dark:text-gray-300">
        <p>
          Ofrecemos <strong>colocación de cerámicas, pisos de microcemento, revoques y revestimientos exteriores</strong>
          en todo tipo de espacios, garantizando acabados duraderos y estéticamente impecables.
        </p>
        <p>
          Incluye preparación de superficies, nivelación, sellado y terminación profesional para proyectos
          residenciales, comerciales e industriales en Buenos Aires y AMBA.
        </p>
        <p>
          Nuestro equipo asegura resultados de alta calidad, adaptándose a cada proyecto y ofreciendo soluciones personalizadas.
          Contactanos para un presupuesto sin compromiso y llevá tus espacios al siguiente nivel.
        </p>
      </div>

      {/* Grilla de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={src}
                alt={`Proyecto de revestimientos en Buenos Aires y AMBA - proyecto ${idx + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="1200"
                height="900"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA para contacto */}
      <div className="text-center mt-8 relative z-10">
        <a
          href="#contact-section"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Solicitar Presupuesto
        </a>
      </div>
    </section>
  );
}
