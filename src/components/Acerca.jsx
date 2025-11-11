import React from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Acerca() {
  return (
    <section className="relative min-h-screen p-6 bg-transparent flex flex-col items-center justify-center  dark:bg-gray-900">

      {/* Título principal */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center z-10 relative">
        Acerca de Emanuel Gauna | Yesero, Pintor y Albañil Profesional
      </h1>

      {/* Descripción optimizada */}
      <div className="text-gray-700 max-w-3xl text-center leading-relaxed mb-6 z-10 relative space-y-4  dark:text-gray-300">
        <p>
          Soy <strong>Emanuel Gauna</strong>, <strong>yesero</strong>, <strong>pintor</strong> y <strong>albañil</strong> con más de 15 años de experiencia, especializado en <strong>remodelaciones</strong>, <strong>microcemento</strong>, <strong>revestimientos</strong> y pintura de interiores y exteriores.
        </p>
        <p>
          Mi objetivo es ofrecer <strong>servicios profesionales de alta calidad</strong>, adaptados a cada proyecto, ya sea un hogar, oficina o un gran emprendimiento. Garantizo atención personalizada, resultados duraderos y acabados impecables que superen las expectativas de mis clientes en Buenos Aires y el AMBA.
        </p>
        <p>
          Contactame hoy mismo para recibir asesoramiento, presupuesto sin compromiso y transformar tus espacios con un acabado profesional y estético.
        </p>
      </div>

      {/* Foto y QR */}
      <div className="relative mt-8 flex flex-col items-center z-10">
        <div className="relative z-20 flex flex-col items-center bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg text-center w-full max-w-md">
          {/* Foto */}
          <img
            src="/acerca.jpg"
            alt="Emanuel Gauna - Yesero, Pintor y Albañil en Buenos Aires"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            loading="lazy"
            width="1200"
            height="900"
          />

          {/* QR */}
          <div className="p-3 bg-gray-100 rounded-xl mb-3">
            <QRCodeCanvas
              value="https://yeseriayreformas.com.ar"
              size={160}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
          </div>

          <p className="text-gray-600 text-center max-w-xs text-sm">
            Escaneá este código QR con tu celular y accedé directamente a mi página web. ¡Compartilo con tus amigos!
          </p>
        </div>
      </div>
    </section>
  );
}
