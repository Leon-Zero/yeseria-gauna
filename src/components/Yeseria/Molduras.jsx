import React from "react";
import FondoLogo from "../FondoLogo";

export default function Molduras() {
  const images = [
    "/yesoImg/moldura1.jpg",
    "/yesoImg/moldura7.jpg",
    "/yesoImg/moldura3.jpg",
    "/yesoImg/moldura9.jpg",
    "/yesoImg/moldura5.jpg",
    "/yesoImg/moldura6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen  dark:bg-gray-900">
      {/* Fondo */}
      <FondoLogo />

      {/* Título y descripción */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10 ">
        Buñas y Molduras
      </h1>
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto relative z-10 dark:text-gray-300">
        Nos especializamos en la <strong>realización de buñas y molduras de yeso</strong>, tanto para interiores como exteriores. Ofrecemos acabados detallados, precisos y duraderos, adaptados a cada proyecto, asegurando un trabajo profesional que realza la estética de hogares, oficinas y espacios comerciales en Buenos Aires y el AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={src}
                alt={`Proyecto de Molduras y buñas ${idx + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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
