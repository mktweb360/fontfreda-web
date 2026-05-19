import { useEffect } from "react";

interface HrefLangProps {
  currentPath: string;
  languages?: Array<{ lang: string; path: string }>;
}

export function HrefLang({ currentPath, languages }: HrefLangProps) {
  useEffect(() => {
    // Remove existing hreflang tags
    const existingTags = document.querySelectorAll('link[rel="alternate"]');
    existingTags.forEach((tag) => tag.remove());

    // Add Spanish version
    const esLink = document.createElement("link");
    esLink.rel = "alternate";
    esLink.setAttribute("hreflang", "es");
    esLink.href = `https://www.fontfreda.net/es${currentPath}`;
    document.head.appendChild(esLink);

    // Add English version
    const enLink = document.createElement("link");
    enLink.rel = "alternate";
    enLink.setAttribute("hreflang", "en");
    enLink.href = `https://www.fontfreda.net/en${currentPath}`;
    document.head.appendChild(enLink);

    // Add x-default (Spanish as default)
    const defaultLink = document.createElement("link");
    defaultLink.rel = "alternate";
    defaultLink.setAttribute("hreflang", "x-default");
    defaultLink.href = `https://www.fontfreda.net/es${currentPath}`;
    document.head.appendChild(defaultLink);

    // Add canonical
    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = `https://www.fontfreda.net${currentPath}`;
    document.head.appendChild(canonical);

    return () => {
      // Cleanup is handled by removing existing tags at start
    };
  }, [currentPath]);

  return null;
}
