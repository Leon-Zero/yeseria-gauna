import Head from "next/head";

// Componente SEO reutilizable para todas las páginas
export default function SeoHead({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonical,
}) {
  const siteUrl = "https://yeseriayreformas.com.ar";
  const finalTitle = title || "Yesería y Reformas | Emanuel Gauna";
  const finalDescription =
    description ||
    "Servicios de yesería, pintura y reformas integrales en Buenos Aires y AMBA. Profesionalismo y calidad garantizada. Contacto: 11 6437-1277.";
  const finalKeywords =
    keywords ||
    "yesero, reformas, pintura, microcemento, cielorrasos, molduras, albañilería, Buenos Aires, AMBA";
  const finalOgUrl = ogUrl || canonical || siteUrl;
  const finalOgImage = ogImage || `${siteUrl}/images/default-og-image.jpg`;

  return (
    <Head>
      {/* --- Meta básicas --- */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="content-language" content="es-ar" />
      <link rel="canonical" href={finalOgUrl} />

      {/* --- Open Graph --- */}
      <meta property="og:title" content={ogTitle || finalTitle} />
      <meta property="og:description" content={ogDescription || finalDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="Yesería y Reformas - Emanuel Gauna" />
      <meta property="og:locale" content="es_AR" />

      {/* --- Twitter --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || finalTitle} />
      <meta name="twitter:description" content={ogDescription || finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
    </Head>
  );
}
