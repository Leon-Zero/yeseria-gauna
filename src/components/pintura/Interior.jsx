import React from "react";
import FondoLogo from "../FondoLogo";

export default function Interior() {
  const images = [
    "/pinturaImg/interior1.jpg",
    "/pinturaImg/interior2.jpg",
    "/pinturaImg/interior3.jpg",
    "/pinturaImg/interior4.jpg",
    "/pinturaImg/interior5.jpg",
    "/pinturaImg/interior6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen  dark:bg-gray-900">
      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título optimizado */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Pintura Interior Profesional en Buenos Aires y AMBA
      </h1>

      {/* Descripción ampliada */}
      <div className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10 space-y-4  dark:text-gray-300">
        <p>
          Ofrecemos <strong>servicios de pintura interior profesional</strong> para
          paredes, cielorrasos y detalles decorativos. Aplicamos técnicas
          especializadas que aseguran <strong>acabados lisos, uniformes y duraderos</strong>.
        </p>
        <p>
          Trabajamos en <strong>hogares, departamentos y oficinas</strong> en Buenos Aires
          y AMBA, adaptando cada proyecto a las necesidades específicas del cliente. 
          Utilizamos materiales de alta calidad que garantizan colores vibrantes y
          superficies resistentes al desgaste.
        </p>
        <p>
          Nuestro enfoque combina rapidez, limpieza y profesionalismo, asegurando un
          resultado estético y funcional. Contactanos para un presupuesto personalizado
          y mejora la apariencia de tus espacios interiores.
        </p>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={src}
                alt={`Proyecto de pintura interior en Buenos Aires y AMBA - proyecto ${idx + 1}`}
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
