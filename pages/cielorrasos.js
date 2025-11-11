import Head from 'next/head';
import CielorrasosComponent from '../src/components/Yeseria/Cielorrasos';
import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';

export default function Cielorrasos() {
  return (
    <>
      <Head>
        {/* Título y descripción SEO */}
        <title>Cielorrasos y Molduras | Yesería Profesional - Emanuel Gauna</title>
        <meta
          name="description"
          content="Armado e instalación de cielorrasos, buñas y molduras. Servicio profesional de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta
          name="keywords"
          content="cielorrasos, molduras, buñas, yesería, interiores, refacciones, Buenos Aires, AMBA"
        />

        {/* Metadatos Open Graph (para redes sociales y vista previa) */}
        <meta property="og:title" content="Cielorrasos Profesionales | Emanuel Gauna" />
        <meta property="og:description" content="Instalación de cielorrasos y molduras. Servicio de yesería en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/armado-trapecio.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseriayreformas.com.ar/cielorrasos" />
        <meta property="og:site_name" content="Yesería y Reformas - Emanuel Gauna" />
        <meta property="og:locale" content="es_AR" />

        {/* Canonical para evitar contenido duplicado */}
        <link rel="canonical" href="https://yeseriayreformas.com.ar/cielorrasos" />

        {/* Indexación y SEO básico */}
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="content-language" content="es-ar" />

        {/* Metadatos de Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cielorrasos Profesionales | Emanuel Gauna" />
        <meta name="twitter:description" content="Instalación de cielorrasos y molduras. Servicio de yesería en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/yesoImg/armado-trapecio.jpg" />
      </Head>

      <main className="min-h-screen">
        <FondoLogo />
        <CielorrasosComponent />
      </main>

      <StickyButtons />
    </>
  );
}
