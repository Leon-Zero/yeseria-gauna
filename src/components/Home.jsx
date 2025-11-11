import React from "react";
import FondoLogo from "./FondoLogo";
import BigProjectsBanner from "./BigProyectBanner";
import VideosSection from "./videos/VideoSection";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 dark:bg-gray-900">

      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      {/* Header principal */}
      <header className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Yesería e Interiores Gauna Hnos.
        </h1>
        <p className="text-gray-700 text-lg  dark:text-blue-300 md:text-xl">
          Enlucidos, enduido, pintura profesional y remodelaciones en Buenos Aires y AMBA
        </p>
      </header>

      {/* Mensaje llamativo de presupuesto */}
      <BigProjectsBanner />

      {/* Servicios destacados */}
      <section className="text-center max-w-3xl relative z-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">
          Servicios de Yesería, Albañilería y Pintura
        </h2>
        <p className="text-gray-700 mb-4 dark:text-blue-300">
          <strong>Yesería:</strong> Aplicado de yeso en paredes y techos, armado de cielorrasos, buñas, molduras y refacciones en general.
        </p>
        <p className="text-gray-700 mb-4 dark:text-blue-300">
          <strong>Albañilería:</strong> Revoques, colocación de puertas y ventanas, mampostería, pisos de carpeta y contrapisos, colocación de cerámicas y revoques exteriores.
        </p>
        <p className="text-gray-700 mb-4 dark:text-blue-300">
          <strong>Pintura y Revestimientos:</strong> Pintura interior y exterior, refacciones de pinturas viejas, pisos de microcemento y revestimientos plásticos texturados.
        </p>
        <p className="text-gray-700 dark:text-blue-300">
          Atendemos en la Ciudad de Buenos Aires y el AMBA. Contacto: <a href="tel:+541164371277" className="text-blue-600 underline">11 6437-1277</a>
        </p>
      </section>
      <VideosSection />
    </section>
  );
}