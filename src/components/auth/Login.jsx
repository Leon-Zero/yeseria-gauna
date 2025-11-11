// src/components/auth/Login.jsx (EJEMPLO SENCILLO)
import { useState } from 'react';
import { supabase } from '../../../lib/supabaseClient.js';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        // Usamos signInWithPassword para login con email/password
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setMessage(`Error al iniciar sesión: ${error.message}`);
        } else {
            setMessage('¡Sesión iniciada con éxito! Ya puedes comentar.');
            // Opcional: Redirigir o recargar el componente de comentarios
        }
        setLoading(false);
    };

    return (
        <div className="p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-700 max-w-sm mx-auto my-10">
            <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
            <form onSubmit={handleLogin} className="flex flex-col gap-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Correo Electrónico (Tu Admin Email)"
                    className="border p-2 rounded-md"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="border p-2 rounded-md"
                    required
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
                >
                    {loading ? 'Cargando...' : 'Iniciar Sesión'}
                </button>
            </form>
            {message && <p className={`mt-3 text-sm ${message.includes('Error') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
        </div>
    );
}