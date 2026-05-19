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
    // Get language from URL or localStorage
    const path = window.location.pathname;
    const pathLang = path.startsWith("/en") ? "en" : "es";
    const savedLang = (localStorage.getItem("language") as Language) || pathLang;
    setLanguageState(savedLang);
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Redirect to appropriate language path
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|es)/, `/${lang}`);
    window.location.href = newPath || `/${lang}`;
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
