import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { SchemaMarkup, createBreadcrumbSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Zap, Heart, Shield } from "lucide-react";

export default function LandingAdsFelina() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/residencia-felina-barcelona";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isEnglish ? "Home" : "Inicio", url: "https://www.fontfreda.net" },
    {
      name: isEnglish ? "Cat Boarding Barcelona" : "Residencia Felina Barcelona",
      url: isEnglish
        ? "https://www.fontfreda.net/en/residencia-felina-barcelona"
        : "https://www.fontfreda.net/residencia-felina-barcelona",
    },
  ]);

  const content = isEnglish
    ? {
        title: "Cat Boarding Barcelona | Specialized Feline Accommodation",
        description:
          "Premium cat boarding in Barcelona. Specialized feline spaces, calm environment, and personalized care. Book your cat's stay now.",
        keywords:
          "cat boarding Barcelona, cat hotel Barcelona, feline care Barcelona, cat sitting Barcelona",
        heading: "Cat Boarding in Barcelona",
        subheading: "Specialized Spaces Designed Exclusively for Cats",
        benefits: [
          "180m² dedicated feline space",
          "Calm and quiet environment",
          "Specialized feline behavior expertise",
          "Individual pre-assessment",
          "Safe outdoor access",
          "Daily updates and photos",
        ],
        features: [
          { icon: Heart, title: "Feline Specialist", desc: "Team with specialized feline knowledge" },
          { icon: Zap, title: "Enrichment", desc: "Climbing structures and play areas" },
          { icon: MapPin, title: "Safe Spaces", desc: "180m² designed for cat comfort" },
          { icon: Shield, title: "Security", desc: "Secure environment with escape prevention" },
        ],
        cta: "Book Your Cat's Stay",
        ctaSecondary: "Free Assessment",
        testimonial: '"My cat was so relaxed. She came back purring!" - Elena M.',
        price: "From €18/day",
      }
    : {
        title: "Residencia Felina Barcelona | Alojamiento Especializado para Gatos",
        description:
          "Residencia felina premium en Barcelona. Espacios especializados, ambiente tranquilo y cuidados personalizados. Reserva ahora.",
        keywords:
          "residencia felina Barcelona, hotel para gatos Barcelona, cuidado gatos Barcelona, guardería gatos",
        heading: "Residencia Felina en Barcelona",
        subheading: "Espacios Especializados Diseñados Exclusivamente para Gatos",
        benefits: [
          "Espacio felino dedicado de 180m²",
          "Ambiente tranquilo y seguro",
          "Experiencia especializada en comportamiento felino",
          "Valoración previa individual",
          "Acceso seguro al exterior",
          "Fotos y actualizaciones diarias",
        ],
        features: [
          { icon: Heart, title: "Especialista Felino", desc: "Equipo con experiencia en gatos" },
          { icon: Zap, title: "Enriquecimiento", desc: "Estructuras para trepar y jugar" },
          { icon: MapPin, title: "Espacios Seguros", desc: "180m² diseñados para comodidad felina" },
          { icon: Shield, title: "Seguridad", desc: "Ambiente seguro y prevención de escapes" },
        ],
        cta: "Reservar Estancia",
        ctaSecondary: "Valoración Gratuita",
        testimonial: '"Mi gato estaba tan relajado. ¡Volvió ronroneando!" - Elena M.',
        price: "Desde 18€/día",
      };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical={isEnglish ? "https://www.fontfreda.net/en/residencia-felina-barcelona" : "https://www.fontfreda.net/residencia-felina-barcelona"}
        language={isEnglish ? "en" : "es"}
        ogImage="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&w=1200&h=630&fit=crop"
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
            <h2 className="text-3xl font-bold text-center mb-12">{isEnglish ? "Why Choose Us?" : "¿Por Qué Elegirnos?"}</h2>
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

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isEnglish ? "Ready to Book?" : "¿Listo para Reservar?"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {isEnglish
                ? "Contact us today for a free assessment and personalized quote."
                : "Contacta hoy para una valoración gratuita y presupuesto personalizado."}
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
