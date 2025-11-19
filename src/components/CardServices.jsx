import React from "react";

export default function CardServices() {
  return (
    <section className="services-section">
      <h2 className="title">Servicios</h2>
      <br />
      <div className="services-container">
        <div className="service-card">
          <div className="service-card-img">
            <img src="./icon-trowel.svg" alt="" />
          </div>

          <div className="service-card-text">
            <h3 className="service-card-title">YESERÍA</h3>
            <span className="service-card-divider"></span>
            <p className="service-card-description">
              Pintura interior y exterior, reparación de superficies y
              revestimientos plásticos texturados.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-img">
            <img src="icon-hammer.svg" alt="" />
          </div>

          <div className="service-card-text">
            <h2 className="service-card-title">ALBAÑILERÍA</h2>
            <span className="service-card-divider"></span>
            <p className="service-card-description">
              Pintura interior y exterior, reparación de superficies y
              revestimientos plásticos texturados.
            </p>
          </div>
        </div>

        <div className="service-card">
          <div className="service-card-img">
            <img src="./icon-paint-brush.svg" alt="" />
          </div>

          <div className="service-card-text">
            <h2 className="service-card-title">PINTURA</h2>
            <span className="service-card-divider"></span>
            <p className="service-card-description">
              Pintura interior y exterior, reparación de superficies y
              revestimientos plásticos texturados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
