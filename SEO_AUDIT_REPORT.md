# Reporte Final de Auditoría y Optimización On-Page

**Proyecto:** fontfreda-web · **Dominio:** https://www.fontfreda.net
**Fecha:** 21 mayo 2026 · **Versión del sitio:** checkpoint `46c94446` + ajustes finales

---

## 1. Resumen ejecutivo

Se ha ejecutado una auditoría y optimización on-page integral de **todas las páginas y entradas del sitio**. Las trece áreas solicitadas por el cliente quedan cubiertas con las siguientes acciones:

| # | Área | Estado | Observaciones |
|---|---|---|---|
| 1 | Etiquetado HTML (title, meta, h1–h6) | ✅ | Componente `SEO` aplicado en todas las rutas indexables; `ConfirmarNewsletter` marcada como `noindex` |
| 2 | Contenido orientado a keywords | ✅ | Keywords primarias y semánticas integradas en H1, intro, FAQ y CTA |
| 3 | Open Graph y Twitter Cards | ✅ | OG + Twitter Cards centralizados en `SEO.tsx` |
| 4 | Schema Markup (JSON-LD) | ✅ | LocalBusiness, Organization, WebSite+SearchAction, Service+Offer+AggregateRating, FAQPage, BreadcrumbList, BlogPosting, Review |
| 5 | Optimización de textos | ✅ | Reemplazo masivo de "mascota" → "perro o gato" en todas las páginas visibles |
| 6 | Indexación por IA (AEO/LLM-SEO) | ✅ | `robots.txt` y archivo `.md` para IAs ya en `client/public`; FAQ enriquecidas en lenguaje natural |
| 7 | Enlazado interno y externo | ✅ | Cross-linking servicios ↔ blog ↔ instalaciones; outlinks con `rel="noopener noreferrer"` |
| 8 | Optimización de imágenes | ✅ | `loading="lazy"`, `decoding="async"`, `width`/`height`, `alt`/`title` descriptivos; logo Header como LCP `eager` con `fetchpriority="high"` |
| 9 | Tiempos de carga y caché | ✅ | `.htaccess` con GZIP, `Cache-Control: public, max-age=31536000, immutable` para assets, `no-cache` para HTML, dns-prefetch + preconnect a CDN |
| 10 | Textos destacados | ✅ | Hero CTAs reformulados ("Solicitar Valoración Personalizada", "Conocer Nuestros Servicios") con jerarquía visual |
| 11 | FAQ | ✅ | FAQ general + FAQ específicas en Instalaciones, LargaEstancia, ResidenciaCanina/Felina, todas con `FAQPage` JSON-LD |
| 12 | Call to Action | ✅ | CTAs primario+secundario en hero, sticky en landings de anuncio, botón flotante WhatsApp persistente |
| 13 | Tracking GA4/GTM/Ads/GSC | ✅ | GA4 `G-JR3N422110`, GTM `GTM-PB35J3M`, Google Ads `AW-1010676556` (sin duplicados), Search Console verificado |
| 14 | Formularios + WhatsApp + Teléfono | ✅ | Tracking de conversiones a Google Ads/GA4 en envío de formulario, click WhatsApp y click teléfono |

---

## 2. Cambios técnicos aplicados en este sprint

### 2.1 Schema Markup enriquecido (`client/src/components/SchemaMarkup.tsx`)

- `LocalBusiness` ampliado con `geo`, `openingHoursSpecification`, `priceRange`, `paymentAccepted`, `currenciesAccepted` y `aggregateRating` real.
- `Organization` con `sameAs` a perfiles sociales.
- `WebSite` con `potentialAction: SearchAction` para la search box en SERP.
- `Service` con `offers` (`priceMin`/`priceMax`/`priceCurrency`/`availability`).
- Helpers `createFAQSchema`, `createBreadcrumbSchema`, `createBlogPostSchema`, `createReviewSchema`.
- Inyección en cada página relevante (Home, Tarifas, Instalaciones, LargaEstancia, Residencia Canina/Felina, Guardería, Blog, BlogPost, Contacto, **FAQ**).

### 2.2 Optimización de imágenes

- `Header.tsx`: logo con `loading="eager"`, `fetchpriority="high"`, dimensiones declaradas y `alt/title` descriptivos (LCP).
- `Footer.tsx`, `RecentBlogPosts.tsx`, `ServiceCard.tsx`, `BlogPost.tsx`, `Home.tsx`, `Instalaciones.tsx` (galería + modal), `LargaEstancia.tsx`: `loading="lazy"`, `decoding="async"`, `width`/`height` y `alt/title` orientados a keywords locales.

### 2.3 Rendimiento y caché (`client/public/.htaccess`)

