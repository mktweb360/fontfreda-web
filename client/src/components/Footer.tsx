import { Link, useLocation } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const [location] = useLocation();
  const isEnglish = location.startsWith("/en");
  const prefix = isEnglish ? "/en" : "";

  const t = isEnglish ? {
    about: "Family accommodation for dogs and cats in pure nature, with close attention and adapted spaces.",
    servicesTitle: "Services",
    services: {
      dog: "Dog Boarding",
      cat: "Cat Boarding",
      daycare: "Dog Daycare",
      facilities: "Facilities",
    },
    infoTitle: "Information",
    info: {
      faq: "Frequently Asked Questions",
      contact: "Contact",
      privacy: "Privacy Policy",
      cookies: "Cookies Policy",
      legal: "Legal Notice",
    },
    contactTitle: "Contact",
    location: "Alt Penedès, Barcelona",
    rights: "© 2026 Fontfreda. All rights reserved. | Zoological Centre B-2500661",
  } : {
    about: "Alojamiento familiar para perros y gatos en plena naturaleza, con atención cercana y espacios adaptados.",
    servicesTitle: "Servicios",
    services: {
      dog: "Residencia Canina",
      cat: "Residencia Felina",
      daycare: "Guardería Canina",
      facilities: "Instalaciones",
    },
    infoTitle: "Información",
    info: {
      faq: "Preguntas Frecuentes",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      cookies: "Política de Cookies",
      legal: "Aviso Legal",
    },
    contactTitle: "Contacto",
    location: "Alt Penedès, Barcelona",
    rights: "© 2026 Fontfreda. Todos los derechos reservados. | Núcleo Zoológico B-2500661",
  };

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663312171860/bgwiNGuCssyOGZsN.png"
              alt="Logo Residencia Fontfreda - Residencia canina y felina en Barcelona"
              title="Residencia Fontfreda"
              loading="lazy"
              decoding="async"
              width="160"
              height="40"
              className="h-10 w-auto mb-4 bg-transparent"
            />
            <p className="text-sm text-muted-foreground">{t.about}</p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.servicesTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${prefix}/residencia-canina`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.dog}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/residencia-felina`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.cat}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/guarderia-canina`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.daycare}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/instalaciones`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.services.facilities}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.infoTitle}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`${prefix}/faq`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.info.faq}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/contacto`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.info.contact}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/politica-privacidad`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.info.privacy}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/politica-cookies`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.info.cookies}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/aviso-legal`} className="text-muted-foreground hover:text-primary transition-colors">
                  {t.info.legal}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">{t.contactTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+34937790311"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      import("@/lib/conversionTracking").then((m) =>
                        m.trackPhoneClick("footer"),
                      );
                    }
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 93 779 03 11
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fontfreda.net" className="text-muted-foreground hover:text-primary transition-colors">
                  info@fontfreda.net
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{t.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
