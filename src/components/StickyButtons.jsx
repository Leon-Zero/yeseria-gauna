import React, { useState } from "react";

export default function StickyButtons() {
  return (
    <>
      <div className="sticky-buttons">
        {/* Botón Mercado Libre */}
        <a
          href="https://servicio.mercadolibre.com.ar/MLA-1476452521-yesero-profesional-drywall-y-pintura-_JM#origin%3Dshare%26sid%3Dshare"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-btn btn-ml"
        >
          <span className="sticky-icon">🛍️</span>
          <span className="sticky-text font-semibold">
            ¡Estamos en MERCADO LIBRE!
          </span>
        </a>

        {/* Botón WhatsApp */}
        <a
          href="https://wa.me/5491164371277"
          target="_blank"
          rel="noopener noreferrer"
          className="sticky-btn btn-wa animate-bounce-slow"
        >
          <span className="sticky-icon">💬</span>
          <span className="sticky-text font-semibold">
            ¡Escribime por WhatsApp!
          </span>
        </a>
      </div>
    </>
  );
}
