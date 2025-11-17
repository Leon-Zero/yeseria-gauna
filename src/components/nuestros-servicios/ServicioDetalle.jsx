import { serviciosData } from "../nuestros-servicios/data/servicios.data";

export default function ServicioDetalle({ slug }) {
  if (!slug) return null;

  const data = serviciosData[slug];

  if (!data) {
    return (
      <section className="py-20 text-center text-red-500">
        <h1 className="text-3xl font-bold mb-4">Servicio no encontrado</h1>
        <p>Verifica la dirección ingresada.</p>
      </section>
    );
  }

  const { title, description, images } = data;

  return (
    <section className="servicio-section">
      <div className="servicio-container">
        <h1 className="servicio-title">{title}</h1>

        <p className="servicio-description">{description}</p>

        <div className="servicio-gallery">
          {images.map((src, idx) => (
            <div key={idx} className="servicio-card">
              <div className="servicio-img-wrapper">
                <img
                  src={src}
                  alt={`${title} imagen ${idx + 1}`}
                  className="servicio-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="servicio-btn">
          <a href="#contact-section" className="btn-primary">
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
}
