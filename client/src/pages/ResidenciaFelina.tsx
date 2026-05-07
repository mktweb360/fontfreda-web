import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Check, Leaf, Lightbulb, Utensils, Pill, Heart } from "lucide-react";

export default function ResidenciaFelina() {
  const heroImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663312171860/4pSqWGuzzS8uGmjWwDrdgm/hero-residencia-felina-RYfEScYLHnRZqhCuzg8pHw.webp";

  const features = [
    {
      icon: Leaf,
      title: "Espacios Seguros y Tranquilos",
      description:
        "Áreas separadas de los perros, con espacios verticales, escondites y zonas de descanso. Tu gato tiene libertad de movimiento en un entorno seguro.",
    },
    {
      icon: Lightbulb,
      title: "Enriquecimiento Ambiental",
      description:
        "Juguetes, rascadores, ventanas con vistas, plantas seguras. Mantenemos a tu gato estimulado y feliz.",
    },
    {
      icon: Utensils,
      title: "Alimentación Personalizada",
      description:
        "Respetamos la dieta y rutinas de cada gato. Si tiene preferencias especiales, nos adaptamos.",
    },
    {
      icon: Pill,
      title: "Atención Veterinaria",
      description:
        "Vacunación, desparasitación, administración de medicamentos. Tu gato recibe cuidados completos.",
    },
    {
      icon: Heart,
      title: "Comunicación Constante",
      description:
        "Fotos y actualizaciones diarias. Sabrás cómo está tu gato en todo momento.",
    },
  ];

  const faqItems = [
    {
      question: "¿Aceptan gatos con comportamiento tímido o miedoso?",
      answer:
        "Sí, tenemos experiencia con gatos de todos los temperamentos. Realizamos una valoración previa para asegurar que nuestro entorno es adecuado para su personalidad.",
    },
    {
      question: "¿Cuáles son los requisitos de ingreso?",
      answer:
        "Tu gato debe estar vacunado (trivalente y leucemia al día) y desparasitado. Microchip recomendado.",
    },
    {
      question: "¿Pueden estar juntos dos gatos?",
      answer:
        "Si viven juntos en casa, pueden estar juntos en la residencia. Si no se conocen, los mantenemos separados por su seguridad.",
    },
    {
      question: "¿Qué pasa si mi gato no come bien?",
      answer:
        "Contamos con experiencia en gatos con apetito selectivo. Realizamos una valoración previa y nos adaptamos a sus preferencias.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Residencia Felina Especializada"
          subtitle="Alojamiento familiar para gatos, con espacios seguros, tranquilos y adaptados a su naturaleza independiente."
          backgroundImage={heroImageUrl}
          primaryCTA={{
            label: "Solicitar Información",
          }}
        />

        {/* Descripción */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-8">
              Los Gatos Merecen Espacios Pensados para Ellos
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              La Residencia Felina de Fontfreda es un alojamiento especializado
              para gatos que necesitan un lugar seguro mientras sus propietarios
              están fuera. A diferencia de las residencias caninas, nuestros
              espacios felinos están diseñados específicamente para respetar la
              naturaleza independiente de los gatos, ofreciendo tranquilidad,
              enriquecimiento y cuidados profesionales.
            </p>
            <p className="text-lg text-muted-foreground">
              Ofrecemos estancias puntuales, estacionales o de larga duración,
              siempre priorizando el bienestar y la comodidad de cada gato.
            </p>
          </div>
        </section>

        {/* Características */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-primary mb-16 text-center">
              Características Principales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proceso de Ingreso */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-12 text-center">Proceso de Ingreso</h2>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Contacto Inicial",
                  description:
                    "Llámanos o envía un mensaje. Te contaremos sobre nuestros espacios felinos.",
                },
                {
                  step: "2",
                  title: "Valoración Previa",
                  description:
                    "Realizamos una valoración para asegurar que la Residencia Felina es adecuada para tu gato. Hablamos sobre sus hábitos, temperamento y necesidades.",
                },
                {
                  step: "3",
                  title: "Confirmación",
                  description:
                    "Una vez confirmada la compatibilidad, reservamos las fechas.",
                },
                {
                  step: "4",
                  title: "Recogida y Entrega",
                  description:
                    "Ofrecemos servicio de recogida y entrega a domicilio en transportín seguro.",
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

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-border rounded-lg p-6"
                >
                  <h3 className="font-semibold text-foreground mb-3">
                    {item.question}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confianza */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-12 text-center">
              ¿Por Qué Elegir Fontfreda para Tu Gato?
            </h2>

            <div className="space-y-6">
              {[
                "Espacios diseñados específicamente para gatos, no una adaptación de residencia canina.",
                "Equipo con experiencia especializada en comportamiento felino.",
                "Ambiente tranquilo y seguro, respetando la naturaleza independiente de los gatos.",
                "Valoración previa individual para garantizar compatibilidad.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-6">
              ¿Listo para Que Tu Gato Disfrute de Fontfreda?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contacta con nosotros hoy mismo para una valoración personalizada.
              Nos encantaría cuidar a tu gato.
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
