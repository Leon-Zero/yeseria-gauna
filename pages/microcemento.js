import MicrocementoComponent from "../src/components/albañileria/Microcemento";
import StickyButtons from "../src/components/StickyButtons";
import FondoLogo from "../src/components/FondoLogo";
import SeoHead from "../src/components/SeoHead";

export default function Microcemento() {
  return (
    <>
      <SeoHead
        title="Microcemento Profesional | Yesería y Reformas - Emanuel Gauna"
        description="Aplicación de microcemento en pisos, paredes y superficies en Buenos Aires y AMBA. ¡Contactanos al 11 6437-1277!"
        keywords="microcemento, revestimientos, pisos, paredes, baños, cocinas, interiores, exteriores, Buenos Aires, AMBA"
        ogTitle="Microcemento Profesional | Emanuel Gauna"
        ogDescription="Aplicación de microcemento resistente y decorativo para interiores y exteriores en Buenos Aires y AMBA."
        ogImage="https://yeseriayreformas.com.ar/albaImg/microcemento1.jpg"
        ogUrl="https://yeseriayreformas.com.ar/microcemento"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <MicrocementoComponent />
      </main>

      <StickyButtons />
    </>
  );
}
