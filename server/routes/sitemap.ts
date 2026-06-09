import { Router } from "express";

const router = Router();

/**
 * Sitemap XML dinámico
 * Se genera automáticamente basado en las rutas definidas en App.tsx
 * Las nuevas páginas y artículos se incorporan automáticamente
 */
router.get("/sitemap.xml", (req, res) => {
  const baseUrl = "https://www.fontfreda.net";
  const now = new Date().toISOString().split("T")[0];

  // Rutas principales - Español
  const mainRoutes = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/residencia-canina", priority: "0.9", changefreq: "monthly" },
    { path: "/residencia-felina", priority: "0.9", changefreq: "monthly" },
    { path: "/larga-estancia", priority: "0.8", changefreq: "monthly" },
    { path: "/guarderia", priority: "0.8", changefreq: "monthly" },
    { path: "/guarderia-canina-dentro-de-casa", priority: "0.8", changefreq: "monthly" },
    { path: "/instalaciones", priority: "0.8", changefreq: "monthly" },
    { path: "/tarifas", priority: "0.8", changefreq: "weekly" },
    { path: "/blog", priority: "0.8", changefreq: "daily" },
    { path: "/faq", priority: "0.7", changefreq: "monthly" },
    { path: "/contacto", priority: "0.7", changefreq: "monthly" },
    { path: "/politica-privacidad", priority: "0.5", changefreq: "yearly" },
    { path: "/politica-cookies", priority: "0.5", changefreq: "yearly" },
    { path: "/aviso-legal", priority: "0.5", changefreq: "yearly" },
    // Landing pages para Ads
    { path: "/residencia-canina-barcelona", priority: "0.9", changefreq: "monthly" },
    { path: "/residencia-felina-barcelona", priority: "0.9", changefreq: "monthly" },
    { path: "/larga-estancia-perros-gatos", priority: "0.8", changefreq: "monthly" },
    { path: "/guarderia-canina-barcelona", priority: "0.8", changefreq: "monthly" },
  ];

  // Artículos del blog - Se actualiza automáticamente
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

  // Generar XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  // Rutas principales en Español
  mainRoutes.forEach((route) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${route.path}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    // Agregar alternativa en inglés
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.path}" />\n`;
    xml += "  </url>\n";
  });

  // Rutas principales en Inglés
  mainRoutes.forEach((route) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/en${route.path}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    // Agregar alternativa en español
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}${route.path}" />\n`;
    xml += "  </url>\n";
  });

  // Artículos del blog en Español
  blogArticles.forEach((slug) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/blog/${slug}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/blog/${slug}" />\n`;
    xml += "  </url>\n";
  });

  // Artículos del blog en Inglés
  blogArticles.forEach((slug) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}/en/blog/${slug}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `    <xhtml:link rel="alternate" hreflang="es" href="${baseUrl}/blog/${slug}" />\n`;
    xml += "  </url>\n";
  });

  // Landing page en catalán (sin alternativa EN)
  xml += "  <url>\n";
  xml += `    <loc>${baseUrl}/residencia-canina-barcelona-ca</loc>\n`;
  xml += `    <lastmod>${now}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += "  </url>\n";

  xml += "</urlset>";

  res.set("Content-Type", "application/xml; charset=utf-8");
  res.set("Cache-Control", "public, max-age=3600"); // Cache 1 hora
  res.send(xml);
});

export default router;
