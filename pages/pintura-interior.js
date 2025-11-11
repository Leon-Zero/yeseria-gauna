import InteriorComponent from "../src/components/pintura/Interior";
import StickyButtons from "../src/components/StickyButtons";
import FondoLogo from "../src/components/FondoLogo";
import SeoHead from "../src/components/SeoHead";

export default function PinturaInterior() {
  return (
    <>
      <SeoHead
        title="Pintura Interior Profesional | Yesería y Reformas - Emanuel Gauna"
        description="Servicios profesionales de pintura interior para paredes, cielorrasos y detalles decorativos. Acabados lisos, uniformes y duraderos en Buenos Aires y AMBA."
        keywords="pintura interior, cielorrasos, decoración, acabado profesional, Buenos Aires, AMBA"
        ogTitle="Pintura Interior Profesional | Emanuel Gauna"
        ogDescription="Aplicación profesional de pintura interior para casas, departamentos y oficinas en Buenos Aires y AMBA."
        ogImage="https://yeseriayreformas.com.ar/pinturaImg/interior1.jpg"
        ogUrl="https://yeseriayreformas.com.ar/pintura-interior"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <InteriorComponent />
      </main>

      <StickyButtons />
    </>
  );
}