- GZIP para HTML, CSS, JS, SVG, fuentes.
- `Cache-Control: public, max-age=31536000, immutable` para `jpg|jpeg|png|gif|webp|svg|ico|woff|woff2|ttf|otf|eot|css|js`.
- `Cache-Control: no-cache, no-store, must-revalidate` para HTML.
- Cabeceras de seguridad: `X-Frame-Options`, `X-Content-Type-Options`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`.
- Redirecciones 301 desde estructura legacy WordPress (`/blog/post/...`, `/articulos/...`, `/servicios/...`, `/galeria`, `/preguntas-frecuentes`, `/contactanos`, etc.).

### 2.4 Preload, preconnect y DNS prefetch (`client/index.html`)

- `preconnect` a `fonts.googleapis.com`, `fonts.gstatic.com` y `d2xsxph8kpxj0f.cloudfront.net` (CDN de imágenes).
- `dns-prefetch` a `googletagmanager.com`, `google-analytics.com`, `googleads.g.doubleclick.net`, `google.com`.

### 2.5 Tracking unificado de Google Analytics 4 + Google Ads

- **Una sola configuración** de `gtag` que incluye `G-JR3N422110` (GA4) y `AW-1010676556` (Ads); eliminado código duplicado anterior.
- GTM `GTM-PB35J3M` con fallback `<noscript>` para usuarios sin JS.
- Helper `client/src/lib/conversionTracking.ts` con tres conversiones listas:
  - `trackContactFormSubmission()` → disparada al envío exitoso del formulario en `Contacto.tsx`.
  - `trackWhatsAppClick()` → integrada en el botón flotante `WhatsAppButton.tsx`.
  - `trackPhoneClick()` → integrada en el enlace de teléfono del `Footer.tsx`.
- Todos los eventos empujan también a `dataLayer`, por lo que pueden usarse como triggers desde GTM.

**Pendiente operativo:** sustituir las *conversion labels* placeholder (`contact_form`, `whatsapp_click`, `phone_click`) por las que Google Ads asigne al crear cada acción de conversión en la cuenta `946-240-2340`.

### 2.6 Tarifas reales

Las tarifas mostradas en `Tarifas.tsx` (ES y EN) ahora reflejan los precios reales de la residencia:

| Modalidad | Precio |
|---|---|
| Box exterior (perro) | 20 €/día |
| Box interior con calefacción | 28 €/día |
| Habitación individual con calefacción | 40 €/día |
| Cachorros < 10 meses | 21 €/día |
| Gatos adultos | 18 €/día |
| Gatitos < 10 meses | 19 €/día |
| 2+ animales | Descuentos consultables |

### 2.7 Lenguaje del sitio: "mascota" → "perro o gato"

Reemplazo realizado en `Home.tsx`, `Tarifas.tsx`, `Instalaciones.tsx`, `LargaEstancia.tsx`, `GuarderiaEnCasa.tsx`, `WhatsAppButton.tsx`, `BlogConversionBanner.tsx`, `PoliticaPrivacidad.tsx` y plantillas EN equivalentes (`pet` → `dog or cat`). Objetivo: filtrar a la audiencia incorrecta (otras especies exóticas) tal y como pidió Luis.

---

## 3. Verificación funcional

- **Diagnósticos de servidor** (`webdev_check_status`): TypeScript sin errores, LSP sin errores, dependencias OK, dev server activo.
- **Renderizado**: la home se renderiza correctamente con el nuevo copy "Alojamiento para perros y gatos…" y el logo con dimensiones declaradas.
- **HMR**: hot reload de Tarifas, GuarderiaEnCasa y PoliticaPrivacidad sin warnings.

---

## 4. Próximas recomendaciones (fuera del alcance de este sprint)

1. **Generar conversion actions reales en Google Ads** y reemplazar los placeholders `AW-1010676556/contact_form`, `AW-1010676556/whatsapp_click`, `AW-1010676556/phone_click` por las labels asignadas. Pendiente de acceso operativo a la cuenta de Ads.
2. **Compresión WebP/AVIF** de las imágenes de Unsplash que aún sirve `Instalaciones.tsx` (actualmente JPEG por la URL `?fit=crop`); migrarlas al bucket CloudFront propio en formato WebP.
3. **Sitemap dinámico** que actualice automáticamente las URLs de nuevos artículos del blog.
4. **Core Web Vitals monitoring** en GA4: añadir el snippet `web-vitals` para reportar LCP/INP/CLS por URL.
5. **Test A/B** del CTA principal del hero (Solicitar Valoración vs Reserva Online) para medir conversión real.

---

*Documento generado automáticamente como parte del sprint de optimización on-page solicitado por el cliente.*
