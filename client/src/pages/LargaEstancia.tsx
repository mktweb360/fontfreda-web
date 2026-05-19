import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import {
  Check,
  Home,
  Heart,
  Users,
  Calendar,
  DollarSign,
  Shield,
  Leaf,
} from "lucide-react";
import { useState } from "react";

export default function LargaEstancia() {
  const heroImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663312171860/4pSqWGuzzS8uGmjWwDrdgm/hero-residencia-canina-8f7SDTrMfJUCX2BiRpvb8P.webp";

  const instalacionesImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663312171860/4pSqWGuzzS8uGmjWwDrdgm/instalaciones-preview-L6fA77DHd35iuLbmqHvLPY.webp";

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const features = [
    {
      icon: Home,
      title: "Dentro de la Casa",
      description: "Tu perro vive como parte de la familia, no en jaulas.",
    },
    {
      icon: Leaf,
      title: "Naturaleza Pura",
      description:
        "Paseos diarios en entornos naturales seguros del Alt Penedés.",
    },
    {
      icon: Heart,
      title: "Atención Personalizada",
      description: "Cuidados adaptados a las necesidades individuales.",
    },
    {
      icon: Users,
      title: "Socialización",
      description:
        "Interacción con otros perros en un ambiente controlado y seguro.",
    },
    {
      icon: Shield,
      title: "Vigilancia 24h",
      description: "Supervisión constante y atención veterinaria disponible.",
    },
    {
      icon: DollarSign,
      title: "Precios Especiales",
      description: "Cuotas mensuales reducidas para estancias largas.",
    },
  ];

  const benefits = [
    "Abierto todo el año, sin excepciones",
    "Disponibilidad para visitas dentro de horario",
    "Habitaciones individuales cubiertas y cómodas",
    "Manantiales naturales para hidratación constante",
    "Camas para mayor confort",
    "Vacunación, desparasitación y visita veterinaria incluidas",
    "Administración de medicamentos sin coste adicional",
    "Vigilancia 24 horas",
    "Pienso de primeras marcas",
    "Atención de necesidades especiales",
    "5 paseos diarios supervisados",
    "Servicio de recogida y entrega a domicilio",
  ];

  const faqItems = [
    {
      question: "¿Cuál es el precio de la larga estancia?",
      answer:
        "Ofrecemos cuotas mensuales especiales que resultan muy económicas comparadas con otros servicios. El precio depende de las características específicas de tu perro y los servicios adicionales. Solicita un presupuesto personalizado sin compromiso.",
    },
    {
      question: "¿Puedo visitar a mi perro?",
      answer:
        "Sí, puedes visitarlo cuando quieras dentro de nuestro horario de atención. Muchos clientes vienen a pasear con sus perros o simplemente a verlos. Es importante mantener el vínculo.",
    },
    {
      question: "¿Puedo llevarme a mi perro un fin de semana?",
      answer:
        "Por supuesto. Entendemos que quieras pasar tiempo con tu mascota. Puedes llevártelo cuando lo desees, sin penalización.",
    },
    {
      question: "¿Qué pasa si mi perro tiene necesidades especiales?",
      answer:
        "Realizamos una valoración previa para entender todas sus necesidades: medicamentos, dieta especial, comportamiento, etc. Nos adaptamos a cada caso individual.",
    },
    {
      question: "¿Cuánto tiempo mínimo puedo dejar a mi perro?",
      answer:
        "No hay mínimo establecido. Algunos clientes dejan a sus perros por meses, otros por años. Adaptamos nuestro servicio a tus necesidades.",
    },
    {
      question: "¿Qué documentación necesito?",
      answer:
        "Tu perro debe estar vacunado (tetravalente al día), desparasitado, tener microchip y, si es necesario según normativa, contar con el seguro a terceros. Realizamos una valoración previa.",
    },
  ];

  const testimonials = [
    {
      text: "Desde cachorro siempre dejamos a Xato con Luis en Fontfreda. Las instalaciones son estupendas y el trato que les dan a nuestros queridos amigos excepcional. Xato cuando ve el coche de Luis, salta corriendo dentro.",
      author: "Montse",
      pet: "Xato",
    },
    {
      text: "A pesar de que nuestra perra Kala es miedosa y territorial, Luis la acogió perfectamente. Vino como loca de contenta, se le veía feliz y bien cuidada. Sin duda volveremos a repetir.",
      author: "Montse y Óscar",
      pet: "Kala",
    },
    {
      text: "Es la primera vez que al dejar a nuestra perrita Juliette en un cuido ha llegado sin perder peso. Llegó súper saludable y más sociable. Definitivamente recomendamos 100% Fontfreda.",
      author: "Almarisse y Alejandra",
      pet: "Juliette",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Residencia Canina de Larga Estancia"
          subtitle="Tu perro en familia, durante todo el tiempo que lo necesites. Cuidados completos, naturaleza, seguridad y precios especiales."
          backgroundImage={heroImageUrl}
          primaryCTA={{
            label: "Solicitar Presupuesto Personalizado",
          }}
        />

        {/* Propuesta de Valor */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-primary mb-6">
                ¿Por Qué Elegir Fontfreda para Larga Estancia?
              </h2>
              <p className="text-lg text-muted-foreground">
                Nos ocupamos de todos los cuidados que requiere tu mascota
                durante todo el tiempo que necesites. Tu perro no se queda en
                una residencia. Se integra en un hogar cálido, rodeado de
                naturaleza, con atención cercana y espacios adaptados a sus
                necesidades únicas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Características Principales */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-primary mb-12 text-center">
              Características Principales
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Instalaciones */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-primary mb-6">Nuestras Instalaciones</h2>
                <p className="text-muted-foreground mb-4">
                  Ubicadas en plena naturaleza del Alt Penedés, nuestras
                  instalaciones están diseñadas pensando en el bienestar de
                  cada perro.
                </p>
                <p className="text-muted-foreground mb-8">
                  Contamos con espacios abiertos seguros, áreas de descanso
                  cómodas, manantiales naturales para hidratación constante, y
                  múltiples zonas de juego con sombra y agua fresca.
                </p>
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Habitaciones individuales cubiertas
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Áreas de juego con juguetes
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">
                      Zonas sombreadas y agua fresca
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={instalacionesImageUrl}
                  alt="Instalaciones Fontfreda"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-primary mb-16 text-center">
              Lo Que Dicen Nuestros Clientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-lg p-8 shadow-sm"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Propietario/a de {testimonial.pet}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Proceso */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-12 text-center">
              Proceso de Ingreso
            </h2>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Contacto Inicial",
                  description:
                    "Llámanos o envía un mensaje. Te explicaremos cómo funciona nuestro servicio de larga estancia.",
                },
                {
                  step: "2",
                  title: "Valoración Previa",
                  description:
                    "Realizamos una valoración individual para entender las necesidades, rutinas y manejo de tu perro.",
                },
                {
                  step: "3",
                  title: "Presupuesto Personalizado",
                  description:
                    "Te ofrecemos un presupuesto adaptado a la duración y servicios específicos que necesitas.",
                },
                {
                  step: "4",
                  title: "Confirmación e Ingreso",
                  description:
                    "Una vez confirmado, preparamos todo para la llegada de tu perro. Ofrecemos servicio de recogida.",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-12 text-center">
              Preguntas Frecuentes
            </h2>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden bg-white hover:border-primary transition-colors"
                >
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left">
                      {item.question}
                    </h3>
                    <span
                      className={`text-primary transition-transform ${
                        expandedFAQ === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-secondary border-t border-border">
                      <p className="text-muted-foreground">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-6">
              ¿Listo para Que Tu Perro Disfrute de Fontfreda?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Solicita un presupuesto personalizado sin compromiso. Nos encantaría
              conocer a tu perro y ayudarte a encontrar la mejor solución.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+34937790311">
                <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-base">
                  Llamar Ahora
                </Button>
              </a>
              <a
                href="https://wa.me/34937790311"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
                >
                  WhatsApp
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
