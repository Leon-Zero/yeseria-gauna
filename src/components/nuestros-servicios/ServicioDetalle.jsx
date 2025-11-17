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
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen dark:bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-center relative z-10 text-primary">
        {title}
      </h1>

      <p className="text-base text-center mb-8 max-w-3xl mx-auto relative z-10 text-content dark:text-content-dark">
        {description}
      </p>

      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-video sm:aspect-4/3">
              <img
                src={src}
                alt={`${title} imagen ${idx + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 relative z-10">
        <a href="#contact-section" className="btn-primary">
          Solicitar Presupuesto
        </a>
      </div>
    </section>
  );
}
