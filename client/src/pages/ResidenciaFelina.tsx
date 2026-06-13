import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { SchemaMarkup, createServiceSchema, createFAQSchema, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { Check, Leaf, Lightbulb, Utensils, Pill, Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function ResidenciaFelina() {
  const [location, navigate] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/residencia-felina";

  const heroImageUrl = "/images/felina/gatos-en-la-residencia.jpeg";

  const t = isEnglish ? {
    serviceName: "Cat Boarding",
    serviceDesc: "Specialized accommodation for cats with 180 m² of space, peaceful environment and personalized attention",
    breadcrumbHome: "Home",
    breadcrumbCurrent: "Cat Boarding",
    heroTitle: "Cat Boarding in Barcelona - Specialized Accommodation for Cats",
    heroSubtitle: "Family accommodation for cats, with safe, peaceful spaces adapted to their independent nature.",
    ctaPrimary: "Request Information",
    descTitle: "Cats Deserve Spaces Designed for Them",
    descP1: "Fontfreda Cat Boarding is a specialized accommodation for cats that need a safe place while their owners are away. Unlike dog boarding facilities, our feline spaces are specifically designed to respect the independent nature of cats, offering tranquility, enrichment and professional care.",
    descP2: "We offer punctual, seasonal or long-term stays, always prioritizing the well-being and comfort of each cat.",
    featuresTitle: "Main Features",
    featuresSubtitle: "Specialized in feline well-being",
    features: [
      { title: "Safe and Quiet Spaces", description: "Areas separated from dogs, with vertical spaces, hideouts and rest areas. Your cat has freedom of movement in a safe environment." },
      { title: "Environmental Enrichment", description: "Toys, scratching posts, windows with views, safe plants. We keep your cat stimulated and happy." },
      { title: "Personalized Feeding", description: "We respect each cat's diet and routines. If they have special preferences, we adapt." },
      { title: "Veterinary Care", description: "Vaccination, deworming, medication administration. Your cat receives complete care." },
      { title: "Constant Communication", description: "Daily photos and updates. You'll know how your cat is at all times." },
    ],
    processTitle: "Admission Process",
    processSubtitle: "Simple steps for your cat to start their stay",
    processSteps: [
      { title: "Initial Contact", description: "Call us or send a message. We'll tell you about our feline spaces." },
      { title: "Prior Assessment", description: "We carry out an assessment to ensure that Cat Boarding is suitable for your cat. We talk about their habits, temperament and needs." },
      { title: "Confirmation", description: "Once compatibility is confirmed, we book the dates." },
      { title: "Pickup and Delivery", description: "We offer home pickup and delivery in a safe carrier (€25-30 depending on area)." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Resolve your doubts about our cat boarding service",
    faqItems: [
      { question: "Do you accept shy or fearful cats?", answer: "Yes, we have experience with cats of all temperaments. We carry out a prior assessment to ensure our environment is suitable for their personality." },
      { question: "What are the admission requirements?", answer: "Your cat must be vaccinated (trivalent and feline leukemia up to date), dewormed and have applied an anti-parasite pipette. Microchip recommended." },
      { question: "Can two cats stay together?", answer: "If they live together at home, they can stay together at the boarding. If they don't know each other, we keep them separated for their safety." },
      { question: "What if my cat doesn't eat well?", answer: "We have experience with cats with selective appetite. We carry out a prior assessment and adapt to their preferences." },
    ],
    trustTitle: "Why Choose Fontfreda for Your Cat?",
    trustSubtitle: "Specialization in feline well-being",
    trustItems: [
      "Spaces specifically designed for cats, not an adaptation of dog boarding.",
      "Team with specialized experience in feline behavior.",
      "Peaceful and safe environment, respecting the independent nature of cats.",
      "Individual prior assessment to guarantee compatibility.",
    ],
    ctaFinalTitle: "Ready for Your Cat to Enjoy Fontfreda?",
    ctaFinalDesc: "Contact us today for a personalized assessment. We'd love to care for your cat.",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
  } : {
    serviceName: "Residencia Felina",
    serviceDesc: "Alojamiento especializado para gatos con 180 m² de espacio, ambiente tranquilo y atención personalizada",
    breadcrumbHome: "Inicio",
    breadcrumbCurrent: "Residencia Felina",
    heroTitle: "Residencia Felina en Barcelona - Alojamiento Especializado para Gatos",
    heroSubtitle: "Alojamiento familiar para gatos, con espacios seguros, tranquilos y adaptados a su naturaleza independiente.",
    ctaPrimary: "Solicitar Información",
    descTitle: "Los Gatos Merecen Espacios Pensados para Ellos",
    descP1: "La Residencia Felina de Fontfreda es un alojamiento especializado para gatos que necesitan un lugar seguro mientras sus propietarios están fuera. A diferencia de las residencias caninas, nuestros espacios felinos están diseñados específicamente para respetar la naturaleza independiente de los gatos, ofreciendo tranquilidad, enriquecimiento y cuidados profesionales.",
    descP2: "Ofrecemos estancias puntuales, estacionales o de larga duración, siempre priorizando el bienestar y la comodidad de cada gato.",
    featuresTitle: "Características Principales",
    featuresSubtitle: "Especializado en el bienestar felino",
    features: [
      { title: "Espacios Seguros y Tranquilos", description: "Áreas separadas de los perros, con espacios verticales, escondites y zonas de descanso. Tu gato tiene libertad de movimiento en un entorno seguro." },
      { title: "Enriquecimiento Ambiental", description: "Juguetes, rascadores, ventanas con vistas, plantas seguras. Mantenemos a tu gato estimulado y feliz." },
      { title: "Alimentación Personalizada", description: "Respetamos la dieta y rutinas de cada gato. Si tiene preferencias especiales, nos adaptamos." },
      { title: "Atención Veterinaria", description: "Vacunación, desparasitación, administración de medicamentos. Tu gato recibe cuidados completos." },
      { title: "Comunicación Constante", description: "Fotos y actualizaciones diarias. Sabrás cómo está tu gato en todo momento." },
    ],
    processTitle: "Proceso de Ingreso",
    processSubtitle: "Pasos sencillos para que tu gato comience su estancia",
    processSteps: [
      { title: "Contacto Inicial", description: "Llámanos o envía un mensaje. Te contaremos sobre nuestros espacios felinos." },
      { title: "Valoración Previa", description: "Realizamos una valoración para asegurar que la Residencia Felina es adecuada para tu gato. Hablamos sobre sus hábitos, temperamento y necesidades." },
      { title: "Confirmación", description: "Una vez confirmada la compatibilidad, reservamos las fechas." },
      { title: "Recogida y Entrega", description: "Ofrecemos servicio de recogida y entrega a domicilio en transportín seguro (25-30€ según zona)." },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqSubtitle: "Resuelve tus dudas sobre nuestro servicio de residencia felina",
    faqItems: [
      { question: "¿Aceptan gatos con comportamiento tímido o miedoso?", answer: "Sí, tenemos experiencia con gatos de todos los temperamentos. Realizamos una valoración previa para asegurar que nuestro entorno es adecuado para su personalidad." },
      { question: "¿Cuáles son los requisitos de ingreso?", answer: "Tu gato debe estar vacunado (trivalente y leucemia felina al día), desparasitado y tener la pipeta antiparásitos aplicada. Microchip recomendado." },
      { question: "¿Pueden estar juntos dos gatos?", answer: "Si viven juntos en casa, pueden estar juntos en la residencia. Si no se conocen, los mantenemos separados por su seguridad." },
      { question: "¿Qué pasa si mi gato no come bien?", answer: "Contamos con experiencia en gatos con apetito selectivo. Realizamos una valoración previa y nos adaptamos a sus preferencias." },
    ],
    trustTitle: "¿Por Qué Elegir Fontfreda para Tu Gato?",
    trustSubtitle: "Especialización en bienestar felino",
    trustItems: [
      "Espacios diseñados específicamente para gatos, no una adaptación de residencia canina.",
      "Equipo con experiencia especializada en comportamiento felino.",
      "Ambiente tranquilo y seguro, respetando la naturaleza independiente de los gatos.",
      "Valoración previa individual para garantizar compatibilidad.",
    ],
    ctaFinalTitle: "¿Listo para Que Tu Gato Disfrute de Fontfreda?",
    ctaFinalDesc: "Contacta con nosotros hoy mismo para una valoración personalizada. Nos encantaría cuidar a tu gato.",
    callNow: "Llamar Ahora",
    whatsapp: "WhatsApp",
  };

  const serviceSchema = createServiceSchema(t.serviceName, t.serviceDesc, heroImageUrl);
  const faqSchema = createFAQSchema(t.faqItems);
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: t.breadcrumbHome, url: isEnglish ? "https://www.fontfreda.net/en" : "https://www.fontfreda.net" },
    { name: t.breadcrumbCurrent, url: isEnglish ? "https://www.fontfreda.net/en/residencia-felina" : "https://www.fontfreda.net/residencia-felina" },
  ]);

  const featureIcons = [Leaf, Lightbulb, Utensils, Pill, Heart];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={isEnglish ? "Cat Boarding in Barcelona | 180m² Exclusive for Cats | Fontfreda" : "Residencia Felina en Barcelona | 180m² Exclusivos para Gatos | Fontfreda"}
        description={isEnglish ? "Cat boarding in Barcelona with 180m² exclusively for cats. Spaces separated from dogs, personalized attention, quiet and safe environment. Book now." : "Residencia felina en Barcelona con 180m² exclusivos para gatos. Espacios separados de perros, atención personalizada, ambiente tranquilo y seguro. Reserva ahora."}
        keywords={isEnglish ? "cat boarding Barcelona, cat hotel Barcelona, cat residence Gelida, feline accommodation, cat care vacation" : "residencia felina Barcelona, hotel gatos Barcelona, residencia gatos Gelida, alojamiento felino, cuidado gatos vacaciones"}
        canonical={isEnglish ? "https://www.fontfreda.net/en/residencia-felina" : "https://www.fontfreda.net/residencia-felina"}
        language={isEnglish ? "en" : "es"}
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
          primaryCTA={{ label: t.ctaPrimary, onClick: () => navigate(isEnglish ? "/en/contacto" : "/contacto") }}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h1 className="sr-only">{t.serviceName} Fontfreda Barcelona</h1>
            <h2 className="text-3xl font-bold text-primary mb-4">{t.descTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6">{t.descP1}</p>
            <p className="text-lg text-muted-foreground">{t.descP2}</p>
          </div>
        </section>

        {/* ── Galería ───────────────────────────────────────────────────────── */}
        <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <img
              src="/images/felina/espacio-interior-residencia-felina.jpeg"
              alt={isEnglish ? "Interior of Fontfreda feline residence" : "Interior de la residencia felina Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/felina/gato-alojado-en-residencia.jpeg"
              alt={isEnglish ? "Cat staying at Fontfreda feline residence" : "Gato alojado en la residencia felina Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/felina/gato-2-residencia-felina.jpeg"
              alt={isEnglish ? "Cat at Fontfreda feline residence Barcelona" : "Gato en la residencia felina Fontfreda Barcelona"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/felina/interior-residencia-2.jpeg"
              alt={isEnglish ? "Fontfreda feline residence space" : "Espacio de la residencia felina Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
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
              <a href="https://wa.me/34609732211" target="_blank" rel="noopener noreferrer">
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
