import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Check, MapPin, Heart, Utensils, Pill, Users } from "lucide-react";
import { Link } from "wouter";

export default function ResidenciaCanina() {
  const heroImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663312171860/4pSqWGuzzS8uGmjWwDrdgm/hero-residencia-canina-8f7SDTrMfJUCX2BiRpvb8P.webp";

  const features = [
    {
      icon: MapPin,
      title: "Espacios Adaptados",
      description:
        "Habitaciones individuales cubiertas, áreas de juego al aire libre, zonas de descanso tranquilas.",
    },
    {
      icon: Utensils,
      title: "Alimentación Personalizada",
      description:
        "Respetamos la dieta y rutinas alimenticias de cada perro. Si tu mascota tiene necesidades especiales, nos adaptamos.",
    },
    {
      icon: Heart,
      title: "Paseos Diarios Supervisados",
      description:
        "5 paseos diarios en entornos naturales seguros. Tu perro disfruta de ejercicio, enriquecimiento ambiental y socialización.",
    },
    {
      icon: Pill,
      title: "Atención Veterinaria",
      description:
        "Vacunación, desparasitación, administración de medicamentos y visita del veterinario si es necesario.",
    },
    {
      icon: Users,
      title: "Atención de Necesidades Especiales",
      description:
        "Perros con ansiedad, problemas de comportamiento, requerimientos médicos especiales. Valoración previa incluida.",
    },
    {
      icon: Heart,
      title: "Comunicación Constante",
      description:
        "Fotos y actualizaciones diarias. Sabrás cómo está tu perro en todo momento.",
    },
  ];

  const faqItems = [
    {
      question: "¿Cuál es la edad mínima para ingresar?",
      answer:
        "Aceptamos cachorros a partir de 3 meses de edad, siempre que estén correctamente vacunados. Para cachorros muy jóvenes, realizamos una valoración especial.",
    },
    {
      question: "¿Qué pasa si mi perro tiene necesidades especiales de manejo?",
      answer:
        "Antes de confirmar una estancia, valoramos cada caso de forma individual para asegurar que nuestro modelo de alojamiento familiar es adecuado para las necesidades, rutinas y manejo de tu perro. Si detectamos que no es compatible, te lo comunicaremos claramente y te sugeriremos alternativas.",
    },
    {
      question: "¿Cuáles son los requisitos de ingreso?",
      answer:
        "Tu perro debe estar vacunado (tetravalente al día), desparasitado (protección externa), tener microchip y, si es necesario según normativa, contar con el seguro a terceros correspondiente.",
    },
    {
      question: "¿Puedo dejar a mi perro por un fin de semana?",
      answer:
        "Sí, aceptamos estancias puntuales. Mínimo 2 noches. Consulta disponibilidad contactando con nosotros.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Residencia Canina en Plena Naturaleza"
          subtitle="Alojamiento familiar para perros, con atención cercana, espacios adaptados y estancias pensadas según las necesidades de cada animal."
          backgroundImage={heroImageUrl}
          primaryCTA={{
            label: "Solicitar Información",
          }}
        />

        {/* Descripción */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-8">Tu Perro Merece un Hogar</h2>
            <p className="text-lg text-muted-foreground mb-6">
              La Residencia Canina de Fontfreda es un alojamiento familiar para
              perros que necesitan un lugar seguro y cálido mientras sus
              propietarios están fuera. No es una guardería de día, sino un
              hogar temporal donde tu perro vive como parte de la familia, con
              atención personalizada y espacios adaptados a sus necesidades.
            </p>
            <p className="text-lg text-muted-foreground">
              Ofrecemos estancias puntuales (fines de semana, puentes),
              estacionales (vacaciones) o de larga duración, siempre con el
              objetivo de que tu perro se sienta cómodo, seguro y feliz.
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
                    "Llámanos o envía un mensaje por WhatsApp. Te contaremos sobre nuestro modelo de alojamiento y responderemos tus dudas.",
                },
                {
                  step: "2",
                  title: "Valoración Previa",
                  description:
                    "Realizamos una valoración individual para asegurar que la Residencia Canina es adecuada para tu perro. Hablamos sobre sus rutinas, necesidades, manejo y cualquier requerimiento especial.",
                },
                {
                  step: "3",
                  title: "Confirmación de Estancia",
                  description:
                    "Una vez confirmada la compatibilidad, reservamos las fechas y preparamos todo para la llegada de tu perro.",
                },
                {
                  step: "4",
                  title: "Recogida y Entrega",
                  description:
                    "Ofrecemos servicio de recogida y entrega a domicilio. Tu perro llega cómodo y seguro.",
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
              ¿Por Qué Elegir Fontfreda?
            </h2>

            <div className="space-y-6">
              {[
                "Experiencia probada con cientos de perros satisfechos.",
                "Equipo dedicado y capacitado en comportamiento animal y bienestar.",
                "Entorno natural seguro, alejado del estrés urbano.",
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

        {/* FAQ */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-12 text-center">
              Preguntas Frecuentes - Residencia Canina
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

        {/* CTA Final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-6">
              ¿Listo para Que Tu Perro Disfrute de Fontfreda?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contacta con nosotros hoy mismo para una valoración personalizada.
              Nos encantaría conocer a tu perro.
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
