import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "wouter";

export default function WhatsAppButton() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [location] = useLocation();

  useEffect(() => {
    const path = window.location.pathname;
    setLanguage(path.startsWith("/en") ? "en" : "es");
  }, [location]);

  const phoneNumber = "+34937790311";
  const messages = {
    es: "Hola Fontfreda, me gustaría conocer más sobre vuestros servicios de residencia para perros y gatos.",
    en: "Hello Fontfreda, I would like to know more about your dog and cat boarding services.",
  };

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    messages[language]
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="Contactar por WhatsApp"
    >
      {/* Botón flotante */}
      <div className="relative flex items-center justify-center">
        {/* Fondo animado */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30"></div>

        {/* Botón principal */}
        <div className="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        {language === "es" ? "Contactar por WhatsApp" : "Contact via WhatsApp"}
        <div className="absolute top-full right-2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
      </div>
    </a>
  );
}
