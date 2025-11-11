import Head from 'next/head';
import AcercaComponent from '../src/components/Acerca';
import FondoLogo from '../src/components/FondoLogo';
import StickyButtons from '../src/components/StickyButtons';

export default function Acerca() {
  return (
    <>
      <Head>
        <title>Acerca de Emanuel Gauna | Yesero, Pintor y Albañil Profesional</title>
        <meta
          name="description"
          content="Servicios profesionales de yesería, pintura, albañilería y microcemento. Garantía de calidad en remodelaciones en Buenos Aires y AMBA."
        />
        <meta
          name="keywords"
          content="yesero, pintor, albañil, microcemento, remodelaciones, yesería, pintura, revestimientos, Buenos Aires, AMBA"
        />
        {/* Open Graph y Twitter para redes sociales */}
        <meta property="og:title" content="Acerca de Emanuel Gauna | Yesero y Pintor Profesional" />
        <meta property="og:description" content="Servicios de yesería, pintura, albañilería y microcemento en Buenos Aires y AMBA. Contacto: 11 6437-1277." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseriayreformas.com.ar/acerca-de-nosotros" />
        <meta property="og:image" content="/logoyeso.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Acerca de Emanuel Gauna | Yesero y Pintor Profesional" />
        <meta name="twitter:description" content="Servicios de yesería, pintura, albañilería y microcemento en Buenos Aires y AMBA. Contacto: 11 6437-1277." />
        <meta name="twitter:image" content="/logoyeso.png" />
        {/* Para evitar el error de la etiqueta de idioma */}
        <meta httpEquiv="content-language" content="es-ar" />
      </Head>

      <main className="min-h-screen">
        <FondoLogo />
        <AcercaComponent />
      </main>
      <StickyButtons />
    </>
  );
}
