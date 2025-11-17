import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Acerca() {
  return (
    <section className="about-section">
      <div className="about-inner">
        {/* Título */}
        <h1 className="about-title">
          Acerca de Emanuel Gauna | Yesero, Pintor y Albañil Profesional
        </h1>

        {/* Descripción */}
        <div className="about-copy">
          <p>
            Soy <strong>Emanuel Gauna</strong>, <strong>yesero</strong>,{" "}
            <strong>pintor</strong> y <strong>albañil</strong> con más de 15
            años de experiencia, especializado en{" "}
            <strong>remodelaciones</strong>, <strong>microcemento</strong>,{" "}
            <strong>revestimientos</strong> y pintura de interiores y
            exteriores.
          </p>
          <p>
            Mi objetivo es ofrecer{" "}
            <strong>servicios profesionales de alta calidad</strong>, adaptados
            a cada proyecto, ya sea un hogar, oficina o un gran emprendimiento.
            Garantizo atención personalizada, resultados duraderos y acabados
            impecables que superen las expectativas de mis clientes en Buenos
            Aires y el AMBA.
          </p>
          <p>
            Contactame hoy mismo para recibir asesoramiento, presupuesto sin
            compromiso y transformar tus espacios con un acabado profesional y
            estético.
          </p>
        </div>

        {/* Card con Foto + QR */}
        <div className="about-card">
          <img
            src="/acerca.jpg"
            alt="Emanuel Gauna - Yesero, Pintor y Albañil en Buenos Aires"
            className="about-photo"
            loading="lazy"
            width="1200"
            height="900"
          />

          <div className="about-qr">
            <QRCodeCanvas
              value="https://yeseriayreformas.com.ar"
              size={160}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
          </div>

          <p className="about-qr-text">
            Escaneá este código QR con tu celular y accedé directamente a mi
            página web. ¡Compartilo con tus amigos!
          </p>
        </div>
      </div>
    </section>
  );
}
