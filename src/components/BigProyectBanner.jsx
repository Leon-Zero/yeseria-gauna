import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BigProjectsBanner() {
  return (
    <section className="bg-yellow-300 py-12 px-6 z-0.8" >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">
          Presupuestos para Obras Grandes
        </h2>
        <p className="text-yellow-900 text-lg mb-6">
          Realizamos presupuestos profesionales para <strong>edificios, refacciones de casas y proyectos en barrios privados</strong>. 
          Contamos con experiencia y un equipo capacitado para ofrecer soluciones a medida según tus necesidades.
        </p>
        <a
          href="https://wa.me/5491164371277" // Pone tu número con código de país
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-green-600 transition-colors"
        >
          <FaWhatsapp className="mr-2 text-xl" />
          Pedir Presupuesto
        </a>
      </div>
    </section>
  );
}