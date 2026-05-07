import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: "general" | "canina" | "felina" | "valoracion";
}

const faqItems: FAQItem[] = [
  // General
  {
    id: "g1",
    categoria: "general",
    pregunta: "¿Fontfreda está abierto todo el año?",
    respuesta:
      "Sí, Fontfreda está abierto todo el año, incluyendo fines de semana y festivos. Disponibilidad sujeta a reserva previa.",
  },
  {
    id: "g2",
    categoria: "general",
    pregunta: "¿Ofrecen servicio de recogida y entrega?",
    respuesta:
      "Sí, ofrecemos servicio de recogida y entrega a domicilio para mayor comodidad. Consulta disponibilidad según tu zona.",
  },
  {
    id: "g3",
    categoria: "general",
    pregunta: "¿Cuál es el proceso de pago?",
    respuesta:
      "Realizamos un depósito del 30% para confirmar la reserva. El resto se paga antes de la llegada de tu mascota. Aceptamos transferencia bancaria y otros métodos.",
  },
  {
    id: "g4",
    categoria: "general",
    pregunta: "¿Puedo recibir actualizaciones de mi mascota?",
    respuesta:
      "Sí, enviamos fotos y actualizaciones diarias de tu mascota. Puedes estar tranquilo sabiendo cómo está en todo momento.",
  },

  // Residencia Canina
  {
    id: "c1",
    categoria: "canina",
    pregunta: "¿Cuál es la edad mínima para un perro?",
    respuesta:
      "Aceptamos cachorros a partir de 3 meses de edad, siempre que estén correctamente vacunados. Para cachorros muy jóvenes, realizamos una valoración especial.",
  },
  {
    id: "c2",
    categoria: "canina",
    pregunta: "¿Cuáles son los requisitos de ingreso para perros?",
    respuesta:
      "Tu perro debe estar vacunado (tetravalente al día), desparasitado (protección externa), tener microchip y, si es necesario según normativa, contar con el seguro a terceros correspondiente.",
  },
  {
    id: "c3",
    categoria: "canina",
    pregunta: "¿Aceptan estancias cortas (fin de semana)?",
    respuesta:
      "Sí, aceptamos estancias puntuales. El mínimo es de 2 noches. Consulta disponibilidad contactando con nosotros.",
  },
  {
    id: "c4",
    categoria: "canina",
    pregunta: "¿Qué pasa si pago más días de los que finalmente necesito?",
    respuesta:
      "Si pagas 10 días y al final estás solo 8, evaluamos caso por caso. Generalmente, se reembolsa la diferencia si nos lo comunicas con anticipación.",
  },
  {
    id: "c5",
    categoria: "canina",
    pregunta: "¿Puedo dejar comida especial para mi perro?",
    respuesta:
      "Sí, puedes traer la comida habitual de tu perro. Respetamos sus preferencias y necesidades dietéticas.",
  },

  // Residencia Felina
  {
    id: "f1",
    categoria: "felina",
    pregunta: "¿Aceptan gatos tímidos o miedosos?",
    respuesta:
      "Sí, tenemos experiencia con gatos de todos los temperamentos. Realizamos una valoración previa para asegurar que nuestro entorno es adecuado para su personalidad.",
  },
  {
    id: "f2",
    categoria: "felina",
    pregunta: "¿Cuáles son los requisitos para gatos?",
    respuesta:
      "Tu gato debe estar vacunado (trivalente y leucemia al día) y desparasitado. Microchip recomendado.",
  },
  {
    id: "f3",
    categoria: "felina",
    pregunta: "¿Pueden estar juntos dos gatos?",
    respuesta:
      "Si viven juntos en casa, pueden estar juntos en la residencia. Si no se conocen, los mantenemos separados por su seguridad.",
  },
  {
    id: "f4",
    categoria: "felina",
    pregunta: "¿Qué pasa si mi gato no come bien?",
    respuesta:
      "Contamos con experiencia en gatos con apetito selectivo. Realizamos una valoración previa y nos adaptamos a sus preferencias.",
  },

  // Valoración Previa
  {
    id: "v1",
    categoria: "valoracion",
    pregunta: "¿Por qué realizan valoración previa?",
    respuesta:
      "Realizamos una valoración previa porque queremos asegurar que nuestro modelo de alojamiento familiar es el más adecuado para tu mascota. No se trata de una negativa, sino de compatibilidad. Nuestro objetivo es que tu mascota esté feliz y segura.",
  },
  {
    id: "v2",
    categoria: "valoracion",
    pregunta: "¿Qué pasa si mi perro tiene problemas de comportamiento?",
    respuesta:
      "Tenemos experiencia con perros de todos los temperamentos. Realizamos una valoración individual para entender sus necesidades, rutinas y manejo. Si creemos que podemos ofrecerle un entorno seguro y adecuado, adelante.",
  },
  {
    id: "v3",
    categoria: "valoracion",
    pregunta: "¿Aceptan perros sujetos a normativa específica?",
    respuesta:
      "Sí, aceptamos perros de todas las características. Lo que valoramos es la compatibilidad con nuestro modelo de alojamiento familiar y la capacidad de nuestro equipo de ofrecerle un entorno seguro y adecuado.",
  },
  {
    id: "v4",
    categoria: "valoracion",
    pregunta: "¿Cuánto tiempo toma la valoración previa?",
    respuesta:
      "La valoración previa generalmente toma entre 15-30 minutos. Puede ser por teléfono, WhatsApp o presencial, según tu preferencia.",
  },
];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "general" | "canina" | "felina" | "valoracion" | "all"
  >("all");

  const categories = [
    { id: "all", label: "Todas" },
    { id: "general", label: "General" },
    { id: "canina", label: "Residencia Canina" },
    { id: "felina", label: "Residencia Felina" },
    { id: "valoracion", label: "Valoración Previa" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.categoria === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-secondary border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary mb-4">Preguntas Frecuentes</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros
              servicios de alojamiento familiar.
            </p>
          </div>
        </section>

        {/* Contenido Principal */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Filtros de Categoría */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() =>
                    setSelectedCategory(
                      cat.id as
                        | "general"
                        | "canina"
                        | "felina"
                        | "valoracion"
                        | "all"
                    )
                  }
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary border border-border text-foreground hover:border-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg overflow-hidden bg-white hover:border-primary transition-colors"
                >
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left">
                      {item.pregunta}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                        expandedId === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedId === item.id && (
                    <div className="px-6 py-4 bg-secondary border-t border-border">
                      <p className="text-muted-foreground">{item.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                ¿No encuentras la respuesta que buscas?
              </p>
              <a href="/contacto">
                <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors">
                  Contacta con Nosotros
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
