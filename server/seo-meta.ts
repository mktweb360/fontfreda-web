// Mapa de metadatos SEO por ruta, usado por el servidor para inyectar
// title/description/canonical/robots/OG reales en el HTML servido,
// para que cualquier rastreador (ejecute JS o no) reciba contenido
// diferenciado por pagina en la primera respuesta del servidor.
//
// Las copias (title/description) se han tomado literalmente de los
// componentes <SEO> ya existentes en cada pagina (client/src/pages/*.tsx)
// para no inventar ni duplicar contenido nuevo.

export interface RouteMeta {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
    lang: "es" | "en" | "ca";
    alternate?: string;
}

const DEFAULT_OG_IMAGE = "https://www.fontfreda.net/images/instalaciones/residencia-fontfreda-1.jpg";
const BASE = "https://www.fontfreda.net";

export const ROUTE_META: Record<string, RouteMeta> = {
    "/": {
          title: "Residencia Fontfreda | Residencia Canina y Felina en Barcelona",
          description:
                  "Residencia canina y felina en Barcelona con alojamiento familiar en plena naturaleza. 5 paseos diarios, atencion personalizada, atencion veterinaria y 180m² exclusivos para gatos.",
          canonical: `${BASE}/`,
          lang: "es",
          alternate: "/en",
    },
    "/en": {
          title: "Fontfreda | Dog and Cat Boarding in Barcelona",
          description:
                  "Dog and cat boarding in Barcelona with family accommodation in nature. 5 daily walks, personalized attention, veterinary care and 180m² exclusively for cats.",
          canonical: `${BASE}/en`,
          lang: "en",
          alternate: "/",
    },
    "/residencia-canina": {
          title: "Residencia Canina en Barcelona | Alojamiento Familiar para Perros | Fontfreda",
          description:
                  "Residencia canina en Barcelona con alojamiento familiar en plena naturaleza. 5 paseos diarios, atencion veterinaria y cuidados personalizados. Reserva ahora.",
          canonical: `${BASE}/residencia-canina`,
          lang: "es",
          alternate: "/en/residencia-canina",
    },
    "/en/residencia-canina": {
          title: "Dog Boarding in Barcelona | Family Accommodation | Fontfreda",
          description:
                  "Dog boarding in Barcelona with family accommodation in nature. 5 daily walks, veterinary care and personalized attention. Book now.",
          canonical: `${BASE}/en/residencia-canina`,
          lang: "en",
          alternate: "/residencia-canina",
    },
    "/residencia-felina": {
          title: "Residencia Felina en Barcelona | 180m² Exclusivos para Gatos | Fontfreda",
          description:
                  "Residencia felina en Barcelona con 180m² exclusivos para gatos. Espacios separados de perros, atencion personalizada, ambiente tranquilo y seguro. Reserva ahora.",
          canonical: `${BASE}/residencia-felina`,
          lang: "es",
          alternate: "/en/residencia-felina",
    },
    "/en/residencia-felina": {
          title: "Cat Boarding in Barcelona | 180m² Exclusive for Cats | Fontfreda",
          description:
                  "Cat boarding in Barcelona with 180m² exclusively for cats. Spaces separated from dogs, personalized attention, quiet and safe environment. Book now.",
          canonical: `${BASE}/en/residencia-felina`,
          lang: "en",
          alternate: "/residencia-felina",
    },
    "/larga-estancia": {
          title: "Larga Estancia para Perros | Estancias Mensuales | Fontfreda",
          description:
                  "Larga estancia para perros en Barcelona. Estancias de meses o indefinidas con tarifas especiales. Ideal para viajes laborales, hospitalizaciones o situaciones temporales.",
          canonical: `${BASE}/larga-estancia`,
          lang: "es",
          alternate: "/en/larga-estancia",
    },
    "/en/larga-estancia": {
          title: "Long-Term Dog Boarding | Monthly Boarding | Fontfreda",
          description:
                  "Long-term dog boarding in Barcelona. Monthly or indefinite stays with special rates. Ideal for business trips, hospitalisations or temporary situations.",
          canonical: `${BASE}/en/larga-estancia`,
          lang: "en",
          alternate: "/larga-estancia",
    },
    "/guarderia": {
          title: "Guarderia Canina en Barcelona | Horario 9:00-15:30 | Fontfreda",
          description:
                  "Guarderia canina en Barcelona. Horario 9:00-12:30 y 14:00-15:30. Box exterior 20€, interior con calefaccion 28€, habitacion individual 40€. Tarifas especiales para cachorros.",
          canonical: `${BASE}/guarderia`,
          lang: "es",
          alternate: "/en/guarderia",
    },
    "/en/guarderia": {
          title: "Dog Daycare in Barcelona | Hours 9:00-15:30 | Fontfreda",
          description:
                  "Dog daycare in Barcelona. Hours 9:00-12:30 and 14:00-15:30. Outdoor box €20, indoor with heating €28, individual room €40. Special rates for puppies.",
          canonical: `${BASE}/en/guarderia`,
          lang: "en",
          alternate: "/guarderia",
    },
    "/guarderia-canina-dentro-de-casa": {
          title: "Guarderia Canina Dentro de Casa | Box Interior Calefactado | Fontfreda",
          description:
                  "Guarderia canina dentro de casa con box interior y calefaccion. Habitacion individual con calefaccion dentro de casa. Ideal para perros mayores, friolentos o con necesidades especiales.",
          canonical: `${BASE}/guarderia-canina-dentro-de-casa`,
          lang: "es",
          alternate: "/en/guarderia-canina-dentro-de-casa",
    },
    "/en/guarderia-canina-dentro-de-casa": {
          title: "Indoor Dog Daycare | Heated Indoor Box | Fontfreda",
          description:
                  "Indoor dog daycare with interior box and heating. Individual room with heating inside the house. Ideal for older dogs, cold-sensitive dogs or with special needs.",
          canonical: `${BASE}/en/guarderia-canina-dentro-de-casa`,
          lang: "en",
          alternate: "/guarderia-canina-dentro-de-casa",
    },
    "/contacto": {
          title: "Contacto Fontfreda | Reserva Residencia Canina y Felina | Barcelona",
          description:
                  "Contacta con Residencia Fontfreda en Gelida, Barcelona. Reserva por telefono, WhatsApp o formulario. Atencion personalizada y respuesta rapida. Servicios de recogida disponibles.",
          canonical: `${BASE}/contacto`,
          lang: "es",
          alternate: "/en/contacto",
    },
    "/en/contacto": {
          title: "Contact Fontfreda | Book Dog and Cat Boarding | Barcelona",
          description:
                  "Contact Residencia Fontfreda in Gelida, Barcelona. Book by phone, WhatsApp or form. Personalized attention and quick response. Pickup services available.",
          canonical: `${BASE}/en/contacto`,
          lang: "en",
          alternate: "/contacto",
    },
    "/faq": {
          title: "Preguntas Frecuentes | FAQ Residencia Canina y Felina | Fontfreda",
          description:
                  "Respuestas a las preguntas mas frecuentes sobre nuestra residencia canina y felina. Requisitos, horarios, vacunas, valoraciones previas, servicios de recogida y mas.",
          canonical: `${BASE}/faq`,
          lang: "es",
          alternate: "/en/faq",
    },
    "/en/faq": {
          title: "Frequently Asked Questions | Dog and Cat Boarding FAQ | Fontfreda",
          description:
                  "Answers to the most frequent questions about our dog and cat boarding. Requirements, hours, vaccines, prior assessments, pickup services and more.",
          canonical: `${BASE}/en/faq`,
          lang: "en",
          alternate: "/faq",
    },
    "/tarifas": {
          title: "Tarifas Residencia Canina y Felina | Precios 2026 | Fontfreda",
          description:
                  "Tarifas residencia canina desde 20€/dia (box exterior), 28€ (interior con calefaccion), 40€ (individual). Gatos desde 18€/dia. Descuentos para multiples perros y larga estancia.",
          canonical: `${BASE}/tarifas`,
          lang: "es",
          alternate: "/en/tarifas",
    },
    "/en/tarifas": {
          title: "Dog and Cat Boarding Rates | 2026 Prices | Fontfreda",
          description:
                  "Dog boarding rates from €20/day (outdoor box), €28 (indoor with heating), €40 (individual). Cats from €18/day. Discounts for multiple dogs and long-term stays.",
          canonical: `${BASE}/en/tarifas`,
          lang: "en",
          alternate: "/tarifas",
    },
    "/instalaciones": {
          title: "Instalaciones Fontfreda | Galeria de Residencia Canina y Felina",
          description:
                  "Conoce las instalaciones de Residencia Fontfreda: 5 parques de 400-600m², 180m² exclusivos para gatos, habitaciones individuales, agua natural de manantial y vigilancia 24h.",
          canonical: `${BASE}/instalaciones`,
          lang: "es",
          alternate: "/en/instalaciones",
    },
    "/en/instalaciones": {
          title: "Fontfreda Facilities | Dog and Cat Boarding Gallery",
          description:
                  "Discover Residencia Fontfreda facilities: 5 parks of 400-600m², 180m² exclusively for cats, individual rooms, natural spring water and 24h surveillance.",
          canonical: `${BASE}/en/instalaciones`,
          lang: "en",
          alternate: "/instalaciones",
    },
    "/blog": {
          title: "Blog Fontfreda | Consejos sobre Cuidado de Perros y Gatos",
          description:
                  "Blog con articulos sobre cuidado de perros y gatos. Consejos de comportamiento, salud, alimentacion, viajes, adopcion y bienestar animal. Por profesionales del sector.",
          canonical: `${BASE}/blog`,
          lang: "es",
          alternate: "/en/blog",
    },
    "/en/blog": {
          title: "Fontfreda Blog | Tips on Dog and Cat Care",
          description:
                  "Blog with articles on dog and cat care. Tips on behavior, health, nutrition, travel, adoption and animal welfare. By industry professionals.",
          canonical: `${BASE}/en/blog`,
          lang: "en",
          alternate: "/blog",
    },
    "/politica-cookies": {
          title: "Politica de Cookies | Fontfreda",
          description: "Politica de cookies de Residencia Fontfreda.",
          canonical: `${BASE}/politica-cookies`,
          lang: "es",
          alternate: "/en/politica-cookies",
    },
    "/en/politica-cookies": {
          title: "Cookie Policy | Fontfreda",
          description: "Cookie policy of Residencia Fontfreda.",
          canonical: `${BASE}/en/politica-cookies`,
          lang: "en",
          alternate: "/politica-cookies",
    },
    "/politica-privacidad": {
          title: "Politica de Privacidad | Fontfreda",
          description: "Politica de privacidad de Residencia Fontfreda.",
          canonical: `${BASE}/politica-privacidad`,
          lang: "es",
          alternate: "/en/politica-privacidad",
    },
    "/en/politica-privacidad": {
          title: "Privacy Policy | Fontfreda",
          description: "Privacy policy of Residencia Fontfreda.",
          canonical: `${BASE}/en/politica-privacidad`,
          lang: "en",
          alternate: "/politica-privacidad",
    },
    "/aviso-legal": {
          title: "Aviso Legal | Fontfreda",
          description: "Aviso legal de Residencia Fontfreda.",
          canonical: `${BASE}/aviso-legal`,
          lang: "es",
          alternate: "/en/aviso-legal",
    },
    "/en/aviso-legal": {
          title: "Legal Notice | Fontfreda",
          description: "Legal notice of Residencia Fontfreda.",
          canonical: `${BASE}/en/aviso-legal`,
          lang: "en",
          alternate: "/aviso-legal",
    },
    "/residencia-canina-barcelona": {
          title: "Residencia Canina Barcelona | Alojamiento Familiar para Perros | Fontfreda",
          description:
                  "Residencia canina premium en Barcelona. Alojamiento familiar con atencion 24h, paseos diarios y cuidados personalizados. Reserva ahora.",
          canonical: `${BASE}/residencia-canina-barcelona`,
          ogImage: `${BASE}/images/canina/residencia-canina-9.jpg`,
          lang: "es",
          alternate: "/en/dog-boarding-barcelona",
    },
    "/en/dog-boarding-barcelona": {
          title: "Dog Boarding Barcelona | Family Accommodation for Dogs | Fontfreda",
          description:
                  "Premium dog boarding in Barcelona. Family accommodation with 24/7 care, daily walks, and personalized attention. Book your dog's stay now.",
          canonical: `${BASE}/en/dog-boarding-barcelona`,
          ogImage: `${BASE}/images/canina/residencia-canina-9.jpg`,
          lang: "en",
          alternate: "/residencia-canina-barcelona",
    },
    "/residencia-felina-barcelona": {
          title: "Residencia Felina Barcelona | Alojamiento Especializado para Gatos | Fontfreda",
          description:
                  "Residencia felina premium en Barcelona. Espacio felino especializado de 180m2, ambiente tranquilo y cuidados personalizados. Reserva la estancia de tu gato ahora.",
          canonical: `${BASE}/residencia-felina-barcelona`,
          lang: "es",
          alternate: "/en/cat-boarding-barcelona",
    },
    "/en/cat-boarding-barcelona": {
          title: "Cat Boarding Barcelona | Specialized Feline Accommodation | Fontfreda",
          description:
                  "Premium cat boarding in Barcelona. Specialized 180m2 feline space, calm environment, and personalized care. Book your cat's stay now.",
          canonical: `${BASE}/en/cat-boarding-barcelona`,
          lang: "en",
          alternate: "/residencia-felina-barcelona",
    },
    "/larga-estancia-perros-gatos": {
          title: "Larga Estancia Perros y Gatos Barcelona | Meses o Anos | Fontfreda",
          description:
                  "Alojamiento de larga estancia para perros y gatos en Barcelona. Meses o anos. Tarifas especiales, cuidado familiar y tranquilidad total. Solicita presupuesto.",
          canonical: `${BASE}/larga-estancia-perros-gatos`,
          lang: "es",
          alternate: "/en/long-term-boarding",
    },
    "/en/long-term-boarding": {
          title: "Long-Term Dog & Cat Boarding Barcelona | Months or Years | Fontfreda",
          description:
                  "Affordable long-term boarding for dogs and cats in Barcelona. Months or years. Special rates, family care, and complete peace of mind. Get a custom quote.",
          canonical: `${BASE}/en/long-term-boarding`,
          lang: "en",
          alternate: "/larga-estancia-perros-gatos",
    },
    "/guarderia-canina-barcelona": {
          title: "Guarderia Canina Barcelona | Cuidado Diario - Entorno Natural | Fontfreda",
          description:
                  "Guarderia canina en Barcelona. Cuidado diario en entorno natural con 5 paseos supervisados, socializacion y trato familiar. Consulta nuestras tarifas diarias.",
          canonical: `${BASE}/guarderia-canina-barcelona`,
          lang: "es",
          alternate: "/en/dog-daycare-barcelona",
    },
    "/en/dog-daycare-barcelona": {
          title: "Dog Daycare Barcelona | Daily Dog Care - Natural Environment | Fontfreda",
          description:
                  "Dog daycare in Barcelona. Daily care in a natural environment with 5 supervised walks, socialization, and family treatment. Ask about our daily rates.",
          canonical: `${BASE}/en/dog-daycare-barcelona`,
          lang: "en",
          alternate: "/guarderia-canina-barcelona",
    },
    "/residencia-canina-barcelona-ca": {
          title: "Residencia Canina i Felina Barcelona | Tracte Familiar - Alt Penedes | Fontfreda",
          description:
                  "Residencia canina i felina a Barcelona. Entorn familiar, 5 passejos supervisats al dia, vigilancia 24h i atencio personalitzada. Demana pressupost ara.",
          canonical: `${BASE}/residencia-canina-barcelona-ca`,
          lang: "ca",
    },
};

