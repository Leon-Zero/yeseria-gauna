import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';
import RevestimientosComponent from '../src/components/albañileria/Revestimientos';
import SeoHead from '../src/components/SeoHead';

export default function Revestimientos() {
  return (
    <>
      {/* Uso del componente SeoHead para un SEO consistente */}
      <SeoHead
        title="Revestimientos y Pisos Profesionales | Emanuel Gauna"
        description="Colocación de cerámicas, revoques y revestimientos exteriores e interiores. Acabados duraderos en Buenos Aires y AMBA. ¡Contactanos! 11 6437-1277."
        keywords="revestimientos, pisos, cerámicas, microcemento, revoques, albañilería, Buenos Aires, AMBA"
        ogTitle="Revestimientos Profesionales | Emanuel Gauna"
        ogDescription="Instalación profesional de revestimientos y pisos en interiores y exteriores en Buenos Aires y AMBA."
        ogImage="/albaImg/revestimientos1.jpg"
        ogUrl="https://www.yeseriayreformas.com.ar/revestimientos"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <RevestimientosComponent />
      </main>

      <StickyButtons />
    </>
  );
}
