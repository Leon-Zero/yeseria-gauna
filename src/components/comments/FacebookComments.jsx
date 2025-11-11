import { useState, useEffect, useRef } from "react"; 

export default function FacebookComments() {
    const fbContainerRef = useRef(null);
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    const scrollCorrectionIntervalId = useRef(null); 
    const hasLoaded = useRef(false); 
    
    // 💡 App ID proporcionado por el usuario
    const FACEBOOK_APP_ID = '769298012670991'; 

    // --- FUNCIÓN DE ANULACIÓN DE SCROLL (Mitigación Condicional) ---
    // Esta función previene el salto de Facebook, pero solo actúa si el usuario
    // ya está en la parte superior de la página, permitiendo el scroll manual.
    const startScrollCorrection = () => {
        if (hasLoaded.current) return;
        hasLoaded.current = true;
        
        let attempts = 0;
        
        // Ejecutamos el chequeo durante 3 segundos
        scrollCorrectionIntervalId.current = setInterval(() => {
            // SOLO corregir si la posición de scroll es 0.
            if (window.scrollY === 0) {
                 window.scrollTo({ top: 0, left: 0, behavior: "instant" });
            }
           
            attempts++;
            
            // Detener después de 15 intentos
            if (attempts >= 15) { 
                clearInterval(scrollCorrectionIntervalId.current);
                // Revelamos la sección después de que la corrección termine
                setIsSectionVisible(true); 
            }
        }, 200);
    };

    // -------------------------------------------------------------
    // --- EFECTO PRINCIPAL: Carga con App ID y fbAsyncInit ---
    // -------------------------------------------------------------
    useEffect(() => {
        
        // 1. Inicialización de Facebook (ejecutada cuando el SDK está listo)
        window.fbAsyncInit = function() {
            window.FB.init({
                appId      : FACEBOOK_APP_ID, // Usamos tu App ID
                xfbml      : true, // Auto-parseo de tags
                version    : 'v16.0' 
            });
            // Una vez inicializado, iniciamos la mitigación de scroll y la revelación.
            startScrollCorrection();
        };

        // 2. Cargar el script del SDK si no existe.
        const loadFacebookSDK = () => {
            if (document.getElementById("facebook-jssdk")) return;
            
            const script = document.createElement("script");
            script.id = "facebook-jssdk";
            script.src = "https://connect.facebook.net/es_LA/sdk.js";
            script.async = true;
            script.defer = true;
            script.crossOrigin = "anonymous";
            
            document.body.appendChild(script);
        };

        loadFacebookSDK();
        
        // 3. Limpieza: Detener el intervalo si el componente se desmonta.
        return () => {
            if (scrollCorrectionIntervalId.current) {
                clearInterval(scrollCorrectionIntervalId.current);
            }
        };
    }, []);

    // 4. Renderizado
    return (
        <div 
            // Control de visibilidad. Inicia opaco (opacity-0) para evitar el FOUC/salto visual
            className={`flex-1 p-4 rounded-lg bg-white dark:bg-gray-900 shadow-md 
                        min-h-[300px] flex flex-col items-center justify-center 
                        transition-opacity duration-700 ease-in-out 
                        ${isSectionVisible ? 'opacity-100' : 'opacity-0'}`}
        >

            <div className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">
                Comentarios de Facebook
            </div>
            
            {!isSectionVisible && (
                <div className="text-gray-500 pt-10">Cargando comentarios de Facebook...</div>
            )}

            <div
                ref={fbContainerRef}
                className="fb-comments w-full"
                data-href="https://yeseria-web.vercel.app/"
                data-width="100%"
                data-numposts="5"
                tabIndex="-1"
            >
                {/* Facebook inyectará aquí el iframe */}
            </div>
        </div>
    );
}