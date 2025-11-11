import React from "react";
import ContactForm from "./ContactForm";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact-section"
      className=" bg-blue-500 py-12 px-6 relative z-20 transition-colors duration-300  dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Formulario */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">
            ¡Contáctame!
          </h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Completa el formulario y te responderé lo antes posible.
          </p>
          <ContactForm />

          <p className="mt-6 text-sm text-gray-600 dark:text-gray-50">
            💡 Esta página la desarrollé yo mismo.
            Si alguna marca de materiales como <strong>Durlock</strong>, <strong>Saint Gobain</strong> o <strong>Mapei</strong> quiere auspiciarme, ¡me encantaría trabajar juntos! 🙌
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Redes Sociales
          </h3>
          <p className="mb-2 text-gray-700 dark:text-gray-50 ">
            Sígueme o envíame un mensaje:
          </p>
          <ul className="flex flex-col gap-4 text-lg  dark:text-gray-50">
            <li>
              <a
                href="https://www.facebook.com/emanuel.gauna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors"
              >
                <FaFacebookF className="text-blue-500 dark:text-blue-400 text-2xl" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lemagauna/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="text-pink-500 dark:text-pink-400 text-2xl" /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5491164371277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-green-500 dark:hover:text-green-400 transition-colors"
              >
                <FaWhatsapp className="text-green-500 dark:text-green-400 text-2xl" /> WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@yeseria.gauna?lang=es-419"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-black transition-colors"
              >
                <FaTiktok className="text-black text-2xl" /> TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}