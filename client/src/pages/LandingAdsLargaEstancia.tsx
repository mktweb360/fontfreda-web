import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { SchemaMarkup, createBreadcrumbSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Check, TrendingDown, Calendar, Users } from "lucide-react";

export default function LandingAdsLargaEstancia() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/larga-estancia-perros-gatos";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isEnglish ? "Home" : "Inicio", url: "https://www.fontfreda.net" },
    {
      name: isEnglish ? "Long-Term Boarding" : "Larga Estancia",
      url: isEnglish
        ? "https://www.fontfreda.net/en/larga-estancia-perros-gatos"
        : "https://www.fontfreda.net/larga-estancia-perros-gatos",
    },
  ]);

  const content = isEnglish
    ? {
        title: "Long-Term Dog and Cat Boarding | Months or Years",
        description:
          "Affordable long-term boarding for dogs and cats. Months or years. Special rates, family care, and complete peace of mind.",
        keywords:
          "long-term dog boarding, dog boarding months, cat boarding long-term, affordable pet care",
        heading: "Long-Term Dog & Cat Boarding",
        subheading: "Months or Years - Special Rates & Family Care",
        benefits: [
          "Special rates for extended stays",
          "Family home environment",
          "5 daily supervised walks",
          "24/7 monitoring and care",
          "Flexible check-in/check-out",
          "Veterinary care included",
        ],
        features: [
          { icon: TrendingDown, title: "Special Rates", desc: "Discounts for stays of 3+ months" },
          { icon: Calendar, title: "Flexible Dates", desc: "Customize your stay duration" },
          { icon: Users, title: "Family Care", desc: "Your pet lives as part of our family" },
          { icon: Check, title: "Complete Peace", desc: "Know your pet is safe and happy" },
        ],
        cta: "Get Custom Quote",
        ctaSecondary: "Call for Details",
        testimonial: '"My dog has been with you for 8 months and is thriving!" - Roberto L.',
        price: "Custom pricing",
      }
    : {
        title: "Alojamiento de Larga Estancia para Perros y Gatos | Meses o Años",
        description:
          "Alojamiento asequible de larga estancia para perros y gatos. Meses o años. Tarifas especiales, cuidado familiar y tranquilidad total.",
        keywords:
          "alojamiento larga estancia perros, residencia meses años, cuidado gatos largo plazo, pensión asequible",
        heading: "Alojamiento de Larga Estancia",
        subheading: "Meses o Años - Tarifas Especiales y Cuidado Familiar",
        benefits: [
          "Tarifas especiales para estancias prolongadas",
          "Ambiente familiar",
          "5 paseos diarios supervisados",
          "Vigilancia 24 horas",
          "Entrada/salida flexible",
          "Cuidados veterinarios incluidos",
        ],
        features: [
          { icon: TrendingDown, title: "Tarifas Especiales", desc: "Descuentos para 3+ meses" },
          { icon: Calendar, title: "Fechas Flexibles", desc: "Personaliza la duración" },
          { icon: Users, title: "Cuidado Familiar", desc: "Tu mascota vive como familia" },
          { icon: Check, title: "Tranquilidad Total", desc: "Sabe que está seguro y feliz" },
        ],
        cta: "Solicitar Presupuesto",
        ctaSecondary: "Llamar para Detalles",
        testimonial: '"Mi perro lleva 8 meses contigo y está prosperando!" - Roberto L.',
        price: "Presupuesto personalizado",
      };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical={isEnglish ? "https://www.fontfreda.net/en/larga-estancia-perros-gatos" : "https://www.fontfreda.net/larga-estancia-perros-gatos"}
        language={isEnglish ? "en" : "es"}
        ogImage="https://images.unsplash.com/photo-1601758228658-3bbbdd5fc8ab?ixlib=rb-4.0.3&w=1200&h=630&fit=crop"
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{content.heading}</h1>
              <p className="text-xl text-muted-foreground mb-8">{content.subheading}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  {content.cta}
                </Button>
                <Button size="lg" variant="outline">
                  {content.ctaSecondary}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-6">{content.price}</p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{isEnglish ? "Perfect For:" : "Ideal Para:"}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {content.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {content.features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-secondary p-8 rounded-lg">
              <p className="text-lg italic text-foreground mb-4">{content.testimonial}</p>
              <p className="text-sm text-muted-foreground">{isEnglish ? "Verified Customer" : "Cliente Verificado"}</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              {isEnglish ? "Common Situations:" : "Situaciones Comunes:"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-semibold mb-3">
                  {isEnglish ? "Relocation" : "Mudanza"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish
                    ? "Your dog or cat stays safe while you arrange your new home"
                    : "Tu perro o gato está seguro mientras organizas tu nuevo hogar"}
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-semibold mb-3">
                  {isEnglish ? "Work Abroad" : "Trabajo en el Extranjero"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish
                    ? "Extended assignments? We care for your pet like family"
                    : "¿Asignación prolongada? Cuidamos tu mascota como familia"}
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <h3 className="font-semibold mb-3">
                  {isEnglish ? "Temporary Situation" : "Situación Temporal"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isEnglish
                    ? "Any life circumstance? We're here to help"
                    : "¿Cualquier circunstancia? Estamos aquí para ayudar"}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isEnglish ? "Let's Talk About Your Needs" : "Hablemos de Tus Necesidades"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {isEnglish
                ? "Every situation is unique. We'll create a custom plan for your dog or cat."
                : "Cada situación es única. Crearemos un plan personalizado para tu perro o gato."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                {content.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                +34 93 779 03 11
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