/** Prefijos bajo los que se permite cualquier slug (contenido dinamico: articulos de blog). */
export const DYNAMIC_PREFIXES = ["/blog/", "/en/blog/"];

/** Metadatos genericos para articulos de blog individuales (fallback razonable, no inventa datos del articulo). */
export function blogFallbackMeta(pathname: string): RouteMeta {
    const isEnglish = pathname.startsWith("/en/");
    return {
          title: isEnglish
            ? "Fontfreda Blog | Tips on Dog and Cat Care"
                  : "Blog Fontfreda | Consejos sobre Cuidado de Perros y Gatos",
          description: isEnglish
            ? "Blog with articles on dog and cat care by Residencia Fontfreda."
                  : "Blog con articulos sobre cuidado de perros y gatos de Residencia Fontfreda.",
          canonical: `${BASE}${pathname}`,
          lang: isEnglish ? "en" : "es",
    };
}

export function getDefaultOgImage(): string {
    return DEFAULT_OG_IMAGE;
}

/**
 * Redirecciones 301 desde URLs antiguas (WordPress heredado) hacia las
 * rutas actuales. Sustituye a client/public/.htaccess y client/.htaccess,
 * que no tienen ningun efecto porque el sitio no se sirve desde Apache.
 */
export const LEGACY_REDIRECTS: Array<[RegExp, string]> = [
    // Del .htaccess original (rutas exactas)
    [/^\/alojamiento-mascotas\/?$/, "/residencia-canina"],
    [/^\/hotel-canino\/?$/, "/residencia-canina"],
    [/^\/residencia-canina-larga-estancia\/?$/, "/larga-estancia"],
    [/^\/recogida-y-entrega-a-domicilio\/?$/, "/tarifas"],
    [/^\/transporte\/?$/, "/tarifas"],
    [/^\/blog\/(como-cuidar-a-mi-perro-en-verano|es-bueno-convivir-con-mascotas-durante-el-embarazo|cuanto-tiempo-puedo-dejar-a-mi-gato-solo|sindrome-de-pica-en-mascotas|como-dejar-a-mi-cachorro-solo-en-casa)\/?$/, "/blog"],
    [/^\/preguntas-frecuentes\/?$/, "/faq"],
    [/^\/opiniones\/?$/, "/contacto"],
    [/^\/contacto-mascotas\/?$/, "/contacto"],
    [/^\/instalaciones-residencia\/?$/, "/instalaciones"],
    [/^\/tarifas-residencia\/?$/, "/tarifas"],
    [/^\/precios-alojamiento\/?$/, "/tarifas"],
    [/^\/en\/alojamiento-mascotas\/?$/, "/en/residencia-canina"],
    [/^\/en\/hotel-canino\/?$/, "/en/residencia-canina"],
    [/^\/en\/residencia-canina-larga-estancia\/?$/, "/en/larga-estancia"],
    [/^\/en\/recogida-y-entrega-a-domicilio\/?$/, "/en/tarifas"],
    [/^\/en\/transporte\/?$/, "/en/tarifas"],

    // Estructura antigua de WordPress detectada aun indexada en Google (auditoria 24/08/2026)
    [/^\/en\/dogs-hotel\/?$/, "/en/residencia-canina"],
    [/^\/en\/dogs-residence\/?$/, "/en/residencia-canina"],
    [/^\/en\/collection-at-home-for-dogs-and-cats\/?$/, "/en/tarifas"],
    [/^\/category\/mascotas\/?$/, "/blog"],
    [/^\/category\/instalaciones\/?$/, "/instalaciones"],
    [/^\/(en\/)?author\/[^/]+\/?$/, "/blog"],
    [/^\/(en\/)?tag\/[^/]+\/?$/, "/blog"],
    [/^\/page\/\d+\/?$/, "/blog"],
    [/^\/wp-content\/.*$/, "/"],
    [/^\/wp-admin\/.*$/, "/"],
    [/^\/wp-json\/.*$/, "/"],
    [/^\/feed\/?$/, "/blog"],
    [/^\/amp\/?$/, "/"],
  ];
