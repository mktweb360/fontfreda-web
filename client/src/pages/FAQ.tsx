import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HrefLang } from "@/components/HrefLang";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "wouter";

interface FAQItem {
  id: string;
  pregunta: string;
  respuesta: string;
  categoria: "general" | "canina" | "felina" | "valoracion";
}

const faqItemsES: FAQItem[] = [
  { id: "g1", categoria: "general", pregunta: "¿Fontfreda está abierto todo el año?", respuesta: "Sí, Fontfreda está abierto todo el año, incluyendo fines de semana y festivos. Disponibilidad sujeta a reserva previa." },
  { id: "g2", categoria: "general", pregunta: "¿Ofrecen servicio de recogida y entrega?", respuesta: "Sí, ofrecemos servicio de recogida y entrega a domicilio para mayor comodidad. Consulta disponibilidad según tu zona." },
  { id: "g3", categoria: "general", pregunta: "¿Cuál es el proceso de pago?", respuesta: "Realizamos un depósito del 30% para confirmar la reserva. El resto se paga antes de la llegada de tu perro o gato. Aceptamos transferencia bancaria y otros métodos." },
  { id: "g4", categoria: "general", pregunta: "¿Puedo recibir actualizaciones de mi perro o gato?", respuesta: "Sí, enviamos fotos y actualizaciones diarias. Puedes estar tranquilo sabiendo cómo está en todo momento." },
  { id: "c1", categoria: "canina", pregunta: "¿Cuál es la edad mínima para un perro?", respuesta: "Aceptamos cachorros a partir de 3 meses de edad, siempre que estén correctamente vacunados. Para cachorros muy jóvenes, realizamos una valoración especial." },
  { id: "c2", categoria: "canina", pregunta: "¿Cuáles son los requisitos de ingreso para perros?", respuesta: "Tu perro debe estar vacunado (tetravalente al día), desparasitado con protección externa (pipeta o collar antiparásitos), tener microchip y, si es necesario según normativa, contar con el seguro a terceros correspondiente." },
  { id: "c3", categoria: "canina", pregunta: "¿Aceptan estancias cortas (fin de semana)?", respuesta: "Sí, aceptamos estancias puntuales. El mínimo es de 2 noches. Consulta disponibilidad contactando con nosotros." },
  { id: "c4", categoria: "canina", pregunta: "¿Qué pasa si pago más días de los que finalmente necesito?", respuesta: "Si pagas 10 días y al final estás solo 8, evaluamos caso por caso. Generalmente, se reembolsa la diferencia si nos lo comunicas con anticipación." },
  { id: "c5", categoria: "canina", pregunta: "¿Puedo dejar comida especial para mi perro?", respuesta: "Sí, puedes traer la comida habitual de tu perro. Respetamos sus preferencias y necesidades dietéticas." },
  { id: "f1", categoria: "felina", pregunta: "¿Aceptan gatos tímidos o miedosos?", respuesta: "Sí, tenemos experiencia con gatos de todos los temperamentos. Realizamos una valoración previa para asegurar que nuestro entorno es adecuado para su personalidad." },
  { id: "f2", categoria: "felina", pregunta: "¿Cuáles son los requisitos para gatos?", respuesta: "Tu gato debe estar vacunado (trivalente y leucemia felina al día), desparasitado y tener la pipeta antiparásitos aplicada. Microchip recomendado." },
  { id: "f3", categoria: "felina", pregunta: "¿Pueden estar juntos dos gatos?", respuesta: "Si viven juntos en casa, pueden estar juntos en la residencia. Si no se conocen, los mantenemos separados por su seguridad." },
  { id: "f4", categoria: "felina", pregunta: "¿Qué pasa si mi gato no come bien?", respuesta: "Contamos con experiencia en gatos con apetito selectivo. Realizamos una valoración previa y nos adaptamos a sus preferencias." },
  { id: "v1", categoria: "valoracion", pregunta: "¿Por qué realizan valoración previa?", respuesta: "Realizamos una valoración previa porque queremos asegurar que nuestro modelo de alojamiento familiar es el más adecuado. No se trata de una negativa, sino de compatibilidad. Nuestro objetivo es que tu perro o gato esté feliz y seguro." },
  { id: "v2", categoria: "valoracion", pregunta: "¿Qué pasa si mi perro tiene problemas de comportamiento?", respuesta: "Tenemos experiencia con perros de todos los temperamentos. Realizamos una valoración individual para entender sus necesidades, rutinas y manejo. Si creemos que podemos ofrecerle un entorno seguro y adecuado, adelante." },
  { id: "v3", categoria: "valoracion", pregunta: "¿Aceptan perros sujetos a normativa específica?", respuesta: "Sí, aceptamos perros de todas las características. Lo que valoramos es la compatibilidad con nuestro modelo de alojamiento familiar y la capacidad de nuestro equipo de ofrecerle un entorno seguro y adecuado." },
  { id: "v4", categoria: "valoracion", pregunta: "¿Cuánto tiempo toma la valoración previa?", respuesta: "La valoración previa generalmente toma entre 15-30 minutos. Puede ser por teléfono, WhatsApp o presencial, según tu preferencia." },
];

