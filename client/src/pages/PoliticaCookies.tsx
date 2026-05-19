import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function PoliticaCookies() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [location] = useLocation();

  useEffect(() => {
    const lang = location.startsWith("/en") ? "en" : "es";
    setLanguage(lang);
  }, [location]);

  const content = {
    es: {
      title: "Política de Cookies",
      lastUpdated: "Última actualización: 19 de mayo de 2026",
      sections: [
        {
          heading: "1. ¿Qué son las cookies?",
          text: "Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio web. Nos ayudan a mejorar tu experiencia de navegación y a entender cómo utilizas nuestro sitio.",
        },
        {
          heading: "2. Tipos de cookies que utilizamos",
          text: "Utilizamos los siguientes tipos de cookies: Cookies esenciales (necesarias para el funcionamiento del sitio), Cookies de análisis (para entender cómo usas el sitio), Cookies de publicidad (para mostrar anuncios relevantes) y Cookies de redes sociales (para compartir contenido).",
        },
        {
          heading: "3. Google Analytics",
          text: "Utilizamos Google Analytics para analizar el tráfico del sitio y entender el comportamiento de los visitantes. Google Analytics utiliza cookies para recopilar información anónima sobre tu uso del sitio.",
        },
        {
          heading: "4. Google Ads",
          text: "Utilizamos Google Ads para mostrar anuncios relevantes en otros sitios web. Google Ads utiliza cookies para rastrear tu actividad en línea y mostrar anuncios personalizados.",
        },
        {
          heading: "5. Cómo controlar las cookies",
          text: "Puedes controlar las cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten rechazar cookies o alertarte cuando se intenta establecer una cookie.",
        },
        {
          heading: "6. Cambios en esta política",
          text: "Nos reservamos el derecho de modificar esta política de cookies en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.",
        },
      ],
    },
    en: {
      title: "Cookie Policy",
      lastUpdated: "Last updated: May 19, 2026",
      sections: [
        {
          heading: "1. What are cookies?",
          text: "Cookies are small text files that are stored on your device when you visit our website. They help us improve your browsing experience and understand how you use our site.",
        },
        {
          heading: "2. Types of cookies we use",
          text: "We use the following types of cookies: Essential cookies (necessary for site functionality), Analytics cookies (to understand how you use the site), Advertising cookies (to show relevant ads) and Social media cookies (to share content).",
        },
        {
          heading: "3. Google Analytics",
          text: "We use Google Analytics to analyze site traffic and understand visitor behavior. Google Analytics uses cookies to collect anonymous information about your use of the site.",
        },
        {
          heading: "4. Google Ads",
          text: "We use Google Ads to show relevant ads on other websites. Google Ads uses cookies to track your online activity and show personalized ads.",
        },
        {
          heading: "5. How to control cookies",
          text: "You can control cookies through your browser settings. Most browsers allow you to reject cookies or alert you when a cookie is being set.",
        },
        {
          heading: "6. Changes to this policy",
          text: "We reserve the right to modify this cookie policy at any time. Changes will take effect immediately after publication on the website.",
        },
      ],
    },
  };

  const lang = content[language];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-20 max-w-3xl">
          <h1 className="text-4xl font-bold text-primary mb-4">{lang.title}</h1>
          <p className="text-muted-foreground mb-12">{lang.lastUpdated}</p>

          <div className="space-y-8">
            {lang.sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
