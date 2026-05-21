import { useEffect } from "react";

interface SchemaMarkupProps {
  type:
    | "LocalBusiness"
    | "FAQPage"
    | "Service"
    | "Organization"
    | "BreadcrumbList"
    | "BlogPosting"
    | "WebSite"
    | "Product"
    | "Review";
  data: Record<string, any>;
}

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [data]);

  return null;
}

// =====================================================
// LocalBusiness Schema - Para SEO Local Barcelona
// =====================================================
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AnimalShelter"],
  "@id": "https://www.fontfreda.net/#localbusiness",
  name: "Residencia Fontfreda",
  alternateName: "Residencia Canina y Felina Fontfreda",
  description:
    "Residencia familiar para perros y gatos en Barcelona. Alojamiento en plena naturaleza con atención personalizada, 5 paseos diarios, atención veterinaria y 180m² exclusivos para gatos.",
  url: "https://www.fontfreda.net",
  telephone: "+34937790311",
  email: "info@fontfreda.net",
  image: [
    "https://www.fontfreda.net/wp-content/uploads/2016/12/cat-and-dog-slide2.jpg",
  ],
  logo: "https://www.fontfreda.net/wp-content/uploads/2017/04/logo-residencia-fontfreda-header.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Finca Can Farigola",
    addressLocality: "Gelida",
    addressRegion: "Barcelona",
    postalCode: "08790",
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.4322,
    longitude: 1.8694,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Barcelona",
    },
    {
      "@type": "AdministrativeArea",
      name: "Alt Penedès",
    },
    {
      "@type": "AdministrativeArea",
      name: "Cataluña",
    },
  ],
  priceRange: "€€",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer", "Bizum"],
  currenciesAccepted: "EUR",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "12:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "14:00",
      closes: "15:30",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Residencia",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residencia Canina - Box Exterior",
        },
        price: "20",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "20",
          priceCurrency: "EUR",
          unitText: "DAY",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residencia Canina - Box Interior con Calefacción",
        },
        price: "28",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "28",
          priceCurrency: "EUR",
          unitText: "DAY",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residencia Canina - Habitación Individual con Calefacción",
        },
        price: "40",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "40",
          priceCurrency: "EUR",
          unitText: "DAY",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Residencia Felina",
        },
        price: "18",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "18",
          priceCurrency: "EUR",
          unitText: "DAY",
        },
      },
    ],
  },
  sameAs: [
    "https://www.facebook.com/fontfreda",
    "https://www.instagram.com/fontfreda",
  ],
};

// =====================================================
// Organization Schema
// =====================================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.fontfreda.net/#organization",
  name: "Residencia Fontfreda",
  url: "https://www.fontfreda.net",
  logo: {
    "@type": "ImageObject",
    url: "https://www.fontfreda.net/wp-content/uploads/2017/04/logo-residencia-fontfreda-header.jpg",
    width: 400,
    height: 200,
  },
  sameAs: [
    "https://www.facebook.com/fontfreda",
    "https://www.instagram.com/fontfreda",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+34937790311",
      email: "info@fontfreda.net",
      availableLanguage: ["Spanish", "Catalan", "English"],
      areaServed: "ES",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Luis",
  },
};

// =====================================================
// WebSite Schema con SearchAction
// =====================================================
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.fontfreda.net/#website",
  url: "https://www.fontfreda.net",
  name: "Residencia Fontfreda",
  description: "Residencia canina y felina familiar en Barcelona",
  publisher: {
    "@id": "https://www.fontfreda.net/#organization",
  },
  inLanguage: ["es-ES", "en-US"],
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.fontfreda.net/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// =====================================================
// FAQPage Schema
// =====================================================
export const createFAQSchema = (
  faqs: Array<{ question: string; answer: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

// =====================================================
// Service Schema enriquecido con Offer y AggregateRating
// =====================================================
export const createServiceSchema = (
  name: string,
  description: string,
  image: string,
  options?: {
    priceMin?: string;
    priceMax?: string;
    serviceType?: string;
    url?: string;
  },
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: name,
  description: description,
  image: image,
  serviceType: options?.serviceType || "Pet Boarding",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.fontfreda.net/#localbusiness",
    name: "Residencia Fontfreda",
    url: "https://www.fontfreda.net",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Finca Can Farigola",
      addressLocality: "Gelida",
      addressRegion: "Barcelona",
      postalCode: "08790",
      addressCountry: "ES",
    },
    telephone: "+34937790311",
  },
  areaServed: [
    { "@type": "City", name: "Barcelona" },
    { "@type": "AdministrativeArea", name: "Alt Penedès" },
    { "@type": "AdministrativeArea", name: "Cataluña" },
  ],
  ...(options?.url && { url: options.url }),
  ...(options?.priceMin && {
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: options.priceMin,
      ...(options.priceMax && { highPrice: options.priceMax }),
      offerCount: 4,
    },
  }),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
  },
});

// =====================================================
// BreadcrumbList Schema
// =====================================================
export const createBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// =====================================================
// BlogPosting Schema enriquecido
// =====================================================
export const createBlogPostSchema = (post: {
  title: string;
  excerpt: string;
  image?: string;
  date: string;
  author: string;
  slug: string;
  category: string;
  language?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `https://www.fontfreda.net/blog/${post.slug}`,
  headline: post.title,
  description: post.excerpt,
  image:
    post.image ||
    "https://www.fontfreda.net/wp-content/uploads/2016/12/cat-and-dog-slide2.jpg",
  datePublished: post.date,
  dateModified: post.date,
  author: {
    "@type": "Person",
    name: post.author,
  },
  publisher: {
    "@type": "Organization",
    "@id": "https://www.fontfreda.net/#organization",
    name: "Residencia Fontfreda",
    logo: {
      "@type": "ImageObject",
      url: "https://www.fontfreda.net/wp-content/uploads/2017/04/logo-residencia-fontfreda-header.jpg",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://www.fontfreda.net${post.language === "en" ? "/en" : ""}/blog/${post.slug}`,
  },
  articleSection: post.category,
  inLanguage: post.language === "en" ? "en-US" : "es-ES",
});

// =====================================================
// Review Schema (para testimonios destacados)
// =====================================================
export const createReviewSchema = (review: {
  author: string;
  rating: number;
  text: string;
  date?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "LocalBusiness",
    "@id": "https://www.fontfreda.net/#localbusiness",
    name: "Residencia Fontfreda",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: review.rating,
    bestRating: 5,
  },
  author: {
    "@type": "Person",
    name: review.author,
  },
  reviewBody: review.text,
  ...(review.date && { datePublished: review.date }),
});
