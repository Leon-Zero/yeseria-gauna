import React from "react";
import FondoLogo from "./FondoLogo";
import BigProjectsBanner from "./BigProyectBanner";
import VideosSection from "./videos/VideoSection";

export default function Home() {
  return (
    <section className="home-section">
      <FondoLogo opacity={10} size="180px" />

      <header className="home-header">
        <h1 className="home-title">Yesería e Interiores Gauna Hnos.</h1>
        <p className="home-subtitle">
          Enlucidos, enduido, pintura profesional y remodelaciones en Buenos
          Aires y AMBA
        </p>
      </header>

      <div className="home-inner">
        <div className="home-grid-two">
          <div className="home-content">
            <BigProjectsBanner />

            <section className="home-services">
              <h2 className="home-services-title">
                Servicios de Yesería, Albañilería y Pintura
              </h2>

              <p className="home-services-text">
                <strong>Yesería:</strong> Aplicado de yeso en paredes y techos,
                armado de cielorrasos, buñas, molduras y refacciones en general.
              </p>

              <p className="home-services-text">
                <strong>Albañilería:</strong> Revoques, colocación de puertas y
                ventanas, mampostería, pisos de carpeta y contrapisos,
                colocación de cerámicas y revoques exteriores.
              </p>

              <p className="home-services-text">
                <strong>Pintura y Revestimientos:</strong> Pintura interior y
                exterior, refacciones de pinturas viejas, pisos de microcemento
                y revestimientos plásticos texturados.
              </p>

              <p className="home-services-text">
                Atendemos en la Ciudad de Buenos Aires y el AMBA. Contacto:{" "}
                <a href="tel:+541164371277">11 6437-1277</a>
              </p>
            </section>
          </div>

          <div className="home-image">
            <img
              src="./pintor-techo-placeholder.jpg"
              alt="Trabajador pintando un techo"
              loading="lazy"
              width="1200"
              height="900"
            />
          </div>
        </div>
      </div>

      {/* boton de tiktok, se sale del grid, ver sus estilos en componente */}
      {/* <VideosSection /> */}
    </section>
  );
}
