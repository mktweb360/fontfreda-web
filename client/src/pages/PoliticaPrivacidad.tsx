import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function PoliticaPrivacidad() {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [location] = useLocation();

  useEffect(() => {
    const lang = location.startsWith("/en") ? "en" : "es";
    setLanguage(lang);
  }, [location]);

  const content = {
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: 19 de mayo de 2026",
      sections: [
        {
          heading: "1. Responsable del tratamiento",
          text: "Fontfreda es responsable del tratamiento de tus datos personales. Puedes contactarnos en info@fontfreda.net para cualquier pregunta sobre tu privacidad.",
        },
        {
          heading: "2. Datos que recopilamos",
          text: "Recopilamos datos personales que proporcionas voluntariamente a través de nuestros formularios de contacto y reserva, incluyendo nombre, email, teléfono e información sobre tu mascota.",
        },
        {
          heading: "3. Cómo utilizamos tus datos",
          text: "Utilizamos tus datos para procesar tus reservas, contactarte sobre tu solicitud, mejorar nuestros servicios y enviar información sobre nuestras ofertas. No compartimos tus datos con terceros sin tu consentimiento.",
        },
        {
          heading: "4. Seguridad de tus datos",
          text: "Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos personales contra acceso no autorizado, alteración, divulgación o destrucción.",
        },
        {
          heading: "5. Tus derechos",
          text: "Tienes derecho a acceder, rectificar, suprimir u oponerme al tratamiento de tus datos personales. También tienes derecho a solicitar la portabilidad de tus datos. Puedes ejercer estos derechos contactándonos en info@fontfreda.net.",
        },
        {
          heading: "6. Retención de datos",
          text: "Conservamos tus datos personales durante el tiempo necesario para cumplir con los fines para los que fueron recopilados, o según lo requiera la ley.",
        },
        {
          heading: "7. Cambios en esta política",
          text: "Nos reservamos el derecho de modificar esta política de privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: May 19, 2026",
      sections: [
        {
          heading: "1. Data Controller",
          text: "Fontfreda is responsible for the processing of your personal data. You can contact us at info@fontfreda.net with any questions about your privacy.",
        },
        {
          heading: "2. Data we collect",
          text: "We collect personal data that you voluntarily provide through our contact and booking forms, including name, email, phone number and information about your pet.",
        },
        {
          heading: "3. How we use your data",
          text: "We use your data to process your bookings, contact you about your request, improve our services and send you information about our offers. We do not share your data with third parties without your consent.",
        },
        {
          heading: "4. Data Security",
          text: "We implement technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure or destruction.",
        },
        {
          heading: "5. Your Rights",
          text: "You have the right to access, rectify, delete or object to the processing of your personal data. You also have the right to request portability of your data. You can exercise these rights by contacting us at info@fontfreda.net.",
        },
        {
          heading: "6. Data Retention",
          text: "We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, or as required by law.",
        },
        {
          heading: "7. Changes to this policy",
          text: "We reserve the right to modify this privacy policy at any time. Changes will take effect immediately after publication on the website.",
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
