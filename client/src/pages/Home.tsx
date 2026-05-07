import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { Heart, Leaf, Users } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const heroImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663312171860/4pSqWGuzzS8uGmjWwDrdgm/hero-home-fontfreda-MGDNNQMQU7LrDTUhhU9fq9.webp";

  const instalacionesImageUrl =
    "https://d2xsxph8kpxj0f.cloudfront.net/310519663312171860/4pSqWGuzzS8uGmjWwDrdgm/instalaciones-preview-L6fA77DHd35iuLbmqHvLPY.webp";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Alojamiento Familiar para Perros y Gatos en Plena Naturaleza"
          subtitle="En Fontfreda, tu mascota no se queda en una residencia. Se integra en un hogar cálido, rodeado de naturaleza, con atención cercana y espacios adaptados a sus necesidades únicas."
          backgroundImage={heroImageUrl}
          primaryCTA={{
            label: "Solicitar Valoración Personalizada",
          }}
          secondaryCTA={{
            label: "Conocer Nuestros Servicios",
          }}
        />

        {/* Propuesta de Valor */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-primary mb-16">
              ¿Por Qué Fontfreda?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pilar 1: Familiar */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Un Hogar, No una Jaula
                </h3>
                <p className="text-muted-foreground">
                  Nuestro modelo de alojamiento familiar permite que tu mascota
                  disfrute de espacios abiertos, interacción supervisada y la
                  calidez de un entorno doméstico.
                </p>
              </div>

              {/* Pilar 2: Natural */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Leaf className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Rodeados de Naturaleza
                </h3>
                <p className="text-muted-foreground">
                  Ubicados en plena naturaleza del Alt Penedés, nuestras
                  instalaciones ofrecen un entorno seguro y enriquecedor con
                  paseos diarios y aire fresco.
                </p>
              </div>

              {/* Pilar 3: Personalizado */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  Atención Personalizada
                </h3>
                <p className="text-muted-foreground">
                  Realizamos una valoración individual para asegurar que nuestro
                  alojamiento familiar se adapta perfectamente a las
                  necesidades de cada animal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Destacados */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-primary mb-16">Nuestros Servicios</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Residencia Canina"
                description="Alojamiento familiar para perros con atención cercana, paseos supervisados y cuidados completos. Estancias puntuales, estacionales o de larga duración."
                href="/residencia-canina"
                cta="Conocer Residencia Canina"
              />

              <ServiceCard
                title="Residencia Felina"
                description="Espacios seguros y tranquilos diseñados especialmente para gatos. Enriquecimiento ambiental, atención personalizada y cuidados profesionales."
                href="/residencia-felina"
                cta="Conocer Residencia Felina"
              />

              <ServiceCard
                title="Guardería Canina"
                description="Guardería de día para cachorros y perros que necesitan supervisión. Socialización controlada, espacios adaptados y atención especializada."
                href="/guarderia-canina"
                cta="Conocer Guardería"
              />
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-primary mb-16">
              Lo Que Dicen Nuestros Clientes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonio 1 */}
              <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Dejé a Gus con Fontfreda durante mis vacaciones. Cuando lo
                  recogí, no quería irse. El equipo me enviaba fotos diarias y
                  se notaba que lo cuidaban como si fuera suyo."
                </p>
                <p className="font-semibold text-foreground">María</p>
                <p className="text-sm text-muted-foreground">Propietaria de Gus</p>
              </div>

              {/* Testimonio 2 */}
              <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "Buscaba un lugar seguro para Mina mientras viajaba. Fontfreda
                  tiene espacios especiales para gatos, y el trato fue
                  excepcional. Volvería sin dudarlo."
                </p>
                <p className="font-semibold text-foreground">Carlos</p>
                <p className="text-sm text-muted-foreground">
                  Propietario de Mina
                </p>
              </div>

              {/* Testimonio 3 */}
              <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "La guardería de día es perfecta para mi cachorro. Vuelve
                  cansado, feliz y bien socializado. El equipo es atento y
                  profesional."
                </p>
                <p className="font-semibold text-foreground">Laura</p>
                <p className="text-sm text-muted-foreground">Propietaria de Rex</p>
              </div>
            </div>
          </div>
        </section>

        {/* Instalaciones Preview */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-primary mb-6">Nuestras Instalaciones</h2>
                <p className="text-muted-foreground mb-4">
                  Ubicadas en plena naturaleza del Alt Penedés, nuestras
                  instalaciones combinan espacios abiertos seguros con áreas
                  confortables para descanso. Cada rincón está pensado para el
                  bienestar de tu mascota.
                </p>
                <p className="text-muted-foreground mb-8">
                  Paseos diarios en entornos naturales, enriquecimiento
                  ambiental, supervisión constante y cuidados profesionales son
                  parte de nuestro compromiso con cada animal.
                </p>
                <Link href="/instalaciones">
                  <a>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Ver Instalaciones
                    </Button>
                  </a>
                </Link>
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

        {/* CTA Final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-6">
              ¿Listo para Que Tu Mascota Disfrute de Fontfreda?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contacta con nosotros hoy mismo para una valoración personalizada.
              Nos encantaría conocer a tu perro o gato.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+34937790311">
                <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-base">
                  Llamar Ahora
                </Button>
              </a>
              <a href="https://wa.me/34937790311" target="_blank" rel="noopener noreferrer">
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
