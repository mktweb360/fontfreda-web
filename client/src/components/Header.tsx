import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Residencia Canina", href: "/residencia-canina" },
    { label: "Residencia Felina", href: "/residencia-felina" },
    { label: "Guardería Canina", href: "/guarderia-canina" },
    { label: "Instalaciones", href: "/instalaciones" },
    { label: "FAQ", href: "/faq" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            Fontfreda
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

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            size="sm"
          >
            Contactar
          </Button>
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
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
              Contactar
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
