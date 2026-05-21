import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SchemaMarkup, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, AlertCircle, Check } from "lucide-react";
import SmoothAccordion from "@/components/SmoothAccordion";
import { Link, useLocation } from "wouter";
import { useState } from "react";
import { toast } from "sonner";

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

export default function Contacto() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/contacto";

  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();

  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "residencia-canina",
    fechaEntrada: "",
    fechaSalida: "",
    nombreMascota: "",
    tipoMascota: "perro",
    raza: "",
    edad: "",
    requisitosEspeciales: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: language === "es" ? "Inicio" : "Home", url: "https://www.fontfreda.net" },
    { name: language === "es" ? "Contacto" : "Contact", url: "https://www.fontfreda.net/contacto" },
  ]);

  const content = {
    es: {
      title: "Contacto - Fontfreda",
      heading: "Contacta con Nosotros",
      subtitle: "Solicita una valoración personalizada o reserva tu plaza ahora",
      contactInfo: [
        { icon: Phone, label: "Teléfono", value: "(+34) 93 779 03 11" },
        { icon: Mail, label: "Email", value: "info@fontfreda.net" },
        { icon: MapPin, label: "Ubicación", value: "Alt Penedès, Barcelona" },
      ],
      form: {
        title: "Formulario de Reserva",
        subtitle: "Completa el formulario para solicitar una valoración personalizada",
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
          mensaje: { label: "Mensaje adicional", placeholder: "Cuéntanos más sobre tu mascota..." },
        },
        services: {
          "residencia-canina": "Residencia Canina",
          "residencia-felina": "Residencia Felina",
          "larga-estancia": "Larga Estancia",
          "guarderia-canina": "Guardería Canina",
        },
        petTypes: {
          perro: "Perro",
          gato: "Gato",
        },
        submit: "Solicitar Valoración",
        submitting: "Enviando...",
        success: "¡Solicitud enviada! Nos pondremos en contacto pronto.",
        error: "Error al enviar la solicitud. Intenta de nuevo.",
      },
      modal: {
        title: "Confirma tu Reserva",
        subtitle: "Revisa los datos antes de enviar",
        confirm: "Confirmar y Enviar",
        cancel: "Volver a Editar",
        dias: "Días de estancia",
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
    },
    en: {
      title: "Contact - Fontfreda",
      heading: "Contact Us",
      subtitle: "Request a personalized assessment or book your spot now",
      contactInfo: [
        { icon: Phone, label: "Phone", value: "(+34) 93 779 03 11" },
        { icon: Mail, label: "Email", value: "info@fontfreda.net" },
        { icon: MapPin, label: "Location", value: "Alt Penedès, Barcelona" },
      ],
      form: {
        title: "Reservation Form",
        subtitle: "Fill out the form to request a personalized assessment",
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
          mensaje: { label: "Additional message", placeholder: "Tell us more about your pet..." },
        },
        services: {
          "residencia-canina": "Dog Boarding",
          "residencia-felina": "Cat Boarding",
          "larga-estancia": "Long Stay",
          "guarderia-canina": "Dog Daycare",
        },
        petTypes: {
          perro: "Dog",
          gato: "Cat",
        },
        submit: "Request Assessment",
        submitting: "Sending...",
        success: "Request sent! We'll contact you soon.",
        error: "Error sending request. Try again.",
      },
      modal: {
        title: "Confirm Your Reservation",
        subtitle: "Review your details before sending",
        confirm: "Confirm and Send",
        cancel: "Back to Edit",
        dias: "Stay duration",
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
    },
  };

  const lang = language === "en" ? content.en : content.es;

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = lang.validation.nombreRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = lang.validation.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = lang.validation.emailInvalid;
    }

    if (!formData.telefono.trim()) {
      newErrors.telefono = lang.validation.telefonoRequired;
    }

    if (!formData.fechaEntrada) {
      newErrors.fechaEntrada = lang.validation.fechaEntradaRequired;
    }

    if (!formData.fechaSalida) {
      newErrors.fechaSalida = lang.validation.fechaSalidaRequired;
    }

    if (formData.fechaEntrada && formData.fechaSalida) {
      if (new Date(formData.fechaSalida) <= new Date(formData.fechaEntrada)) {
        newErrors.fechaSalida = lang.validation.fechaInvalida;
      }
    }

    if (!formData.nombreMascota.trim()) {
      newErrors.nombreMascota = lang.validation.nombreMascotaRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(lang.form.error);
      return;
    }

    setShowConfirmModal(true);
  };

  const handleConfirmSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('loading');

    try {
      const response = await fetch("/api/reserva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al enviar la solicitud");
      }

      const result = await response.json();
      setSubmitStatus('success');
      toast.success(language === 'es' ? 'Solicitud enviada correctamente. Nos pondremos en contacto pronto.' : 'Request sent successfully. We will contact you soon.');

      setTimeout(() => {
        setFormData({
          nombre: "",
          email: "",
          telefono: "",
          servicio: "residencia-canina",
          fechaEntrada: "",
          fechaSalida: "",
          nombreMascota: "",
          tipoMascota: "perro",
          raza: "",
          edad: "",
          requisitosEspeciales: "",
          mensaje: "",
        });
        setShowConfirmModal(false);
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
      toast.error(language === 'es' ? 'Error al enviar la solicitud. Por favor, intenta de nuevo.' : 'Error sending request. Please try again.');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateDays = () => {
    if (!formData.fechaEntrada || !formData.fechaSalida) return 0;
    const entrada = new Date(formData.fechaEntrada);
    const salida = new Date(formData.fechaSalida);
    return Math.ceil((salida.getTime() - entrada.getTime()) / (1000 * 60 * 60 * 24));
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={language === "en" ? "Contact Fontfreda | Book Dog and Cat Boarding | Barcelona" : "Contacto Fontfreda | Reserva Residencia Canina y Felina | Barcelona"}
        description={language === "en" ? "Contact Residencia Fontfreda in Gelida, Barcelona. Book by phone, WhatsApp or form. Personalized attention and quick response. Pickup services available." : "Contacta con Residencia Fontfreda en Gelida, Barcelona. Reserva por teléfono, WhatsApp o formulario. Atención personalizada y respuesta rápida. Servicios de recogida disponibles."}
        keywords={language === "en" ? "contact dog boarding, book pet accommodation Barcelona, Fontfreda residence phone, residence WhatsApp" : "contacto residencia canina, reserva alojamiento perros gatos Barcelona, teléfono residencia Fontfreda, WhatsApp residencia"}
        canonical={language === "en" ? "https://www.fontfreda.net/en/contacto" : "https://www.fontfreda.net/contacto"}
        language={language === "en" ? "en" : "es"}
      />
      <HrefLang currentPath={currentPath} />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />

      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              {lang.heading}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {lang.subtitle}
            </p>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {lang.contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="bg-secondary rounded-lg p-6 border border-border text-center">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">
                      {info.label}
                    </h3>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="bg-background rounded-lg border border-border p-8">
              <h2 className="text-3xl font-bold text-primary mb-2">
                {lang.form.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {lang.form.subtitle}
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {lang.form.sections.contact}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang.form.fields.nombre.label}
                      </label>
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder={lang.form.fields.nombre.placeholder}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.nombre
                            ? "border-destructive bg-destructive/5"
                            : "border-border"
                        } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                      />
                      {errors.nombre && (
                        <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.nombre}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang.form.fields.email.label}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={lang.form.fields.email.placeholder}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.email
                            ? "border-destructive bg-destructive/5"
                            : "border-border"
                        } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang.form.fields.telefono.label}
                      </label>
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder={lang.form.fields.telefono.placeholder}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.telefono
                            ? "border-destructive bg-destructive/5"
                            : "border-border"
                        } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                      />
                      {errors.telefono && (
                        <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.telefono}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Reservation Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {lang.form.sections.reservation}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang.form.fields.servicio.label}
                      </label>
                      <select
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        {Object.entries(lang.form.services).map(([key, value]) => (
                          <option key={key} value={key}>
                            {value}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {lang.form.fields.fechaEntrada.label}
                        </label>
                        <input
                          type="date"
                          name="fechaEntrada"
                          value={formData.fechaEntrada}
                          onChange={handleChange}
                          min={getTodayDate()}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.fechaEntrada
                              ? "border-destructive bg-destructive/5"
                              : "border-border"
                          } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                        />
                        {errors.fechaEntrada && (
                          <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.fechaEntrada}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {lang.form.fields.fechaSalida.label}
                        </label>
                        <input
                          type="date"
                          name="fechaSalida"
                          value={formData.fechaSalida}
                          onChange={handleChange}
                          min={formData.fechaEntrada || getTodayDate()}
                          className={`w-full px-4 py-2 rounded-lg border ${
                            errors.fechaSalida
                              ? "border-destructive bg-destructive/5"
                              : "border-border"
                          } bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                        />
                        {errors.fechaSalida && (
                          <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
                            <AlertCircle className="w-4 h-4" />
                            {errors.fechaSalida}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pet Section */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {lang.form.sections.pet}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang.form.fields.nombreMascota.label}
                      </label>
                      <input
                        type="text"
                        name="nombreMascota"
                        value={formData.nombreMascota}
                        onChange={handleChange}
                        placeholder={lang.form.fields.nombreMascota.placeholder}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          errors.nombreMascota
                            ? "border-destructive bg-destructive/5"
                            : "border-border"
                        } bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary`}
                      />
                      {errors.nombreMascota && (
                        <div className="flex items-center gap-2 mt-1 text-destructive text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.nombreMascota}
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {lang.form.fields.tipoMascota.label}
                        </label>
                        <select
                          name="tipoMascota"
                          value={formData.tipoMascota}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        >
                          {Object.entries(lang.form.petTypes).map(([key, value]) => (
                            <option key={key} value={key}>
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {lang.form.fields.raza.label}
                        </label>
                        <input
                          type="text"
                          name="raza"
                          value={formData.raza}
                          onChange={handleChange}
                          placeholder={lang.form.fields.raza.placeholder}
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          {lang.form.fields.edad.label}
                        </label>
                        <input
                          type="text"
                          name="edad"
                          value={formData.edad}
                          onChange={handleChange}
                          placeholder={lang.form.fields.edad.placeholder}
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-4">
                    {lang.form.sections.special}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang.form.fields.requisitosEspeciales.label}
                      </label>
                      <textarea
                        name="requisitosEspeciales"
                        value={formData.requisitosEspeciales}
                        onChange={handleChange}
                        placeholder={lang.form.fields.requisitosEspeciales.placeholder}
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {lang.form.fields.mensaje.label}
                      </label>
                      <textarea
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder={lang.form.fields.mensaje.placeholder}
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold"
                >
                  {isSubmitting ? lang.form.submitting : lang.form.submit}
                </Button>
              </form>
            </div>
          </div>
        </section>
        {/* Confirmation Modal */}
        {showConfirmModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-background rounded-lg border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-secondary border-b border-border p-6">
                <h2 className="text-2xl font-bold text-primary mb-1">
                  {lang.modal.title}
                </h2>
                <p className="text-muted-foreground">
                  {lang.modal.subtitle}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {lang.form.sections.contact}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.nombre.label}</p>
                      <p className="font-medium text-foreground">{formData.nombre}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.email.label}</p>
                      <p className="font-medium text-foreground">{formData.email}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.telefono.label}</p>
                      <p className="font-medium text-foreground">{formData.telefono}</p>
                    </div>
                  </div>
                </div>

                {/* Reservation Info */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {lang.form.sections.reservation}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.servicio.label}</p>
                      <p className="font-medium text-foreground">
                        {lang.form.services[formData.servicio as keyof typeof lang.form.services]}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.modal.dias}</p>
                      <p className="font-medium text-foreground">{calculateDays()} {language === "es" ? "días" : "days"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.fechaEntrada.label}</p>
                      <p className="font-medium text-foreground">{formData.fechaEntrada}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.fechaSalida.label}</p>
                      <p className="font-medium text-foreground">{formData.fechaSalida}</p>
                    </div>
                  </div>
                </div>

                {/* Pet Info */}
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {lang.form.sections.pet}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.nombreMascota.label}</p>
                      <p className="font-medium text-foreground">{formData.nombreMascota}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.tipoMascota.label}</p>
                      <p className="font-medium text-foreground">
                        {lang.form.petTypes[formData.tipoMascota as keyof typeof lang.form.petTypes]}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.raza.label}</p>
                      <p className="font-medium text-foreground">{formData.raza || "-"}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">{lang.form.fields.edad.label}</p>
                      <p className="font-medium text-foreground">{formData.edad || "-"}</p>
                    </div>
                  </div>
                </div>

                {/* Special Requirements */}
                {(formData.requisitosEspeciales || formData.mensaje) && (
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {lang.form.sections.special}
                    </h3>
                    <div className="space-y-3 text-sm">
                      {formData.requisitosEspeciales && (
                        <div>
                          <p className="text-muted-foreground">{lang.form.fields.requisitosEspeciales.label}</p>
                          <p className="font-medium text-foreground">{formData.requisitosEspeciales}</p>
                        </div>
                      )}
                      {formData.mensaje && (
                        <div>
                          <p className="text-muted-foreground">{lang.form.fields.mensaje.label}</p>
                          <p className="font-medium text-foreground">{formData.mensaje}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="sticky bottom-0 bg-secondary border-t border-border p-6 flex gap-3">
                <Button
                  onClick={() => setShowConfirmModal(false)}
                  variant="outline"
                  className="flex-1"
                >
                  {lang.modal.cancel}
                </Button>
                <Button
                  onClick={handleConfirmSubmit}
                  disabled={isSubmitting}
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                >
                  {isSubmitting && (
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  )}
                  {isSubmitting ? lang.form.submitting : lang.modal.confirm}
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              {language === 'es' ? 'Preguntas Frecuentes sobre Reservas' : 'Frequently Asked Questions'}
            </h2>

            <SmoothAccordion
              items={[
                {
                  id: 'vaccines',
                  title: language === 'es' ? '¿Qué vacunas necesita mi perro?' : 'What vaccines does my dog need?',
                  content: (
                    <div>
                      <p className="mb-3">
                        {language === 'es'
                          ? 'Recomendamos que tu perro tenga al menos:'
                          : 'We recommend your dog has at least:'}
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-2">
                        <li>{language === 'es' ? 'Vacuna Pentavalente' : 'Pentavalent vaccine'}</li>
                        <li>{language === 'es' ? 'Vacuna Heptavalente' : 'Heptavalent vaccine'}</li>
                        <li>{language === 'es' ? 'Vacuna contra la Tos de las Perreras' : 'Kennel Cough vaccine'}</li>
                      </ul>
                      <p className="mt-4 text-sm italic">
                        {language === 'es'
                          ? 'En verano, recomendamos doble protección contra parásitos externos (pipeta + collar).'
                          : 'In summer, we recommend double protection against external parasites (pipette + collar).'}
                      </p>
                    </div>
                  ),
                },
                {
                  id: 'confirmation',
                  title: language === 'es' ? '¿Cuándo se confirma la reserva?' : 'When is the reservation confirmed?',
                  content: (
                    <div>
                      <p className="font-semibold text-foreground mb-2">
                        {language === 'es'
                          ? '⚠️ Información Importante:'
                          : '⚠️ Important Information:'}
                      </p>
                      <p>
                        {language === 'es'
                          ? 'Ninguna reserva tiene efecto hasta que no sea confirmada por Fontfreda. Tras recibir tu solicitud, nuestro equipo realizará una valoración personalizada de tu mascota para asegurar que nuestro modelo de alojamiento familiar es adecuado para sus necesidades, rutinas y manejo. Te contactaremos en menos de 24 horas.'
                          : 'No reservation is effective until confirmed by Fontfreda. After receiving your request, our team will conduct a personalized assessment of your pet to ensure that our family accommodation model is suitable for their needs, routines, and handling. We will contact you within 24 hours.'}
                      </p>
                    </div>
                  ),
                },
                {
                  id: 'compatibility',
                  title: language === 'es' ? '¿Todos los perros pueden alojarse en Fontfreda?' : 'Can all dogs stay at Fontfreda?',
                  content: (
                    <div>
                      <p className="mb-3">
                        {language === 'es'
                          ? 'Nuestro modelo de alojamiento familiar funciona mejor con perros que se adaptan bien a la convivencia en casa y pueden disfrutar de la socialización con otros perros en nuestros parques. Valoramos cada caso de forma individual para asegurar la compatibilidad y el bienestar de todos.'
                          : 'Our family accommodation model works best with dogs that adapt well to living in a home environment and can enjoy socialization with other dogs in our parks. We assess each case individually to ensure compatibility and the well-being of all.'}
                      </p>
                      <p className="text-sm italic">
                        {language === 'es'
                          ? 'Si tu perro tiene necesidades especiales de manejo o comportamiento, cuéntanos en el formulario. Nuestro equipo evaluará si podemos ofrecerle la mejor experiencia.'
                          : 'If your dog has special handling or behavioral needs, tell us in the form. Our team will assess if we can provide the best experience.'}
                      </p>
                    </div>
                  ),
                },
                {
                  id: 'delivery',
                  title: language === 'es' ? '¿Incluye recogida y entrega?' : 'Is pickup and delivery included?',
                  content: (
                    <p>
                      {language === 'es'
                        ? 'Sí, ofrecemos recogida y entrega a Barcelona capital por las mañanas. El precio es de 25-30€ según la zona. También puedes traer y recoger tu perro directamente en nuestras instalaciones en Alt Penedès.'
                        : 'Yes, we offer pickup and delivery to Barcelona city center in the mornings. The price is €25-30 depending on the area. You can also bring and pick up your dog directly at our facilities in Alt Penedès.'}
                    </p>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">
              {language === 'es' ? 'Ubicación de Nuestras Instalaciones' : 'Our Facilities Location'}
            </h2>
            <div className="bg-secondary rounded-lg overflow-hidden shadow-lg border border-border">
              <div className="w-full h-96 md:h-[500px]">
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen={true}
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=41.5667,-1.8833&zoom=15&q=Finca+Can+Farigola,+Gelida,+Barcelona"
                ></iframe>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-secondary rounded-lg p-6 border border-border text-center">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Dirección' : 'Address'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Finca Can Farigola<br />
                  08790 Gelida, Barcelona<br />
                  España
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 border border-border text-center">
                <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Teléfono' : 'Phone'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  <a href="tel:+34937790311" className="hover:text-primary transition-colors">
                    +34 93 779 03 11
                  </a>
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6 border border-border text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'es' ? 'Email' : 'Email'}
                </h3>
                <p className="text-muted-foreground text-sm">
                  <a href="mailto:info@fontfreda.net" className="hover:text-primary transition-colors">
                    info@fontfreda.net
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
