import React from "react";
import FondoLogo from "../FondoLogo";

export default function Refacciones() {
  const images = [
    "/pinturaImg/refaccion1.jpg",
    "/pinturaImg/refaccion2.jpg",
    "/pinturaImg/refaccion3.jpg",
    "/pinturaImg/refaccion4.jpg",
    "/pinturaImg/refaccion5.jpg",
    "/pinturaImg/refaccion6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen  dark:bg-gray-900">
      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título optimizado */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Refacciones y Restauraciones de Pintura Profesional en Buenos Aires y AMBA
      </h1>

      {/* Descripción ampliada */}
      <div className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10 space-y-4  dark:text-gray-300">
        <p>
          Nos especializamos en <strong>refacciones y restauraciones de pintura</strong> tanto en interiores como exteriores.
          Renovamos paredes, cielorrasos y superficies dañadas, aplicando técnicas profesionales de preparación, sellado y pintura.
        </p>
        <p>
          Garantizamos <strong>acabados duraderos, uniformes y estéticamente impecables</strong> en viviendas, departamentos,
          oficinas y locales comerciales en Buenos Aires y AMBA.
        </p>
        <p>
          Nuestro equipo trabaja con rapidez, limpieza y profesionalismo, adaptándose a cada proyecto y ofreciendo soluciones
          personalizadas para que tus espacios luzcan como nuevos. Contactanos para un presupuesto sin compromiso.
        </p>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={src}
                alt={`Proyecto de refacciones de pintura en Buenos Aires y AMBA - proyecto ${idx + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="1200"
                height="900"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
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
