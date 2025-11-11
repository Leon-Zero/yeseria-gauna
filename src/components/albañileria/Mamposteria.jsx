import React from "react";
import FondoLogo from "../FondoLogo";

export default function Mamposteria() {
  const images = [
    "/albaImg/mamposteria1.jpg",
    "/albaImg/mamposteria2.jpg",
    "/albaImg/mamposteria3.jpg",
    "/albaImg/mamposteria4.jpg",
    "/albaImg/mamposteria5.jpg",
    "/albaImg/mamposteria6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen  dark:bg-gray-900">
      {/* Fondo */}
      <FondoLogo />

      {/* Título y descripción */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Mampostería Profesional
      </h1>
      <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto relative z-10  dark:text-gray-300" >
        Nos especializamos en la <strong>construcción y refacción de muros, tabiques y paredes</strong>, tanto estructurales como divisorias.
        Trabajamos con <strong>ladrillos, bloques y materiales mixtos</strong> garantizando seguridad, durabilidad y acabados de alta calidad.
        Más de 15 años de experiencia en proyectos residenciales, comerciales y refacciones en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes adaptativa */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg w-full">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={src}
                alt={`Mampostería proyecto ${idx + 1}`}
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