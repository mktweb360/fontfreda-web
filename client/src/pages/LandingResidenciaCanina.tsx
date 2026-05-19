import { Button } from "@/components/ui/button";
import { Check, Clock, Heart, Home, Shield, Users } from "lucide-react";
import { useState } from "react";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

export default function LandingResidenciaCanina() {
  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  const features = [
    {
      icon: Home,
      title: "Dentro de la Casa",
      description: "Tu perro vive como parte de la familia",
    },
    {
      icon: Clock,
      title: "Flexible",
      description: "Estancias cortas, largas o indefinidas",
    },
    {
      icon: Heart,
      title: "Personalizado",
      description: "Cuidados adaptados a cada perro",
    },
    {
      icon: Users,
      title: "Socialización",
      description: "Interacción con otros perros",
    },
    {
      icon: Shield,
      title: "Seguridad 24h",
      description: "Vigilancia constante",
    },
    {
      icon: Check,
      title: "Completo",
      description: "Veterinaria incluida",
    },
  ];

  const testimonials = [
    {
      text: "Desde cachorro dejamos a Xato con Luis. Las instalaciones son estupendas y el trato excepcional.",
      author: "Montse",
      pet: "Xato",
    },
    {
      text: "A pesar de que Kala es miedosa, Luis la acogió perfectamente. Vino feliz y bien cuidada.",
      author: "Montse y Óscar",
      pet: "Kala",
    },
    {
      text: "Juliette llegó sin perder peso y más sociable. Recomendamos 100% Fontfreda.",
      author: "Almarisse y Alejandra",
      pet: "Juliette",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Residencia Canina en Barcelona
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Alojamiento familiar para tu perro con paseos diarios, atención personalizada y vigilancia 24 horas.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">4-5 paseos diarios en naturaleza</span>
                </div>
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Vigilancia 24 horas</span>
                </div>
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Atención veterinaria incluida</span>
                </div>
                <div className="flex gap-3">
                  <Check className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">Recogida y entrega a domicilio</span>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#formulario">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                    Solicitar Presupuesto
                  </Button>
                </a>
                <a href="tel:+34937790311">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-lg"
                  >
                    Llamar Ahora
                  </Button>
                </a>
              </div>
            </div>

            {/* Imagen */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🐕</div>
                  <p className="text-muted-foreground">Residencia Canina Fontfreda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            ¿Por Qué Elegir Fontfreda?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Nuestros Servicios Caninos
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Guardería Canina",
                description: "Para cachorros con atención especializada",
              },
              {
                title: "Residencia Canina",
                description: "Estancias de días, semanas o meses",
              },
              {
                title: "Hotel Canino",
                description: "Fin de semana y vacaciones",
              },
              {
                title: "Residencia de Larga Estancia",
                description: "Meses o años con precios especiales",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-secondary rounded-lg border border-border hover:border-primary transition-colors"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Lo Que Dicen Nuestros Clientes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-8">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
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
        </div>
      </section>

      {/* Incluye */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Lo Que Incluye Nuestro Servicio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Paseos diarios supervisados",
              "Vigilancia 24 horas",
              "Atención veterinaria",
              "Pienso de primeras marcas",
              "Habitaciones individuales",
              "Socialización con otros perros",
              "Medicamentos administrados",
              "Recogida y entrega",
              "Visitas permitidas",
              "Camas cómodas",
              "Agua fresca de manantiales",
              "Atención de necesidades especiales",
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section id="formulario" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Solicita tu Presupuesto
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-lg p-8">
            <div>
              <label className="block text-foreground font-medium mb-2">
                Nombre *
              </label>
              <input
                type="text"
                required
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                required
                value={formData.telefono}
                onChange={(e) =>
                  setFormData({ ...formData, telefono: e.target.value })
                }
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+34 93 779 03 11"
              />
            </div>

            <div>
              <label className="block text-foreground font-medium mb-2">
                Cuéntanos sobre tu perro
              </label>
              <textarea
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Nombre, edad, características especiales..."
                rows={4}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
            >
              Enviar Solicitud
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              Nos pondremos en contacto en menos de 24 horas
            </p>
          </form>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para que tu perro disfrute?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Contacta con nosotros hoy mismo. Estamos disponibles todos los días.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+34937790311">
              <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-8 py-6 text-base">
                📞 +34 93 779 03 11
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
                💬 WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
      <FloatingCTA language={language as 'es' | 'en'} contactUrl={language === 'en' ? '/en/contacto' : '/contacto'} />
      <Footer />
    </div>
  );
}
