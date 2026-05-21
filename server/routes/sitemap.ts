import { Router } from "express";

const router = Router();

/**
 * Sitemap XML dinámico
 * Se actualiza automáticamente con nuevas páginas y artículos del blog
 */
router.get("/sitemap.xml", (req, res) => {
  const baseUrl = "https://www.fontfreda.net";

  // Páginas estáticas principales
  const staticPages = [
    { url: "/", priority: "1.0", changefreq: "weekly" },
    { url: "/residencia-canina", priority: "0.9", changefreq: "monthly" },
    { url: "/residencia-felina", priority: "0.9", changefreq: "monthly" },
    { url: "/larga-estancia", priority: "0.8", changefreq: "monthly" },
    { url: "/guarderia-canina", priority: "0.8", changefreq: "monthly" },
    { url: "/guarderia-en-casa", priority: "0.8", changefreq: "monthly" },
    { url: "/instalaciones", priority: "0.8", changefreq: "monthly" },
    { url: "/tarifas", priority: "0.8", changefreq: "weekly" },
    { url: "/blog", priority: "0.8", changefreq: "daily" },
    { url: "/preguntas-frecuentes", priority: "0.7", changefreq: "monthly" },
    { url: "/contacto", priority: "0.7", changefreq: "monthly" },
    { url: "/politica-privacidad", priority: "0.5", changefreq: "yearly" },
    { url: "/politica-cookies", priority: "0.5", changefreq: "yearly" },
    { url: "/aviso-legal", priority: "0.5", changefreq: "yearly" },
    // Landing pages para Ads
    { url: "/residencia-canina-barcelona", priority: "0.9", changefreq: "monthly" },
    { url: "/residencia-felina-barcelona", priority: "0.9", changefreq: "monthly" },
    { url: "/larga-estancia-perros-gatos", priority: "0.8", changefreq: "monthly" },
  ];

  // Páginas en inglés
  const englishPages = staticPages.map((page) => ({
    ...page,
    url: `/en${page.url}`,
  }));

  // Artículos del blog (simulados - en producción, traer de base de datos)
  const blogPosts = [
    {
      slug: "como-preparar-perro-primera-vez-residencia",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "beneficios-socializacion-perros",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "salud-dental-perros-gatos",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "ansiedad-separacion-perros",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "nutricion-perros-activos",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "comportamiento-gatos-estres",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "vacunacion-desparasitacion-perros",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "ejercicio-diario-perros",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "cuidados-gatos-ancianos",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "juegos-enriquecimiento-gatos",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      slug: "residencia-familiar-vs-guarderia",
      priority: "0.7",
      changefreq: "monthly",
    },
  ];

  const blogPostsEs = blogPosts.map((post) => ({
    ...post,
    url: `/blog/${post.slug}`,
  }));

  const blogPostsEn = blogPosts.map((post) => ({
    ...post,
    url: `/en/blog/${post.slug}`,
  }));

  // Generar XML
  const now = new Date().toISOString().split("T")[0];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Agregar páginas estáticas ES
  staticPages.forEach((page) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  // Agregar páginas estáticas EN
  englishPages.forEach((page) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  // Agregar artículos del blog ES
  blogPostsEs.forEach((post) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${post.url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${post.changefreq}</changefreq>\n`;
    xml += `    <priority>${post.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  // Agregar artículos del blog EN
  blogPostsEn.forEach((post) => {
    xml += "  <url>\n";
    xml += `    <loc>${baseUrl}${post.url}</loc>\n`;
    xml += `    <lastmod>${now}</lastmod>\n`;
    xml += `    <changefreq>${post.changefreq}</changefreq>\n`;
    xml += `    <priority>${post.priority}</priority>\n`;
    xml += "  </url>\n";
  });

  xml += "</urlset>";

  res.set("Content-Type", "application/xml");
  res.send(xml);
});

export default router;
