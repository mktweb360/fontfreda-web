import { useState } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { SchemaMarkup, createBreadcrumbSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, TrendingDown, Calendar, Users, Heart } from "lucide-react";
import {
  trackContactFormSubmission,
  trackPhoneClick,
} from "@/lib/conversionTracking";

const HERO_IMAGE = "/images/canina/residencia-canina-fontfreda-7.jpg";

// ── Tipos ──────────────────────────────────────────────────────────────────────

interface FormState {
  nombre: string;
  email: string;
  telefono: string;
  servicio: string;
  fechaEntrada: string;
  duracion: string;
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
  servicio: "larga-estancia",
  fechaEntrada: "",
  duracion: "",
  nombreMascota: "",
  tipoMascota: "perro",
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

export default function LandingAdsLargaEstancia() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/larga-estancia-perros-gatos";

  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  // ── Schema ─────────────────────────────────────────────────────────────────

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isEnglish ? "Home" : "Inicio", url: "https://www.fontfreda.net" },
    {
      name: isEnglish ? "Long-Term Boarding" : "Larga Estancia",
      url: isEnglish
        ? "https://www.fontfreda.net/en/long-term-boarding"
        : "https://www.fontfreda.net/larga-estancia-perros-gatos",
    },
  ]);

  // ── Contenido bilingüe ─────────────────────────────────────────────────────

  const t = isEnglish
    ? {
        seoTitle: "Long-Term Dog & Cat Boarding Barcelona | Months or Years | Fontfreda",
        seoDescription:
          "Affordable long-term boarding for dogs and cats in Barcelona. Months or years. Special rates, family care, and complete peace of mind. Get a custom quote.",
        seoKeywords:
          "long-term dog boarding Barcelona, dog boarding months, cat boarding long-term, affordable pet care Barcelona",
        heading: "Long-Term Dog & Cat Boarding",
        subheading: "Months or Years — Special Rates & Family Care in Barcelona",
        benefits: [
          "Special rates for stays of 3+ months",
          "Family home environment — not a kennel",
          "5 daily supervised walks",
          "24/7 monitoring and care",
          "Flexible check-in / check-out",
          "Veterinary care included",
        ],
        features: [
          { icon: TrendingDown, title: "Special Rates", desc: "Discounts for stays of 3+ months" },
          { icon: Calendar, title: "Flexible Dates", desc: "Customize your stay duration" },
          { icon: Users, title: "Family Care", desc: "Your pet lives as part of our family" },
          { icon: Heart, title: "Complete Peace", desc: "Know your pet is safe and happy" },
        ],
        whyTitle: "Why Choose Fontfreda?",
        whyItems: [
          "Family home — not a kennel or cage",
          "Specialists in canine and feline behaviour",
          "Special pricing for long-term stays",
          "Personalized feeding and medication",
          "Flexible entry and exit schedules",
          "Daily photos and updates",
        ],
        useCasesTitle: "Common Situations",
        useCases: [
          {
            title: "Relocation",
            desc: "Your pet stays safe while you arrange your new home",
          },
          {
            title: "Work Abroad",
            desc: "Extended assignments? We care for your pet like family",
          },
          {
            title: "Temporary Situation",
            desc: "Any life circumstance? We're here to help",
          },
        ],
        ctaPrimary: "Get Custom Quote",
        ctaSecondary: "Free Assessment",
        ctaCall: "Call Now",
        price: "Custom pricing — ask for long-stay rates",
        testimonialText: '"My dog has been with you for 8 months and is thriving!"',
        testimonialAuthor: "Roberto L.",
        testimonialRole: "Verified customer · Barcelona",
        formTitle: "Request a Custom Quote",
        formSubtitle: "We'll build a personalized plan for your pet",
        fields: {
          nombre: "Full name *",
          email: "Email *",
          telefono: "Phone *",
          fechaEntrada: "Planned start date *",
          duracion: "Estimated duration *",
          nombreMascota: "Pet's name *",
          tipoMascota: "Pet type *",
          raza: "Breed",
          edad: "Age",
          mensaje: "Tell us about your situation",
        },
        placeholders: {
          nombre: "Your name",
          email: "your@email.com",
          telefono: "+34 600 000 000",
          fechaEntrada: "",
          duracion: "e.g. 3 months, 6 months, 1 year...",
          nombreMascota: "Rex / Misu",
          raza: "Labrador, Persian, Mixed...",
          edad: "e.g. 4 years",
          mensaje: "Relocation, work trip, special needs...",
        },
        tipoMascotaOptions: [
          { value: "perro", label: "Dog" },
          { value: "gato", label: "Cat" },
        ],
        submitBtn: "Send Request",
        submittingBtn: "Sending...",
        successMsg: "Request sent! We will contact you within 24 hours.",
        errorMsg: "Error sending the form. Please call us directly.",
        formNote: "We reply within 24 hours · No commitment",
        finalCta: "Let's Talk About Your Needs",
        finalCtaSub: "Every situation is unique. We'll create a custom plan for your pet.",
        validation: {
          nombreRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Email is not valid",
          telefonoRequired: "Phone is required",
          fechaEntradaRequired: "Start date is required",
          duracionRequired: "Estimated duration is required",
          nombreMascotaRequired: "Pet's name is required",
        },
      }
    : {
        seoTitle: "Larga Estancia Perros y Gatos Barcelona | Meses o Años | Fontfreda",
        seoDescription:
          "Alojamiento de larga estancia para perros y gatos en Barcelona. Meses o años. Tarifas especiales, cuidado familiar y tranquilidad total. Solicita presupuesto.",
        seoKeywords:
          "alojamiento larga estancia perros Barcelona, residencia meses años, cuidado gatos largo plazo, pensión asequible Barcelona",
        heading: "Alojamiento de Larga Estancia",
        subheading: "Meses o Años — Tarifas Especiales y Cuidado Familiar en Barcelona",
        benefits: [
          "Tarifas especiales para estancias de 3+ meses",
          "Ambiente familiar — no una jaula ni perrera",
          "5 paseos diarios supervisados",
          "Vigilancia 24 horas",
          "Entrada / salida flexible",
          "Cuidados veterinarios incluidos",
        ],
        features: [
          { icon: TrendingDown, title: "Tarifas Especiales", desc: "Descuentos para estancias de 3+ meses" },
          { icon: Calendar, title: "Fechas Flexibles", desc: "Personaliza la duración de la estancia" },
          { icon: Users, title: "Cuidado Familiar", desc: "Tu mascota vive como parte de la familia" },
          { icon: Heart, title: "Tranquilidad Total", desc: "Sabe que está seguro y feliz" },
        ],
        whyTitle: "¿Por Qué Elegir Fontfreda?",
        whyItems: [
          "Hogar familiar — no una jaula o perrera",
          "Especialistas en comportamiento canino y felino",
          "Precios especiales para larga estancia",
          "Alimentación y medicación personalizada",
          "Horarios flexibles de entrada y salida",
          "Fotos y actualizaciones diarias",
        ],
        useCasesTitle: "Situaciones Comunes",
        useCases: [
          {
            title: "Mudanza",
            desc: "Tu perro o gato está seguro mientras organizas tu nuevo hogar",
          },
          {
            title: "Trabajo en el Extranjero",
            desc: "¿Asignación prolongada? Cuidamos tu mascota como familia",
          },
          {
            title: "Situación Temporal",
            desc: "¿Cualquier circunstancia de vida? Estamos aquí para ayudar",
          },
        ],
        ctaPrimary: "Solicitar Presupuesto",
        ctaSecondary: "Valoración Gratuita",
        ctaCall: "Llamar Ahora",
        price: "Presupuesto personalizado — consulta tarifas larga estancia",
        testimonialText: '"Mi perro lleva 8 meses con vosotros y está prosperando."',
        testimonialAuthor: "Roberto L.",
        testimonialRole: "Cliente verificado · Barcelona",
        formTitle: "Solicita Presupuesto Personalizado",
        formSubtitle: "Diseñamos un plan a medida para tu mascota",
        fields: {
          nombre: "Nombre completo *",
          email: "Email *",
          telefono: "Teléfono *",
          fechaEntrada: "Fecha de inicio prevista *",
          duracion: "Duración estimada *",
          nombreMascota: "Nombre de la mascota *",
          tipoMascota: "Tipo de mascota *",
          raza: "Raza",
          edad: "Edad",
          mensaje: "Cuéntanos tu situación",
        },
        placeholders: {
          nombre: "Tu nombre",
          email: "tu@email.com",
          telefono: "+34 600 000 000",
          fechaEntrada: "",
          duracion: "Ej: 3 meses, 6 meses, 1 año...",
          nombreMascota: "Rex / Misu",
          raza: "Labrador, Persa, Mestizo...",
          edad: "Ej: 4 años",
          mensaje: "Mudanza, viaje de trabajo, necesidades especiales...",
        },
        tipoMascotaOptions: [
          { value: "perro", label: "Perro" },
          { value: "gato", label: "Gato" },
        ],
        submitBtn: "Enviar Solicitud",
        submittingBtn: "Enviando...",
        successMsg: "¡Solicitud enviada! Nos pondremos en contacto en menos de 24 horas.",
        errorMsg: "Error al enviar. Por favor, llámanos directamente.",
        formNote: "Respondemos en 24 h · Sin compromiso",
        finalCta: "Hablemos de Tus Necesidades",
        finalCtaSub: "Cada situación es única. Crearemos un plan personalizado para tu mascota.",
        validation: {
          nombreRequired: "El nombre es requerido",
          emailRequired: "El email es requerido",
          emailInvalid: "El email no es válido",
          telefonoRequired: "El teléfono es requerido",
          fechaEntradaRequired: "La fecha de inicio es requerida",
          duracionRequired: "La duración estimada es requerida",
          nombreMascotaRequired: "El nombre de la mascota es requerido",
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
    if (!form.duracion.trim()) newErrors.duracion = t.validation.duracionRequired;
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
        servicio: "larga-estancia",
        origen: "landing_larga_estancia_barcelona",
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
            ? "https://www.fontfreda.net/en/long-term-boarding"
            : "https://www.fontfreda.net/larga-estancia-perros-gatos"
        }
        language={isEnglish ? "en" : "es"}
        ogImage={HERO_IMAGE}
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />

      <Header />

      <main className="flex-grow">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt={
              isEnglish
                ? "Dog and cat enjoying long-term boarding at Fontfreda Barcelona"
                : "Perro y gato disfrutando de la larga estancia en Fontfreda Barcelona"
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
                  onClick={() => handlePhoneClick("landing_larga_estancia_hero")}
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
              alt={isEnglish ? "Long-term dog boarding at Fontfreda" : "Alojamiento de larga estancia para perros en Fontfreda"}
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
              src="/images/instalaciones/instantanea-residencia-nevada.jpg"
              alt={isEnglish ? "Fontfreda residence open 365 days a year" : "Residencia Fontfreda abierta los 365 días del año"}
              loading="lazy"
              className="w-full h-48 md:h-56 object-cover"
            />
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

        {/* ── Casos de uso ──────────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">
              {t.useCasesTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {t.useCases.map((useCase, i) => (
                <div key={i} className="p-6 bg-secondary rounded-xl">
                  <h3 className="font-semibold text-foreground mb-3">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why ───────────────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/50">
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
        <section className="py-16 bg-background">
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

        {/* ── Trust / Quiénes somos ─────────────────────────────────────────── */}
        <section className="py-16 bg-background">
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
                    ? "I'm Luis, owner of Fontfreda. For over 20 years I've looked after dogs and cats at our family estate in the Alt Penedès for owners who needed someone truly trustworthy — people relocating abroad, on long work assignments, or going through a life change."
                    : "Soy Luis, propietario de Fontfreda. Durante más de 20 años he cuidado perros y gatos en nuestra finca familiar del Alt Penedès para dueños que necesitaban a alguien de verdad de confianza: personas que se marchaban al extranjero, en largas misiones de trabajo o atravesando un cambio vital."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {isEnglish
                    ? "A long stay isn't just logistics — it's peace of mind. We adapt to each animal's routine, keep you updated with photos, and treat your pet as one of our own for as long as you need."
                    : "Una larga estancia no es solo logística: es tranquilidad. Nos adaptamos a la rutina de cada animal, te mantenemos informado con fotos y tratamos a tu mascota como propia durante el tiempo que necesites."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Formulario ────────────────────────────────────────────────────── */}
        <section id="formulario" className="py-16 bg-secondary/30">
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

                {/* Fecha inicio + Duración */}
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
                    <label className="block text-sm font-medium mb-1">{t.fields.duracion}</label>
                    <input
                      type="text"
                      name="duracion"
                      value={form.duracion}
                      onChange={handleChange}
                      placeholder={t.placeholders.duracion}
                      className={inputClass("duracion")}
                    />
                    {errors.duracion && (
                      <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.duracion}
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

                {/* Tipo mascota + Raza + Edad */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">{t.fields.tipoMascota}</label>
                    <select
                      name="tipoMascota"
                      value={form.tipoMascota}
                      onChange={handleChange}
                      className={inputClass("tipoMascota")}
                    >
                      {t.tipoMascotaOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
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

                <input type="hidden" name="servicio" value="larga-estancia" />

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
                onClick={() => handlePhoneClick("landing_larga_estancia_cta_final")}
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
