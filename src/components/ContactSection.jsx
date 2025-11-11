import React from "react";
import ContactForm from "./ContactForm";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">
        {/* Formulario */}
        <div className="contact-left">
          <h2 className="contact-title">¡Contáctame!</h2>
          <p className="contact-desc">
            Completa el formulario y te responderé lo antes posible.
          </p>

          <ContactForm />

          {/* <p className="contact-note">
            💡 Esta página la desarrollé yo mismo. Si alguna marca de materiales
            como <strong>Durlock</strong>, <strong>Saint Gobain</strong> o{" "}
            <strong>Mapei</strong> quiere auspiciarme, ¡me encantaría trabajar
            juntos! 🙌
          </p> */}
        </div>

        {/* Redes Sociales */}
        <div className="contact-right">
          <h3 className="contact-subtitle">Redes Sociales:</h3>
          <ul className="contact-list">
            <li>
              <a
                href="https://www.facebook.com/emanuel.gauna"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaFacebookF className="contact-icon" /> facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lemagauna/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaInstagram className="contact-icon" /> instagram
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5491164371277"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaWhatsapp className="contact-icon" /> whatsapp
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@yeseria.gauna?lang=es-419"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaTiktok className="contact-icon" /> tikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
