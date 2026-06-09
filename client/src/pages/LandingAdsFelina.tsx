import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { SchemaMarkup, createBreadcrumbSchema, createServiceSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, MapPin, Zap, Heart, Shield } from "lucide-react";
import {
  trackContactFormSubmission,
  trackPhoneClick,
} from "@/lib/conversionTracking";

const HERO_IMAGE = "/images/felina/hero.jpg";

// ── Tipos ──────────────────────────────────────────────────────────────────────

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fechaEntrada: string;
  fechaSalida: string;
  nombreMascota: string;
  tipoMascota: string;
  raza: string;
  edad: string;
  mensaje: string;
}

const INITIAL_FORM: FormState = {
  nombre: "",
  email: "",
  telefono: "",
  servicio: "residencia-felina",
  fechaEntrada: "",
  fechaSalida: "",
  nombreMascota: "",
  tipoMascota: "gato",
  raza: "",
  edad: "",
  mensaje: "",
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function getTodayDate() {
  return new Date().toISOString().split("T")[0];
}

function scrollToForm() {
  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
}

function handlePhoneClick(origen: string) {
  trackPhoneClick(origen);
}

// ── Componente ─────────────────────────────────────────────────────────────────

export default function LandingAdsFelina() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/residencia-felina-barcelona";

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // ── Schema ─────────────────────────────────────────────────────────────────

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isEnglish ? "Home" : "Inicio", url: "https://www.fontfreda.net" },
    {
      name: isEnglish ? "Cat Boarding Barcelona" : "Residencia Felina Barcelona",
      url: isEnglish
        ? "https://www.fontfreda.net/en/cat-boarding-barcelona"
        : "https://www.fontfreda.net/residencia-felina-barcelona",
    },
  ]);

  const serviceSchema = createServiceSchema(
    isEnglish ? "Cat Boarding Barcelona" : "Residencia Felina Barcelona",
    isEnglish
      ? "Premium cat boarding in Barcelona. Specialized 180m² feline space, calm environment, and personalized care."
      : "Residencia felina premium en Barcelona. Espacio especializado de 180m² exclusivo para gatos, ambiente tranquilo y cuidado personalizado.",
    "https://www.fontfreda.net/images/felina/hero.jpg",
    {
      priceMin: "18",
      serviceType: "Cat Boarding",
      url: isEnglish
        ? "https://www.fontfreda.net/en/cat-boarding-barcelona"
        : "https://www.fontfreda.net/residencia-felina-barcelona",
    },
  );

  // ── Contenido bilingüe ─────────────────────────────────────────────────────

  const t = isEnglish
    ? {
        seoTitle: "Cat Boarding Barcelona | Specialized Feline Accommodation | Fontfreda",
        seoDescription:
          "Premium cat boarding in Barcelona. Specialized 180m² feline space, calm environment, and personalized care. Book your cat's stay now.",
        seoKeywords:
          "cat boarding Barcelona, cat hotel Barcelona, feline care Barcelona, cat sitting Barcelona",
        heading: "Cat Boarding in Barcelona",
        subheading: "Specialized 180m² Space Designed Exclusively for Cats",
        benefits: [
          "180m² dedicated feline space — not a kennel",
          "Calm, quiet and stress-free environment",
          "Specialized feline behavior expertise",
          "Individual pre-assessment before arrival",
          "Safe outdoor access",
          "Daily updates and photos",
        ],
        features: [
          { icon: Heart, title: "Feline Specialist", desc: "Team with deep feline behavior knowledge" },
          { icon: Zap, title: "Enrichment", desc: "Climbing structures, scratchers, and play areas" },
          { icon: MapPin, title: "Safe Spaces", desc: "180m² designed for cat wellbeing" },
          { icon: Shield, title: "Security", desc: "Secure environment with escape prevention" },
        ],
        ctaPrimary: "Book Your Cat's Stay",
        ctaSecondary: "Free Assessment",
        ctaCall: "Call Now",
        price: "From €18/day",
        testimonialText: '"My cat was so relaxed. She came back purring! Totally worth it."',
        testimonialAuthor: "Elena M.",
        testimonialRole: "Verified customer · Barcelona",
        whyTitle: "Why Choose Fontfreda?",
        whyItems: [
          "Family environment — not a kennel",
          "Specialists in feline behaviour",
          "24/7 monitoring and care",
          "Personalized feeding and medication",
          "Flexible check-in and check-out",
          "Pickup service available in Barcelona",
        ],
        formTitle: "Request a Quote",
        formSubtitle: "We'll reply within 24 hours",
        fields: {
          nombre: "Full name *",
          email: "Email *",
          telefono: "Phone *",
          fechaEntrada: "Check-in date *",
          fechaSalida: "Check-out date *",
          nombreMascota: "Cat's name *",
          raza: "Breed",
          edad: "Age",
          mensaje: "Tell us about your cat",
        },
        placeholders: {
          nombre: "Your name",
          email: "your@email.com",
          telefono: "+34 600 000 000",
          nombreMascota: "Misu",
          raza: "Mixed, Persian, Siamese...",
          edad: "e.g. 4 years",
          mensaje: "Special needs, diet, medication...",
        },
        submitBtn: "Send Request",
        submittingBtn: "Sending...",
        successMsg: "Request sent! We will contact you within 24 hours.",
        errorMsg: "Error sending the form. Please call us directly.",
        formNote: "We reply within 24 hours · No commitment",
        finalCta: "Ready to Book?",
        finalCtaSub: "Contact us today. We're available every day of the week.",
        validation: {
          nombreRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Email is not valid",
          telefonoRequired: "Phone is required",
          fechaEntradaRequired: "Check-in date is required",
          fechaSalidaRequired: "Check-out date is required",
          fechaInvalida: "Check-out must be after check-in",
          nombreMascotaRequired: "Cat's name is required",
        },
      }
    : {
        seoTitle: "Residencia Felina Barcelona | Alojamiento Especializado para Gatos | Fontfreda",
        seoDescription:
          "Residencia felina premium en Barcelona. Espacio felino especializado de 180m², ambiente tranquilo y cuidados personalizados. Reserva la estancia de tu gato ahora.",
        seoKeywords:
          "residencia felina Barcelona, hotel para gatos Barcelona, cuidado gatos Barcelona, guardería gatos Barcelona",
        heading: "Residencia Felina en Barcelona",
        subheading: "Espacio Especializado de 180m² Diseñado Exclusivamente para Gatos",
        benefits: [
          "Espacio felino dedicado de 180m² — no una jaula",
          "Ambiente tranquilo y libre de estrés",
          "Equipo especializado en comportamiento felino",
          "Valoración previa individual antes del ingreso",
          "Acceso seguro al exterior",
          "Fotos y actualizaciones diarias",
        ],
        features: [
          { icon: Heart, title: "Especialista Felino", desc: "Equipo con experiencia en comportamiento felino" },
          { icon: Zap, title: "Enriquecimiento", desc: "Estructuras para trepar, rascadores y juegos" },
          { icon: MapPin, title: "Espacios Seguros", desc: "180m² diseñados para el bienestar del gato" },
          { icon: Shield, title: "Seguridad", desc: "Ambiente seguro y prevención de escapes" },
        ],
        ctaPrimary: "Reservar Estancia",
        ctaSecondary: "Valoración Gratuita",
        ctaCall: "Llamar Ahora",
        price: "Desde 18€/día",
        testimonialText: '"Mi gata estaba tan relajada. ¡Volvió ronroneando! Totalmente recomendable."',
        testimonialAuthor: "Elena M.",
        testimonialRole: "Cliente verificada · Barcelona",
        whyTitle: "¿Por Qué Elegir Fontfreda?",
        whyItems: [
          "Entorno familiar — no una jaula o perrera",
          "Especialistas en comportamiento felino",
          "Vigilancia 24 horas",
          "Alimentación y medicación personalizada",
          "Horarios flexibles de entrada y salida",
          "Servicio de recogida disponible en Barcelona",
        ],
        formTitle: "Solicita Presupuesto",
        formSubtitle: "Te respondemos en menos de 24 horas",
        fields: {
          nombre: "Nombre completo *",
          email: "Email *",
          telefono: "Teléfono *",
          fechaEntrada: "Fecha de entrada *",
          fechaSalida: "Fecha de salida *",
          nombreMascota: "Nombre del gato *",
          raza: "Raza",
          edad: "Edad",
          mensaje: "Cuéntanos sobre tu gato",
        },
        placeholders: {
          nombre: "Tu nombre",
          email: "tu@email.com",
          telefono: "+34 600 000 000",
          nombreMascota: "Misu",
          raza: "Mestizo, Persa, Siamés...",
          edad: "Ej: 4 años",
          mensaje: "Necesidades especiales, dieta, medicación...",
        },
        submitBtn: "Enviar Solicitud",
        submittingBtn: "Enviando...",
        successMsg: "¡Solicitud enviada! Nos pondremos en contacto en menos de 24 horas.",
        errorMsg: "Error al enviar. Por favor, llámanos directamente.",
        formNote: "Respondemos en 24 h · Sin compromiso",
        finalCta: "¿Listo para Reservar?",
        finalCtaSub: "Contáctanos hoy. Estamos disponibles todos los días.",
        validation: {
          nombreRequired: "El nombre es requerido",
          emailRequired: "El email es requerido",
          emailInvalid: "El email no es válido",
          telefonoRequired: "El teléfono es requerido",
          fechaEntradaRequired: "La fecha de entrada es requerida",
          fechaSalidaRequired: "La fecha de salida es requerida",
          fechaInvalida: "La fecha de salida debe ser posterior a la de entrada",
          nombreMascotaRequired: "El nombre del gato es requerido",
        },
      };

  // ── Validación ─────────────────────────────────────────────────────────────

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.nombre.trim()) newErrors.nombre = t.validation.nombreRequired;
    if (!form.email.trim()) {
      newErrors.email = t.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t.validation.emailInvalid;
    }
    if (!form.telefono.trim()) newErrors.telefono = t.validation.telefonoRequired;
    if (!form.fechaEntrada) newErrors.fechaEntrada = t.validation.fechaEntradaRequired;
    if (!form.fechaSalida) newErrors.fechaSalida = t.validation.fechaSalidaRequired;
    if (form.fechaEntrada && form.fechaSalida) {
      if (new Date(form.fechaSalida) <= new Date(form.fechaEntrada)) {
        newErrors.fechaSalida = t.validation.fechaInvalida;
      }
    }
    if (!form.nombreMascota.trim()) newErrors.nombreMascota = t.validation.nombreMascotaRequired;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus("loading");

    try {
      const res = await fetch("/api/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("server_error");

      setSubmitStatus("success");
      toast.success(t.successMsg);

      trackContactFormSubmission({
        servicio: "residencia-felina",
        origen: "landing_felina_barcelona",
      });

      setTimeout(() => {
        setForm(INITIAL_FORM);
        setSubmitStatus("idle");
      }, 3000);
    } catch {
      setSubmitStatus("error");
      toast.error(t.errorMsg);
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  }

  // ── Input helper ───────────────────────────────────────────────────────────

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-2.5 rounded-lg border ${
      errors[field] ? "border-destructive bg-destructive/5" : "border-border"
    } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`;

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={t.seoTitle}
        description={t.seoDescription}
        keywords={t.seoKeywords}
        canonical={
          isEnglish
            ? "https://www.fontfreda.net/en/cat-boarding-barcelona"
            : "https://www.fontfreda.net/residencia-felina-barcelona"
        }
        language={isEnglish ? "en" : "es"}
        ogImage={HERO_IMAGE}
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />
      <SchemaMarkup type="Service" data={serviceSchema} />

      <Header />

      <main className="flex-grow">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden">
          {/* Background image */}
          <img
            src={HERO_IMAGE}
            alt={
              isEnglish
                ? "Cat relaxing in Fontfreda feline boarding space"
                : "Gato descansando en el espacio felino de Fontfreda"
            }
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70" />

          <div className="relative container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {t.heading}
              </h1>
              <p className="text-xl text-white/90 mb-8">{t.subheading}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold"
                  onClick={scrollToForm}
                >
                  {t.ctaPrimary}
                </Button>
                <a
                  href="tel:+34937790311"
                  onClick={() => handlePhoneClick("landing_felina_hero")}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    {t.ctaCall}
                  </Button>
                </a>
              </div>

              <p className="text-sm text-white/70">{t.price}</p>
            </div>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">
              {isEnglish ? "Why Choose Us?" : "¿Por Qué Elegirnos?"}
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {t.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Instalaciones ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">
              {isEnglish ? "Our Facilities" : "Nuestras Instalaciones"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img
                src="/images/felina/instalaciones-1.jpg"
                alt={isEnglish ? "Resting area of Fontfreda feline residence" : "Zona de descanso de la residencia felina Fontfreda"}
                loading="lazy"
                className="w-full h-64 object-cover rounded-xl"
              />
              <img
                src="/images/felina/instalaciones-2.jpg"
                alt={isEnglish ? "Play area at Fontfreda feline residence" : "Área de juego en la residencia felina Fontfreda"}
                loading="lazy"
                className="w-full h-64 object-cover rounded-xl"
              />
              <img
                src="/images/felina/instalaciones-3.jpg"
                alt={isEnglish ? "Interior space of Fontfreda feline residence" : "Espacio interior de la residencia felina Fontfreda"}
                loading="lazy"
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {t.features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Vistas ────────────────────────────────────────────────────────── */}
        <section>
          <img
            src="/images/felina/vistas-1.jpg"
            alt={isEnglish ? "Outdoor views of Fontfreda feline residence in Barcelona" : "Vistas exteriores de la residencia felina Fontfreda en Barcelona"}
            loading="lazy"
            className="w-full h-72 md:h-96 object-cover"
          />
        </section>

        {/* ── Why ───────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">
              {t.whyTitle}
            </h2>
            <ul className="space-y-3">
              {t.whyItems.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Testimonial ───────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-lg italic text-foreground mb-4">{t.testimonialText}</p>
              <p className="font-semibold text-primary">{t.testimonialAuthor}</p>
              <p className="text-sm text-muted-foreground">{t.testimonialRole}</p>
            </div>
          </div>
        </section>

        {/* ── Galería gatos ─────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              <img
                src="/images/felina/gato-1.jpg"
                alt={isEnglish ? "Cat resting in Fontfreda feline residence" : "Gato descansando en la residencia felina Fontfreda"}
                loading="lazy"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img
                src="/images/felina/gato-5.jpg"
                alt={isEnglish ? "Cat exploring Fontfreda's feline space" : "Gato explorando el espacio felino de Fontfreda"}
                loading="lazy"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img
                src="/images/felina/gato-7.jpg"
                alt={isEnglish ? "Cat enjoying Fontfreda feline residence" : "Gato disfrutando de la residencia felina Fontfreda"}
                loading="lazy"
                className="w-full h-48 object-cover rounded-xl"
              />
              <img
                src="/images/felina/gato-8.jpg"
                alt={isEnglish ? "Calm cat at Fontfreda Barcelona" : "Gato tranquilo en Fontfreda Barcelona"}
                loading="lazy"
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
          </div>
        </section>

        {/* ── Formulario ────────────────────────────────────────────────────── */}
        <section id="formulario" className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-secondary rounded-2xl border border-border p-8">
              <h2 className="text-3xl font-bold text-primary mb-1">{t.formTitle}</h2>
              <p className="text-muted-foreground mb-8">{t.formSubtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Nombre */}
                <div>
                  <label className="block text-sm font-medium mb-1">{t.fields.nombre}</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder={t.placeholders.nombre}
                    className={inputClass("nombre")}
                  />
                  {errors.nombre && (
                    <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.nombre}
                    </div>
                  )}
                </div>

                {/* Email + Teléfono */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">{t.fields.email}</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={t.placeholders.email}
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{t.fields.telefono}</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder={t.placeholders.telefono}
                      className={inputClass("telefono")}
                    />
                    {errors.telefono && (
                      <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.telefono}
                      </div>
                    )}
                  </div>
                </div>

                {/* Fechas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">{t.fields.fechaEntrada}</label>
                    <input
                      type="date"
                      name="fechaEntrada"
                      value={form.fechaEntrada}
                      onChange={handleChange}
                      min={getTodayDate()}
                      className={inputClass("fechaEntrada")}
                    />
                    {errors.fechaEntrada && (
                      <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.fechaEntrada}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{t.fields.fechaSalida}</label>
                    <input
                      type="date"
                      name="fechaSalida"
                      value={form.fechaSalida}
                      onChange={handleChange}
                      min={form.fechaEntrada || getTodayDate()}
                      className={inputClass("fechaSalida")}
                    />
                    {errors.fechaSalida && (
                      <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.fechaSalida}
                      </div>
                    )}
                  </div>
                </div>

                {/* Mascota */}
                <div>
                  <label className="block text-sm font-medium mb-1">{t.fields.nombreMascota}</label>
                  <input
                    type="text"
                    name="nombreMascota"
                    value={form.nombreMascota}
                    onChange={handleChange}
                    placeholder={t.placeholders.nombreMascota}
                    className={inputClass("nombreMascota")}
                  />
                  {errors.nombreMascota && (
                    <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.nombreMascota}
                    </div>
                  )}
                </div>

                {/* Raza + Edad */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">{t.fields.raza}</label>
                    <input
                      type="text"
                      name="raza"
                      value={form.raza}
                      onChange={handleChange}
                      placeholder={t.placeholders.raza}
                      className={inputClass("raza")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">{t.fields.edad}</label>
                    <input
                      type="text"
                      name="edad"
                      value={form.edad}
                      onChange={handleChange}
                      placeholder={t.placeholders.edad}
                      className={inputClass("edad")}
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium mb-1">{t.fields.mensaje}</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder={t.placeholders.mensaje}
                    rows={3}
                    className={`${inputClass("mensaje")} resize-none`}
                  />
                </div>

                {/* Campos ocultos fijos */}
                <input type="hidden" name="servicio" value="residencia-felina" />
                <input type="hidden" name="tipoMascota" value="gato" />

                <Button
                  type="submit"
                  disabled={submitStatus === "loading" || submitStatus === "success"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold"
                >
                  {submitStatus === "loading"
                    ? t.submittingBtn
                    : submitStatus === "success"
                    ? "✓ " + (isEnglish ? "Sent!" : "¡Enviado!")
                    : t.submitBtn}
                </Button>

                <p className="text-xs text-muted-foreground text-center">{t.formNote}</p>
              </form>
            </div>
          </div>
        </section>

        {/* ── CTA final ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">{t.finalCta}</h2>
            <p className="text-lg text-white/85 mb-8">{t.finalCtaSub}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
                onClick={scrollToForm}
              >
                {t.ctaPrimary}
              </Button>
              <a
                href="tel:+34937790311"
                onClick={() => handlePhoneClick("landing_felina_cta_final")}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  📞 +34 93 779 03 11
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
