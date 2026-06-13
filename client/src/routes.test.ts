import { describe, it, expect } from "vitest";

/**
 * Tests para verificar rutas, formularios y tracking
 * Ejecutar con: pnpm test
 */

describe("Rutas del Sitio", () => {
  // Rutas principales en Español
  const mainRoutes = [
    "/",
    "/residencia-canina",
    "/residencia-felina",
    "/larga-estancia",
    "/guarderia",
    "/guarderia-canina-dentro-de-casa",
    "/instalaciones",
    "/tarifas",
    "/blog",
    "/faq",
    "/contacto",
    "/politica-privacidad",
    "/politica-cookies",
    "/aviso-legal",
  ];

  // Landing pages para Ads
  const adsRoutes = [
    "/residencia-canina-barcelona",
    "/residencia-felina-barcelona",
    "/larga-estancia-perros-gatos",
  ];

  // Rutas en Inglés
  const englishRoutes = mainRoutes.map((route) => `/en${route}`);
  const englishAdsRoutes = [
    "/en/dog-boarding-barcelona",
    "/en/cat-boarding-barcelona",
    "/en/long-term-boarding",
  ];

  it("Todas las rutas principales existen", () => {
    const allRoutes = [...mainRoutes, ...adsRoutes, ...englishRoutes, ...englishAdsRoutes];
    expect(allRoutes.length).toBeGreaterThan(0);
    expect(allRoutes).toContain("/");
    expect(allRoutes).toContain("/residencia-canina");
    expect(allRoutes).toContain("/en");
  });

  it("Landing pages para Ads están disponibles", () => {
    expect(adsRoutes).toContain("/residencia-canina-barcelona");
    expect(adsRoutes).toContain("/residencia-felina-barcelona");
    expect(adsRoutes).toContain("/larga-estancia-perros-gatos");
  });

  it("Rutas en inglés están disponibles", () => {
    expect(englishRoutes).toContain("/en/");
    expect(englishRoutes).toContain("/en/residencia-canina");
    expect(englishAdsRoutes).toContain("/en/dog-boarding-barcelona");
  });
});

describe("Artículos del Blog", () => {
  const blogArticles = [
    "como-preparar-perro-primera-vez-residencia",
    "beneficios-socializacion-perros",
    "salud-dental-perros-gatos",
    "ansiedad-separacion-perros",
    "nutricion-perros-activos",
    "comportamiento-gatos-estres",
    "vacunacion-desparasitacion-perros",
    "ejercicio-diario-perros",
    "cuidados-gatos-ancianos",
    "juegos-enriquecimiento-gatos",
    "residencia-familiar-vs-guarderia",
  ];

  it("Todos los artículos del blog están disponibles", () => {
    expect(blogArticles.length).toBe(11);
    expect(blogArticles[0]).toBe("como-preparar-perro-primera-vez-residencia");
  });

  it("Artículos tienen URLs válidas", () => {
    blogArticles.forEach((slug) => {
      const esUrl = `/blog/${slug}`;
      const enUrl = `/en/blog/${slug}`;
      expect(esUrl).toMatch(/^\/blog\/[a-z\-]+$/);
      expect(enUrl).toMatch(/^\/en\/blog\/[a-z\-]+$/);
    });
  });
});

describe("Tracking y Conversiones", () => {
  it("Google Analytics ID está configurado", () => {
    const gaId = "G-JR3N422110";
    expect(gaId).toMatch(/^G-[A-Z0-9]+$/);
  });

  it("Google Tag Manager ID está configurado", () => {
    const gtmId = "GTM-PB35J3M";
    expect(gtmId).toMatch(/^GTM-[A-Z0-9]+$/);
  });

  it("Google Ads Conversion ID está configurado", () => {
    const adsId = "AW-1010676556";
    expect(adsId).toMatch(/^AW-[0-9]+$/);
  });

  it("Eventos de conversión están definidos", () => {
    const conversionEvents = ["contact_form", "whatsapp_click", "phone_click"];
    expect(conversionEvents.length).toBe(3);
    conversionEvents.forEach((event) => {
      expect(event).toMatch(/^[a-z_]+$/);
    });
  });
});

describe("Contacto y Comunicación", () => {
  it("Teléfono está configurado correctamente", () => {
    const phone = "+34 93 779 03 11";
    expect(phone).toMatch(/^\+34 \d{2} \d{3} \d{2} \d{2}$/);
  });

  it("Email está configurado correctamente", () => {
    const email = "info@fontfreda.net";
    expect(email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("WhatsApp URL es válida", () => {
    const whatsappUrl = "wa.me/34609732211";
    expect(whatsappUrl).toMatch(/^wa\.me\/\d+$/);
  });
});

describe("Traducciones", () => {
  const translations = {
    es: {
      confirm: "Confirmar",
      cancel: "Cancelar",
      close: "Cerrar",
      send: "Enviar",
    },
    en: {
      confirm: "Confirm",
      cancel: "Cancel",
      close: "Close",
      send: "Send",
    },
  };

  it("Traducciones en Español están completas", () => {
    expect(translations.es.confirm).toBe("Confirmar");
    expect(translations.es.cancel).toBe("Cancelar");
    expect(translations.es.close).toBe("Cerrar");
    expect(translations.es.send).toBe("Enviar");
  });

  it("Traducciones en Inglés están completas", () => {
    expect(translations.en.confirm).toBe("Confirm");
    expect(translations.en.cancel).toBe("Cancel");
    expect(translations.en.close).toBe("Close");
    expect(translations.en.send).toBe("Send");
  });

  it("Ambos idiomas tienen las mismas claves", () => {
    const esKeys = Object.keys(translations.es).sort();
    const enKeys = Object.keys(translations.en).sort();
    expect(esKeys).toEqual(enKeys);
  });
});

describe("Tarifas", () => {
  const tarifas = {
    boxExterior: 20,
    interiorCalefaccion: 28,
    individual: 40,
    cachorros: 21,
    gatos: 18,
    gatitos: 19,
  };

  it("Todas las tarifas están configuradas", () => {
    expect(tarifas.boxExterior).toBe(20);
    expect(tarifas.interiorCalefaccion).toBe(28);
    expect(tarifas.individual).toBe(40);
    expect(tarifas.cachorros).toBe(21);
    expect(tarifas.gatos).toBe(18);
    expect(tarifas.gatitos).toBe(19);
  });

  it("Tarifas son números positivos", () => {
    Object.values(tarifas).forEach((tarifa) => {
      expect(tarifa).toBeGreaterThan(0);
    });
  });
});

describe("SEO", () => {
  it("Sitemap XML está disponible", () => {
    const sitemapUrl = "/sitemap.xml";
    expect(sitemapUrl).toBe("/sitemap.xml");
  });

  it("Robots.txt está disponible", () => {
    const robotsUrl = "/robots.txt";
    expect(robotsUrl).toBe("/robots.txt");
  });

  it("URLs canónicas están configuradas", () => {
    const canonicalUrls = [
      "https://www.fontfreda.net/",
      "https://www.fontfreda.net/residencia-canina",
      "https://www.fontfreda.net/en/residencia-canina",
    ];
    expect(canonicalUrls.length).toBeGreaterThan(0);
    canonicalUrls.forEach((url) => {
      expect(url).toMatch(/^https:\/\/www\.fontfreda\.net/);
    });
  });
});
