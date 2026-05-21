import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  language?: "es" | "en";
  noindex?: boolean;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Componente SEO unificado que gestiona todas las meta tags importantes:
 * - Title dinámico
 * - Meta description
 * - Canonical URL
 * - Open Graph (Facebook, LinkedIn)
 * - Twitter Cards
 * - Robots meta
 * - Language (HTML lang attribute)
 */
export function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = "https://www.fontfreda.net/wp-content/uploads/2016/12/cat-and-dog-slide2.jpg",
  ogType = "website",
  language = "es",
  noindex = false,
  author = "Residencia Fontfreda",
  publishedTime,
  modifiedTime,
}: SEOProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Idioma del HTML
    document.documentElement.lang = language;

    // Helper para crear o actualizar meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper para crear o actualizar link tags
    const setLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Meta tags básicas
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("author", author);
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Canonical URL
    const canonicalUrl = canonical || window.location.href;
    setLink("canonical", canonicalUrl);

    // Open Graph
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", ogImage, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", title, true);
    setMeta("og:site_name", "Residencia Fontfreda", true);
    setMeta("og:locale", language === "es" ? "es_ES" : "en_US", true);

    // Article specific OG tags
    if (ogType === "article") {
      if (publishedTime) setMeta("article:published_time", publishedTime, true);
      if (modifiedTime) setMeta("article:modified_time", modifiedTime, true);
      setMeta("article:author", author, true);
    }

    // Twitter Cards
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", ogImage);
    setMeta("twitter:image:alt", title);

    // Geo tags (importantes para SEO local)
    setMeta("geo.region", "ES-CT");
    setMeta("geo.placename", "Gelida, Barcelona");
    setMeta("geo.position", "41.4322;1.8694");
    setMeta("ICBM", "41.4322, 1.8694");

    // Theme color
    setMeta("theme-color", "#2D5016");

    // Mobile optimization
    setMeta("format-detection", "telephone=yes");
    setMeta("mobile-web-app-capable", "yes");
    setMeta("apple-mobile-web-app-capable", "yes");
    setMeta("apple-mobile-web-app-status-bar-style", "default");
    setMeta("apple-mobile-web-app-title", "Fontfreda");

  }, [title, description, canonical, keywords, ogImage, ogType, language, noindex, author, publishedTime, modifiedTime]);

  return null;
}
