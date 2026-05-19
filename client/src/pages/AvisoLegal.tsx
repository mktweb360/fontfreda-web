import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function AvisoLegal() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [location] = useLocation();

  useEffect(() => {
    const lang = location.startsWith("/en") ? "en" : "es";
    setLanguage(lang);
  }, [location]);

  const content = {
    es: {
      title: "Aviso Legal",
      lastUpdated: "Última actualización: 19 de mayo de 2026",
      sections: [
        {
          heading: "1. Identificación",
          text: "Fontfreda es un servicio de alojamiento familiar para perros y gatos. Para más información sobre nuestros servicios, puedes contactarnos en info@fontfreda.net o llamarnos al teléfono indicado en nuestro sitio web.",
        },
        {
          heading: "2. Uso del sitio web",
          text: "El contenido de este sitio web está destinado únicamente a fines informativos. No garantizamos la exactitud, integridad o actualidad del contenido. El uso del sitio web es responsabilidad del usuario.",
        },
        {
          heading: "3. Propiedad intelectual",
          text: "Todo el contenido de este sitio web, incluyendo textos, imágenes, logotipos y diseño, está protegido por leyes de propiedad intelectual. No está permitido reproducir, distribuir o transmitir cualquier contenido sin nuestro consentimiento previo.",
        },
        {
          heading: "4. Limitación de responsabilidad",
          text: "Fontfreda no será responsable por daños directos, indirectos, incidentales, especiales o consecuentes que resulten del uso o la imposibilidad de usar este sitio web o sus servicios.",
        },
        {
          heading: "5. Enlaces a terceros",
          text: "Este sitio web puede contener enlaces a sitios web de terceros. No somos responsables del contenido, precisión o prácticas de privacidad de estos sitios externos.",
        },
        {
          heading: "6. Modificación de términos",
          text: "Nos reservamos el derecho de modificar este aviso legal en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.",
        },
        {
          heading: "7. Ley aplicable",
          text: "Este aviso legal se rige por las leyes de España. Cualquier disputa será resuelta por los tribunales competentes de Barcelona.",
        },
      ],
    },
    en: {
      title: "Legal Notice",
      lastUpdated: "Last updated: May 19, 2026",
      sections: [
        {
          heading: "1. Identification",
          text: "Fontfreda is a family accommodation service for dogs and cats. For more information about our services, you can contact us at info@fontfreda.net or call the phone number indicated on our website.",
        },
        {
          heading: "2. Website Use",
          text: "The content of this website is intended for informational purposes only. We do not guarantee the accuracy, completeness or currency of the content. The use of the website is the responsibility of the user.",
        },
        {
          heading: "3. Intellectual Property",
          text: "All content on this website, including texts, images, logos and design, is protected by intellectual property laws. It is not permitted to reproduce, distribute or transmit any content without our prior consent.",
        },
        {
          heading: "4. Limitation of Liability",
          text: "Fontfreda will not be liable for direct, indirect, incidental, special or consequential damages resulting from the use or inability to use this website or its services.",
        },
        {
          heading: "5. Links to Third Parties",
          text: "This website may contain links to third-party websites. We are not responsible for the content, accuracy or privacy practices of these external sites.",
        },
        {
          heading: "6. Modification of Terms",
          text: "We reserve the right to modify this legal notice at any time. Changes will take effect immediately after publication on the website.",
        },
        {
          heading: "7. Applicable Law",
          text: "This legal notice is governed by the laws of Spain. Any dispute will be resolved by the competent courts of Barcelona.",
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
