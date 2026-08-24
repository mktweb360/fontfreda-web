import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { sendContactEmail, sendReservaEmail, type ContactFormData, type ReservaFormData } from "./email";
import newsletterRouter from "./routers/newsletter-express";
import sitemapRouter from "./routes/sitemap";
import {
    ROUTE_META,
    DYNAMIC_PREFIXES,
    LEGACY_REDIRECTS,
    blogFallbackMeta,
    getDefaultOgImage,
    type RouteMeta,
} from "./seo-meta";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
    const app = express();
    const server = createServer(app);

  // Middleware
  app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

  // Newsletter routes
  app.use("/api/newsletter", newsletterRouter);

  // Sitemap route
  app.use("/", sitemapRouter);

  // API endpoints for form submissions
  app.post("/api/contact", async (req, res) => {
        try {
                const data: ContactFormData = req.body;

          if (!data.nombre || !data.email || !data.telefono || !data.asunto || !data.mensaje) {
                    return res.status(400).json({ error: "Missing required fields" });
          }

          await sendContactEmail(data);

          res.json({ success: true, message: "Consulta enviada correctamente" });
        } catch (error) {
                console.error("Error sending contact email:", error);
                res.status(500).json({ error: "Error al enviar la consulta" });
        }
  });

  app.post("/api/reserva", async (req, res) => {
        try {
                const data: ReservaFormData = req.body;

          if (
                    !data.nombre ||
                    !data.email ||
                    !data.telefono ||
                    !data.servicio ||
                    !data.fechaEntrada ||
                    !data.fechaSalida ||
                    !data.nombreMascota ||
                    !data.tipoMascota
                  ) {
                    return res.status(400).json({ error: "Missing required fields" });
          }

          await sendReservaEmail(data);

          res.json({ success: true, message: "Solicitud de reserva enviada correctamente" });
        } catch (error) {
                console.error("Error sending reserva email:", error?.response?.data ?? error?.message ?? error);
                res.status(500).json({ error: "Error al enviar la solicitud de reserva" });
        }
  });

  // Serve static files from dist/public in production
  const staticPath =
        process.env.NODE_ENV === "production"
        ? path.resolve(__dirname, "public")
          : path.resolve(__dirname, "..", "dist", "public");

  // Static assets first: si el archivo existe (JS, CSS, imagenes, etc.) se sirve tal cual
  // y no pasa por la logica de redirecciones/SEO de abajo.
  app.use(express.static(staticPath, { index: false }));

  // ---------------------------------------------------------------------
  // Redirecciones 301 desde URLs heredadas de WordPress. Sustituyen al
  // .htaccess (sin efecto en este stack: no hay servidor Apache).
  // Auditoria SEO 24/08/2026
  // ---------------------------------------------------------------------
  app.use((req, res, next) => {
        if (req.method !== "GET" && req.method !== "HEAD") return next();
        const pathname = req.path;
        for (const [pattern, target] of LEGACY_REDIRECTS) {
                if (pattern.test(pathname)) {
                          return res.redirect(301, target);
                }
        }
        next();
  });

  // Cache en memoria de la plantilla HTML compilada, leida una sola vez al arrancar.
  let indexTemplate: string | null = null;
    function getIndexTemplate(): string {
          if (indexTemplate) return indexTemplate;
          indexTemplate = fs.readFileSync(path.join(staticPath, "index.html"), "utf-8");
          return indexTemplate;
    }

  function escapeHtml(s: string): string {
        return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /**
     * Inyecta title/description/canonical/robots/OG/hreflang reales en el HTML
     * servido, para que cualquier rastreador (ejecute JS o no) reciba
     * contenido diferenciado por pagina en la primera respuesta del servidor.
     * El componente <SEO> de React sigue actuando encima para usuarios reales
     * (util para variantes dinamicas: precios, idioma detectado, etc.).
     */
  function renderHtmlForRoute(meta: RouteMeta, opts: { noindex?: boolean } = {}): string {
        let html = getIndexTemplate();
        const robotsContent = opts.noindex
          ? "noindex, follow"
                : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
        const ogImage = meta.ogImage || getDefaultOgImage();
        const title = escapeHtml(meta.title);
        const description = escapeHtml(meta.description);

      html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
        html = html.replace(/<html lang="[^"]*"/, `<html lang="${meta.lang}"`);

      const metaReplacements: Array<[RegExp, string]> = [
              [/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${description}" />`],
              [/<meta name="robots" content="[^"]*"\s*\/?>/, `<meta name="robots" content="${robotsContent}" />`],
              [/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${title}" />`],
              [/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${description}" />`],
              [/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${ogImage}" />`],
              [/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${title}" />`],
              [/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${description}" />`],
              [/<meta name="twitter:image" content="[^"]*"\s*\/?>/, `<meta name="twitter:image" content="${ogImage}" />`],
            ];
        for (const [pattern, replacement] of metaReplacements) {
                html = html.replace(pattern, replacement);
        }

      // og:url + canonical + hreflang: no existen en la plantilla base, se insertan antes de </head>
      const extraTags: string[] = [];
        extraTags.push(`<meta property="og:url" content="${meta.canonical}" />`);
        extraTags.push(`<link rel="canonical" href="${meta.canonical}" />`);
        if (meta.alternate) {
                const altMeta = ROUTE_META[meta.alternate];
                if (altMeta) {
                          extraTags.push(`<link rel="alternate" hreflang="${meta.lang === "en" ? "es" : "en"}" href="${altMeta.canonical}" />`);
                          extraTags.push(`<link rel="alternate" hreflang="x-default" href="${meta.lang === "en" ? altMeta.canonical : meta.canonical}" />`);
                }
        }
        html = html.replace("</head>", `${extraTags.join("\n    ")}\n  </head>`);

      return html;
  }

  function normalizePath(p: string): string {
        if (p.length > 1 && p.endsWith("/")) return p.slice(0, -1);
        return p;
  }

  // Catch-all: sirve la SPA, con metadatos reales por ruta y un 404 real
  // para cualquier URL que no corresponda a una ruta conocida ni a un
  // articulo de blog. Antes, esta ruta devolvia siempre 200 con el mismo
  // HTML generico para cualquier URL, incluidas las inexistentes
  // ("Soft 404" detectado en 288 URLs por Search Console, 24/08/2026).
  app.get("*", (req, res) => {
        const pathname = normalizePath(req.path);

              const exactMeta = ROUTE_META[pathname];
        if (exactMeta) {
                res.status(200).type("html").send(renderHtmlForRoute(exactMeta));
                return;
        }

              const isDynamicBlogPost = DYNAMIC_PREFIXES.some((prefix) => pathname.startsWith(prefix)) && pathname.length > 6;
        if (isDynamicBlogPost) {
                res.status(200).type("html").send(renderHtmlForRoute(blogFallbackMeta(pathname)));
                return;
        }

              // Ruta desconocida: 404 real + noindex, sirviendo igualmente la SPA
              // (que renderiza su propio componente NotFound) para no romper la
              // experiencia visual de un usuario real que llegue por error.
              const notFoundMeta: RouteMeta = {
                      title: "Pagina no encontrada | Fontfreda",
                      description: "La pagina que buscas no existe o se ha movido.",
                      canonical: `https://www.fontfreda.net${pathname}`,
                      lang: pathname.startsWith("/en") ? "en" : "es",
              };
        res.status(404).type("html").send(renderHtmlForRoute(notFoundMeta, { noindex: true }));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
        console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
