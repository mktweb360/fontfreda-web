import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import NewsletterSubscription from "@/components/NewsletterSubscription";
import { SchemaMarkup, localBusinessSchema, organizationSchema, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { Heart, Leaf, Users, Check } from "lucide-react";
import { Link, useLocation } from "wouter";
import { HrefLang } from "@/components/HrefLang";
import { blogPosts } from "./Blog";
import { getPageTranslation } from "@/lib/pageTranslations";

export default function Home() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/";
  
  // Safely get language from localStorage or URL
  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage() as "es" | "en";
  
  // Helper function to get translations
  const t = (key: string) => getPageTranslation("home", key, language);

  const heroImageUrl = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663312171860/frDiNoHWtmwIGPdl.jpg";
  const instalacionesImageUrl = "/manus-storage/instalaciones-residencia-fontfreda_7a4b62ca.jpg";

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", url: "https://www.fontfreda.net" },
  ]);

  const seoData = {
    es: {
      title: "Residencia Fontfreda | Residencia Canina y Felina en Barcelona",
      description: "Residencia canina y felina en Barcelona con alojamiento familiar en plena naturaleza. 5 paseos diarios, atención personalizada, atención veterinaria y 180m² exclusivos para gatos.",
      keywords: "residencia canina Barcelona, residencia felina, alojamiento perros y gatos, guardería canina, larga estancia perros, residencia Gelida, Alt Penedès",
    },
    en: {
      title: "Fontfreda | Dog and Cat Boarding in Barcelona",
      description: "Dog and cat boarding in Barcelona with family accommodation in nature. 5 daily walks, personalized attention, veterinary care and 180m² exclusively for cats.",
      keywords: "dog boarding Barcelona, cat boarding, pet accommodation Barcelona, dog kennel, long-term pet boarding, Gelida residence",
    },
  };
  const seo = seoData[language as "es" | "en"];
  const canonical = language === "en" ? "https://www.fontfreda.net/en" : "https://www.fontfreda.net/";

  const testimonials = {
    es: [
      {
        text: "Desde cachorro dejamos a Xato con Luis. Las instalaciones son estupendas y el trato excepcional. Xato cuando ve el coche de Luis, salta corriendo dentro.",
        author: "Montse",
        pet: "Xato",
      },
      {
        text: "A pesar de que Kala es miedosa y territorial, Luis la acogió perfectamente. Vino como loca de contenta, feliz y bien cuidada.",
        author: "Montse y Óscar",
        pet: "Kala",
      },
      {
        text: "Es la primera vez que al dejar a Juliette llegó sin perder peso. Llegó súper saludable y más sociable. Recomendamos 100% Fontfreda.",
        author: "Almarisse y Alejandra",
        pet: "Juliette",
      },
    ],
    en: [
      {
        text: "Since puppyhood we left Xato with Luis. The facilities are excellent and the service exceptional. Xato jumps into Luis' car when he sees it.",
        author: "Montse",
        pet: "Xato",
      },
      {
        text: "Although Kala is fearful and territorial, Luis welcomed her perfectly. She came back happy, healthy and well cared for.",
        author: "Montse and Óscar",
        pet: "Kala",
      },
      {
        text: "It's the first time Juliette came back without losing weight. She arrived super healthy and more sociable. We recommend Fontfreda 100%.",
        author: "Almarisse and Alejandra",
        pet: "Juliette",
      },
    ],
  };

  const currentTestimonials = testimonials[language];

  const facilities = {
    es: [
      "5 parques de 400-600 m² vallados",
      "180 m² para gatos con libertad total",
      "Habitaciones individuales cubiertas",
      "Agua de manantiales naturales",
      "Vigilancia 24 horas",
    ],
    en: [
      "5 fenced parks of 400-600 m² each",
      "180 m² for cats with total freedom",
      "Individual covered rooms",
      "Natural spring water",
      "24-hour surveillance",
    ],
  };

  const currentFacilities = facilities[language];

  const longStayFeatures = {
    es: [
      "Abierto todo el año",
      "5 paseos diarios supervisados",
      "Vigilancia 24 horas",
      "Atención veterinaria incluida",
    ],
    en: [
      "Open all year",
      "5 daily supervised walks",
      "24-hour surveillance",
      "Veterinary care included",
    ],
  };

  const currentLongStayFeatures = longStayFeatures[language];

  const pillarTexts = {
    es: {
      pillar1Title: "Un Hogar, No una Jaula",
      pillar1Desc: "Tu perro o gato vive como parte de la familia, dentro de nuestra casa, rodeada de cuidado y cariño.",
      pillar2Title: "Naturaleza Pura",
      pillar2Desc: "5 parques de 400-600 m² cada uno para paseos diarios en espacios naturales seguros y vallados.",
      pillar3Title: "Atención Personalizada",
      pillar3Desc: "Cuidados adaptados a las necesidades, rutinas y manejo específico de cada animal.",
      facilitiesTitle: "Espacios Diseñados para el Bienestar",
      testimonialAuthor: "Propietario/a de",
      seeAllOpinions: "Ver todas las opiniones →",
      facilitiesSubtitle: "Ubicadas en plena naturaleza, nuestras instalaciones ofrecen un ambiente seguro y tranquilo",
      learnMore: "Conocer más sobre nuestras instalaciones →",
      readyQuestion: "¿Listo para que tu perro o gato disfrute?",
      readyDesc: "Contáctanos hoy para solicitar una valoración personalizada o conocer más detalles sobre nuestros servicios.",
      contactNow: "Contactar Ahora",
    },
    en: {
      pillar1Title: "A Home, Not a Cage",
      pillar1Desc: "Your dog or cat lives as part of the family, inside our home, surrounded by care and affection.",
      pillar2Title: "Pure Nature",
      pillar2Desc: "5 parks of 400-600 m² each for daily walks in safe and fenced natural spaces.",
      pillar3Title: "Personalized Attention",
      pillar3Desc: "Care adapted to the needs, routines and specific handling of each animal.",
      facilitiesTitle: "Spaces Designed for Wellbeing",
      testimonialAuthor: "Owner of",
      seeAllOpinions: "See all reviews →",
      facilitiesSubtitle: "Located in the heart of nature, our facilities offer a safe and calm environment",
      learnMore: "Learn more about our facilities →",
      readyQuestion: "Ready for your dog or cat to enjoy?",
      readyDesc: "Contact us today to request a personalized quote or learn more about our services.",
      contactNow: "Contact Now",
    },
  };

  const currentPillarTexts = pillarTexts[language];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={canonical}
        language={language as "es" | "en"}
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />
      <SchemaMarkup type="Organization" data={organizationSchema} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          title={t("heroTitle")}
          subtitle={t("heroSubtitle")}
          backgroundImage={heroImageUrl}
          primaryCTA={{
            label: t("primaryCTA"),
          }}
          secondaryCTA={{
            label: t("secondaryCTA"),
          }}
        />

        {/* Propuesta de Valor */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h1 className="sr-only">{seo.title}</h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              {language === "es" ? "Alojamiento Familiar para Perros y Gatos" : "Family Accommodation for Dogs and Cats"}
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              {language === "es" 
                ? "Ubicada en el Alt Penedès, nuestra residencia canina y felina ofrece alojamiento familiar en naturaleza pura. Cada perro o gato recibe atención personalizada, vigilancia 24h, paseos diarios supervisados y cuidados veterinarios incluidos."
                : "Located in Alt Penedès, our dog and cat boarding residence offers family accommodation in pure nature. Each dog or cat receives personalized attention, 24-hour surveillance, supervised daily walks and included veterinary care."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pilar 1: Familiar */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {currentPillarTexts.pillar1Title}
                </h3>
                <p className="text-muted-foreground">
                  {currentPillarTexts.pillar1Desc}
                </p>
              </div>

              {/* Pilar 2: Natural */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Leaf className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {currentPillarTexts.pillar2Title}
                </h3>
                <p className="text-muted-foreground">
                  {currentPillarTexts.pillar2Desc}
                </p>
              </div>

              {/* Pilar 3: Personalizado */}
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {currentPillarTexts.pillar3Title}
                </h3>
                <p className="text-muted-foreground">
                  {currentPillarTexts.pillar3Desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              {language === "es" ? "Servicios de Alojamiento para Perros y Gatos" : "Dog and Cat Boarding Services"}
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
              {language === "es" 
                ? "Ofrecemos diferentes opciones de alojamiento adaptadas a las necesidades de tu perro o gato"
                : "We offer different accommodation options tailored to your dog or cat's needs"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title={language === "es" ? "Guardería Canina" : "Dog Daycare"}
                description={language === "es" 
                  ? "Servicio especializado para cachorros con atención específica a sus cuidados y necesidades"
                  : "Specialized service for puppies with specific care and attention"}
                href={language === "es" ? "/residencia-canina" : "/en/residencia-canina"}
              />
              <ServiceCard
                title={language === "es" ? "Residencia Canina" : "Dog Boarding"}
                description={language === "es"
                  ? "Alojamiento para estancias largas con paseos diarios, vigilancia 24h y cuidados veterinarios"
                  : "Accommodation for long stays with daily walks, 24-hour surveillance and veterinary care"}
                href={language === "es" ? "/residencia-canina" : "/en/residencia-canina"}
              />
              <ServiceCard
                title={language === "es" ? "Hotel Canino" : "Dog Hotel"}
                description={language === "es"
                  ? "Alojamiento puntual para fin de semana y vacaciones cortas"
                  : "Accommodation for weekends and short vacations"}
                href={language === "es" ? "/residencia-canina" : "/en/residencia-canina"}
              />
              <ServiceCard
                title={language === "es" ? "Residencia Felina" : "Cat Boarding"}
                description={language === "es"
                  ? "Espacio especializado de 180 m² diseñado exclusivamente para gatos"
                  : "Specialized 180 m² space designed exclusively for cats"}
                href={language === "es" ? "/residencia-felina" : "/en/residencia-felina"}
              />
            </div>

            {/* Larga Estancia Destacada */}
            <div className="mt-12 bg-primary/10 rounded-lg p-8 border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {language === "es" ? "Residencia Canina de Larga Estancia" : "Long-Term Dog Boarding"}
              </h3>
              <p className="text-foreground mb-6">
                {language === "es"
                  ? "Nos ocupamos de tu perro o gato durante todo el tiempo que necesites. Precios especiales para estancias de meses o años."
                  : "We take care of your dog or cat for as long as you need. Special prices for stays of months or years."}
              </p>
              <ul className="space-y-2 mb-6">
                {currentLongStayFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-2">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={language === "es" ? "/larga-estancia" : "/en/larga-estancia"} className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                {language === "es" ? "Más Información" : "More Information"}
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-16">
              {language === "es" ? "Testimonios de Clientes Satisfechos" : "Testimonials from Satisfied Customers"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentTestimonials.map((testimonial, index) => (
                <div key={index} className="bg-secondary rounded-lg p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
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
                      {currentPillarTexts.testimonialAuthor} {testimonial.pet}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href={language === "es" ? "/opiniones" : "/en/opiniones"} className="text-primary font-semibold hover:underline">
                {currentPillarTexts.seeAllOpinions}
              </Link>
            </div>
          </div>
        </section>

        {/* Instalaciones */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-center text-primary mb-4">
              {language === "es" ? "Instalaciones Naturales en el Alt Penedès" : "Natural Facilities in Alt Penedès"}
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
              {currentPillarTexts.facilitiesSubtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {currentPillarTexts.facilitiesTitle}
                </h3>
                <ul className="space-y-3">
                  {currentFacilities.map((facility, index) => (
                    <li key={index} className="flex gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{facility}</span>
                    </li>
                  ))}
                </ul>
                <Link href={language === "es" ? "/instalaciones" : "/en/instalaciones"} className="inline-block mt-6 text-primary font-semibold hover:underline">
                  {currentPillarTexts.learnMore}
                </Link>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={instalacionesImageUrl}
                  alt={language === "es" 
                    ? "Instalaciones de Residencia Fontfreda - Espacios para perros y gatos en Barcelona"
                    : "Fontfreda Residence Facilities - Spaces for dogs and cats in Barcelona"}
                  title={language === "es" ? "Instalaciones de Residencia Fontfreda" : "Fontfreda Residence Facilities"}
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="384"
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
              {currentPillarTexts.readyQuestion}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {currentPillarTexts.readyDesc}
            </p>
            <Link href={language === "es" ? "/contacto" : "/en/contacto"} className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {currentPillarTexts.contactNow}
            </Link>
          </div>
        </section>

        {/* Blog */}
        <RecentBlogPosts posts={blogPosts} />

        {/* Newsletter */}
        <NewsletterSubscription />
      </main>

      <Footer />
    </div>
  );
}
