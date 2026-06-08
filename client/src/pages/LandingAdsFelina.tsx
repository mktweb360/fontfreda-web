import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { SchemaMarkup, createBreadcrumbSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Zap, Heart, Shield, AlertCircle } from "lucide-react";
import { trackContactFormSubmission, trackPhoneClick } from "@/lib/conversionTracking";

interface FormData {
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
  requisitosEspeciales: string;
  mensaje: string;
}

export default function LandingAdsFelina() {
  const [location, navigate] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/residencia-felina-barcelona";
  const formRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState<FormData>({
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
    requisitosEspeciales: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: isEnglish ? "Home" : "Inicio", url: "https://www.fontfreda.net" },
    {
      name: isEnglish ? "Cat Boarding Barcelona" : "Residencia Felina Barcelona",
      url: isEnglish
        ? "https://www.fontfreda.net/en/residencia-felina-barcelona"
        : "https://www.fontfreda.net/residencia-felina-barcelona",
    },
  ]);

  const content = isEnglish
    ? {
        title: "Cat Boarding Barcelona | Specialized Feline Accommodation",
        description:
          "Premium cat boarding in Barcelona. Specialized feline spaces, calm environment, and personalized care. Book your cat's stay now.",
        keywords:
          "cat boarding Barcelona, cat hotel Barcelona, feline care Barcelona, cat sitting Barcelona",
        heading: "Cat Boarding in Barcelona",
        subheading: "Specialized Spaces Designed Exclusively for Cats",
        benefits: [
          "180m² dedicated feline space",
          "Calm and quiet environment",
          "Specialized feline behavior expertise",
          "Individual pre-assessment",
          "Safe outdoor access",
          "Daily updates and photos",
        ],
        features: [
          { icon: Heart, title: "Feline Specialist", desc: "Team with specialized feline knowledge" },
          { icon: Zap, title: "Enrichment", desc: "Climbing structures and play areas" },
          { icon: MapPin, title: "Safe Spaces", desc: "180m² designed for cat comfort" },
          { icon: Shield, title: "Security", desc: "Secure environment with escape prevention" },
        ],
        cta: "Book Your Cat's Stay",
        ctaSecondary: "Free Assessment",
        testimonial: '"My cat was so relaxed. She came back purring!" - Elena M.',
        price: "From €18/day",
        form: {
          title: "Request a Reservation",
          subtitle: "Fill out the form and we'll contact you within 24 hours",
          sections: {
            contact: "Contact Information",
            reservation: "Reservation Details",
            pet: "Pet Information",
            special: "Special Requirements",
          },
          fields: {
            nombre: { label: "Full name", placeholder: "Your name" },
            email: { label: "Email", placeholder: "your@email.com" },
            telefono: { label: "Phone", placeholder: "+34 123 456 789" },
            servicio: { label: "Service", placeholder: "Select a service" },
            fechaEntrada: { label: "Check-in date", placeholder: "Select date" },
            fechaSalida: { label: "Check-out date", placeholder: "Select date" },
            nombreMascota: { label: "Pet name", placeholder: "Name" },
            tipoMascota: { label: "Pet type", placeholder: "Select type" },
            raza: { label: "Breed", placeholder: "Pet breed" },
            edad: { label: "Age", placeholder: "E.g: 3 years" },
            requisitosEspeciales: { label: "Special requirements", placeholder: "Medications, allergies, special behavior..." },
            mensaje: { label: "Additional message", placeholder: "Tell us more about your cat..." },
          },
          services: {
            "residencia-felina": "Cat Boarding",
            "residencia-canina": "Dog Boarding",
            "larga-estancia": "Long Stay",
          },
          petTypes: { perro: "Dog", gato: "Cat" },
          submit: "Request Assessment",
          submitting: "Sending...",
        },
        validation: {
          nombreRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Email is not valid",
          telefonoRequired: "Phone is required",
          fechaEntradaRequired: "Check-in date is required",
          fechaSalidaRequired: "Check-out date is required",
          fechaInvalida: "Check-out date must be after check-in date",
          nombreMascotaRequired: "Pet name is required",
        },
        modal: {
          title: "Confirm Your Reservation",
          subtitle: "Review your details before sending",
          confirm: "Confirm and Send",
          cancel: "Back to Edit",
          dias: "Stay duration",
          days: "days",
        },
      }
    : {
        title: "Residencia Felina Barcelona | Alojamiento Especializado para Gatos",
        description:
          "Residencia felina premium en Barcelona. Espacios especializados, ambiente tranquilo y cuidados personalizados. Reserva ahora.",
        keywords:
          "residencia felina Barcelona, hotel para gatos Barcelona, cuidado gatos Barcelona, guardería gatos",
        heading: "Residencia Felina en Barcelona",
        subheading: "Espacios Especializados Diseñados Exclusivamente para Gatos",
        benefits: [
          "Espacio felino dedicado de 180m²",
          "Ambiente tranquilo y seguro",
          "Experiencia especializada en comportamiento felino",
          "Valoración previa individual",
          "Acceso seguro al exterior",
          "Fotos y actualizaciones diarias",
        ],
        features: [
          { icon: Heart, title: "Especialista Felino", desc: "Equipo con experiencia en gatos" },
          { icon: Zap, title: "Enriquecimiento", desc: "Estructuras para trepar y jugar" },
          { icon: MapPin, title: "Espacios Seguros", desc: "180m² diseñados para comodidad felina" },
          { icon: Shield, title: "Seguridad", desc: "Ambiente seguro y prevención de escapes" },
        ],
        cta: "Reservar Estancia",
        ctaSecondary: "Valoración Gratuita",
        testimonial: '"Mi gato estaba tan relajado. ¡Volvió ronroneando!" - Elena M.',
        price: "Desde 18€/día",
        form: {
          title: "Solicita una Reserva",
          subtitle: "Completa el formulario y te contactamos en menos de 24h",
          sections: {
            contact: "Datos de Contacto",
            reservation: "Detalles de la Reserva",
            pet: "Información de la Mascota",
            special: "Requisitos Especiales",
          },
          fields: {
            nombre: { label: "Nombre completo", placeholder: "Tu nombre" },
            email: { label: "Email", placeholder: "tu@email.com" },
            telefono: { label: "Teléfono", placeholder: "+34 123 456 789" },
            servicio: { label: "Servicio", placeholder: "Selecciona un servicio" },
            fechaEntrada: { label: "Fecha de entrada", placeholder: "Selecciona fecha" },
            fechaSalida: { label: "Fecha de salida", placeholder: "Selecciona fecha" },
            nombreMascota: { label: "Nombre de la mascota", placeholder: "Nombre" },
            tipoMascota: { label: "Tipo de mascota", placeholder: "Selecciona tipo" },
            raza: { label: "Raza", placeholder: "Raza de la mascota" },
            edad: { label: "Edad", placeholder: "Ej: 3 años" },
            requisitosEspeciales: { label: "Requisitos especiales", placeholder: "Medicamentos, alergias, comportamiento especial..." },
            mensaje: { label: "Mensaje adicional", placeholder: "Cuéntanos más sobre tu gato..." },
          },
          services: {
            "residencia-felina": "Residencia Felina",
            "residencia-canina": "Residencia Canina",
            "larga-estancia": "Larga Estancia",
          },
          petTypes: { perro: "Perro", gato: "Gato" },
          submit: "Solicitar Valoración",
          submitting: "Enviando...",
        },
        validation: {
          nombreRequired: "El nombre es requerido",
          emailRequired: "El email es requerido",
          emailInvalid: "El email no es válido",
          telefonoRequired: "El teléfono es requerido",
          fechaEntradaRequired: "La fecha de entrada es requerida",
          fechaSalidaRequired: "La fecha de salida es requerida",
          fechaInvalida: "La fecha de salida debe ser posterior a la de entrada",
          nombreMascotaRequired: "El nombre de la mascota es requerido",
        },
        modal: {
          title: "Confirma tu Reserva",
          subtitle: "Revisa los datos antes de enviar",
          confirm: "Confirmar y Enviar",
          cancel: "Volver a Editar",
          dias: "Días de estancia",
          days: "días",
        },
      };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const getTodayDate = () => new Date().toISOString().split("T")[0];

  const calculateDays = () => {
    if (!formData.fechaEntrada || !formData.fechaSalida) return 0;
    const entrada = new Date(formData.fechaEntrada);
    const salida = new Date(formData.fechaSalida);
    return Math.ceil((salida.getTime() - entrada.getTime()) / (1000 * 60 * 60 * 24));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.nombre.trim()) newErrors.nombre = content.validation.nombreRequired;
    if (!formData.email.trim()) {
      newErrors.email = content.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = content.validation.emailInvalid;
    }
    if (!formData.telefono.trim()) newErrors.telefono = content.validation.telefonoRequired;
    if (!formData.fechaEntrada) newErrors.fechaEntrada = content.validation.fechaEntradaRequired;
    if (!formData.fechaSalida) newErrors.fechaSalida = content.validation.fechaSalidaRequired;
    if (formData.fechaEntrada && formData.fechaSalida) {
      if (new Date(formData.fechaSalida) <= new Date(formData.fechaEntrada)) {
        newErrors.fechaSalida = content.validation.fechaInvalida;
      }
    }
    if (!formData.nombreMascota.trim()) newErrors.nombreMascota = content.validation.nombreMascotaRequired;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error(isEnglish ? "Please fix the errors before submitting." : "Por favor corrige los errores antes de enviar.");
      return;
    }
    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("loading");
    try {
      const response = await fetch("/api/reserva", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Error al enviar");

      setSubmitStatus("success");
      trackContactFormSubmission({ servicio: "residencia-felina", origen: "landing-felina" });

      toast.success(
        isEnglish
          ? "Request sent! We'll contact you within 24 hours."
          : "¡Solicitud enviada! Nos pondremos en contacto en menos de 24h."
      );

      setTimeout(() => {
        setFormData({
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
          requisitosEspeciales: "",
          mensaje: "",
        });
        setShowConfirmModal(false);
        setSubmitStatus("idle");
      }, 2000);
    } catch {
      setSubmitStatus("error");
      toast.error(
        isEnglish
          ? "Error sending request. Please try again."
          : "Error al enviar la solicitud. Por favor, intenta de nuevo."
      );
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-2 rounded-lg border ${
      errors[field] ? "border-destructive bg-destructive/5" : "border-border"
    } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical={isEnglish ? "https://www.fontfreda.net/en/residencia-felina-barcelona" : "https://www.fontfreda.net/residencia-felina-barcelona"}
        language={isEnglish ? "en" : "es"}
        ogImage="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&w=1200&h=630&fit=crop"
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">{content.heading}</h1>
                <p className="text-xl text-muted-foreground mb-8">{content.subheading}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white"
                    onClick={scrollToForm}
                  >
                    {content.cta}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate(isEnglish ? "/en/contacto" : "/contacto")}
                  >
                    {content.ctaSecondary}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-6">{content.price}</p>
              </div>
              <div className="hidden md:block">
                <img
                  src="/images/felina/hero.jpg"
                  alt={isEnglish ? "Cat boarding facilities at Fontfreda" : "Instalaciones residencia felina Fontfreda"}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  width="600"
                  height="384"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{isEnglish ? "Why Choose Us?" : "¿Por Qué Elegirnos?"}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {content.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Instalaciones Gallery */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">
              {isEnglish ? "Our Facilities" : "Nuestras Instalaciones"}
            </h2>
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img
                src="/images/felina/instalaciones-1.jpg"
                alt={isEnglish ? "Cat boarding space at Fontfreda" : "Espacio felino en Fontfreda"}
                className="w-full h-64 object-cover rounded-lg shadow-md"
                loading="lazy"
                width="400"
                height="256"
              />
              <img
                src="/images/felina/instalaciones-2.jpg"
                alt={isEnglish ? "Cat resting area" : "Zona de descanso para gatos"}
                className="w-full h-64 object-cover rounded-lg shadow-md"
                loading="lazy"
                width="400"
                height="256"
              />
              <img
                src="/images/felina/instalaciones-3.jpg"
                alt={isEnglish ? "Feline residence interior" : "Interior residencia felina"}
                className="w-full h-64 object-cover rounded-lg shadow-md"
                loading="lazy"
                width="400"
                height="256"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {content.features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="text-center">
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <img
                src="/images/felina/vistas-1.jpg"
                alt={isEnglish ? "Views from Fontfreda feline residence" : "Vistas desde la residencia felina Fontfreda"}
                className="w-full h-56 object-cover rounded-xl shadow-md"
                loading="lazy"
                width="896"
                height="224"
              />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-secondary p-8 rounded-lg">
              <p className="text-lg italic text-foreground mb-4">{content.testimonial}</p>
              <p className="text-sm text-muted-foreground">{isEnglish ? "Verified Customer" : "Cliente Verificado"}</p>
            </div>
          </div>
        </section>

        {/* Cat Gallery */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto">
              <img
                src="/images/felina/gato-1.jpg"
                alt={isEnglish ? "Cat at Fontfreda" : "Gato en Fontfreda"}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
                width="280"
                height="192"
              />
              <img
                src="/images/felina/gato-5.jpg"
                alt={isEnglish ? "Cat enjoying the residence" : "Gato disfrutando la residencia"}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
                width="280"
                height="192"
              />
              <img
                src="/images/felina/gato-7.jpg"
                alt={isEnglish ? "Happy cat at Fontfreda" : "Gato feliz en Fontfreda"}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
                width="280"
                height="192"
              />
              <img
                src="/images/felina/gato-8.jpg"
                alt={isEnglish ? "Cats at our residence" : "Gatos en nuestra residencia"}
                className="w-full h-48 object-cover rounded-lg"
                loading="lazy"
                width="280"
                height="192"
              />
            </div>
          </div>
        </section>

        {/* Embedded Reservation Form */}
        <section ref={formRef} className="py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-background rounded-lg border border-border p-8">
              <h2 className="text-3xl font-bold text-primary mb-2">{content.form.title}</h2>
              <p className="text-muted-foreground mb-8">{content.form.subtitle}</p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">{content.form.sections.contact}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.nombre.label}</label>
                      <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder={content.form.fields.nombre.placeholder} className={inputClass("nombre")} />
                      {errors.nombre && <div className="flex items-center gap-2 mt-1 text-destructive text-sm"><AlertCircle className="w-4 h-4" />{errors.nombre}</div>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.email.label}</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={content.form.fields.email.placeholder} className={inputClass("email")} />
                      {errors.email && <div className="flex items-center gap-2 mt-1 text-destructive text-sm"><AlertCircle className="w-4 h-4" />{errors.email}</div>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.telefono.label}</label>
                      <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder={content.form.fields.telefono.placeholder} className={inputClass("telefono")} />
                      {errors.telefono && <div className="flex items-center gap-2 mt-1 text-destructive text-sm"><AlertCircle className="w-4 h-4" />{errors.telefono}</div>}
                    </div>
                  </div>
                </div>

                {/* Reservation */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">{content.form.sections.reservation}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.servicio.label}</label>
                      <select name="servicio" value={formData.servicio} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                        {Object.entries(content.form.services).map(([key, value]) => (
                          <option key={key} value={key}>{value}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.fechaEntrada.label}</label>
                        <input type="date" name="fechaEntrada" value={formData.fechaEntrada} onChange={handleChange} min={getTodayDate()} className={inputClass("fechaEntrada")} />
                        {errors.fechaEntrada && <div className="flex items-center gap-2 mt-1 text-destructive text-sm"><AlertCircle className="w-4 h-4" />{errors.fechaEntrada}</div>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.fechaSalida.label}</label>
                        <input type="date" name="fechaSalida" value={formData.fechaSalida} onChange={handleChange} min={formData.fechaEntrada || getTodayDate()} className={inputClass("fechaSalida")} />
                        {errors.fechaSalida && <div className="flex items-center gap-2 mt-1 text-destructive text-sm"><AlertCircle className="w-4 h-4" />{errors.fechaSalida}</div>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pet */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">{content.form.sections.pet}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.nombreMascota.label}</label>
                      <input type="text" name="nombreMascota" value={formData.nombreMascota} onChange={handleChange} placeholder={content.form.fields.nombreMascota.placeholder} className={inputClass("nombreMascota")} />
                      {errors.nombreMascota && <div className="flex items-center gap-2 mt-1 text-destructive text-sm"><AlertCircle className="w-4 h-4" />{errors.nombreMascota}</div>}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.tipoMascota.label}</label>
                        <select name="tipoMascota" value={formData.tipoMascota} onChange={handleChange} className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                          {Object.entries(content.form.petTypes).map(([key, value]) => (
                            <option key={key} value={key}>{value}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.raza.label}</label>
                        <input type="text" name="raza" value={formData.raza} onChange={handleChange} placeholder={content.form.fields.raza.placeholder} className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.edad.label}</label>
                        <input type="text" name="edad" value={formData.edad} onChange={handleChange} placeholder={content.form.fields.edad.placeholder} className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">{content.form.sections.special}</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.requisitosEspeciales.label}</label>
                      <textarea name="requisitosEspeciales" value={formData.requisitosEspeciales} onChange={handleChange} placeholder={content.form.fields.requisitosEspeciales.placeholder} rows={3} className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">{content.form.fields.mensaje.label}</label>
                      <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} placeholder={content.form.fields.mensaje.placeholder} rows={4} className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                    </div>
                  </div>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold">
                  {isSubmitting ? content.form.submitting : content.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              {isEnglish ? "Ready to Book?" : "¿Listo para Reservar?"}
            </h2>
            <p className="text-lg mb-8 opacity-90">
              {isEnglish
                ? "Contact us today for a free assessment and personalized quote."
                : "Contacta hoy para una valoración gratuita y presupuesto personalizado."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
                onClick={scrollToForm}
              >
                {content.cta}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <a
                  href="tel:+34937790311"
                  onClick={() => trackPhoneClick("landing-felina")}
                >
                  +34 93 779 03 11
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-secondary border-b border-border p-6">
              <h2 className="text-2xl font-bold text-primary mb-1">{content.modal.title}</h2>
              <p className="text-muted-foreground">{content.modal.subtitle}</p>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">{content.form.sections.contact}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><p className="text-muted-foreground">{content.form.fields.nombre.label}</p><p className="font-medium text-foreground">{formData.nombre}</p></div>
                  <div><p className="text-muted-foreground">{content.form.fields.email.label}</p><p className="font-medium text-foreground">{formData.email}</p></div>
                  <div><p className="text-muted-foreground">{content.form.fields.telefono.label}</p><p className="font-medium text-foreground">{formData.telefono}</p></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">{content.form.sections.reservation}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><p className="text-muted-foreground">{content.form.fields.servicio.label}</p><p className="font-medium text-foreground">{content.form.services[formData.servicio as keyof typeof content.form.services]}</p></div>
                  <div><p className="text-muted-foreground">{content.modal.dias}</p><p className="font-medium text-foreground">{calculateDays()} {content.modal.days}</p></div>
                  <div><p className="text-muted-foreground">{content.form.fields.fechaEntrada.label}</p><p className="font-medium text-foreground">{formData.fechaEntrada}</p></div>
                  <div><p className="text-muted-foreground">{content.form.fields.fechaSalida.label}</p><p className="font-medium text-foreground">{formData.fechaSalida}</p></div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-3">{content.form.sections.pet}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><p className="text-muted-foreground">{content.form.fields.nombreMascota.label}</p><p className="font-medium text-foreground">{formData.nombreMascota}</p></div>
                  <div><p className="text-muted-foreground">{content.form.fields.tipoMascota.label}</p><p className="font-medium text-foreground">{content.form.petTypes[formData.tipoMascota as keyof typeof content.form.petTypes]}</p></div>
                  <div><p className="text-muted-foreground">{content.form.fields.raza.label}</p><p className="font-medium text-foreground">{formData.raza || "-"}</p></div>
                  <div><p className="text-muted-foreground">{content.form.fields.edad.label}</p><p className="font-medium text-foreground">{formData.edad || "-"}</p></div>
                </div>
              </div>
              {(formData.requisitosEspeciales || formData.mensaje) && (
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">{content.form.sections.special}</h3>
                  <div className="space-y-3 text-sm">
                    {formData.requisitosEspeciales && <div><p className="text-muted-foreground">{content.form.fields.requisitosEspeciales.label}</p><p className="font-medium text-foreground">{formData.requisitosEspeciales}</p></div>}
                    {formData.mensaje && <div><p className="text-muted-foreground">{content.form.fields.mensaje.label}</p><p className="font-medium text-foreground">{formData.mensaje}</p></div>}
                  </div>
                </div>
              )}
            </div>
            <div className="sticky bottom-0 bg-secondary border-t border-border p-6 flex gap-3">
              <Button onClick={() => setShowConfirmModal(false)} variant="outline" className="flex-1">
                {content.modal.cancel}
              </Button>
              <Button onClick={handleConfirmSubmit} disabled={isSubmitting} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2">
                {isSubmitting && <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />}
                {isSubmitting ? content.form.submitting : content.modal.confirm}
              </Button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
