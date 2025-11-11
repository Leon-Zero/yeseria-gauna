import ParedesComponent from "../src/components/Yeseria/Paredes";
import StickyButtons from "../src/components/StickyButtons";
import FondoLogo from "../src/components/FondoLogo";
import SeoHead from "../src/components/SeoHead";

export default function Paredes() {
  return (
    <>
      <SeoHead
        title="Aplicado y Refacción de Paredes | Yesería y Reformas - Emanuel Gauna"
        description="Aplicación profesional de yeso en paredes y refacción de muros existentes. Servicios de yesería en Buenos Aires y AMBA."
        keywords="paredes, yesería, refacción, yeso, interiores, exteriores, remodelaciones, Buenos Aires, AMBA"
        ogTitle="Aplicado y Refacción de Paredes | Emanuel Gauna"
        ogDescription="Servicios profesionales de yesería en paredes, refacciones y reparaciones en Buenos Aires y AMBA."
        ogImage="https://yeseriayreformas.com.ar/yesoImg/bañoConYeso.jpg"
        ogUrl="https://yeseriayreformas.com.ar/paredes"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <ParedesComponent />
      </main>

      <StickyButtons />
    </>
  );
}
