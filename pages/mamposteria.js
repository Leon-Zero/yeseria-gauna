import MamposteriaComponent from "../src/components/albañileria/Mamposteria";
import StickyButtons from "../src/components/StickyButtons";
import FondoLogo from "../src/components/FondoLogo";
import SeoHead from "../src/components/SeoHead"; // Importamos el componente SEO

export default function Mamposteria() {
  return (
    <>
      <SeoHead
        title="Mampostería y Ladrillos | Yesería y Reformas - Emanuel Gauna"
        description="Trabajos de mampostería, paredes, y reformas en ladrillos. Servicio profesional de albañilería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        keywords="mampostería, ladrillos, albañilería, refacciones, obra, remodelaciones, Buenos Aires, AMBA"
        ogTitle="Mampostería y Ladrillos | Emanuel Gauna"
        ogDescription="Servicios de mampostería, refacciones y trabajos con ladrillos en Buenos Aires y AMBA."
        ogImage="https://yeseriayreformas.com.ar/yesoImg/ladrilloCubierto.jpg"
        ogUrl="https://yeseriayreformas.com.ar/mamposteria"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <MamposteriaComponent />
      </main>

      <StickyButtons />
    </>
  );
}
