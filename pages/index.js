import { useEffect } from "react";
import SeoHead from "../src/components/SeoHead";
import Home from "../src/components/Home";
import Gallery from "../src/components/Gallery";
import Comments from "../src/components/comments/Comments.jsx";
import BannerHome from "../src/components/BannerHome.jsx";
import CardServices from "../src/components/CardServices.jsx";

export default function HomePage() {
  // --- Datos SEO principales ---
  const pageTitle =
    "Yesería, Pintura y Reformas | Emanuel Gauna - Buenos Aires y AMBA";
  const pageDescription =
    "Emanuel Gauna, yesero profesional en Buenos Aires y AMBA. Servicios de yesería, drywall, pintura, microcemento y reformas integrales. Presupuestos sin cargo. Tel: 11 6437-1277.";
  const pageKeywords =
    "yesero, drywall, yesería, pintura, microcemento, reformas, presupuestos, Buenos Aires, AMBA";
  const ogTitle = "Yesería y Reformas Profesionales | Emanuel Gauna";
  const ogDescription =
    "Servicio profesional de yesería, pintura y reformas. Atención en Buenos Aires y AMBA. Contacto: 11 6437-1277.";
  const ogImage = "/yesoImg/home-image.jpg";
  const ogUrl = "https://yeseriayreformas.com.ar/";
  const canonicalUrl = "https://yeseriayreformas.com.ar/";

  // --- SDK de Facebook para comentarios ---
  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.src =
        "https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v17.0";
      script.async = true;
      document.body.appendChild(script);
    } else {
      if (window.FB) window.FB.XFBML.parse();
    }
  }, []);

  return (
    <>
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        ogTitle={ogTitle}
        ogDescription={ogDescription}
        ogImage={ogImage}
        ogUrl={ogUrl}
        canonical={canonicalUrl}
      />

      <main className="min-h-screen">
        <BannerHome />
        <Home />
        <CardServices />
        <Gallery />
        <Comments />
      </main>
    </>
  );
}
