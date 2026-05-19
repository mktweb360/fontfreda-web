import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import { SchemaMarkup, localBusinessSchema, organizationSchema, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { Heart, Leaf, Users, Check } from "lucide-react";
import { Link, useLocation } from "wouter";
import { HrefLang } from "@/components/HrefLang";

export default function Home() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/";
  
  // Safely get language from localStorage or URL
  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();

  const heroImageUrl = "/manus-storage/parque-natural-altpenedes_70de3e48.jpg";
  const instalacionesImageUrl = "/manus-storage/instalaciones-residencia-fontfreda_7a4b62ca.jpg";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.fontfreda.net" },
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />
      <SchemaMarkup type="Organization" data={organizationSchema} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title="Residencia Canina y Felina en Barcelona - Alojamiento Familiar en Naturaleza"
          subtitle="Alojamiento para perros y gatos en plena naturaleza. Estancias cortas, largas o indefinidas con atención personalizada y 5 paseos diarios"
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
            <h1 className="sr-only">Residencia Fontfreda - Alojamiento Familiar para Mascotas en Barcelona</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              Alojamiento Familiar para Mascotas
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Ubicada en el Alt Penedès, nuestra residencia canina y felina ofrece alojamiento familiar en naturaleza pura. Cada mascota recibe atención personalizada, vigilancia 24h, paseos diarios supervisados y cuidados veterinarios incluidos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pilar 1: Familiar */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Un Hogar, No una Jaula
                </h3>
                <p className="text-muted-foreground">
                  Tu mascota vive como parte de la familia, dentro de nuestra casa, rodeada de cuidado y cariño.
                </p>
              </div>

              {/* Pilar 2: Natural */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Leaf className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Naturaleza Pura
                </h3>
                <p className="text-muted-foreground">
                  5 parques de 400-600 m² cada uno para paseos diarios en espacios naturales seguros y vallados.
                </p>
              </div>

              {/* Pilar 3: Personalizado */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Atención Personalizada
                </h3>
                <p className="text-muted-foreground">
                  Cuidados adaptados a las necesidades, rutinas y manejo específico de cada animal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              Servicios de Alojamiento para Mascotas
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              Ofrecemos diferentes opciones de alojamiento adaptadas a las necesidades de tu mascota
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Guardería Canina"
              description="Servicio especializado para cachorros con atención específica a sus cuidados y necesidades"
              href="/residencia-canina"
            />
            <ServiceCard
              title="Residencia Canina"
              description="Alojamiento para estancias largas con paseos diarios, vigilancia 24h y cuidados veterinarios"
              href="/residencia-canina"
            />
            <ServiceCard
              title="Hotel Canino"
              description="Alojamiento puntual para fin de semana y vacaciones cortas"
              href="/residencia-canina"
            />
            <ServiceCard
              title="Residencia Felina"
              description="Espacio especializado de 180 m² diseñado exclusivamente para gatos"
              href="/residencia-felina"
            />
            </div>

            {/* Larga Estancia Destacada */}
            <div className="mt-12 bg-primary/10 rounded-lg p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Residencia Canina de Larga Estancia
              </h3>
              <p className="text-foreground mb-6">
                Nos ocupamos de tu mascota durante todo el tiempo que necesites. Precios especiales para estancias de meses o años.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Abierto todo el año</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">5 paseos diarios supervisados</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Vigilancia 24 horas</span>
                </li>
                <li className="flex gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">Atención veterinaria incluida</span>
                </li>
              </ul>
              <Link href="/larga-estancia">
                <a className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Más Información
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
              Testimonios de Clientes Satisfechos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "Desde cachorro dejamos a Xato con Luis. Las instalaciones son estupendas y el trato excepcional. Xato cuando ve el coche de Luis, salta corriendo dentro.",
                  author: "Montse",
                  pet: "Xato",
                  rating: 5,
                },
                {
                  text: "A pesar de que Kala es miedosa y territorial, Luis la acogió perfectamente. Vino como loca de contenta, feliz y bien cuidada.",
                  author: "Montse y Óscar",
                  pet: "Kala",
                  rating: 5,
                },
                {
                  text: "Es la primera vez que al dejar a Juliette llegó sin perder peso. Llegó súper saludable y más sociable. Recomendamos 100% Fontfreda.",
                  author: "Almarisse y Alejandra",
                  pet: "Juliette",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-secondary rounded-lg p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
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

            <div className="text-center mt-12">
              <Link href="/opiniones">
                <a className="text-primary font-semibold hover:underline">
                  Ver todas las opiniones →
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Instalaciones */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              Instalaciones Naturales en el Alt Penedès
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              Ubicadas en plena naturaleza, nuestras instalaciones ofrecen un ambiente seguro y tranquilo
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Espacios Diseñados para el Bienestar
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">5 parques de 400-600 m² vallados</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">180 m² para gatos con libertad total</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Habitaciones individuales cubiertas</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Agua de manantiales naturales</span>
                  </li>
                  <li className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">Vigilancia 24 horas</span>
                  </li>
                </ul>
                <Link href="/instalaciones">
                  <a className="inline-block mt-6 text-primary font-semibold hover:underline">
                    Conocer más sobre nuestras instalaciones →
                  </a>
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={instalacionesImageUrl}
                  alt="Instalaciones de Residencia Fontfreda"
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              ¿Listo para que tu mascota disfrute?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contacta con nosotros hoy mismo. Realizamos una valoración previa individual para asegurar que nuestro modelo de alojamiento familiar es adecuado para tu mascota.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <a className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
                  Solicitar Valoración
                </a>
              </Link>
              <a
                href="https://wa.me/34937790311"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                WhatsApp: +34 93 779 03 11
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
