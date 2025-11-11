// app/api/gemini-chat/route.js (Usando App Router de Next.js)

import { GoogleGenAI } from '@google/genai'; 

// Inicializa el cliente de Gemini. La clave se lee automáticamente de .env
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY }); 

export async function POST(req) {
  try {
    const { consulta } = await req.json();

    if (!consulta) {
      return new Response(JSON.stringify({ error: "Falta la consulta del usuario." }), { status: 400 });
    }

    // El Prompt Especializado de yesería (Ver sección 1)
    const prompt = `Eres un Maestro Yesero y Asesor de Presupuestos altamente cualificado. Tu tarea principal es analizar la consulta del cliente. Si es una consulta de tarea/procedimiento, proporciona un resumen instructivo y pasos clave. Si es una consulta de presupuesto/materiales, proporciona una estimación realista y una lista de materiales requeridos. La respuesta debe ser concisa, en español y estructurada en puntos clave o una tabla simple para facilitar la lectura en el modal. Si se solicita presupuesto, usa el formato: [Material/Servicio] - [Cantidad Estimada] - [Rango de Precio Estimado] (si la información es demasiado específica, indícalo). --- CONSULTA DEL CLIENTE: "${consulta}"`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Modelo rápido y eficiente para estas tareas
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
    });

    // Devuelve la respuesta de la IA
    return new Response(JSON.stringify({ respuesta: response.text }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en la API de Gemini:', error);
    return new Response(JSON.stringify({ error: "Ocurrió un error en el servidor." }), { status: 500 });
  }
}