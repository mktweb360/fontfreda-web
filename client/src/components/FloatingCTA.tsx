import { MessageCircle, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

interface FloatingCTAProps {
  language?: "es" | "en";
  contactUrl?: string;
}

export default function FloatingCTA({ language = "es", contactUrl = "/contacto" }: FloatingCTAProps) {
  const [isHovered, setIsHovered] = useState(false);

  const content = {
    es: {
      title: "¿Dudas?",
      subtitle: "Solicita tu valoración",
      button: "Contactar ahora",
    },
    en: {
      title: "Questions?",
      subtitle: "Request your assessment",
      button: "Contact now",
    },
  };

  const lang = content[language];

  return (
    <div className="fixed bottom-24 right-6 z-40">
      {/* Expanded Card */}
      {isHovered && (
        <div className="mb-4 bg-primary text-primary-foreground rounded-lg shadow-lg p-4 w-64 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <h3 className="font-bold text-lg mb-1">{lang.title}</h3>
          <p className="text-sm text-primary-foreground/90 mb-3">{lang.subtitle}</p>
          <Link href={contactUrl}>
            <button className="w-full bg-primary-foreground text-primary font-semibold py-2 px-4 rounded-lg hover:bg-primary-foreground/90 transition-colors flex items-center justify-center gap-2">
              {lang.button}
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      )}

      {/* Floating Button */}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          if (window.innerWidth < 768) {
            window.location.href = contactUrl;
          }
        }}
        className={`relative w-16 h-16 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isHovered
            ? "bg-primary/90 scale-110"
            : "bg-primary hover:bg-primary/90 hover:scale-105 animate-pulse"
        }`}
      >
        <MessageCircle className="w-8 h-8 text-primary-foreground" />

        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
      </button>
    </div>
  );
}
