import Navbar from "../src/components/Navbar";
import StickyButtons from "../src/components/StickyButtons";
import ContactSection from "../src/components/ContactSection";
import Footer from "../src/components/Footer";
import "../src/styles/globals.css";
import { Inter } from "next/font/google";
import TopBanner from "../src/components/TopBanner";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <div className="relative">
        <Navbar />
        <TopBanner />
        <StickyButtons />

        {/* Cada página maneja su propio SEO con SeoHead */}
        <Component {...pageProps} />

        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
