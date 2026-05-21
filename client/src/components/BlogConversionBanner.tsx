import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";

interface BlogConversionBannerProps {
  language: "es" | "en";
  category?: string;
}

export default function BlogConversionBanner({
  language,
  category,
}: BlogConversionBannerProps) {
  // Determine the target service based on article category
  const getServiceLink = () => {
    const baseUrl = language === "en" ? "/en" : "";
    
    switch (category?.toLowerCase()) {
      case "residencia":
        return `${baseUrl}/residencia-canina`;
      case "gatos":
        return `${baseUrl}/residencia-felina`;
      case "perros":
        return `${baseUrl}/residencia-canina`;
      case "guardería":
      case "guarderia":
        return `${baseUrl}/guarderia`;
      case "salud":
        return `${baseUrl}/residencia-canina`;
      default:
        return `${baseUrl}/contacto`;
    }
  };

  const serviceLink = getServiceLink();

  const content = {
    es: {
      title: "¿Necesitas cuidado profesional para tu perro o gato?",
      subtitle:
        "En Fontfreda ofrecemos servicios especializados con atención personalizada",
      benefits: [
        "Vigilancia 24 horas",
        "Paseos diarios en naturaleza",
        "Atención veterinaria",
        "Espacios climatizados",
      ],
      cta: "Conocer Nuestros Servicios",
      contact: "O contacta con nosotros",
    },
    en: {
      title: "Does your dog or cat need professional care?",
      subtitle:
        "At Fontfreda we offer specialized services with personalized attention",
      benefits: [
        "24-hour supervision",
        "Daily walks in nature",
        "Veterinary care",
        "Climate-controlled spaces",
      ],
      cta: "Learn About Our Services",
      contact: "Or contact us",
    },
  };

  const t = content[language];

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{t.subtitle}</p>

            {/* Benefits list */}
            <ul className="space-y-3 mb-8">
              {t.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={serviceLink} className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                {t.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href={language === "en" ? "/en/contacto" : "/contacto"} className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                {t.contact}
              </Link>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>

              {/* Card content */}
              <div className="relative bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-border">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                    <span className="text-3xl">🐾</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {language === "es"
                      ? "Expertos en Cuidado"
                      : "Care Experts"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Más de 10 años de experiencia en bienestar animal"
                      : "Over 10 years of experience in animal welfare"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
