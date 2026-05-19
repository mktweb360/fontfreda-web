import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663312171860/bgwiNGuCssyOGZsN.png" 
              alt="Fontfreda" 
              className="h-10 w-auto mb-4 bg-transparent"
            />
            <p className="text-sm text-muted-foreground">
              Alojamiento familiar para perros y gatos en plena naturaleza, con atención cercana y espacios adaptados.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/residencia-canina">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Residencia Canina
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/residencia-felina">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Residencia Felina
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/guarderia-canina">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Guardería Canina
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/instalaciones">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Instalaciones
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/faq">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Preguntas Frecuentes
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contacto">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contacto
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Privacidad
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/politica-cookies">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Política de Cookies
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/aviso-legal">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Aviso Legal
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+34937790311"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +34 93 779 03 11
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@fontfreda.net"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@fontfreda.net
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Alt Penedés, Barcelona
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © 2026 Fontfreda. Todos los derechos reservados. | Núcleo Zoológico B-2500661
          </p>
        </div>
      </div>
    </footer>
  );
}
