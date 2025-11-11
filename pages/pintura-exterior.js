import ExteriorComponent from "../src/components/pintura/Exterior";
import StickyButtons from "../src/components/StickyButtons";
import FondoLogo from "../src/components/FondoLogo";
import SeoHead from "../src/components/SeoHead";

export default function PinturaExterior() {
  return (
    <>
      <SeoHead
        title="Pintura Exterior Profesional | Yesería y Reformas - Emanuel Gauna"
        description="Servicios profesionales de pintura exterior para fachadas, balcones y terrazas en Buenos Aires y AMBA. Acabados duraderos y uniformes con técnicas profesionales."
        keywords="pintura exterior, fachadas, terrazas, balcones, pintura profesional, Buenos Aires, AMBA"
        ogTitle="Pintura Exterior Profesional | Emanuel Gauna"
        ogDescription="Aplicación profesional de pintura exterior para proyectos residenciales, comerciales e industriales en Buenos Aires y AMBA."
        ogImage="https://yeseriayreformas.com.ar/pinturaImg/exterior1.jpg"
        ogUrl="https://yeseriayreformas.com.ar/pintura-exterior"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <ExteriorComponent />
      </main>

      <StickyButtons />
    </>
  );
}
