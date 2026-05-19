import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguageState] = useState<"es" | "en">("es");
  const [location] = useLocation();

  // Get language from URL on mount
  useEffect(() => {
    const path = window.location.pathname;
    const lang = path.startsWith("/en") ? "en" : "es";
    setLanguageState(lang);
  }, [location]);

  const setLanguage = (lang: "es" | "en") => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    // Redirect to appropriate language path
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/(en|es)/, `/${lang}`);
    window.location.href = newPath || `/${lang}`;
  };

  const navItems = [
    { label: language === "es" ? "Residencia Canina" : "Dog Boarding", href: language === "es" ? "/residencia-canina" : "/en/residencia-canina" },
    { label: language === "es" ? "Residencia Felina" : "Cat Boarding", href: language === "es" ? "/residencia-felina" : "/en/residencia-felina" },
    { label: language === "es" ? "Guardería Canina" : "Dog Daycare", href: language === "es" ? "/guarderia" : "/en/guarderia" },
    { label: language === "es" ? "Larga Estancia" : "Long Stay", href: language === "es" ? "/larga-estancia" : "/en/larga-estancia" },
    { label: language === "es" ? "Tarifas" : "Pricing", href: language === "es" ? "/tarifas" : "/en/tarifas" },
    { label: language === "es" ? "Instalaciones" : "Facilities", href: language === "es" ? "/instalaciones" : "/en/instalaciones" },
    { label: "Blog", href: language === "es" ? "/blog" : "/en/blog" },
    { label: language === "es" ? "Contacto" : "Contact", href: language === "es" ? "/contacto" : "/en/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={language === "es" ? "/" : "/en"}>
          <a className="hover:opacity-80 transition-opacity">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663312171860/ygmDlwnzdJPjzQEa.png" 
              alt="Fontfreda - Residencia Canina y Felina" 
              className="h-12 w-auto bg-transparent"
            />
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            </Link>
          ))}
        </nav>

        {/* Language Selector + CTA */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Buttons */}
          <div className="flex items-center gap-2 border-l border-border pl-4">
            <button
              onClick={() => setLanguage("es")}
              className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                language === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => setLanguage("en")}
              className={`px-2 py-1 text-xs font-semibold rounded transition-colors ${
                language === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              EN
            </button>
          </div>

          {/* CTA Button */}
          <Link href={language === "es" ? "/contacto" : "/en/contacto"}>
            <a>
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                size="sm"
              >
                {language === "es" ? "Contactar" : "Contact"}
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden border-t border-border bg-secondary">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}

            {/* Mobile Language Selector */}
            <div className="flex gap-2 border-t border-border pt-4 mt-4">
              <button
                onClick={() => {
                  setLanguage("es");
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded transition-colors ${
                  language === "es"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-background/80"
                }`}
              >
                Español
              </button>
              <button
                onClick={() => {
                  setLanguage("en");
                  setIsOpen(false);
                }}
                className={`flex-1 px-3 py-2 text-xs font-semibold rounded transition-colors ${
                  language === "en"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-background/80"
                }`}
              >
                English
              </button>
            </div>

            <Link href={language === "es" ? "/contacto" : "/en/contacto"}>
              <a>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                  {language === "es" ? "Contactar" : "Contact"}
                </Button>
              </a>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
