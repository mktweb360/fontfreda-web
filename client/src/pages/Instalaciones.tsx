import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SchemaMarkup, createBreadcrumbSchema } from "@/components/SchemaMarkup";
import { SEO } from "@/components/SEO";
import { HrefLang } from "@/components/HrefLang";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Trees, Home, Stethoscope, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { useState } from "react";

interface GalleryItem {
  id: string;
  title_es: string;
  title_en: string;
  description_es: string;
  description_en: string;
  category: "parques" | "interiores" | "servicios";
  image: string;
  details_es?: string;
  details_en?: string;
}

interface FAQItem {
  id: string;
  question_es: string;
  question_en: string;
  answer_es: string;
  answer_en: string;
  category: "seguridad" | "cuidado" | "comodidad";
}

export default function Instalaciones() {
  const [location] = useLocation();
  const currentPath = location.replace(/^\/en/, "") || "/instalaciones";

  const getLanguage = () => {
    if (typeof window === "undefined") return "es";
    const path = window.location.pathname;
    return path.startsWith("/en") ? "en" : "es";
  };
  const language = getLanguage();

  const [selectedCategory, setSelectedCategory] = useState<"todos" | "parques" | "interiores" | "servicios">("todos");
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [faqCategory, setFaqCategory] = useState<"todos" | "seguridad" | "cuidado" | "comodidad">("todos");

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: language === "es" ? "Inicio" : "Home", url: "https://www.fontfreda.net" },
    { name: language === "es" ? "Instalaciones" : "Facilities", url: "https://www.fontfreda.net/instalaciones" },
  ]);

  const galleryItems: GalleryItem[] = [
    {
      id: "parque-1",
      title_es: "Parque de Recreo 1",
      title_en: "Recreation Park 1",
      description_es: "Primer parque vallado de 500 m² con áreas de juego variadas",
      description_en: "First fenced park of 500 m² with varied play areas",
      category: "parques",
      image: "https://images.unsplash.com/photo-1633722715463-d30628519d59?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      details_es: "Espacio amplio y seguro con vegetación natural, zonas de sombra y áreas de juego dinámicas para perros de todas las edades.",
      details_en: "Spacious and safe area with natural vegetation, shaded zones and dynamic play areas for dogs of all ages.",
    },
    {
      id: "parque-2",
      title_es: "Parque de Recreo 2",
      title_en: "Recreation Park 2",
      description_es: "Segundo parque vallado de 450 m² con obstáculos de agilidad",
      description_en: "Second fenced park of 450 m² with agility obstacles",
      category: "parques",
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600&fit=crop",
      details_es: "Parque especializado en ejercicio y estimulación mental con obstáculos seguros y zonas de descanso.",
      details_en: "Specialized park for exercise and mental stimulation with safe obstacles and rest areas.",
    },
    {
      id: "parque-3",
      title_es: "Parque de Recreo 3",
      title_en: "Recreation Park 3",
      description_es: "Tercer parque vallado de 550 m² con piscina natural",
      description_en: "Third fenced park of 550 m² with natural pool",
      category: "parques",
      image: "https://images.unsplash.com/photo-1601758228578-f3355015b0c2?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      details_es: "Parque con acceso a agua para días calurosos, ideal para perros que disfrutan de actividades acuáticas.",
      details_en: "Park with water access for hot days, ideal for dogs that enjoy water activities.",
    },
    {
      id: "parque-4",
      title_es: "Parque de Recreo 4",
      title_en: "Recreation Park 4",
      description_es: "Cuarto parque vallado de 480 m² con zonas de socialización",
      description_en: "Fourth fenced park of 480 m² with socialization zones",
      category: "parques",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
      details_es: "Espacio diseñado para la interacción controlada entre perros, con supervisión profesional constante.",
      details_en: "Space designed for controlled interaction between dogs, with constant professional supervision.",
    },
    {
      id: "parque-5",
      title_es: "Parque de Recreo 5",
      title_en: "Recreation Park 5",
      description_es: "Quinto parque vallado de 400 m² con zona de entrenamiento",
      description_en: "Fifth fenced park of 400 m² with training area",
      category: "parques",
      image: "https://images.unsplash.com/photo-1558941508-8ae20fe33563?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      details_es: "Parque equipado para trabajar obediencia y comportamiento con profesionales certificados.",
      details_en: "Park equipped for working on obedience and behavior with certified professionals.",
    },
    {
      id: "interior-gatos",
      title_es: "Residencia Felina",
      title_en: "Cat Residence",
      description_es: "180 m² de espacio interior especializado para gatos",
      description_en: "180 m² of interior space specialized for cats",
      category: "interiores",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop",
      details_es: "Ambiente tranquilo y seguro con estructuras verticales, áreas de juego y descanso diseñadas específicamente para gatos.",
      details_en: "Calm and safe environment with vertical structures, play and rest areas specifically designed for cats.",
    },
    {
      id: "interior-descanso",
      title_es: "Áreas de Descanso",
      title_en: "Rest Areas",
      description_es: "Zonas interiores climatizadas para descanso y relajación",
      description_en: "Climate-controlled interior areas for rest and relaxation",
      category: "interiores",
      image: "https://images.unsplash.com/photo-1552053831-71594a27c62d?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      details_es: "Espacios cómodos y seguros con camas ergonómicas, temperatura controlada y luz natural.",
      details_en: "Comfortable and safe spaces with ergonomic beds, controlled temperature and natural light.",
    },
    {
      id: "interior-juego",
      title_es: "Áreas de Juego Interior",
      title_en: "Indoor Play Areas",
      description_es: "Espacios cubiertos para actividades en días de lluvia",
      description_en: "Covered spaces for activities on rainy days",
      category: "interiores",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop",
      details_es: "Zonas de juego protegidas con juguetes variados y enriquecimiento ambiental constante.",
      details_en: "Protected play areas with varied toys and constant environmental enrichment.",
    },
    {
      id: "servicio-veterinaria",
      title_es: "Servicio Veterinario",
      title_en: "Veterinary Service",
      description_es: "Clínica veterinaria en las instalaciones",
      description_en: "Veterinary clinic on the premises",
      category: "servicios",
      image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?ixlib=rb-4.0.3&w=800&h=600&fit=crop",
      details_es: "Servicio veterinario profesional disponible para emergencias y cuidados de salud preventivos.",
      details_en: "Professional veterinary service available for emergencies and preventive health care.",
    },
    {
      id: "servicio-higiene",
      title_es: "Servicio de Higiene",
      title_en: "Grooming Service",
      description_es: "Área de baño y aseo profesional",
      description_en: "Professional bathing and grooming area",
      category: "servicios",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop",
      details_es: "Instalaciones modernas para baño, secado y acondicionamiento con productos de calidad.",
      details_en: "Modern facilities for bathing, drying and conditioning with quality products.",
    },
  ];

  const faqItems: FAQItem[] = [
    {
      id: "seguridad-1",
      question_es: "¿Cómo garantizan la seguridad de los perros y gatos en los parques?",
      question_en: "How do you ensure dog and cat safety in the parks?",
      answer_es: "Contamos con vigilancia profesional constante, vallas de seguridad certificadas, y protocolos de emergencia. Todos nuestros cuidadores están entrenados en primeros auxilios veterinarios.",
      answer_en: "We have constant professional supervision, certified safety fencing, and emergency protocols. All our caregivers are trained in veterinary first aid.",
      category: "seguridad",
    },
    {
      id: "seguridad-2",
      question_es: "¿Qué sucede en caso de emergencia médica?",
      question_en: "What happens in case of medical emergency?",
      answer_es: "Disponemos de servicio veterinario en las instalaciones y protocolo de atención inmediata. Contactamos al propietario y al veterinario del animal de forma simultánea.",
      answer_en: "We have veterinary service on-site and immediate care protocol. We contact the owner and the animal's veterinarian simultaneously.",
      category: "seguridad",
    },
    {
      id: "seguridad-3",
      question_es: "¿Cómo se previenen peleas entre animales?",
      question_en: "How do you prevent fights between animals?",
      answer_es: "Realizamos evaluación comportamental previa, supervisión constante durante la socialización, y separamos animales incompatibles. Contamos con zonas de socialización controlada.",
      answer_en: "We conduct behavioral assessment beforehand, constant supervision during socialization, and separate incompatible animals. We have controlled socialization zones.",
      category: "seguridad",
    },
    {
      id: "cuidado-1",
      question_es: "¿Cómo se administran medicamentos y alimentos especiales?",
      question_en: "How are medications and special foods administered?",
      answer_es: "Registramos todos los medicamentos y dietas especiales. Nuestro equipo administra medicamentos según prescripción veterinaria con registro detallado de cada dosis.",
      answer_en: "We record all medications and special diets. Our team administers medications according to veterinary prescription with detailed dosage records.",
      category: "cuidado",
    },
    {
      id: "cuidado-2",
      question_es: "¿Cuál es la rutina diaria de ejercicio para los perros?",
      question_en: "What is the daily exercise routine for dogs?",
      answer_es: "Los perros realizan 5 paseos diarios en nuestros 5 parques de 400-600 m² cada uno. Combinamos ejercicio físico, estimulación mental y tiempo de descanso según la edad y energía del animal.",
      answer_en: "Dogs have 5 daily walks in our 5 parks of 400-600 m² each. We combine physical exercise, mental stimulation and rest time according to the animal's age and energy.",
      category: "cuidado",
    },
    {
      id: "cuidado-3",
      question_es: "¿Cómo se garantiza la higiene y limpieza?",
      question_en: "How is hygiene and cleanliness guaranteed?",
      answer_es: "Realizamos limpieza diaria de todas las áreas, desinfección regular, y disponemos de servicio de baño profesional. Mantenemos estándares de higiene veterinaria.",
      answer_en: "We perform daily cleaning of all areas, regular disinfection, and have professional bathing service. We maintain veterinary hygiene standards.",
      category: "cuidado",
    },
    {
      id: "comodidad-1",
      question_es: "¿Cómo son los espacios de descanso para los gatos?",
      question_en: "What are the rest spaces like for cats?",
      answer_es: "Disponemos de 180 m² de espacio interior especializado para gatos con zonas de descanso elevadas, escondites, enriquecimiento ambiental y separación de perros.",
      answer_en: "We have 180 m² of specialized interior space for cats with elevated rest areas, hiding spots, environmental enrichment and separation from dogs.",
      category: "comodidad",
    },
    {
      id: "comodidad-2",
      question_es: "¿Cuál es la temperatura y ventilación de las instalaciones?",
      question_en: "What is the temperature and ventilation of the facilities?",
      answer_es: "Mantenemos temperatura controlada (18-22°C en invierno, 20-24°C en verano) con ventilación natural y sistemas de aire acondicionado. Monitoreo constante de confort.",
      answer_en: "We maintain controlled temperature (18-22°C in winter, 20-24°C in summer) with natural ventilation and air conditioning systems. Constant comfort monitoring.",
      category: "comodidad",
    },
    {
      id: "comodidad-3",
      question_es: "¿Pueden los propietarios visitar a sus perros o gatos?",
      question_en: "Can owners visit their dogs or cats?",
      answer_es: "Sí, ofrecemos visitas programadas con previa coordinación. También compartimos fotos y videos diarios para que sigas la rutina de tu perro o gato.",
      answer_en: "Yes, we offer scheduled visits with prior coordination. We also share daily photos and videos so you can follow your dog or cat's routine.",
      category: "comodidad",
    },
  ];

  const content = {
    es: {
      title: "Instalaciones - Fontfreda",
      heading: "Nuestras Instalaciones",
      subtitle: "Descubre los espacios donde cuidamos a tu perro o gato",
      categories: {
        todos: "Todas",
        parques: "Parques de Recreo",
        interiores: "Espacios Interiores",
        servicios: "Servicios",
      },
      modal: {
        close: "Cerrar",
        prev: "Anterior",
        next: "Siguiente",
      },
      faq: {
        title: "Preguntas Frecuentes",
        subtitle: "Resolvemos tus dudas sobre el cuidado y seguridad de tu perro o gato",
        categories: {
          todos: "Todas",
          seguridad: "Seguridad",
          cuidado: "Cuidado",
          comodidad: "Comodidad",
        },
      },
    },
    en: {
      title: "Facilities - Fontfreda",
      heading: "Our Facilities",
      subtitle: "Discover the spaces where we care for your dog or cat",
      categories: {
        todos: "All",
        parques: "Recreation Parks",
        interiores: "Interior Spaces",
        servicios: "Services",
      },
      modal: {
        close: "Close",
        prev: "Previous",
        next: "Next",
      },
      faq: {
        title: "Frequently Asked Questions",
        subtitle: "We answer your questions about dog and cat care and safety",
        categories: {
          todos: "All",
          seguridad: "Safety",
          cuidado: "Care",
          comodidad: "Comfort",
        },
      },
    },
  };

  const lang = language === "en" ? content.en : content.es;

  const filteredItems = selectedCategory === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleImageClick = (item: GalleryItem) => {
    setSelectedImage(item);
    setCurrentImageIndex(filteredItems.indexOf(item));
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setSelectedImage(filteredItems[currentImageIndex - 1]);
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentImageIndex + 1]);
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "parques":
        return <Trees className="w-5 h-5" />;
      case "interiores":
        return <Home className="w-5 h-5" />;
      case "servicios":
        return <Stethoscope className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getTitle = (item: GalleryItem) => {
    return language === "en" ? item.title_en : item.title_es;
  };

  const getDescription = (item: GalleryItem) => {
    return language === "en" ? item.description_en : item.description_es;
  };

  const getDetails = (item: GalleryItem) => {
    return language === "en" ? item.details_en : item.details_es;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={language === "en" ? "Fontfreda Facilities | Dog and Cat Boarding Gallery" : "Instalaciones Fontfreda | Galería de Residencia Canina y Felina"}
        description={language === "en" ? "Discover Residencia Fontfreda facilities: 5 parks of 400-600m², 180m² exclusively for cats, individual rooms, natural spring water and 24h surveillance." : "Conoce las instalaciones de Residencia Fontfreda: 5 parques de 400-600m², 180m² exclusivos para gatos, habitaciones individuales, agua natural de manantial y vigilancia 24h."}
        keywords={language === "en" ? "dog boarding facilities, dog parks, cat residence spaces, Fontfreda residence gallery" : "instalaciones residencia canina, parques perros, espacios gatos residencia, galería residencia Fontfreda"}
        canonical={language === "en" ? "https://www.fontfreda.net/en/instalaciones" : "https://www.fontfreda.net/instalaciones"}
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

        {/* Category Filter */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {(Object.keys(lang.categories) as Array<keyof typeof lang.categories>).map((key) => (
                <Button
                  key={key}
                  onClick={() => setSelectedCategory(key as any)}
                  variant={selectedCategory === key ? "default" : "outline"}
                  className={`${
                    selectedCategory === key
                      ? "bg-primary text-primary-foreground"
                      : "border-border text-foreground hover:bg-secondary"
                  }`}
                >
                  {lang.categories[key]}
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleImageClick(item)}
                  className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-secondary hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={getTitle(item)}
                      title={getTitle(item)}
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="300"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-4">
                      <div className="text-white">
                        <div className="flex items-center gap-2 mb-2">
                          {getCategoryIcon(item.category)}
                          <h3 className="text-lg font-semibold">{getTitle(item)}</h3>
                        </div>
                        <p className="text-sm text-gray-100">{getDescription(item)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={getTitle(selectedImage)}
                title={getTitle(selectedImage)}
                loading="eager"
                decoding="async"
                width="800"
                height="600"
                className="w-full h-auto rounded-lg"
              />

              {/* Navigation Buttons */}
              {currentImageIndex > 0 && (
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              )}

              {currentImageIndex < filteredItems.length - 1 && (
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              )}
            </div>

            {/* Image Info */}
            <div className="bg-secondary border border-border rounded-lg p-6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                {getCategoryIcon(selectedImage.category)}
                <h2 className="text-2xl font-bold text-primary">{getTitle(selectedImage)}</h2>
              </div>
              <p className="text-muted-foreground mb-3">{getDescription(selectedImage)}</p>
              <p className="text-foreground">{getDetails(selectedImage)}</p>
              <p className="text-sm text-muted-foreground mt-4">
                {currentImageIndex + 1} / {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">
            {lang.faq.title}
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
            {lang.faq.subtitle}
          </p>

          {/* FAQ Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {(Object.keys(lang.faq.categories) as Array<keyof typeof lang.faq.categories>).map((key) => (
              <Button
                key={key}
                onClick={() => setFaqCategory(key as any)}
                variant={faqCategory === key ? "default" : "outline"}
                className={`${
                  faqCategory === key
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-background"
                }`}
              >
                {lang.faq.categories[key]}
              </Button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-3xl mx-auto space-y-4">
            {(faqCategory === "todos"
              ? faqItems
              : faqItems.filter((item) => item.category === faqCategory)
            ).map((item) => (
              <div
                key={item.id}
                className="border border-border rounded-lg bg-background overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === item.id ? null : item.id)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">
                    {language === "en" ? item.question_en : item.question_es}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform duration-300 ${
                      expandedFAQ === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFAQ === item.id && (
                  <div className="px-6 py-4 bg-secondary border-t border-border">
                    <p className="text-muted-foreground">
                      {language === "en" ? item.answer_en : item.answer_es}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
