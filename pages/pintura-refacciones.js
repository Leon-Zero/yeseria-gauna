import StickyButtons from '../src/components/StickyButtons';
import FondoLogo from '../src/components/FondoLogo';
import RefaccionesComponent from '../src/components/pintura/Refacciones';
import SeoHead from '../src/components/SeoHead';

export default function PinturaRefacciones() {
  return (
    <>
      {/* Uso del componente SeoHead para un SEO consistente */}
      <SeoHead
        title="Refacciones y Restauraciones de Pintura | Emanuel Gauna"
        description="Refacciones y restauraciones de pintura interior y exterior. Retocamos y renovamos superficies desgastadas con acabados duraderos y uniformes en Buenos Aires y AMBA."
        keywords="refacciones pintura, restauraciones pintura, retoques, pintura interior, pintura exterior, Buenos Aires, AMBA"
        ogTitle="Refacciones y Restauraciones de Pintura | Emanuel Gauna"
        ogDescription="Aplicación profesional de refacciones y restauraciones de pintura interior y exterior en viviendas, oficinas y locales comerciales en Buenos Aires y AMBA."
        ogImage="/pinturaImg/refaccion1.jpg"
        ogUrl="https://www.yeseriayreformas.com.ar/pintura-refacciones"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <RefaccionesComponent />
      </main>

      <StickyButtons />
    </>
  );
}
