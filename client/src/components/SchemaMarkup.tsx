import { useEffect } from "react";

interface SchemaMarkupProps {
  type: "LocalBusiness" | "FAQPage" | "Service" | "Organization" | "BreadcrumbList";
  data: Record<string, any>;
}

export function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

// Schema Templates
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Residencia Fontfreda - Alojamiento Familiar para Mascotas",
  description:
    "Residencia canina y felina en Barcelona con alojamiento familiar, paseos diarios en naturaleza y atención personalizada",
  url: "https://www.fontfreda.net",
  telephone: "+34937790311",
  email: "info@fontfreda.net",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Finca Can Farigola",
    addressLocality: "Gelida",
    addressRegion: "Barcelona",
    postalCode: "08790",
    addressCountry: "ES",
  },
  areaServed: {
    "@type": "City",
    name: "Barcelona",
  },
  priceRange: "€€",
  image: "https://www.fontfreda.net/wp-content/uploads/2016/12/cat-and-dog-slide2.jpg",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "3",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Residencia Fontfreda",
  url: "https://www.fontfreda.net",
  logo: "https://www.fontfreda.net/wp-content/uploads/2017/04/logo-residencia-fontfreda-header.jpg",
  sameAs: [
    "https://www.facebook.com/fontfreda",
    "https://www.instagram.com/fontfreda",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+34937790311",
    email: "info@fontfreda.net",
  },
};

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
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

export const createServiceSchema = (
  name: string,
  description: string,
  image: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: name,
  description: description,
  image: image,
  provider: {
    "@type": "LocalBusiness",
    name: "Residencia Fontfreda",
    url: "https://www.fontfreda.net",
  },
  areaServed: {
    "@type": "City",
    name: "Barcelona",
  },
});

export const createBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
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
