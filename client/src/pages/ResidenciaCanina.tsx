import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { SchemaMarkup, createServiceSchema, createFAQSchema, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { Check, MapPin, Heart, Utensils, Pill, Users } from "lucide-react";
import ServicePromoBanner from "@/components/ServicePromoBanner";
import { useLocation } from "wouter";

export default function ResidenciaCanina() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = isEnglish ? location.replace(/^\/en/, "") || "/residencia-canina" : "/residencia-canina";

  const heroImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663312171860/4pSqWGuzzS8uGmjWwDrdgm/hero-residencia-canina-8f7SDTrMfJUCX2BiRpvb8P.webp";

  const t = isEnglish ? {
    serviceName: "Dog Boarding",
    serviceDesc: "Family boarding for dogs with daily walks, 24h supervision and veterinary care included",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Dog Boarding",
    heroTitle: "Dog Boarding in Barcelona - Family Accommodation for Dogs",
    heroSubtitle: "Family accommodation for dogs, with close attention, adapted spaces and stays designed according to each animal's needs.",
    ctaPrimary: "Request Information",
    descTitle: "Your Dog Deserves a Home",
    descP1: "Fontfreda Dog Boarding is a family accommodation for dogs that need a safe and warm place while their owners are away. It's not a daycare, but a temporary home where your dog lives as part of the family, with personalized attention and spaces adapted to their needs.",
    descP2: "We offer punctual stays (weekends, bank holidays), seasonal (vacations) or long-term, always with the goal of making your dog feel comfortable, safe and happy.",
    featuresTitle: "Main Features",
    featuresSubtitle: "Everything your dog needs for a comfortable and safe stay",
    features: [
      {
        title: "Adapted Spaces",
        description: "Individual covered rooms, outdoor play areas, quiet rest zones.",
      },
      {
        title: "Personalized Feeding",
        description: "We respect each dog's diet and feeding routines. If your pet has special needs, we adapt.",
      },
      {
        title: "Daily Supervised Walks",
        description: "5 daily walks in safe natural environments. Your dog enjoys exercise, environmental enrichment and socialization.",
      },
      {
        title: "Veterinary Care",
        description: "Vaccination, deworming, medication administration and veterinarian visits if necessary.",
      },
      {
        title: "Special Needs Care",
        description: "Dogs with anxiety, behavioral problems, special medical requirements. Previous assessment included.",
      },
      {
        title: "Constant Communication",
        description: "Daily photos and updates. You'll know how your dog is at all times.",
      },
    ],
    processTitle: "Admission Process",
    processSubtitle: "Simple steps for your dog to start their stay",
    processSteps: [
      {
        title: "Initial Contact",
        description: "Call us or send a WhatsApp message. We'll tell you about our accommodation model and answer your questions.",
      },
      {
        title: "Prior Assessment",
        description: "We carry out an individual assessment to ensure that Dog Boarding is suitable for your dog. We talk about their routines, needs, handling and any special requirements.",
      },
      {
        title: "Stay Confirmation",
        description: "Once compatibility is confirmed, we book the dates and prepare everything for your dog's arrival.",
      },
      {
        title: "Pickup and Delivery",
        description: "We offer home pickup and delivery service in Barcelona (€25-30 depending on area). Your dog arrives comfortable and safe.",
      },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Resolve your doubts about our dog boarding service",
    faqItems: [
      {
        question: "What is the minimum age to enter?",
        answer: "We accept puppies from 3 months of age, provided they are properly vaccinated. For very young puppies, we carry out a special assessment.",
      },
      {
        question: "What if my dog has special handling needs?",
        answer: "Before confirming a stay, we assess each case individually to ensure that our family accommodation model is suitable for your dog's needs, routines and handling. If we detect it is not compatible, we will communicate this clearly and suggest alternatives.",
      },
      {
        question: "What are the admission requirements?",
        answer: "Your dog must be vaccinated (minimum pentavalent, heptavalent or up-to-date kennel cough), dewormed (external parasite protection such as pipette or anti-parasite collar), have microchip and, if required by regulations, have the corresponding third-party insurance.",
      },
      {
        question: "Can I leave my dog for a weekend?",
        answer: "Yes, we accept punctual stays. Minimum 2 nights. Check availability by contacting us.",
      },
    ],
    trustTitle: "Why Choose Fontfreda?",
    trustSubtitle: "Experience, dedication and love for animals",
    trustItems: [
      "Proven experience with hundreds of satisfied dogs.",
      "Dedicated and trained team in animal behavior and welfare.",
      "Safe natural environment, away from urban stress.",
      "Individual prior assessment to guarantee compatibility.",
    ],
    ctaFinalTitle: "Ready for Your Dog to Enjoy Fontfreda?",
    ctaFinalDesc: "Contact us today for a personalized assessment. We'd love to meet your dog.",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
  } : {
    serviceName: "Residencia Canina",
    serviceDesc: "Alojamiento familiar para perros con paseos diarios, vigilancia 24h y atención veterinaria incluida",
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Residencia Canina",
    heroTitle: "Residencia Canina en Barcelona - Alojamiento Familiar para Perros",
    heroSubtitle: "Alojamiento familiar para perros, con atención cercana, espacios adaptados y estancias pensadas según las necesidades de cada animal.",
    ctaPrimary: "Solicitar Información",
    descTitle: "Tu Perro Merece un Hogar",
    descP1: "La Residencia Canina de Fontfreda es un alojamiento familiar para perros que necesitan un lugar seguro y cálido mientras sus propietarios están fuera. No es una guardería de día, sino un hogar temporal donde tu perro vive como parte de la familia, con atención personalizada y espacios adaptados a sus necesidades.",
    descP2: "Ofrecemos estancias puntuales (fines de semana, puentes), estacionales (vacaciones) o de larga duración, siempre con el objetivo de que tu perro se sienta cómodo, seguro y feliz.",
    featuresTitle: "Características Principales",
    featuresSubtitle: "Todo lo que tu perro necesita para una estancia cómoda y segura",
    features: [
      {
        title: "Espacios Adaptados",
        description: "Habitaciones individuales cubiertas, áreas de juego al aire libre, zonas de descanso tranquilas.",
      },
      {
        title: "Alimentación Personalizada",
        description: "Respetamos la dieta y rutinas alimenticias de cada perro. Si tu perro tiene necesidades especiales, nos adaptamos.",
      },
      {
        title: "Paseos Diarios Supervisados",
        description: "5 paseos diarios en entornos naturales seguros. Tu perro disfruta de ejercicio, enriquecimiento ambiental y socialización.",
      },
      {
        title: "Atención Veterinaria",
        description: "Vacunación, desparasitación, administración de medicamentos y visita del veterinario si es necesario.",
      },
      {
        title: "Atención de Necesidades Especiales",
        description: "Perros con ansiedad, problemas de comportamiento, requerimientos médicos especiales. Valoración previa incluida.",
      },
      {
        title: "Comunicación Constante",
        description: "Fotos y actualizaciones diarias. Sabrás cómo está tu perro en todo momento.",
      },
    ],
    processTitle: "Proceso de Ingreso",
    processSubtitle: "Pasos sencillos para que tu perro comience su estancia",
    processSteps: [
      {
        title: "Contacto Inicial",
        description: "Llámanos o envía un mensaje por WhatsApp. Te contaremos sobre nuestro modelo de alojamiento y responderemos tus dudas.",
      },
      {
        title: "Valoración Previa",
        description: "Realizamos una valoración individual para asegurar que la Residencia Canina es adecuada para tu perro. Hablamos sobre sus rutinas, necesidades, manejo y cualquier requerimiento especial.",
      },
      {
        title: "Confirmación de Estancia",
        description: "Una vez confirmada la compatibilidad, reservamos las fechas y preparamos todo para la llegada de tu perro.",
      },
      {
        title: "Recogida y Entrega",
        description: "Ofrecemos servicio de recogida y entrega a domicilio en Barcelona (25-30€ según zona). Tu perro llega cómodo y seguro.",
      },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Resuelve tus dudas sobre nuestro servicio de residencia canina",
    faqItems: [
      {
        question: "¿Cuál es la edad mínima para ingresar?",
        answer: "Aceptamos cachorros a partir de 3 meses de edad, siempre que estén correctamente vacunados. Para cachorros muy jóvenes, realizamos una valoración especial.",
      },
      {
        question: "¿Qué pasa si mi perro tiene necesidades especiales de manejo?",
        answer: "Antes de confirmar una estancia, valoramos cada caso de forma individual para asegurar que nuestro modelo de alojamiento familiar es adecuado para las necesidades, rutinas y manejo de tu perro. Si detectamos que no es compatible, te lo comunicaremos claramente y te sugeriremos alternativas.",
      },
      {
        question: "¿Cuáles son los requisitos de ingreso?",
        answer: "Tu perro debe estar vacunado (mínimo pentavalente, heptavalente o tos de perrera al día), desparasitado (protección externa como pipeta o collar antiparásitos), tener microchip y, si es necesario según normativa, contar con el seguro a terceros correspondiente.",
      },
      {
        question: "¿Puedo dejar a mi perro por un fin de semana?",
        answer: "Sí, aceptamos estancias puntuales. Mínimo 2 noches. Consulta disponibilidad contactando con nosotros.",
      },
    ],
    trustTitle: "¿Por Qué Elegir Fontfreda?",
    trustSubtitle: "Experiencia, dedicación y amor por los animales",
    trustItems: [
      "Experiencia probada con cientos de perros satisfechos.",
      "Equipo dedicado y capacitado en comportamiento animal y bienestar.",
      "Entorno natural seguro, alejado del estrés urbano.",
      "Valoración previa individual para garantizar compatibilidad.",
    ],
    ctaFinalTitle: "¿Listo para Que Tu Perro Disfrute de Fontfreda?",
    ctaFinalDesc: "Contacta con nosotros hoy mismo para una valoración personalizada. Nos encantaría conocer a tu perro.",
    callNow: "Llamar Ahora",
    whatsapp: "WhatsApp",
  };

  const serviceSchema = createServiceSchema(t.serviceName, t.serviceDesc, heroImageUrl);
  const faqSchema = createFAQSchema(t.faqItems);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: t.breadcrumbHome, url: isEnglish ? "https://www.fontfreda.net/en" : "https://www.fontfreda.net" },
    { name: t.breadcrumbCurrent, url: isEnglish ? "https://www.fontfreda.net/en/residencia-canina" : "https://www.fontfreda.net/residencia-canina" },
  ]);

  const featureIcons = [MapPin, Utensils, Heart, Pill, Users, Heart];

  const seoTitle = isEnglish
    ? "Dog Boarding in Barcelona | Family Accommodation for Dogs | Fontfreda"
    : "Residencia Canina en Barcelona | Alojamiento Familiar para Perros | Fontfreda";
  const seoDescription = isEnglish
    ? "Family boarding for dogs in Barcelona. Individual rooms, 5 daily walks in nature, 24h supervision and veterinary care included. Short and long stays."
    : "Residencia canina familiar en Barcelona. Habitaciones individuales, 5 paseos diarios en naturaleza, vigilancia 24h y atención veterinaria incluida. Estancias cortas y largas.";
  const seoKeywords = isEnglish
    ? "dog boarding Barcelona, family dog accommodation, dog kennel Gelida, dog hotel Alt Penedès, daily walks for dogs"
    : "residencia canina Barcelona, alojamiento familiar perros, residencia perros Gelida, hotel canino Alt Penedès, paseos diarios perros, residencia canina con piscina";
  const canonical = isEnglish
    ? "https://www.fontfreda.net/en/residencia-canina"
    : "https://www.fontfreda.net/residencia-canina";

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={canonical}
        language={isEnglish ? "en" : "es"}
        ogImage={heroImageUrl}
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="Service" data={serviceSchema} />
      <SchemaMarkup type="FAQPage" data={faqSchema} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />

      <Header />

      <main className="flex-grow">
        <HeroSection
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          backgroundImage={heroImageUrl}
          primaryCTA={{
            label: t.ctaPrimary,
          }}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="sr-only">{t.serviceName} Fontfreda Barcelona</h1>
            <h2 className="text-3xl font-bold text-primary mb-4">{t.descTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6">{t.descP1}</p>
            <p className="text-lg text-muted-foreground">{t.descP2}</p>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">{t.featuresTitle}</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">{t.featuresSubtitle}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {t.features.map((feature, index) => {
                const Icon = featureIcons[index];
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">{t.processTitle}</h2>
            <p className="text-center text-muted-foreground mb-12">{t.processSubtitle}</p>

            <div className="space-y-8">
              {t.processSteps.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">{t.faqTitle}</h2>
            <p className="text-center text-muted-foreground mb-12">{t.faqSubtitle}</p>

            <div className="space-y-6">
              {t.faqItems.map((item, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground text-sm">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">{t.trustTitle}</h2>
            <p className="text-center text-muted-foreground mb-12">{t.trustSubtitle}</p>

            <div className="space-y-6">
              {t.trustItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Otros servicios ───────────────────────────────────────────────── */}
        <section className="py-8 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl space-y-4">
            <ServicePromoBanner variant="dentro-de-casa" language={isEnglish ? "en" : "es"} />
            <ServicePromoBanner variant="larga-estancia" language={isEnglish ? "en" : "es"} />
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">{t.ctaFinalTitle}</h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">{t.ctaFinalDesc}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+34937790311">
                <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-base">
                  {t.callNow}
                </Button>
              </a>
              <a href="https://wa.me/34937790311" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
                >
                  {t.whatsapp}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
