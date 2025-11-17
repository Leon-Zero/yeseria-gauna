import React from "react";
import FondoLogo from "../FondoLogo";

export default function Microcemento() {
  const images = [
    "/albaImg/microcemento1.jpg",
    "/albaImg/microcemento2.jpg",
    "/albaImg/microcemento3.jpg",
    "/albaImg/microcemento4.jpg",
    "/albaImg/microcemento5.jpg",
    "/albaImg/microcemento6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen  dark:bg-gray-900">
      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título optimizado */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Microcemento Profesional para Interiores y Exteriores en Buenos Aires y
        AMBA
      </h1>

      {/* Descripción ampliada */}
      <div className="text-gray-700 mb-6 text-center max-w-3xl mx-auto relative z-10 space-y-4  dark:text-gray-300">
        <p>
          Ofrecemos <strong>aplicación profesional de microcemento</strong> en
          pisos, paredes y otras superficies. Ideal para remodelaciones,
          revestimientos de baños, cocinas, locales comerciales y proyectos
          residenciales.
        </p>
        <p>
          Este material proporciona{" "}
          <strong>
            acabados modernos, decorativos y resistentes al uso diario
          </strong>
          , combinando estética y durabilidad en cada proyecto.
        </p>
        <p>
          Trabajamos en Buenos Aires y AMBA, aplicando técnicas especializadas
          para garantizar resultados uniformes, duraderos y estéticamente
          impecables. Contactanos para un presupuesto personalizado.
        </p>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-video sm:aspect-4/3">
              <img
                src={src}
                alt={`Proyecto de microcemento en Buenos Aires y AMBA - proyecto ${
                  idx + 1
                }`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="1200"
                height="900"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA para presupuesto */}
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
