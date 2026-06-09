import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function getInitialLanguage(): Language {
  return window.location.pathname.startsWith("/en") ? "en" : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);

    const currentPath = window.location.pathname;
    let pathWithoutLang = currentPath;

    if (currentPath.startsWith("/en/")) {
      pathWithoutLang = currentPath.substring(3);
    } else if (currentPath === "/en") {
      pathWithoutLang = "/";
    }

    let newPath: string;
    if (lang === "es") {
      newPath = pathWithoutLang || "/";
    } else {
      newPath = pathWithoutLang === "/" ? "/en" : `/en${pathWithoutLang}`;
    }

    window.location.href = newPath;
  };

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
