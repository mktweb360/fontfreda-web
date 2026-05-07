import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoMascota: "perro",
    nombreMascota: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Mostrar mensaje de éxito
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoMascota: "perro",
      nombreMascota: "",
      mensaje: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-secondary border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary mb-4">Contacta con Fontfreda</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos encantaría conocer a tu mascota y ayudarte a encontrar la mejor
              opción de alojamiento familiar.
            </p>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Formulario */}
              <div className="lg:col-span-2">
                <h2 className="text-primary mb-8">Envíanos un Mensaje</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tu nombre"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+34 93 XXX XX XX"
                    />
                  </div>

                  {/* Tipo de Mascota */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Mascota *
                    </label>
                    <select
                      name="tipoMascota"
                      value={formData.tipoMascota}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="perro">Perro</option>
                      <option value="gato">Gato</option>
                      <option value="ambos">Ambos</option>
                    </select>
                  </div>

                  {/* Nombre de la Mascota */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre de la Mascota
                    </label>
                    <input
                      type="text"
                      name="nombreMascota"
                      value={formData.nombreMascota}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Nombre de tu mascota"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Cuéntanos sobre tu mascota y sus necesidades..."
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      Cuéntanos un poco sobre tu mascota: edad, temperamento,
                      necesidades especiales o cualquier información que creas
                      relevante.
                    </p>
                  </div>

                  {/* Botón Enviar */}
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-base"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </div>

              {/* Información de Contacto */}
              <div className="lg:col-span-1">
                <h2 className="text-primary mb-8">Información de Contacto</h2>

                <div className="space-y-8">
                  {/* Teléfono */}
                  <div className="flex gap-4">
                    <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Teléfono
                      </h3>
                      <a
                        href="tel:+34937790311"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +34 93 779 03 11
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:info@fontfreda.net"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@fontfreda.net
                      </a>
                    </div>
                  </div>

                  {/* Ubicación */}
                  <div className="flex gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Ubicación
                      </h3>
                      <p className="text-muted-foreground">
                        Alt Penedés
                        <br />
                        Barcelona, España
                      </p>
                    </div>
                  </div>

                  {/* Horarios */}
                  <div className="flex gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Horarios
                      </h3>
                      <p className="text-muted-foreground">
                        Lunes a Domingo
                        <br />
                        9:00 - 20:00
                      </p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="pt-4 border-t border-border">
                    <a
                      href="https://wa.me/34937790311"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        Contactar por WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mapa (Placeholder) */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-primary mb-8 text-center">Ubicación</h2>
            <div className="w-full h-96 bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">
                Mapa interactivo - Alt Penedés, Barcelona
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
