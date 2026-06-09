import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { HrefLang } from "@/components/HrefLang";
import { SEO } from "@/components/SEO";
import { Check, Home, Heart, Users, DollarSign, Shield, Leaf } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

export default function LargaEstancia() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/larga-estancia";

  const heroImageUrl = "/images/canina/residencia-canina-fontfreda-7.jpg";
  const instalacionesImageUrl = "/images/instalaciones/instantanea-residencia-nevada.jpg";

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const t = isEnglish ? {
    heroTitle: "Long-Stay Dog Boarding",
    heroSubtitle: "Your dog as part of the family, for as long as you need. Complete care, nature, safety and special prices.",
    ctaPrimary: "Request Personalized Quote",
    valueTitle: "Why Choose Fontfreda for Long-Stay?",
    valueDesc: "We take care of all the needs your dog requires for as long as you need. Your dog doesn't stay in a kennel. They integrate into a warm home, surrounded by nature, with close attention and spaces adapted to their unique needs.",
    features: [
      { icon: Home, title: "Inside the House", description: "Your dog lives as part of the family, not in cages." },
      { icon: Leaf, title: "Pure Nature", description: "Daily walks in safe natural environments of Alt Penedès." },
      { icon: Heart, title: "Personalized Attention", description: "Care adapted to individual needs." },
      { icon: Users, title: "Socialization", description: "Interaction with other dogs in a controlled and safe environment." },
      { icon: Shield, title: "24h Surveillance", description: "Constant supervision and veterinary care available." },
      { icon: DollarSign, title: "Special Prices", description: "Reduced monthly fees for long stays." },
    ],
    featuresTitle: "Main Features",
    benefits: [
      "Open all year round, no exceptions",
      "Availability for visits during opening hours",
      "Individual covered and comfortable rooms",
      "Natural springs for constant hydration",
      "Beds for greater comfort",
      "Vaccination, deworming and veterinary visit included",
      "Medication administration at no additional cost",
      "24-hour surveillance",
      "Top-brand food",
      "Attention to special needs",
      "5 supervised daily walks",
      "Home pickup and delivery service",
    ],
    installationsTitle: "Our Facilities",
    installationsP1: "Located in the heart of Alt Penedès nature, our facilities are designed with each dog's well-being in mind.",
    installationsP2: "We have safe open spaces, comfortable rest areas, natural springs for constant hydration, and multiple play areas with shade and fresh water.",
    installationsList: [
      "Individual covered rooms",
      "Play areas with toys",
      "Shaded areas and fresh water",
    ],
    testimonialsTitle: "What Our Clients Say",
    testimonials: [
      { text: "Since he was a puppy we have always left Xato with Luis at Fontfreda. The facilities are great and the treatment they give to our beloved friends is exceptional. When Xato sees Luis's car, he jumps inside.", author: "Montse", pet: "Xato" },
      { text: "Despite our dog Kala being fearful and territorial, Luis took her in perfectly. She came back crazy happy, she looked happy and well cared for. We will definitely return.", author: "Montse and Óscar", pet: "Kala" },
      { text: "It's the first time that when leaving our little dog Juliette in a boarding she arrived without losing weight. She arrived super healthy and more sociable. We definitely 100% recommend Fontfreda.", author: "Almarisse and Alejandra", pet: "Juliette" },
    ],
    petOwnerLabel: "Owner of",
    processTitle: "Admission Process",
    processSteps: [
      { title: "Initial Contact", description: "Call us or send a message. We'll explain how our long-stay service works." },
      { title: "Prior Assessment", description: "We carry out an individual assessment to understand your dog's needs, routines and handling." },
      { title: "Personalized Quote", description: "We offer a quote adapted to the duration and specific services you need." },
      { title: "Confirmation and Admission", description: "Once confirmed, we prepare everything for your dog's arrival. We offer pickup service." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      { question: "What is the price of long-stay?", answer: "We offer special monthly fees that are very economical compared to other services. The price depends on the specific characteristics of your dog and additional services. Request a personalized quote without commitment." },
      { question: "Can I visit my dog?", answer: "Yes, you can visit whenever you want during our opening hours. Many clients come to walk with their dogs or simply to see them. It's important to maintain the bond." },
      { question: "Can I take my dog for a weekend?", answer: "Of course. We understand you want to spend time with your dog. You can take them whenever you want, without penalty." },
      { question: "What if my dog has special needs?", answer: "We carry out a prior assessment to understand all their needs: medications, special diet, behavior, etc. We adapt to each individual case." },
      { question: "What is the minimum time I can leave my dog?", answer: "There is no established minimum. Some clients leave their dogs for months, others for years. We adapt our service to your needs." },
      { question: "What documentation do I need?", answer: "Your dog must be vaccinated (tetravalent up to date), dewormed with external protection (anti-parasite pipette or collar), microchipped and, if necessary by regulation, have third-party insurance. We carry out a prior assessment." },
    ],
    ctaFinalTitle: "Ready for Your Dog to Enjoy Fontfreda?",
    ctaFinalDesc: "Request a personalized quote without commitment. We'd love to meet your dog and help you find the best solution.",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
  } : {
    heroTitle: "Residencia Canina de Larga Estancia",
    heroSubtitle: "Tu perro en familia, durante todo el tiempo que lo necesites. Cuidados completos, naturaleza, seguridad y precios especiales.",
    ctaPrimary: "Solicitar Presupuesto Personalizado",
    valueTitle: "¿Por Qué Elegir Fontfreda para Larga Estancia?",
    valueDesc: "Nos ocupamos de todos los cuidados que requiere tu perro durante todo el tiempo que necesites. Tu perro no se queda en una residencia. Se integra en un hogar cálido, rodeado de naturaleza, con atención cercana y espacios adaptados a sus necesidades únicas.",
    features: [
      { icon: Home, title: "Dentro de la Casa", description: "Tu perro vive como parte de la familia, no en jaulas." },
      { icon: Leaf, title: "Naturaleza Pura", description: "Paseos diarios en entornos naturales seguros del Alt Penedès." },
      { icon: Heart, title: "Atención Personalizada", description: "Cuidados adaptados a las necesidades individuales." },
      { icon: Users, title: "Socialización", description: "Interacción con otros perros en un ambiente controlado y seguro." },
      { icon: Shield, title: "Vigilancia 24h", description: "Supervisión constante y atención veterinaria disponible." },
      { icon: DollarSign, title: "Precios Especiales", description: "Cuotas mensuales reducidas para estancias largas." },
    ],
    featuresTitle: "Características Principales",
    benefits: [
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
    ],
    installationsTitle: "Nuestras Instalaciones",
    installationsP1: "Ubicadas en plena naturaleza del Alt Penedès, nuestras instalaciones están diseñadas pensando en el bienestar de cada perro.",
    installationsP2: "Contamos con espacios abiertos seguros, áreas de descanso cómodas, manantiales naturales para hidratación constante, y múltiples zonas de juego con sombra y agua fresca.",
    installationsList: [
      "Habitaciones individuales cubiertas",
      "Áreas de juego con juguetes",
      "Zonas sombreadas y agua fresca",
    ],
    testimonialsTitle: "Lo Que Dicen Nuestros Clientes",
    testimonials: [
      { text: "Desde cachorro siempre dejamos a Xato con Luis en Fontfreda. Las instalaciones son estupendas y el trato que les dan a nuestros queridos amigos excepcional. Xato cuando ve el coche de Luis, salta corriendo dentro.", author: "Montse", pet: "Xato" },
      { text: "A pesar de que nuestra perra Kala es miedosa y territorial, Luis la acogió perfectamente. Vino como loca de contenta, se le veía feliz y bien cuidada. Sin duda volveremos a repetir.", author: "Montse y Óscar", pet: "Kala" },
      { text: "Es la primera vez que al dejar a nuestra perrita Juliette en un cuido ha llegado sin perder peso. Llegó súper saludable y más sociable. Definitivamente recomendamos 100% Fontfreda.", author: "Almarisse y Alejandra", pet: "Juliette" },
    ],
    petOwnerLabel: "Propietario/a de",
    processTitle: "Proceso de Ingreso",
    processSteps: [
      { title: "Contacto Inicial", description: "Llámanos o envía un mensaje. Te explicaremos cómo funciona nuestro servicio de larga estancia." },
      { title: "Valoración Previa", description: "Realizamos una valoración individual para entender las necesidades, rutinas y manejo de tu perro." },
      { title: "Presupuesto Personalizado", description: "Te ofrecemos un presupuesto adaptado a la duración y servicios específicos que necesitas." },
      { title: "Confirmación e Ingreso", description: "Una vez confirmado, preparamos todo para la llegada de tu perro. Ofrecemos servicio de recogida." },
    ],
    faqTitle: "Preguntas Frecuentes",
    faqItems: [
      { question: "¿Cuál es el precio de la larga estancia?", answer: "Ofrecemos cuotas mensuales especiales que resultan muy económicas comparadas con otros servicios. El precio depende de las características específicas de tu perro y los servicios adicionales. Solicita un presupuesto personalizado sin compromiso." },
      { question: "¿Puedo visitar a mi perro?", answer: "Sí, puedes visitarlo cuando quieras dentro de nuestro horario de atención. Muchos clientes vienen a pasear con sus perros o simplemente a verlos. Es importante mantener el vínculo." },
      { question: "¿Puedo llevarme a mi perro un fin de semana?", answer: "Por supuesto. Entendemos que quieras pasar tiempo con tu perro. Puedes llevártelo cuando lo desees, sin penalización." },
      { question: "¿Qué pasa si mi perro tiene necesidades especiales?", answer: "Realizamos una valoración previa para entender todas sus necesidades: medicamentos, dieta especial, comportamiento, etc. Nos adaptamos a cada caso individual." },
      { question: "¿Cuánto tiempo mínimo puedo dejar a mi perro?", answer: "No hay mínimo establecido. Algunos clientes dejan a sus perros por meses, otros por años. Adaptamos nuestro servicio a tus necesidades." },
      { question: "¿Qué documentación necesito?", answer: "Tu perro debe estar vacunado (tetravalente al día), desparasitado con protección externa (pipeta o collar antiparásitos), tener microchip y, si es necesario según normativa, contar con el seguro a terceros. Realizamos una valoración previa." },
    ],
    ctaFinalTitle: "¿Listo para Que Tu Perro Disfrute de Fontfreda?",
    ctaFinalDesc: "Solicita un presupuesto personalizado sin compromiso. Nos encantaría conocer a tu perro y ayudarte a encontrar la mejor solución.",
    callNow: "Llamar Ahora",
    whatsapp: "WhatsApp",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={isEnglish ? "Long-Term Dog Boarding | Monthly Boarding | Fontfreda" : "Larga Estancia para Perros | Estancias Mensuales | Fontfreda"}
        description={isEnglish ? "Long-term dog boarding in Barcelona. Monthly or indefinite stays with special rates. Ideal for business trips, hospitalisations or temporary situations." : "Larga estancia para perros en Barcelona. Estancias de meses o indefinidas con tarifas especiales. Ideal para viajes laborales, hospitalizaciones o situaciones temporales."}
        keywords={isEnglish ? "long-term dog boarding, monthly dog kennel, extended dog accommodation, indefinite dog stay, dog boarding Barcelona" : "larga estancia perros, residencia mensual perros, alojamiento prolongado perros, residencia indefinida perros, larga estancia Barcelona"}
        canonical={isEnglish ? "https://www.fontfreda.net/en/larga-estancia" : "https://www.fontfreda.net/larga-estancia"}
        language={isEnglish ? "en" : "es"}
      />
      <HrefLang currentPath={currentPath} />
      <Header />

      <main className="flex-grow">
        <HeroSection
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          backgroundImage={heroImageUrl}
          primaryCTA={{ label: t.ctaPrimary }}
        />

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-primary mb-6">{t.valueTitle}</h2>
              <p className="text-lg text-muted-foreground">{t.valueDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-primary mb-12 text-center">{t.featuresTitle}</h2>

            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Galería ───────────────────────────────────────────────────────── */}
        <section className="py-0">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <img
              src="/images/canina/hotel-canino-fontfreda-2.jpg"
              alt={isEnglish ? "Dog hotel Fontfreda Barcelona" : "Hotel canino Fontfreda Barcelona"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/canina/residencia-canina-11.jpg"
              alt={isEnglish ? "Long-term dog boarding at Fontfreda" : "Residencia canina larga estancia Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/canina/espacio-de-recreo-para-perros.jpg"
              alt={isEnglish ? "Dog recreation space at Fontfreda" : "Espacio de recreo para perros en Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
            <img
              src="/images/canina/residencia-canina-7.jpg"
              alt={isEnglish ? "Dogs at Fontfreda canine residence" : "Perros en la residencia canina Fontfreda"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-primary mb-6">{t.installationsTitle}</h2>
                <p className="text-muted-foreground mb-4">{t.installationsP1}</p>
                <p className="text-muted-foreground mb-8">{t.installationsP2}</p>
                <ul className="space-y-3">
                  {t.installationsList.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={instalacionesImageUrl}
                  alt="Residencia Fontfreda abierta los 365 días del año - Larga estancia para perros en Barcelona"
                  title="Residencia Fontfreda - Larga estancia"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-primary mb-16 text-center">{t.testimonialsTitle}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white border border-border rounded-lg p-8 shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{t.petOwnerLabel} {testimonial.pet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-primary mb-12 text-center">{t.processTitle}</h2>

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
            <h2 className="text-primary mb-12 text-center">{t.faqTitle}</h2>

            <div className="space-y-4">
              {t.faqItems.map((item, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden bg-white hover:border-primary transition-colors">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left">{item.question}</h3>
                    <span className={`text-primary transition-transform ${expandedFAQ === index ? "rotate-180" : ""}`}>▼</span>
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

        {/* ── Trust / Quiénes somos ─────────────────────────────────────────── */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative">
                <img
                  src="/images/trust/guarderia-canina-5.jpg"
                  alt={isEnglish ? "Luis, Fontfreda owner, with a French Bulldog" : "Luis, propietario de Fontfreda, con un Bulldog Francés"}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-sm font-semibold text-primary shadow-sm">
                  {isEnglish ? "20+ years of experience" : "20+ años de experiencia"}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  {isEnglish ? "Who We Are" : "¿Quiénes Somos?"}
                </h2>
                <p className="text-foreground text-lg leading-relaxed mb-4">
                  {isEnglish
                    ? "I'm Luis, owner of Fontfreda. For over 20 years I've looked after dogs at our family estate in the Alt Penedès for owners who needed someone truly trustworthy — people relocating abroad, on long work assignments, or going through a life change."
                    : "Soy Luis, propietario de Fontfreda. Durante más de 20 años he cuidado perros en nuestra finca familiar del Alt Penedès para dueños que necesitaban a alguien de verdad de confianza: personas que se marchaban al extranjero, en largas misiones de trabajo o atravesando un cambio vital."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isEnglish
                    ? "A long stay isn't just logistics — it's peace of mind. We adapt to each dog's routine, keep you updated with photos, and treat your pet as one of our own for as long as you need."
                    : "Una larga estancia no es solo logística: es tranquilidad. Nos adaptamos a la rutina de cada perro, te mantenemos informado con fotos y tratamos a tu mascota como propia durante el tiempo que necesites."}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-primary-foreground mb-6">{t.ctaFinalTitle}</h2>
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
