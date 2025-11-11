import React from "react";
import FondoLogo from "../FondoLogo";

export default function Exterior() {
  const images = [
    "/pinturaImg/exterior1.jpg",
    "/pinturaImg/exterior2.jpg",
    "/pinturaImg/exterior3.jpg",
    "/pinturaImg/exterior4.jpg",
    "/pinturaImg/exterior5.jpg",
    "/pinturaImg/exterior6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen  dark:bg-gray-900">
      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título optimizado */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Pintura Exterior Profesional en Buenos Aires y AMBA
      </h1>

      {/* Descripción ampliada */}
      <div className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10 space-y-4  dark:text-gray-300 ">
        <p>
          Nuestro servicio de <strong>pintura exterior</strong> está diseñado para
          proteger y embellecer fachadas, balcones y terrazas. Utilizamos materiales
          de primera calidad y técnicas profesionales que aseguran
          <strong> acabados duraderos, uniformes y estéticos</strong>, incluso frente
          a las condiciones climáticas más exigentes.
        </p>
        <p>
          Realizamos trabajos en <strong>proyectos residenciales, comerciales e
          industriales</strong>, adaptando cada aplicación según las necesidades de
          cada cliente. Nos enfocamos en la correcta preparación de superficies,
          sellado, impermeabilización y aplicación de pinturas resistentes a la
          humedad y los rayos UV.
        </p>
        <p>
          Atendemos clientes en <strong>Buenos Aires y toda el área AMBA</strong>,
          garantizando un servicio ágil, responsable y con resultados de alta
          calidad. Contactanos para solicitar un presupuesto personalizado y
          descubrí cómo mejorar la protección y estética de tus espacios exteriores.
        </p>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={src}
                alt={`Servicio de pintura exterior en fachadas y balcones - proyecto ${idx + 1} en Buenos Aires`}
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
