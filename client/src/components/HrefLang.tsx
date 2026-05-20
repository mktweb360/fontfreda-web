import { useEffect } from "react";

interface HrefLangProps {
  currentPath: string;
  languages?: Array<{ lang: string; path: string }>;
}

/**
 * HrefLang component
 * 
 * Adds hreflang tags to indicate language alternatives for SEO.
 * - Spanish URLs: https://www.fontfreda.net/[path] (root, default language)
 * - English URLs: https://www.fontfreda.net/en/[path]
 * 
 * @param currentPath - The current page path WITHOUT language prefix (e.g., "/", "/contacto")
 */
export function HrefLang({ currentPath }: HrefLangProps) {
  useEffect(() => {
    // Normalize currentPath - ensure it starts with /
    const normalizedPath = currentPath.startsWith("/") ? currentPath : `/${currentPath}`;
    // Remove trailing slash unless it's just "/"
    const cleanPath = normalizedPath === "/" ? "/" : normalizedPath.replace(/\/$/, "");
    
    const baseUrl = "https://www.fontfreda.net";
    const esUrl = `${baseUrl}${cleanPath}`;
    const enUrl = cleanPath === "/" ? `${baseUrl}/en` : `${baseUrl}/en${cleanPath}`;
    
    // Get current language from URL
    const isEnglish = window.location.pathname.startsWith("/en");
    const currentUrl = isEnglish ? enUrl : esUrl;

    // Remove existing hreflang and canonical tags
    const existingHreflang = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflang.forEach((tag) => tag.remove());
    
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) existingCanonical.remove();

    // Add Spanish version (default)
    const esLink = document.createElement("link");
    esLink.rel = "alternate";
    esLink.setAttribute("hreflang", "es");
    esLink.href = esUrl;
    document.head.appendChild(esLink);

    // Add English version
    const enLink = document.createElement("link");
    enLink.rel = "alternate";
    enLink.setAttribute("hreflang", "en");
    enLink.href = enUrl;
    document.head.appendChild(enLink);

    // Add x-default (Spanish as default for international audiences)
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.setAttribute("hreflang", "x-default");
    defaultLink.href = esUrl;
    document.head.appendChild(defaultLink);

    // Add canonical (current language version)
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = currentUrl;
    document.head.appendChild(canonical);

    // Update html lang attribute
    document.documentElement.lang = isEnglish ? "en" : "es";
  }, [currentPath]);

  return null;
}
