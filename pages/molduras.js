import MoldurasComponent from "../src/components/Yeseria/Molduras";
import StickyButtons from "../src/components/StickyButtons";
import FondoLogo from "../src/components/FondoLogo";
import SeoHead from "../src/components/SeoHead";

export default function Molduras() {
  return (
    <>
      <SeoHead
        title="Buñas y Molduras en Yeso | Yesería y Reformas - Emanuel Gauna"
        description="Instalación profesional de buñas y molduras en yeso. Servicio de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        keywords="molduras, buñas, yesería, interiores, decoración, refacciones, Buenos Aires, AMBA"
        ogTitle="Buñas y Molduras Profesionales | Emanuel Gauna"
        ogDescription="Instalación de buñas y molduras en yeso. Servicio de yesería en Buenos Aires y AMBA."
        ogImage="https://yeseriayreformas.com.ar/yesoImg/moldura1.jpg"
        ogUrl="https://yeseriayreformas.com.ar/molduras"
      />

      <main className="min-h-screen">
        <FondoLogo />
        <MoldurasComponent />
      </main>

      <StickyButtons />
    </>
  );
}
