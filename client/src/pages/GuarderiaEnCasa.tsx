import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SchemaMarkup, createBreadcrumbSchema, createServiceSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import {
  Home,
  Heart,
  Users,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface FAQItem {
  id: string;
  question_es: string;
  question_en: string;
  answer_es: string;
  answer_en: string;
}

export default function GuarderiaEnCasa() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/guarderia-canina-dentro-de-casa";

  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();

  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: language === "es" ? "Inicio" : "Home", url: "https://www.fontfreda.net" },
    {
      name: language === "es" ? "Guardería en Casa" : "In-Home Daycare",
      url: "https://www.fontfreda.net/guarderia-canina-dentro-de-casa",
    },
  ]);

  const serviceSchema = createServiceSchema(
    language === "es" ? "Residencia Dentro de Casa" : "Dog Boarding In-Home",
    language === "es"
      ? "Servicio premium: tu perro vive dentro de la casa familiar durante su estancia. Máxima intimidad y trato personalizado en Gelida, Barcelona."
      : "Premium service: your dog lives inside the family home during their stay. Maximum intimacy and personal care in Gelida, Barcelona.",
    "https://www.fontfreda.net/images/dentro-de-casa/hotel-canino-fontfreda-4.jpg",
    {
      serviceType: "In-Home Dog Boarding",
      url: language === "es" ? "https://www.fontfreda.net/guarderia-canina-dentro-de-casa" : "https://www.fontfreda.net/en/guarderia-canina-dentro-de-casa",
    },
  );

  const faqItems: FAQItem[] = [
    {
      id: "encasa-1",
      question_es: "¿Cómo funciona el servicio de guardería en casa?",
      question_en: "How does the in-home daycare service work?",
      answer_es:
        "Nuestro cuidador profesional se desplaza a tu hogar para cuidar a tu perro durante el día. Proporciona paseos, juego, alimentación y vigilancia constante en el ambiente familiar del perro.",
      answer_en:
        "Our professional caregiver comes to your home to care for your dog during the day. We provide walks, play, feeding and constant supervision in your dog's familiar environment.",
    },
    {
      id: "encasa-2",
      question_es: "¿Qué ventajas tiene la guardería en casa?",
      question_en: "What are the advantages of in-home daycare?",
      answer_es:
        "Tu perro permanece en su entorno familiar, evitando estrés por cambio de lugar. Recibe atención personalizada y uno a uno, ideal para perros tímidos, ancianos o con necesidades especiales.",
      answer_en:
        "Your dog stays in their familiar environment, avoiding stress from relocation. They receive personalized, one-on-one attention, ideal for shy, elderly or special needs dogs.",
    },
    {
      id: "encasa-3",
      question_es: "¿Cuál es el horario disponible?",
      question_en: "What hours are available?",
      answer_es:
        "Ofrecemos flexibilidad de horarios. Disponemos de servicios matutinos (8:00-13:00), vespertinos (14:00-18:00) y jornada completa. Consulta disponibilidad según tu zona.",
      answer_en:
        "We offer flexible hours. We have morning (8:00 AM-1:00 PM), afternoon (2:00 PM-6:00 PM) and full-day services. Check availability for your area.",
    },
    {
      id: "encasa-4",
      question_es: "¿Qué incluye el servicio?",
      question_en: "What does the service include?",
      answer_es:
        "Paseos diarios, juego supervisado, alimentación según instrucciones, medicamentos si es necesario, fotos/videos del día y reporte de comportamiento.",
      answer_en:
        "Daily walks, supervised play, feeding according to instructions, medication if needed, daily photos/videos and behavior report.",
    },
    {
      id: "encasa-5",
      question_es: "¿Cuál es el precio del servicio?",
      question_en: "What is the price?",
      answer_es:
        "El precio varía según la zona, duración del servicio y necesidades especiales del perro. Solicita presupuesto personalizado sin compromiso.",
      answer_en:
        "Price varies depending on location, service duration and your dog's special needs. Request a personalized quote with no obligation.",
    },
    {
      id: "encasa-6",
      question_es: "¿Necesito dejar acceso a mi casa?",
      question_en: "Do I need to give house access?",
      answer_es:
        "Sí, necesitamos acceso a tu hogar. Proporcionamos cuidadores de confianza con referencias verificadas. Puedes instalar cámaras de seguridad para mayor tranquilidad.",
      answer_en:
        "Yes, we need access to your home. We provide trusted caregivers with verified references. You can install security cameras for added peace of mind.",
    },
  ];

  const translations = {
    es: {
      title: "Guardería Canina Dentro de Casa",
      subtitle: "Cuidado personalizado en el hogar de tu perro",
      description:
        "Servicio de guardería profesional donde nuestros cuidadores se desplazan a tu hogar para cuidar a tu perro con atención personalizada.",
      benefits: [
        {
          icon: Home,
          title: "Ambiente Familiar",
          description: "Tu perro permanece en su entorno conocido y seguro",
        },
        {
          icon: Heart,
          title: "Atención Personalizada",
          description: "Cuidado uno a uno adaptado a las necesidades de tu perro",
        },
        {
          icon: Users,
          title: "Cuidadores de Confianza",
          description: "Profesionales verificados y con experiencia en cuidado canino",
        },
        {
          icon: Clock,
          title: "Horarios Flexibles",
          description: "Adaptamos el servicio a tu disponibilidad y necesidades",
        },
        {
          icon: Shield,
          title: "Seguridad Garantizada",
          description: "Cuidadores asegurados y referencias verificables",
        },
        {
          icon: Zap,
          title: "Reportes Diarios",
          description: "Fotos, videos y reportes del comportamiento de tu perro",
        },
      ],
      idealFor: "Ideal para:",
      idealForList: [
        "Perros tímidos o con ansiedad por separación",
        "Perros ancianos o con problemas de salud",
        "Perros con necesidades especiales o medicación",
        "Cachorros que necesitan socialización",
        "Perros que prefieren ambiente familiar",
      ],
      process: "Cómo Funciona",
      processSteps: [
        {
          number: "1",
          title: "Consulta Inicial",
          description: "Nos ponemos en contacto para conocer a tu perro y necesidades",
        },
        {
          number: "2",
          title: "Visita de Conocimiento",
          description: "El cuidador visita tu hogar para familiarizarse con el perro",
        },
        {
          number: "3",
          title: "Servicio Personalizado",
          description: "Cuidado diario adaptado a rutina y preferencias de tu perro",
        },
        {
          number: "4",
          title: "Seguimiento",
          description: "Reportes diarios, fotos y comunicación constante",
        },
      ],
      faq: "Preguntas Frecuentes",
      contactCTA: "Solicitar Presupuesto",
      contactSubtitle: "Contacta con nosotros para más información",
    },
    en: {
      title: "In-Home Dog Daycare",
      subtitle: "Personalized care in your dog's home",
      description:
        "Professional daycare service where our caregivers come to your home to care for your dog with personalized attention.",
      benefits: [
        {
          icon: Home,
          title: "Familiar Environment",
          description: "Your dog stays in their known and safe environment",
        },
        {
          icon: Heart,
          title: "Personalized Care",
          description: "One-on-one care adapted to your dog's needs",
        },
        {
          icon: Users,
          title: "Trusted Caregivers",
          description: "Verified professionals with dog care experience",
        },
        {
          icon: Clock,
          title: "Flexible Hours",
          description: "Service adapted to your availability and needs",
        },
        {
          icon: Shield,
          title: "Guaranteed Safety",
          description: "Insured caregivers and verifiable references",
        },
        {
          icon: Zap,
          title: "Daily Reports",
          description: "Photos, videos and behavior reports of your dog",
        },
      ],
      idealFor: "Ideal for:",
      idealForList: [
        "Shy dogs or with separation anxiety",
        "Elderly dogs or with health issues",
        "Dogs with special needs or medication",
        "Puppies needing socialization",
        "Dogs that prefer family environment",
      ],
      process: "How It Works",
      processSteps: [
        {
          number: "1",
          title: "Initial Consultation",
          description: "We contact you to meet your dog and understand your needs",
        },
        {
          number: "2",
          title: "Home Visit",
          description: "The caregiver visits your home to familiarize with your dog",
        },
        {
          number: "3",
          title: "Personalized Service",
          description: "Daily care adapted to your dog's routine and preferences",
        },
        {
          number: "4",
          title: "Follow-up",
          description: "Daily reports, photos and constant communication",
        },
      ],
      faq: "Frequently Asked Questions",
      contactCTA: "Request Quote",
      contactSubtitle: "Contact us for more information",
    },
  };

  const t = translations[language as keyof typeof translations] || translations.es;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={language === "en" ? "Indoor Dog Daycare | Heated Indoor Box | Fontfreda" : "Guardería Canina Dentro de Casa | Box Interior Calefactado | Fontfreda"}
        description={language === "en" ? "Indoor dog daycare with interior box and heating. Individual room with heating inside the house. Ideal for older dogs, cold-sensitive dogs or with special needs." : "Guardería canina dentro de casa con box interior y calefacción. Habitación individual con calefacción dentro de casa. Ideal para perros mayores, friolentos o con necesidades especiales."}
        keywords={language === "en" ? "indoor dog daycare, heated indoor box, individual room dogs heating, daycare for senior dogs" : "guardería canina dentro casa, box interior calefactado, habitación individual perros calefacción, guardería perros mayores"}
        canonical={language === "en" ? "https://www.fontfreda.net/en/guarderia-canina-dentro-de-casa" : "https://www.fontfreda.net/guarderia-canina-dentro-de-casa"}
        language={language === "en" ? "en" : "es"}
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="Service" data={serviceSchema} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <img
            src="/images/dentro-de-casa/hotel-canino-fontfreda-4.jpg"
            alt={language === "en" ? "Dogs enjoying indoor care at Fontfreda" : "Perros disfrutando del cuidado dentro de casa en Fontfreda"}
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70" />
          <div className="relative container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {t.title}
              </h1>
              <p className="text-xl text-white/90 mb-6">{t.subtitle}</p>
              <p className="text-lg text-white/80 mb-8">{t.description}</p>
              <Link href={language === "en" ? "/en/contacto" : "/contacto"} className="inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors">
                {t.contactCTA}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === "es" ? "Ventajas del Servicio" : "Service Benefits"}
              </h2>
              <p className="text-lg text-muted-foreground">
                {language === "es"
                  ? "Descubre por qué la guardería en casa es ideal para tu perro"
                  : "Discover why in-home daycare is ideal for your dog"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Galería ───────────────────────────────────────────────────────── */}
        <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <img
              src="/images/dentro-de-casa/hotel-canino-3.jpg"
              alt={language === "en" ? "Dog inside home care at Fontfreda" : "Perro en el servicio de cuidado dentro de casa Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/dentro-de-casa/hotel-canino-7.jpg"
              alt={language === "en" ? "Indoor dog care Fontfreda Barcelona" : "Cuidado canino dentro de casa Fontfreda Barcelona"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/dentro-de-casa/labrador-dentro-de-casa.jpg"
              alt={language === "en" ? "Labrador enjoying indoor care at Fontfreda" : "Labrador disfrutando del cuidado dentro de casa en Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/dentro-de-casa/guarderia-canina-en-casa-2.jpg"
              alt={language === "en" ? "In-home dog daycare Fontfreda" : "Guardería canina en casa Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t.idealFor}
              </h2>
              <ul className="space-y-4">
                {t.idealForList.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.process}
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {t.processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < t.processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-primary/20 transform -translate-x-1/2"></div>
                  )}
                  <div className="relative bg-white dark:bg-slate-900 rounded-lg p-6 border border-border text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full font-bold mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
                {t.faq}
              </h2>

              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-border rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setExpandedFAQ(
                          expandedFAQ === item.id ? null : item.id
                        )
                      }
                      className="w-full px-6 py-4 text-left font-semibold text-foreground hover:bg-primary/5 transition-colors flex items-center justify-between"
                    >
                      <span>
                        {language === "es"
                          ? item.question_es
                          : item.question_en}
                      </span>
                      <span
                        className={`transform transition-transform ${
                          expandedFAQ === item.id ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {expandedFAQ === item.id && (
                      <div className="px-6 py-4 bg-background border-t border-border text-muted-foreground">
                        {language === "es" ? item.answer_es : item.answer_en}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust / Quiénes somos ─────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative">
                <img
                  src="/images/trust/guarderia-canina-5.jpg"
                  alt={language === "en" ? "Luis, Fontfreda owner, with a French Bulldog" : "Luis, propietario de Fontfreda, con un Bulldog Francés"}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-primary shadow-sm">
                  {language === "en" ? "40+ years of experience" : "40+ años de experiencia"}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  {language === "en" ? "Who We Are" : "¿Quiénes Somos?"}
                </h2>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  {language === "en"
                    ? "I'm Luis, owner of Fontfreda. For over 40 years I've cared for dogs at our family home in the Alt Penedès. With our in-home service, we bring that same family care directly to your dog's environment."
                    : "Soy Luis, propietario de Fontfreda. Llevo más de 40 años cuidando perros en nuestra finca familiar del Alt Penedès. Con el servicio dentro de casa, llevamos ese mismo cuidado familiar directamente al entorno de tu perro."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Every dog is different. That's why we start with a home visit to understand their routine, personality, and needs before we begin. Your dog stays calm, in their own space, with someone who truly cares."
                    : "Cada perro es diferente. Por eso empezamos con una visita al hogar para entender su rutina, su carácter y sus necesidades antes de comenzar. Tu perro permanece tranquilo, en su propio espacio, con alguien que de verdad se preocupa por él."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {language === "es"
                  ? "¿Listo para cuidar a tu perro en casa?"
                  : "Ready to care for your dog at home?"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t.contactSubtitle}
              </p>
              <Link href={language === "en" ? "/en/contacto" : "/contacto"} className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  {t.contactCTA}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
