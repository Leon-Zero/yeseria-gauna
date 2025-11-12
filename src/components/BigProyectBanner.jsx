import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BigProjectsBanner() {
  return (
    <section className="banner-section">
      <div className="banner-container">
        <h2 className="banner-title">Presupuestos para Obras Grandes</h2>

        <p className="banner-text">
          Realizamos presupuestos profesionales para{" "}
          <strong>
            edificios, refacciones de casas y proyectos en barrios privados
          </strong>
          . Contamos con experiencia y un equipo capacitado para ofrecer
          soluciones a medida según tus necesidades.
        </p>

        <a
          href="https://wa.me/5491164371277"
          target="_blank"
          rel="noopener noreferrer"
          className="banner-button"
        >
          <FaWhatsapp className="mr-2 text-xl" />
          Pedir Presupuesto
        </a>
      </div>
    </section>
  );
}
