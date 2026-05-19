import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SchemaMarkup, createBreadcrumbSchema } from "@/components/SchemaMarkup";
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

  const content = {
    es: {
      title: "Instalaciones - Fontfreda",
      heading: "Nuestras Instalaciones",
      subtitle: "Descubre los espacios donde cuidamos a tu mascota",
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
        subtitle: "Resolvemos tus dudas sobre el cuidado y seguridad de tu mascota",
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
      subtitle: "Discover the spaces where we care for your pet",
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
        subtitle: "We answer your questions about pet care and safety",
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

      <Footer />
    </div>
  );
}
