import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ServicePromoBannerProps {
  variant: "dentro-de-casa" | "larga-estancia";
  language: "es" | "en";
}

const CONTENT = {
  "dentro-de-casa": {
    image: "/images/dentro-de-casa/hotel-canino-fontfreda-4.jpg",
    es: {
      badge: "Servicio Premium",
      title: "Residencia Dentro de Casa",
      desc: "Tu perro vive dentro de nuestra casa familiar durante su estancia. Máxima intimidad y trato personalizado.",
      cta: "Más información",
      link: "/guarderia-canina-dentro-de-casa",
      imgAlt: "Perros en el servicio de residencia dentro de casa Fontfreda",
    },
    en: {
      badge: "Premium Service",
      title: "Dog Boarding In-Home",
      desc: "Your dog lives inside our family home during their stay. Maximum intimacy and personal care.",
      cta: "Learn more",
      link: "/en/guarderia-canina-dentro-de-casa",
      imgAlt: "Dogs in Fontfreda's in-home boarding service",
    },
  },
  "larga-estancia": {
    image: "/images/canina/residencia-canina-fontfreda-7.jpg",
    es: {
      badge: "Servicio Premium",
      title: "Larga Estancia para Perros",
      desc: "Meses o años con tarifas especiales. Ideal para expatriados, mudanzas o situaciones temporales.",
      cta: "Ver más",
      link: "/larga-estancia",
      imgAlt: "Perros en la residencia canina Fontfreda para larga estancia",
    },
    en: {
      badge: "Premium Service",
      title: "Long-Term Dog Boarding",
      desc: "Months or years with special rates. Ideal for expats, relocations or temporary situations.",
      cta: "Learn more",
      link: "/en/larga-estancia",
      imgAlt: "Dogs at Fontfreda canine residence for long-term boarding",
    },
  },
};

export default function ServicePromoBanner({ variant, language }: ServicePromoBannerProps) {
  const config = CONTENT[variant];
  const t = config[language];

  return (
    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden border border-border bg-secondary/50">
      <div className="md:w-2/5 h-44 md:h-auto flex-shrink-0">
        <img
          src={config.image}
          alt={t.imgAlt}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="md:w-3/5 p-6 flex flex-col justify-center gap-3">
        <span className="inline-flex items-center self-start text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
          {t.badge}
        </span>
        <h3 className="text-xl font-bold text-foreground">{t.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
        <Link
          href={t.link}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors self-start"
        >
          {t.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
