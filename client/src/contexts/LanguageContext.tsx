import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Detect language from URL path
    const path = window.location.pathname;
    const pathLang: Language = path.startsWith("/en") ? "en" : "es";
    setLanguageState(pathLang);
    localStorage.setItem("language", pathLang);
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);

    // Build new path based on selected language
    const currentPath = window.location.pathname;
    let pathWithoutLang = currentPath;

    // Strip existing language prefix
    if (currentPath.startsWith("/en/")) {
      pathWithoutLang = currentPath.substring(3); // Remove "/en"
    } else if (currentPath === "/en") {
      pathWithoutLang = "/";
    }

    // Build new path - Spanish is at root, English is at /en/
    let newPath: string;
    if (lang === "es") {
      newPath = pathWithoutLang || "/";
    } else {
      // English
      newPath = pathWithoutLang === "/" ? "/en" : `/en${pathWithoutLang}`;
    }

    window.location.href = newPath;
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