const faqItemsEN: FAQItem[] = [
  { id: "g1", categoria: "general", pregunta: "Is Fontfreda open all year round?", respuesta: "Yes, Fontfreda is open all year round, including weekends and holidays. Availability subject to prior booking." },
  { id: "g2", categoria: "general", pregunta: "Do you offer pickup and delivery service?", respuesta: "Yes, we offer home pickup and delivery service for greater convenience. Check availability according to your area." },
  { id: "g3", categoria: "general", pregunta: "What is the payment process?", respuesta: "We require a 30% deposit to confirm the booking. The rest is paid before your dog or cat arrives. We accept bank transfer and other methods." },
  { id: "g4", categoria: "general", pregunta: "Can I receive updates about my dog or cat?", respuesta: "Yes, we send daily photos and updates. You can rest easy knowing how they are at all times." },
  { id: "c1", categoria: "canina", pregunta: "What is the minimum age for a dog?", respuesta: "We accept puppies from 3 months of age, as long as they are correctly vaccinated. For very young puppies, we carry out a special assessment." },
  { id: "c2", categoria: "canina", pregunta: "What are the admission requirements for dogs?", respuesta: "Your dog must be vaccinated (tetravalent up to date), dewormed with external protection (anti-parasite pipette or collar), microchipped and, if necessary by regulation, have the corresponding third-party insurance." },
  { id: "c3", categoria: "canina", pregunta: "Do you accept short stays (weekends)?", respuesta: "Yes, we accept punctual stays. Minimum is 2 nights. Check availability by contacting us." },
  { id: "c4", categoria: "canina", pregunta: "What if I pay for more days than I finally need?", respuesta: "If you pay for 10 days and end up needing only 8, we evaluate case by case. Generally, the difference is refunded if you let us know in advance." },
  { id: "c5", categoria: "canina", pregunta: "Can I leave special food for my dog?", respuesta: "Yes, you can bring your dog's usual food. We respect their preferences and dietary needs." },
  { id: "f1", categoria: "felina", pregunta: "Do you accept shy or fearful cats?", respuesta: "Yes, we have experience with cats of all temperaments. We carry out a prior assessment to ensure our environment is suitable for their personality." },
  { id: "f2", categoria: "felina", pregunta: "What are the requirements for cats?", respuesta: "Your cat must be vaccinated (trivalent and feline leukemia up to date), dewormed and have applied an anti-parasite pipette. Microchip recommended." },
  { id: "f3", categoria: "felina", pregunta: "Can two cats stay together?", respuesta: "If they live together at home, they can stay together at the boarding. If they don't know each other, we keep them separated for their safety." },
  { id: "f4", categoria: "felina", pregunta: "What if my cat doesn't eat well?", respuesta: "We have experience with cats with selective appetite. We carry out a prior assessment and adapt to their preferences." },
  { id: "v1", categoria: "valoracion", pregunta: "Why do you do a prior assessment?", respuesta: "We carry out a prior assessment because we want to ensure that our family accommodation model is the most suitable. It's not a refusal, but a matter of compatibility. Our goal is for your dog or cat to be happy and safe." },
  { id: "v2", categoria: "valoracion", pregunta: "What if my dog has behavioral problems?", respuesta: "We have experience with dogs of all temperaments. We carry out an individual assessment to understand their needs, routines and handling. If we believe we can offer a safe and adequate environment, go ahead." },
  { id: "v3", categoria: "valoracion", pregunta: "Do you accept dogs subject to specific regulations?", respuesta: "Yes, we accept dogs of all characteristics. What we value is compatibility with our family accommodation model and our team's ability to offer a safe and adequate environment." },
  { id: "v4", categoria: "valoracion", pregunta: "How long does the prior assessment take?", respuesta: "The prior assessment generally takes between 15-30 minutes. It can be by phone, WhatsApp or in person, depending on your preference." },
];

export default function FAQ() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const currentPath = "/preguntas-frecuentes";

  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "general" | "canina" | "felina" | "valoracion" | "all"
  >("all");

  const faqItems = isEnglish ? faqItemsEN : faqItemsES;

  const t = isEnglish ? {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to the most common questions about our family accommodation services.",
    categories: [
      { id: "all", label: "All" },
      { id: "general", label: "General" },
      { id: "canina", label: "Dog Boarding" },
      { id: "felina", label: "Cat Boarding" },
      { id: "valoracion", label: "Prior Assessment" },
    ],
    notFound: "Can't find the answer you're looking for?",
    contactBtn: "Contact Us",
    contactLink: "/en/contacto",
  } : {
    title: "Preguntas Frecuentes",
    subtitle: "Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de alojamiento familiar.",
    categories: [
      { id: "all", label: "Todas" },
      { id: "general", label: "General" },
      { id: "canina", label: "Residencia Canina" },
      { id: "felina", label: "Residencia Felina" },
      { id: "valoracion", label: "Valoración Previa" },
    ],
    notFound: "¿No encuentras la respuesta que buscas?",
    contactBtn: "Contacta con Nosotros",
    contactLink: "/contacto",
  };

  const filteredItems =
    selectedCategory === "all"
      ? faqItems
      : faqItems.filter((item) => item.categoria === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <HrefLang currentPath={currentPath} />
      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-secondary border-b border-border">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-primary mb-4">{t.title}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {t.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() =>
                    setSelectedCategory(cat.id as "general" | "canina" | "felina" | "valoracion" | "all")
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

            <div className="space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-border rounded-lg overflow-hidden bg-white hover:border-primary transition-colors"
                >
                  <button
                    onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left">{item.pregunta}</h3>
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

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">{t.notFound}</p>
              <Link href={t.contactLink} className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors">
                {t.contactBtn}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
