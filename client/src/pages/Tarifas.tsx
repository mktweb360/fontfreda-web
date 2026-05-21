import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SchemaMarkup, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { Check, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Tarifas() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/tarifas";

  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: language === "es" ? "Inicio" : "Home", url: "https://www.fontfreda.net" },
    { name: language === "es" ? "Tarifas" : "Pricing", url: "https://www.fontfreda.net/tarifas" },
  ]);

  const content = {
    es: {
      title: "Tarifas - Residencia Canina y Felina",
      heading: "Tarifas Transparentes y Competitivas",
      subtitle: "Precios adaptados a cada servicio y duración de estancia",
      services: [
        {
          name: "Residencia Canina",
          description: "Alojamiento para perros con atención personalizada. Descuentos para 2 o más perros.",
          prices: [
            { duration: "Box exterior", price: "€20/día" },
            { duration: "Box interior con calefacción", price: "€28/día" },
            { duration: "Habitación individual con calefacción", price: "€40/día" },
            { duration: "Cachorros (<10 meses)", price: "€21/día" },
          ],
          features: [
            "5 paseos diarios",
            "Habitación individual cubierta",
            "Alimentación incluida",
            "Vigilancia 24h",
            "Atención veterinaria",
            "Socialización con otros perros",
          ],
          highlight: false,
        },
        {
          name: "Residencia Felina",
          description: "Espacio especializado para gatos con total libertad. Descuentos para 2 o más gatos.",
          prices: [
            { duration: "Gatos adultos", price: "€18/día" },
            { duration: "Gatitos (<10 meses)", price: "€19/día" },
            { duration: "2+ gatos (cada uno)", price: "Consultar descuento" },
            { duration: "Larga estancia", price: "Consultar tarifa especial" },
          ],
          features: [
            "180 m² de espacio interior",
            "Libertad total de movimiento",
            "Alimentación incluida",
            "Vigilancia 24h",
            "Atención veterinaria",
            "Ambiente tranquilo y seguro",
          ],
          highlight: false,
        },
        {
          name: "Larga Estancia (Premium)",
          description: "Servicio premium para estancias prolongadas",
          prices: [
            { duration: "1 mes", price: "€480" },
            { duration: "3 meses", price: "€1,320 (€14.67/noche)" },
            { duration: "6 meses", price: "€2,400 (€13.33/noche)" },
            { duration: "1 año", price: "€4,200 (€11.67/noche)" },
          ],
          features: [
            "Habitación individual cubierta",
            "5 paseos diarios en parques vallados",
            "Alimentación y suplementos",
            "Desparasitación y vacunación",
            "Medicamentos y atención veterinaria",
            "Atención de necesidades especiales",
          ],
          highlight: true,
        },
        {
          name: "Guardería Canina",
          description: "Servicio de día para cachorros y perros adultos",
          prices: [
            { duration: "Día completo (8h)", price: "€30" },
            { duration: "Medio día (4h)", price: "€18" },
            { duration: "Pack 10 días", price: "€270 (€27/día)" },
            { duration: "Pack 20 días", price: "€500 (€25/día)" },
          ],
          features: [
            "Actividades y juegos supervisados",
            "Socialización con otros perros",
            "Snack y agua incluidos",
            "Vigilancia constante",
            "Atención personalizada",
            "Ideal para cachorros",
          ],
          highlight: false,
        },
      ],
      additionalServices: [
        { name: "Recogida a Barcelona capital", price: "€25-30 (según zona)" },
        { name: "Entrega a Barcelona capital", price: "€25-30 (según zona)" },
        { name: "Baño y acicalamiento", price: "€20" },
        { name: "Medicamentos (administración)", price: "€5/día" },
        { name: "Dieta especial", price: "€5/día" },
      ],
      requirements: {
        title: "Requisitos para el Ingreso",
        dogs: [
          "Vacuna pentavalente mínimo",
          "Vacuna heptavalente (recomendada)",
          "Vacuna tos de perrera",
          "Desparasitación al día",
          "Doble protección parásitos externos en verano (pipeta + collar)",
          "Microchip identificativo",
          "Seguro de responsabilidad civil (razas potencialmente peligrosas)",
        ],
        cats: [
          "Vacuna trivalente mínimo",
          "Vacuna leucemia felina",
          "Desparasitación al día",
          "Protección parásitos externos (pipeta recomendada)",
          "Microchip identificativo",
        ],
      },
      faq: [
        {
          question: "¿Hay descuentos por larga duración?",
          answer: "Sí, ofrecemos descuentos progresivos. A partir de 15 noches en Residencia Canina, el precio baja a €18/noche. En Larga Estancia, cuanto mayor es la duración, mayor es el descuento.",
        },
        {
          question: "¿Qué incluye el precio?",
          answer: "El precio incluye alojamiento, alimentación, vigilancia 24h, paseos diarios (en residencia), y atención básica. Servicios adicionales como medicamentos o dietas especiales tienen coste extra.",
        },
        {
          question: "¿Hay recargo por temporada alta?",
          answer: "Sí, en verano y períodos vacacionales (Navidad, Semana Santa) aplicamos un recargo del 10-15% sobre las tarifas base.",
        },
        {
          question: "¿Cómo se realiza el pago?",
          answer: "Aceptamos transferencia bancaria, tarjeta de crédito y PayPal. Para estancias largas, podemos acordar un plan de pago en cuotas.",
        },
        {
          question: "¿Hay descuentos para clientes recurrentes?",
          answer: "Sí, los clientes que reservan regularmente reciben un 5% de descuento adicional. Consúltanos para más información.",
        },
      ],
      cta: "Solicitar Presupuesto Personalizado",
      ctaSubtitle: "¿Tienes dudas sobre tarifas? Contacta con nosotros para un presupuesto personalizado según las necesidades de tu perro o gato.",
    },
    en: {
      title: "Pricing - Dog and Cat Boarding",
      heading: "Transparent and Competitive Pricing",
      subtitle: "Prices adapted to each service and length of stay",
      services: [
        {
          name: "Dog Boarding",
          description: "Dog accommodation with personalized attention. Discounts for 2 or more dogs.",
          prices: [
            { duration: "Outdoor box", price: "€20/day" },
            { duration: "Indoor box with heating", price: "€28/day" },
            { duration: "Individual room with heating", price: "€40/day" },
            { duration: "Puppies (<10 months)", price: "€21/day" },
          ],
          features: [
            "5 daily walks",
            "Individual covered room",
            "Food included",
            "24h monitoring",
            "Veterinary care",
            "Socialization with other dogs",
          ],
          highlight: false,
        },
        {
          name: "Cat Boarding",
          description: "Specialized space for cats with total freedom. Discounts for 2 or more cats.",
          prices: [
            { duration: "Adult cats", price: "€18/day" },
            { duration: "Kittens (<10 months)", price: "€19/day" },
            { duration: "2+ cats (each)", price: "Ask for discount" },
            { duration: "Long stay", price: "Special rate available" },
          ],
          features: [
            "180 m² indoor space",
            "Complete freedom of movement",
            "Food included",
            "24h monitoring",
            "Veterinary care",
            "Calm and safe environment",
          ],
          highlight: false,
        },
        {
          name: "Long Stay (Premium)",
          description: "Premium service for extended stays",
          prices: [
            { duration: "1 month", price: "€480" },
            { duration: "3 months", price: "€1,320 (€14.67/night)" },
            { duration: "6 months", price: "€2,400 (€13.33/night)" },
            { duration: "1 year", price: "€4,200 (€11.67/night)" },
          ],
          features: [
            "Individual covered room",
            "5 daily walks in fenced parks",
            "Food and supplements",
            "Deworming and vaccination",
            "Medications and veterinary care",
            "Special needs attention",
          ],
          highlight: true,
        },
        {
          name: "Dog Daycare",
          description: "Day service for puppies and adult dogs",
          prices: [
            { duration: "Full day (8h)", price: "€30" },
            { duration: "Half day (4h)", price: "€18" },
            { duration: "10-day pack", price: "€270 (€27/day)" },
            { duration: "20-day pack", price: "€500 (€25/day)" },
          ],
          features: [
            "Supervised activities and games",
            "Socialization with other dogs",
            "Snack and water included",
            "Constant monitoring",
            "Personalized attention",
            "Ideal for puppies",
          ],
          highlight: false,
        },
      ],
      additionalServices: [
        { name: "Pickup from Barcelona city", price: "€25-30 (depending on area)" },
        { name: "Delivery to Barcelona city", price: "€25-30 (depending on area)" },
        { name: "Bath and grooming", price: "€20" },
        { name: "Medication administration", price: "€5/day" },
        { name: "Special diet", price: "€5/day" },
      ],
      requirements: {
        title: "Entry Requirements",
        dogs: [
          "Pentavalent vaccine minimum",
          "Heptavalent vaccine (recommended)",
          "Kennel cough vaccine",
          "Deworming up to date",
          "Double parasite protection in summer (pipette + collar)",
          "Microchip identification",
          "Liability insurance (potentially dangerous breeds)",
        ],
        cats: [
          "Trivalent vaccine minimum",
          "Feline leukemia vaccine",
          "Deworming up to date",
          "External parasite protection (pipette recommended)",
          "Microchip identification",
        ],
      },
      faq: [
        {
          question: "Are there discounts for long stays?",
          answer: "Yes, we offer progressive discounts. From 15 nights in Dog Boarding, the price drops to €18/night. In Long Stay, the longer the duration, the greater the discount.",
        },
        {
          question: "What is included in the price?",
          answer: "The price includes accommodation, food, 24h monitoring, daily walks (in boarding), and basic care. Additional services like medications or special diets have an extra cost.",
        },
        {
          question: "Is there a surcharge for peak season?",
          answer: "Yes, during summer and holiday periods (Christmas, Easter) we apply a 10-15% surcharge on base rates.",
        },
        {
          question: "How is payment made?",
          answer: "We accept bank transfer, credit card and PayPal. For long stays, we can arrange a payment plan in installments.",
        },
        {
          question: "Are there discounts for regular customers?",
          answer: "Yes, customers who book regularly receive an additional 5% discount. Contact us for more information.",
        },
      ],
      cta: "Request Custom Quote",
      ctaSubtitle: "Have questions about pricing? Contact us for a custom quote based on your dog or cat's needs.",
    },
  };

  const lang = language === "en" ? content.en : content.es;

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={language === "en" ? "Dog and Cat Boarding Rates | 2026 Prices | Fontfreda" : "Tarifas Residencia Canina y Felina | Precios 2026 | Fontfreda"}
        description={language === "en" ? "Dog boarding rates from €20/day (outdoor box), €28 (indoor with heating), €40 (individual). Cats from €18/day. Discounts for multiple dogs and long-term stays." : "Tarifas residencia canina desde 20€/día (box exterior), 28€ (interior con calefacción), 40€ (individual). Gatos desde 18€/día. Descuentos para múltiples perros y larga estancia."}
        keywords={language === "en" ? "dog boarding rates, pet accommodation prices, cat boarding rates, daycare prices, boarding discounts" : "tarifas residencia canina, precios alojamiento perros, tarifas residencia felina, precios guardería, descuentos residencia"}
        canonical={language === "en" ? "https://www.fontfreda.net/en/tarifas" : "https://www.fontfreda.net/tarifas"}
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

        {/* Pricing Cards */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lang.services.map((service, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg border-2 p-8 transition-all ${
                    service.highlight
                      ? "border-primary bg-primary/5 md:col-span-2 md:max-w-2xl md:mx-auto"
                      : "border-border bg-background"
                  }`}
                >
                  {service.highlight && (
                    <div className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {language === "es" ? "Más Popular" : "Most Popular"}
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Prices */}
                  <div className="space-y-3 mb-8">
                    {service.prices.map((price, pidx) => (
                      <div key={pidx} className="flex justify-between items-center pb-3 border-b border-border/50">
                        <span className="text-sm text-foreground">
                          {price.duration}
                        </span>
                        <span className="font-bold text-lg text-primary">
                          {price.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12">
              {language === "es" ? "Servicios Adicionales" : "Additional Services"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {lang.additionalServices.map((service, idx) => (
                <div key={idx} className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                  <span className="font-medium text-foreground">
                    {service.name}
                  </span>
                  <span className="text-primary font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12">
              {lang.requirements.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">
                  {language === "es" ? "Perros" : "Dogs"}
                </h3>
                <ul className="space-y-4">
                  {lang.requirements.dogs.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-6">
                  {language === "es" ? "Gatos" : "Cats"}
                </h3>
                <ul className="space-y-4">
                  {lang.requirements.cats.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12">
              {language === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
            </h2>
            <div className="space-y-6 max-w-3xl">
              {lang.faq.map((item, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg border border-border">
                  <h3 className="font-semibold text-primary mb-3">
                    {item.question}
                  </h3>
                  <p className="text-foreground text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">
              {lang.cta}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {lang.ctaSubtitle}
            </p>
            <Link href={language === "es" ? "/contacto" : "/en/contacto"} className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors">
                {language === "es" ? "Contactar Ahora" : "Contact Now"}
              </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
