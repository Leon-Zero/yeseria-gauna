// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";
import Navbar from "./components/Navbar";

// Yesería
import Cielorrasos from "./components/Yeseria/Cielorrasos";
import Paredes from "./components/Yeseria/Paredes";
import Molduras from "./components/Yeseria/Molduras";

// Albañilería
import Microcemento from "./components/albañileria/Microcemento";
import Mamposteria from "./components/albañileria/Mamposteria";
import Revestimientos from "./components/albañileria/Revestimientos";

// Pintura
import Interior from "./components/pintura/Interior";
import Exterior from "./components/pintura/Exterior";
import Refacciones from "./components/pintura/Refacciones";

//Acerca de nosotros
import Acerca from "./components/Acerca";

import NotFound from "./components/NotFound";

// Fondo con logo
import FondoLogo from "./components/FondoLogo";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <FondoLogo opacity={10} size="180px" />
      <StickyButtons />

      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="relative">
              <Helmet>
                <title>Yesero, Pintor y Albañil | Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Servicios de Yesería, Albañilería y Pintura en Buenos Aires. Armado de cielorrasos, molduras, microcemento, revestimientos y pintura de interiores y exteriores."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Home />
              <Gallery />
              <StickyButtons />
            </div>
          }
        />

        {/* Yesería */}
        <Route
          path="/cielorrasos"
          element={
            <div className="relative">
              <Helmet>
                <title>Cielorrasos | Yesería Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Galería de cielorrasos y yesería aplicada por Emanuel Gauna. Transformamos techos con estilo y calidad."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Cielorrasos />
            </div>
          }
        />
        <Route
          path="/paredes"
          element={
            <div className="relative">
              <Helmet>
                <title>Paredes | Yesería Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Aplicación profesional de yeso en paredes por Emanuel Gauna. Acabados lisos y resistentes."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Paredes />
            </div>
          }
        />
        <Route
          path="/molduras"
          element={
            <div className="relative">
              <Helmet>
                <title>Molduras | Yesería Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Diseño y armado de molduras y buñas en techos y paredes, con acabados profesionales de Emanuel Gauna."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Molduras />
            </div>
          }
        />

        {/* Albañilería */}
        <Route
          path="/mamposteria"
          element={
            <div className="relative">
              <Helmet>
                <title>Mampostería | Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Servicios de mampostería y construcción de muros y estructuras por Emanuel Gauna."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Mamposteria />
            </div>
          }
        />
        <Route
          path="/microcemento"
          element={
            <div className="relative">
              <Helmet>
                <title>Microcemento | Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Aplicación de microcemento en pisos, paredes y revestimientos, con acabados modernos y resistentes."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Microcemento />
            </div>
          }
        />
        <Route
          path="/revestimientos"
          element={
            <div className="relative">
              <Helmet>
                <title>Revestimientos | Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Instalación de revestimientos decorativos y funcionales para interiores y exteriores."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Revestimientos />
            </div>
          }
        />

        {/* Pintura */}
        <Route
          path="/pintura-interior"
          element={
            <div className="relative">
              <Helmet>
                <title>Pintura Interior | Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Servicios de pintura interior profesional para casas y oficinas por Emanuel Gauna."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Interior />
            </div>
          }
        />
        <Route
          path="/pintura-exterior"
          element={
            <div className="relative">
              <Helmet>
                <title>Pintura Exterior | Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Pintura exterior resistente y duradera para fachadas y estructuras por Emanuel Gauna."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Exterior />
            </div>
          }
        />
        <Route
          path="/pintura-refacciones"
          element={
            <div className="relative">
              <Helmet>
                <title>Refacciones y Restauraciones | Emanuel Gauna</title>
                <meta
                  name="description"
                  content="Refacciones, restauraciones y retoques de pintura para interiores y exteriores."
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Refacciones />
            </div>
          }
        />
        <Route
          path="/acerca-de-nosotros"
          element={
            <div className="relative">
              <Helmet>
                <title>
                  Acerca de Emanuel Gauna | Yesero, Pintor y Albañil
                </title>
                <meta
                  name="description"
                  content="Conoce a Emanuel Gauna, yesero, pintor y albañil profesional con experiencia en microcemento, remodelaciones y trabajos de calidad en Buenos Aires y AMBA."
                />
                <meta
                  name="keywords"
                  content="yesero, pintor, albañil, microcemento, remodelaciones, pintura, Buenos Aires, AMBA"
                />
              </Helmet>
              <FondoLogo opacity={10} size="180px" />
              <Acerca />
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ContactSection />
      <Footer />
    </Router>
  );
}

export default App;
