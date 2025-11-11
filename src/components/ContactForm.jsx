import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xblkenrg"); // reemplaza con tu ID de Formspree

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold text-center">
        ¡Gracias por tu mensaje! Te responderé lo antes posible.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md text-gray-900"
    >
      {/* Nombre y Email en una fila */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <label htmlFor="name" className="font-semibold text-sm">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Tu nombre"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 w-full text-sm"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="flex-1">
          <label htmlFor="email" className="font-semibold text-sm">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Tu email"
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 w-full text-sm"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      {/* Teléfono y Mensaje */}
      <label htmlFor="phone" className="font-semibold text-sm">
        Teléfono (opcional)
      </label>
      <input
        id="phone"
        type="text"
        name="phone"
        placeholder="Ej: 11 1234-5678"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 text-sm"
      />

      <label htmlFor="message" className="font-semibold text-sm">
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Contanos sobre tu proyecto, necesidades o consultas..."
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 text-sm resize-none h-24"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors text-sm"
      >
        Enviar
      </button>
    </form>
  );
}
