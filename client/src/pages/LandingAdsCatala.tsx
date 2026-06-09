import { useState } from "react";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { SchemaMarkup, createBreadcrumbSchema, localBusinessSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { AlertCircle, Check, MapPin, Users, Heart, Shield } from "lucide-react";
import {
  trackContactFormSubmission,
  trackPhoneClick,
} from "@/lib/conversionTracking";

const HERO_IMAGE = "/images/canina/hero.jpg";

const FEATURES = [
  { icon: Heart, title: "Tracte Familiar", desc: "El teu gos viu com a part de la família" },
  { icon: MapPin, title: "Espais Naturals", desc: "5 parcs de 400–600m² cadascun" },
  { icon: Users, title: "Socialització", desc: "Interacció segura amb altres gossos" },
  { icon: Shield, title: "Seguretat", desc: "Àrees tancades i vigilància 24h" },
];

const BENEFITS = [
  "Entorn familiar, no una gàbia",
  "5 passejos supervisats al dia",
  "Vigilància 24 hores",
  "Atenció personalitzada a cada animal",
  "Recollida i entrega a domicili a Barcelona",
  "Fotos i actualitzacions diàries",
];

const WHY_ITEMS = [
  "Llar familiar — no una gàbia o canera",
  "Especialistes en comportament caní i felí",
  "5 passejos diaris en parcs naturals",
  "Alimentació i medicació personalitzada",
  "Horaris flexibles d'entrada i sortida",
  "Fotos i actualitzacions durant el dia",
];

// ── Tipus ──────────────────────────────────────────────────────────────────────

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
  servicio: "residencia-canina",
  fechaEntrada: "",
  fechaSalida: "",
  nombreMascota: "",
  tipoMascota: "gos",
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

// ── Component ─────────────────────────────────────────────────────────────────

export default function LandingAdsCatala() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Inici", url: "https://www.fontfreda.net" },
    {
      name: "Residència Canina i Felina Barcelona",
      url: "https://www.fontfreda.net/residencia-canina-barcelona-ca",
    },
  ]);

  // ── Validació ──────────────────────────────────────────────────────────────

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.nombre.trim()) newErrors.nombre = "El nom és obligatori";
    if (!form.email.trim()) {
      newErrors.email = "L'email és obligatori";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "L'email no és vàlid";
    }
    if (!form.telefono.trim()) newErrors.telefono = "El telèfon és obligatori";
    if (!form.fechaEntrada) newErrors.fechaEntrada = "La data d'entrada és obligatòria";
    if (!form.fechaSalida) newErrors.fechaSalida = "La data de sortida és obligatòria";
    if (form.fechaEntrada && form.fechaSalida) {
      if (new Date(form.fechaSalida) <= new Date(form.fechaEntrada)) {
        newErrors.fechaSalida = "La data de sortida ha de ser posterior a la d'entrada";
      }
    }
    if (!form.nombreMascota.trim()) newErrors.nombreMascota = "El nom de l'animal és obligatori";

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
      toast.success("Sol·licitud enviada! Ens posarem en contacte en menys de 24 hores.");

      trackContactFormSubmission({
        servicio: "residencia-canina",
        origen: "landing_catala_barcelona",
      });

      setTimeout(() => {
        setForm(INITIAL_FORM);
        setSubmitStatus("idle");
      }, 3000);
    } catch {
      setSubmitStatus("error");
      toast.error("Error en enviar. Si us plau, truca'ns directament.");
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
        title="Residència Canina i Felina Barcelona | Tracte Familiar · Alt Penedès | Fontfreda"
        description="Residència canina i felina a Barcelona. Entorn familiar, 5 passejos supervisats al dia, vigilància 24h i atenció personalitzada. Demana pressupost ara."
        keywords="residència canina Barcelona, residència felina Barcelona, guarderia gossos Barcelona, cuidado gossos Alt Penedès"
        canonical="https://www.fontfreda.net/residencia-canina-barcelona-ca"
        language="ca"
        ogImage={HERO_IMAGE}
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbSchema} />
      <SchemaMarkup type="LocalBusiness" data={localBusinessSchema} />

      <Header />

      <main className="flex-grow">
        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section className="relative py-20 overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Gos descansant a la residència canina Fontfreda a Barcelona"
            className="absolute inset-0 w-full h-full object-cover"
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-primary/70" />

          <div className="relative container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Residència Canina i Felina a Barcelona
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Tracte Familiar · 5 Passejos Diaris · Alt Penedès
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 font-bold"
                  onClick={scrollToForm}
                >
                  Reservar Estada
                </Button>
                <a
                  href="tel:+34937790311"
                  onClick={() => trackPhoneClick("landing_catala_hero")}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10 w-full sm:w-auto"
                  >
                    Trucar Ara
                  </Button>
                </a>
              </div>

              <p className="text-sm text-white/70">Des de 20€/dia</p>
            </div>
          </div>
        </section>

        {/* ── Beneficis ─────────────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">
              Per Què Elegirnos?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ──────────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {FEATURES.map((feature, i) => {
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

        {/* ── Per Què Fontfreda ─────────────────────────────────────────────── */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-center text-primary mb-10">
              Per Què Triar Fontfreda?
            </h2>
            <ul className="space-y-3">
              {WHY_ITEMS.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Testimoni ─────────────────────────────────────────────────────── */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-border text-center">
              <div className="flex gap-1 justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-primary text-xl">★</span>
                ))}
              </div>
              <p className="text-lg italic text-foreground mb-4">
                "El meu gos torna feliç i cansat. La millor inversió!"
              </p>
              <p className="font-semibold text-primary">Maria G.</p>
              <p className="text-sm text-muted-foreground">Client verificada · Barcelona</p>
            </div>
          </div>
        </section>

        {/* ── Formulari ─────────────────────────────────────────────────────── */}
        <section id="formulario" className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="bg-secondary rounded-2xl border border-border p-8">
              <h2 className="text-3xl font-bold text-primary mb-1">Sol·licita Pressupost</h2>
              <p className="text-muted-foreground mb-8">Et respondrem en menys de 24 hores</p>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Nom */}
                <div>
                  <label className="block text-sm font-medium mb-1">Nom complet *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="El teu nom"
                    className={inputClass("nombre")}
                  />
                  {errors.nombre && (
                    <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.nombre}
                    </div>
                  )}
                </div>

                {/* Email + Telèfon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
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
                    <label className="block text-sm font-medium mb-1">Telèfon *</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
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

                {/* Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Data d'entrada *</label>
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
                    <label className="block text-sm font-medium mb-1">Data de sortida *</label>
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

                {/* Animal */}
                <div>
                  <label className="block text-sm font-medium mb-1">Nom de l'animal *</label>
                  <input
                    type="text"
                    name="nombreMascota"
                    value={form.nombreMascota}
                    onChange={handleChange}
                    placeholder="Rex / Misu"
                    className={inputClass("nombreMascota")}
                  />
                  {errors.nombreMascota && (
                    <div className="flex items-center gap-1.5 mt-1 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.nombreMascota}
                    </div>
                  )}
                </div>

                {/* Tipus + Raça + Edat */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Tipus d'animal *</label>
                    <select
                      name="tipoMascota"
                      value={form.tipoMascota}
                      onChange={handleChange}
                      className={inputClass("tipoMascota")}
                    >
                      <option value="gos">Gos</option>
                      <option value="gat">Gat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Raça</label>
                    <input
                      type="text"
                      name="raza"
                      value={form.raza}
                      onChange={handleChange}
                      placeholder="Labrador, Persa..."
                      className={inputClass("raza")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Edat</label>
                    <input
                      type="text"
                      name="edad"
                      value={form.edad}
                      onChange={handleChange}
                      placeholder="Ex: 3 anys"
                      className={inputClass("edad")}
                    />
                  </div>
                </div>

                {/* Missatge */}
                <div>
                  <label className="block text-sm font-medium mb-1">Explica'ns el teu cas</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Necessitats especials, dieta, medicació..."
                    rows={3}
                    className={`${inputClass("mensaje")} resize-none`}
                  />
                </div>

                <input type="hidden" name="servicio" value="residencia-canina" />

                <Button
                  type="submit"
                  disabled={submitStatus === "loading" || submitStatus === "success"}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 font-semibold"
                >
                  {submitStatus === "loading"
                    ? "Enviant..."
                    : submitStatus === "success"
                    ? "✓ Enviat!"
                    : "Enviar Sol·licitud"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Responem en 24 h · Sense compromís
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* ── CTA final ─────────────────────────────────────────────────────── */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Llest per Reservar?</h2>
            <p className="text-lg text-white/85 mb-8">
              Contacta'ns avui. Estem disponibles tots els dies de la setmana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
                onClick={scrollToForm}
              >
                Reservar Estada
              </Button>
              <a
                href="tel:+34937790311"
                onClick={() => trackPhoneClick("landing_catala_cta_final")}
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
