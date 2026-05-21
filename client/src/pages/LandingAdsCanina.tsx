import { useState } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { SchemaMarkup, createBreadcrumbSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Users, Heart, Shield } from "lucide-react";

export default function LandingAdsCanina() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/residencia-canina-barcelona";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isEnglish ? "Home" : "Inicio", url: "https://www.fontfreda.net" },
    {
      name: isEnglish ? "Dog Boarding Barcelona" : "Residencia Canina Barcelona",
      url: isEnglish
        ? "https://www.fontfreda.net/en/residencia-canina-barcelona"
        : "https://www.fontfreda.net/residencia-canina-barcelona",
    },
  ]);

  const content = isEnglish
    ? {
        title: "Dog Boarding Barcelona | Family Accommodation for Dogs",
        description:
          "Premium dog boarding in Barcelona. Family accommodation with 24/7 care, daily walks, and personalized attention. Book your dog's stay now.",
        keywords:
          "dog boarding Barcelona, dog hotel Barcelona, dog care Barcelona, pet boarding near me",
        heading: "Dog Boarding in Barcelona",
        subheading: "Family Accommodation with 24/7 Care & Daily Walks",
        benefits: [
          "Family home environment, not a kennel",
          "5 daily supervised walks in nature",
          "24/7 monitoring and care",
          "Personalized attention to each dog",
          "Veterinary care included",
          "Daily photo updates",
        ],
        features: [
          { icon: Heart, title: "Family Care", desc: "Your dog lives as part of our family" },
          { icon: MapPin, title: "Natural Spaces", desc: "5 parks with 400-600m² each" },
          { icon: Users, title: "Socialization", desc: "Safe interaction with other dogs" },
          { icon: Shield, title: "Security", desc: "Fenced areas and 24/7 surveillance" },
        ],
        cta: "Book Your Dog's Stay",
        ctaSecondary: "Get Free Assessment",
        testimonial: '"My dog comes back happy and tired. Best investment ever!" - Maria G.',
        price: "From €20/day",
      }
    : {
        title: "Residencia Canina Barcelona | Alojamiento Familiar para Perros",
        description:
          "Residencia canina premium en Barcelona. Alojamiento familiar con atención 24h, paseos diarios y cuidados personalizados. Reserva ahora.",
        keywords:
          "residencia canina Barcelona, hotel para perros Barcelona, cuidado perros Barcelona, guardería perros",
        heading: "Residencia Canina en Barcelona",
        subheading: "Alojamiento Familiar con Atención 24h y Paseos Diarios",
        benefits: [
          "Entorno familiar, no una jaula",
          "5 paseos diarios supervisados en naturaleza",
          "Vigilancia 24 horas",
          "Atención personalizada a cada perro",
          "Cuidados veterinarios incluidos",
          "Fotos diarias de tu perro",
        ],
        features: [
          { icon: Heart, title: "Cuidado Familiar", desc: "Tu perro vive como parte de nuestra familia" },
          { icon: MapPin, title: "Espacios Naturales", desc: "5 parques de 400-600m² cada uno" },
          { icon: Users, title: "Socialización", desc: "Interacción segura con otros perros" },
          { icon: Shield, title: "Seguridad", desc: "Áreas valladas y vigilancia 24h" },
        ],
        cta: "Reservar Estancia",
        ctaSecondary: "Solicitar Valoración Gratis",
        testimonial: '"Mi perro vuelve feliz y cansado. ¡La mejor inversión!" - María G.',
        price: "Desde 20€/día",
      };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical={isEnglish ? "https://www.fontfreda.net/en/residencia-canina-barcelona" : "https://www.fontfreda.net/residencia-canina-barcelona"}
        language={isEnglish ? "en" : "es"}
        ogImage="https://images.unsplash.com/photo-1633722715463-d30628cff4a9?ixlib=rb-4.0.3&w=1200&h=630&fit=crop"
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
