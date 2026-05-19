import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SchemaMarkup, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { HrefLang } from "@/components/HrefLang";
import { Clock, Users, Heart, Shield, Zap, CheckCircle } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

interface FAQItem {
  id: string;
  question_es: string;
  question_en: string;
  answer_es: string;
  answer_en: string;
}

export default function Guarderia() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/guarderia";

  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();

  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: language === "es" ? "Inicio" : "Home", url: "https://www.fontfreda.net" },
    { name: language === "es" ? "Guardería Canina" : "Dog Daycare", url: "https://www.fontfreda.net/guarderia" },
  ]);

  const faqItems: FAQItem[] = [
    {
      id: "guarderia-1",
      question_es: "¿Cuál es el horario de la guardería canina?",
      question_en: "What are the daycare hours?",
      answer_es: "Abrimos de lunes a viernes de 8:00 a 18:00 horas. Ofrecemos opción de media jornada (mañana o tarde) y jornada completa. Consulta disponibilidad de fines de semana.",
      answer_en: "We are open Monday to Friday from 8:00 AM to 6:00 PM. We offer half-day (morning or afternoon) and full-day options. Check weekend availability.",
    },
    {
      id: "guarderia-2",
      question_es: "¿Qué actividades realizan los perros en la guardería?",
      question_en: "What activities do dogs do at daycare?",
      answer_es: "Combinamos paseos supervisados, juego socializado en grupos, estimulación mental, descanso y snacks saludables. Adaptamos actividades según edad y energía del perro.",
      answer_en: "We combine supervised walks, socialized group play, mental stimulation, rest and healthy snacks. We adapt activities according to the dog's age and energy level.",
    },
    {
      id: "guarderia-3",
      question_es: "¿Cómo se agrupan los perros en la guardería?",
      question_en: "How are dogs grouped at daycare?",
      answer_es: "Realizamos evaluación comportamental previa para crear grupos compatibles. Separamos por tamaño, temperamento y nivel de energía. Supervisión profesional constante.",
      answer_en: "We conduct behavioral assessment beforehand to create compatible groups. We separate by size, temperament and energy level. Constant professional supervision.",
    },
    {
      id: "guarderia-4",
      question_es: "¿Qué incluye el precio de la guardería?",
      question_en: "What is included in the daycare price?",
      answer_es: "Incluye paseos, juego supervisado, snacks, agua fresca, y supervisión profesional. Servicios adicionales como baño o medicamentos tienen coste extra.",
      answer_en: "Includes walks, supervised play, snacks, fresh water, and professional supervision. Additional services like bathing or medications have extra cost.",
    },
    {
      id: "guarderia-5",
      question_es: "¿Puedo traer comida especial para mi perro?",
      question_en: "Can I bring special food for my dog?",
      answer_es: "Sí, aceptamos comida especial. Debes proporcionar porciones etiquetadas y instrucciones claras. También administramos medicamentos si es necesario.",
      answer_en: "Yes, we accept special food. You must provide labeled portions and clear instructions. We also administer medications if needed.",
    },
    {
      id: "guarderia-6",
      question_es: "¿Qué requisitos debe cumplir mi perro para asistir?",
      question_en: "What requirements must my dog meet to attend?",
      answer_es: "Debe tener vacunación al día (mínimo pentavalente), estar desparasitado, y pasar evaluación comportamental. Perros agresivos no pueden asistir.",
      answer_en: "Must have current vaccinations (minimum pentavalent), be dewormed, and pass behavioral assessment. Aggressive dogs cannot attend.",
    },
  ];

  const content = {
    es: {
      title: "Guardería Canina - Fontfreda",
      heading: "Guardería Canina",
      subtitle: "Cuidado profesional para tu perro durante el día",
      description: "Nuestro servicio de guardería canina ofrece un espacio seguro, divertido y estimulante donde tu perro puede pasar el día mientras trabajas. Combinamos ejercicio físico, socialización y estimulación mental en un ambiente profesional.",
      features: [
        {
          icon: "Clock",
          title: "Horario Flexible",
          description: "Abierto de lunes a viernes, con opciones de media jornada o jornada completa",
        },
        {
          icon: "Users",
          title: "Socialización",
          description: "Grupos pequeños y compatibles para que tu perro socialice de forma segura",
        },
        {
          icon: "Heart",
          title: "Cuidado Personalizado",
          description: "Atención individual según las necesidades y personalidad de cada perro",
        },
        {
          icon: "Shield",
          title: "Seguridad Garantizada",
          description: "Supervisión profesional constante en espacios seguros y vallados",
        },
        {
          icon: "Zap",
          title: "Estimulación Mental",
          description: "Juegos, ejercicio y actividades que mantienen a tu perro feliz y cansado",
        },
        {
          icon: "CheckCircle",
          title: "Requisitos Simples",
          description: "Solo necesita vacunación al día y pasar evaluación comportamental",
        },
      ],
      process: [
        {
          step: "1",
          title: "Evaluación Inicial",
          description: "Conocemos a tu perro y evaluamos su comportamiento en grupo",
        },
        {
          step: "2",
          title: "Adaptación Gradual",
          description: "Comenzamos con sesiones cortas para que tu perro se acostumbre",
        },
        {
          step: "3",
          title: "Rutina Diaria",
          description: "Tu perro disfruta de paseos, juego y descanso en un horario estructurado",
        },
        {
          step: "4",
          title: "Seguimiento Continuo",
          description: "Compartimos fotos y actualizaciones sobre el día de tu perro",
        },
      ],
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Resolvemos tus dudas sobre nuestro servicio de guardería",
      },
      cta: {
        primary: "Solicitar Evaluación",
        secondary: "Ver Tarifas",
      },
    },
    en: {
      title: "Dog Daycare - Fontfreda",
      heading: "Dog Daycare",
      subtitle: "Professional care for your dog during the day",
      description: "Our dog daycare service offers a safe, fun and stimulating space where your dog can spend the day while you work. We combine physical exercise, socialization and mental stimulation in a professional environment.",
      features: [
        {
          icon: "Clock",
          title: "Flexible Hours",
          description: "Open Monday to Friday, with half-day or full-day options",
        },
        {
          icon: "Users",
          title: "Socialization",
          description: "Small compatible groups so your dog socializes safely",
        },
        {
          icon: "Heart",
          title: "Personalized Care",
          description: "Individual attention according to each dog's needs and personality",
        },
        {
          icon: "Shield",
          title: "Guaranteed Safety",
          description: "Constant professional supervision in safe and fenced spaces",
        },
        {
          icon: "Zap",
          title: "Mental Stimulation",
          description: "Games, exercise and activities that keep your dog happy and tired",
        },
        {
          icon: "CheckCircle",
          title: "Simple Requirements",
          description: "Just needs current vaccination and behavioral assessment",
        },
      ],
      process: [
        {
          step: "1",
          title: "Initial Assessment",
          description: "We meet your dog and evaluate their behavior in a group",
        },
        {
          step: "2",
          title: "Gradual Adaptation",
          description: "We start with short sessions so your dog gets used to it",
        },
        {
          step: "3",
          title: "Daily Routine",
          description: "Your dog enjoys walks, play and rest on a structured schedule",
        },
        {
          step: "4",
          title: "Continuous Follow-up",
          description: "We share photos and updates about your dog's day",
        },
      ],
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "We answer your questions about our daycare service",
      },
      cta: {
        primary: "Request Assessment",
        secondary: "View Rates",
      },
    },
  };

  const lang = language === "en" ? content.en : content.es;

  const getFeatureIcon = (iconName: string) => {
    const iconProps = "w-6 h-6 text-primary";
    switch (iconName) {
      case "Clock":
        return <Clock className={iconProps} />;
      case "Users":
        return <Users className={iconProps} />;
      case "Heart":
        return <Heart className={iconProps} />;
      case "Shield":
        return <Shield className={iconProps} />;
      case "Zap":
        return <Zap className={iconProps} />;
      case "CheckCircle":
        return <CheckCircle className={iconProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {lang.heading}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              {lang.subtitle}
            </p>
            <p className="text-base text-foreground max-w-3xl">
              {lang.description}
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {lang.features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-border rounded-lg bg-secondary hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="mb-4">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              {language === "es" ? "Cómo Funciona" : "How It Works"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lang.process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">
              {lang.faq.title}
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              {lang.faq.subtitle}
            </p>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg bg-secondary overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground text-left">
                      {language === "en" ? item.question_en : item.question_es}
                    </h3>
                    <span className={`text-primary transition-transform duration-300 ${expandedFAQ === item.id ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>

                  {expandedFAQ === item.id && (
                    <div className="px-6 py-4 bg-background border-t border-border">
                      <p className="text-muted-foreground">
                        {language === "en" ? item.answer_en : item.answer_es}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {language === "es" ? "¿Listo para que tu perro disfrute?" : "Ready for your dog to enjoy?"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === "es"
                ? "Contacta con nosotros para conocer más sobre nuestro servicio de guardería y solicitar una evaluación personalizada."
                : "Contact us to learn more about our daycare service and request a personalized assessment."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={language === "en" ? "/en/contacto" : "/contacto"}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                {lang.cta.primary}
              </a>
              <a
                href={language === "en" ? "/en/tarifas" : "/tarifas"}
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
              >
                {lang.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
