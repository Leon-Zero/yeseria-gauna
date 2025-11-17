import StickyButtons from "../src/components/StickyButtons";
import SeoHead from "../src/components/SeoHead";
import ServicioDetalle from "../src/components/nuestros-servicios/ServicioDetalle";

export default function ServicioPage({ slug }) {
  return (
    <>
      <SeoHead title={slug} />
      <main className="min-h-screen">
        <ServicioDetalle slug={slug} />
      </main>
      <StickyButtons />
    </>
  );
}

export async function getServerSideProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}
