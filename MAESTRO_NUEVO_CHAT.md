# MAESTRO_NUEVO_CHAT.md — Fontfreda Web

> Documento de referencia para nuevas sesiones de IA.  
> **Última actualización:** 10 de junio de 2026 (fin de sesión)

---

## 1. Descripción del Proyecto

**Fontfreda** — residencia familiar para perros y gatos. Alt Penedès, Barcelona.

| Campo | Valor |
|---|---|
| Dominio | https://www.fontfreda.net |
| Dirección | Finca Can Farigola, 08790 Gelida, Barcelona |
| Teléfono | +34 93 779 03 11 |
| Email | info@fontfreda.net |
| Google Ads | 946-240-2340 |
| GA4 | G-JR3N422110 |
| GTM | GTM-PB35J3M |

**Años de actividad: 20+** (nunca escribir 10).

---

## 2. Stack Técnico

- **Frontend:** React 19 + TypeScript, SPA, Vite, Tailwind CSS 4, wouter routing
- **Backend:** Express 4 + tRPC 11
- **DB:** MySQL/TiDB via Drizzle ORM
- **Email:** Brevo API REST (no SMTP)
- **Hosting:** Railway (proyecto `gleaming-recreation`, autodeploy desde `main`)
- **DNS/CDN:** Cloudflare
- **Node/npm:** Solo en Windows — no hay node_modules en WSL
- **Git:** Vive en WSL → ejecutar con `wsl -e bash -c "cd ~/fontfreda-web && git ..."`

### Patrones de código clave

```tsx
// Detección de idioma (mayoría de páginas)
const isEnglish = location.startsWith("/en");
const t = isEnglish ? { ...EN } : { ...ES };

// GuarderiaEnCasa usa variable distinta
const language = getLanguage(); // "es" | "en"

// LandingAdsCatala: solo CA, sin isEnglish, sin HrefLang
```

---

## 3. Landings de Google Ads

| Archivo | Ruta ES | Estado |
|---|---|---|
| `LandingAdsCanina.tsx` | `/residencia-canina-barcelona` | ✅ Hero real + galería + Trust section |
| `LandingAdsGuarderia.tsx` | `/guarderia-canina-barcelona` | ✅ Hero real + galería + Trust section |
| `LandingAdsLargaEstancia.tsx` | `/larga-estancia-perros-gatos` | ✅ Hero real + galería + Trust section |
| `LandingAdsFelina.tsx` | `/residencia-felina-barcelona` | ✅ Imágenes felina completas (hero, instalaciones-1/2/3, vistas-1, gato-5/7/8); Trust section (Luis) + ServicePromoBanner añadidos jun 2026 |
| `LandingAdsCatala.tsx` | `/residencia-canina-barcelona-ca` | ✅ Creada sesión jun 2026, idioma CA, sin hreflang |

**Landings EN** (`/en/dog-boarding-barcelona`, `/en/cat-boarding-barcelona`, `/en/long-term-boarding`): ⚠️ Pendientes de aplicar el patrón de imágenes reales.

### Patrón visual estándar (landings caninas)

```
Hero foto real (fetchpriority="high")
→ Benefits
→ Galería 4 cols edge-to-edge (py-0, grid-cols-2 md:grid-cols-4, loading="lazy")
→ Features
→ Why
→ Testimonial
→ Otros servicios (ServicePromoBanner x2)
→ Trust (foto Luis + Bulldog, badge "20+ años")
→ Formulario (#formulario)
→ CTA final
```

---

## 4. Imágenes

**Estado: ✅ Completado** — Imágenes reales integradas en todas las landings caninas y páginas orgánicas.

Ubicación: `client/public/images/` con subcarpetas:

### `canina/`
- `residencia-canina-9.jpg` — hero LandingAdsCanina
- `residencia-canina-fontfreda-7.jpg` — hero LandingAdsLargaEstancia, banner larga-estancia
- `guarderia-canina-1.jpg` — hero LandingAdsGuarderia *(archivo está en canina/, no en guarderia/)*
- `hotel-canino-fontfreda-2.jpg`
- `residencia-canina-11.jpg`
- `espacio-de-recreo-para-perros.jpg`
- `residencia-canina-7.jpg`, `residencia-canina-8.jpg`, `hotel-canino-5.jpg`, `area-recreo-caninos-5.jpg`, `alojamiento-fontfreda.jpg`

### `guarderia/`
- `guarderia-canina-11.jpg`
- `guarderia-canina-8-1080x1459.jpg`
- `perro-en-area-de-recreo-3.jpg`
- `guarderia-canina-4.jpg`, `guarderia-canina-7.jpg`, `perro-en-area-de-recreo-2.jpg`

### `dentro-de-casa/`
- `hotel-canino-fontfreda-4.jpg` — hero GuarderiaEnCasa + banner dentro-de-casa
- `hotel-canino-3.jpg`, `hotel-canino-7.jpg`, `labrador-dentro-de-casa.jpg`, `guarderia-canina-en-casa-2.jpg`
- `akita-en-casa-interior.jpg`, `alojamiento-canino-en-casa.jpg`, `guarderia-canina-9.jpg`, `residencia-canina-12.jpg`, `teckel-inside.jpg`

### `instalaciones/`
- `instantanea-residencia-nevada.jpg` — galería larga estancia
- `abitaculos-exteriores-perros.jpg`, `instalaciones-exteriores-residencia-2.jpg`, `instalaciones-residencia.jpg`
- `residencia-canina-fontfreda-4.jpg`, `residencia-fontfreda-1.jpg`, `vallado-exterior.jpg`
- `figuras-exterior.jpg`, `flora-interior-residencia.jpg`, `instalaciones-exteriores-verano.png`

### `entorno/`
- `alt-penedes.jpg`, `vistas-del-pareje.jpg`, `olivo.jpg`
- `lluis-con-conllins.jpg`, `luis-caballo-andaluz.jpg`, `luis-con-caballos.jpg`
- `fondo_instalaciones.jpg`, `instantanea-residencia-nevada.jpg`

### `trust/`
- `guarderia-canina-5.jpg` — foto Luis + Bulldog Francés (usada en Trust section de todas las landings)
- `cachorro-akita-con-luis.jpg`, `haskit-con-luis.jpg`, `hotel-canino-8.jpg`
- `recepcion-perro-con-dueno.jpg`, `canon-027.jpeg`

### `recogida/`
- `transporte.jpg`, `transporte-1.jpg`, `recogida-entrega-animales.jpg.webp`, `transporte2.jpg.webp`

### `felina/`
- `hero.jpg` ← `residencia-felina-5.jpg` (2018, backup WP)
- `instalaciones-1.jpg` ← `instalaciones-felinos.jpg` (2011)
- `instalaciones-2.jpg` ← `residencia-felina-6.jpg` (2016)
- `instalaciones-3.jpg` ← `residencia-felina-9.jpg` (2016)
- `vistas-1.jpg` ← `residencia-felina-12.jpg` (2016)
- `gato-1.jpg` — gato original
- `gato-5.jpg` ← `gato_alojamiento.jpg` (2016)
- `gato-7.jpg` ← `gato-en-residencia-felina.jpg` (2017)
- `gato-8.jpg` ← `gato-toma-sol-ventana.jpg` (2017)

---

## 5. Páginas Orgánicas de Servicio

| Página | Archivo | Estado |
|---|---|---|
| Residencia Canina | `ResidenciaCanina.tsx` | ✅ Hero reemplazado por `/images/canina/residencia-canina-9.jpg`; ServicePromoBanner insertado; Service + FAQPage + Breadcrumb schema ✅ |
| Residencia Felina | `ResidenciaFelina.tsx` | Service + FAQPage + Breadcrumb schema ✅; imágenes sin revisar |
| Guardería Canina | `Guarderia.tsx` | ✅ Service + Breadcrumb schema añadidos jun 2026 |
| Larga Estancia | `LargaEstancia.tsx` | ✅ Gatos eliminados, imágenes reales, galería, Trust; LocalBusiness + Service + Breadcrumb schema añadidos jun 2026 |
| Guardería en Casa | `GuarderiaEnCasa.tsx` | ✅ Gatos eliminados, hero real, galería, Trust; Service + Breadcrumb schema añadidos jun 2026 |

---

## 6. Componentes Reutilizables

### `ServicePromoBanner`

**Archivo:** `client/src/components/ServicePromoBanner.tsx`  
**Creado:** Sesión junio 2026

Muestra un banner promocional horizontal (imagen + texto + CTA) para otros servicios de la residencia.

**Props:**
```tsx
variant: "dentro-de-casa" | "larga-estancia"
language: "es" | "en"
```

**Uso:**
```tsx
import ServicePromoBanner from "@/components/ServicePromoBanner";

<section className="py-8 bg-secondary/30">
  <div className="container mx-auto px-4 max-w-5xl space-y-4">
    <ServicePromoBanner variant="dentro-de-casa" language={isEnglish ? "en" : "es"} />
    <ServicePromoBanner variant="larga-estancia" language={isEnglish ? "en" : "es"} />
  </div>
</section>
```

**Insertado en:**
- `LandingAdsCanina.tsx` — entre Testimonial y Trust
- `LandingAdsGuarderia.tsx` — entre Testimonial y Trust
- `LandingAdsFelina.tsx` — entre Galería de gatos y Trust
- `ResidenciaCanina.tsx` — antes del CTA final
- `Guarderia.tsx` — antes de Trust section
- `BlogPost.tsx` — después de BlogConversionBanner

**Variante `dentro-de-casa`:**
- Imagen: `/images/dentro-de-casa/hotel-canino-fontfreda-4.jpg`
- ES: "Residencia Dentro de Casa" / "Tu perro vive dentro de nuestra casa familiar..."
- EN: "Dog Boarding In-Home" / "Your dog lives inside our family home..."
- Link ES: `/guarderia-canina-dentro-de-casa` | EN: `/en/guarderia-canina-dentro-de-casa`

**Variante `larga-estancia`:**
- Imagen: `/images/canina/residencia-canina-fontfreda-7.jpg`
- ES: "Larga Estancia para Perros" / "Meses o años con tarifas especiales..."
- EN: "Long-Term Dog Boarding" / "Months or years with special rates..."
- Link ES: `/larga-estancia` | EN: `/en/larga-estancia`

---

## 6b. SEO Técnico y Schema JSON-LD

**Estado tras sesión 10 jun 2026 — cobertura 100% en todas las páginas:**

### Infraestructura SEO

| Archivo | Estado |
|---|---|
| `client/src/components/SEO.tsx` | ✅ Gestiona meta tags, OG, Twitter Cards, geo tags. Default `ogImage` corregido a URL local. |
| `client/src/components/SchemaMarkup.tsx` | ✅ URLs WordPress muertas corregidas. Exporta: `localBusinessSchema`, `organizationSchema`, `websiteSchema`, `createFAQSchema`, `createServiceSchema`, `createBreadcrumbSchema`, `createBlogPostSchema`, `createReviewSchema`. |
| `client/public/robots.txt` | ✅ URL sitemap corregida a `https://www.fontfreda.net/sitemap.xml` |
| `server/routes/sitemap.ts` | ✅ Dinámico. Añadidas: `/guarderia-canina-barcelona`, `/en/dog-daycare-barcelona`, `/residencia-canina-barcelona-ca` |
| `client/public/llms.txt` | ✅ Creado. Instrucciones para crawlers IA (ChatGPT, Perplexity, Claude). Incluye reglas de negocio críticas. |

### Cobertura de schema por página

| Página | LocalBusiness | Organization | WebSite | Service | FAQPage | Breadcrumb |
|---|---|---|---|---|---|---|
| `Home.tsx` | ✅ | ✅ | ✅ | — | — | ✅ |
| `ResidenciaCanina.tsx` | — | — | — | ✅ | ✅ | ✅ |
| `ResidenciaFelina.tsx` | — | — | — | ✅ | ✅ | ✅ |
| `Guarderia.tsx` | — | — | — | ✅ | — | ✅ |
| `GuarderiaEnCasa.tsx` | — | — | — | ✅ | — | ✅ |
| `LargaEstancia.tsx` | ✅ | — | — | ✅ | — | ✅ |
| `FAQ.tsx` | — | — | — | — | ✅ | ✅ |
| `BlogPost.tsx` | — | — | — | — | — | ✅ + BlogPosting ✅ |
| `LandingAdsCanina.tsx` | ✅ | — | — | ✅ | — | ✅ |
| `LandingAdsGuarderia.tsx` | ✅ | — | — | ✅ | — | ✅ |
| `LandingAdsLargaEstancia.tsx` | ✅ | — | — | ✅ | — | ✅ |
| `LandingAdsFelina.tsx` | ✅ | — | — | ✅ | — | ✅ |
| `LandingAdsCatala.tsx` | ✅ | — | — | ✅ | — | ✅ |

### URLs de referencia en schemas (corregidas)
- **Imagen negocio:** `https://www.fontfreda.net/images/instalaciones/residencia-fontfreda-1.jpg`
- **Logo:** `https://www.fontfreda.net/images/logo-fontfreda_cuadrado.jpg`
- **OG image default:** `https://www.fontfreda.net/images/instalaciones/residencia-fontfreda-1.jpg`

---

## 7. Correcciones Aplicadas (Reglas de Negocio)

> Estas correcciones son definitivas. No revertir.

- **Años de experiencia:** Fontfreda tiene **20+ años** de actividad. Nunca escribir 10.
- **Larga estancia es exclusivamente para perros** — eliminadas 7 menciones a gatos en `LargaEstancia.tsx` (SEO title ES/EN, description ES/EN, keywords ES/EN, img alt) y 2 menciones en `GuarderiaEnCasa.tsx` (subtítulos ES/EN).
- `guarderia-canina-1.jpg` está en `canina/`, no en `guarderia/`.

---

## 8. Pendientes

### 🔴 Urgente

- **Redirect 301** `fontfreda.net` → `www.fontfreda.net` (configurar en Cloudflare, no en código).

### 🟡 Media prioridad

- **Artículos de blog individuales:** Crear rutas `/blog/:slug` con contenido completo (actualmente solo muestran excerpt + content corto).
- **Aplicar patrón imágenes a landings EN:** `/en/dog-boarding-barcelona`, `/en/cat-boarding-barcelona`, `/en/long-term-boarding` usan los mismos componentes ES pero no tienen galería de imágenes propia.

### 🟢 Baja prioridad

- Cancelar suscripción SiteGround (confirmar que email no depende de él).
- Crear campaña Google Ads Residencia Felina (requiere acceso a cuenta 946-240-2340).
- Tabla MySQL para newsletter.
- Corregir anomalías router: `/instalaciones` en bloque EN, ruta `/blog` duplicada.

---

## 9. Historial de Commits Relevantes (Jun 2026)

| Hash | Descripción |
|---|---|
| `1699289` | feat: add felina images, fix ResidenciaCanina hero, add Trust and banners to LandingAdsFelina |
| `7290867` | seo: add Service schema to all Ads landings and fix BlogPost schema |
| `dbb6e7d` | feat: add ServicePromoBanner to Guarderia and blog, fix 20yr copy, add Trust to Guarderia |
| `6db3cf4` | seo: fix dead URLs, complete schema coverage, add llms.txt, update sitemap |
| `edc715c` | feat: add ServicePromoBanner component and insert into canine pages |
| `cdd6c13` | feat: integrate real images into LargaEstancia and GuarderiaEnCasa |
| `fa730f5` | fix: update trust badge to 20+ years experience |
| anterior | feat: add landing page in catalan for fontfreda catala ad group |
| anterior | feat: add guarderia canina landing page for Google Ads |

---

## 10. Instrucciones para IAs

1. **SPA React** — no confundir con Next.js/SSR.
2. **Email = Brevo API REST** — no SMTP, no SiteGround.
3. **Hosting activo = Railway `gleaming-recreation`** — push a `main` dispara autodeploy.
4. **Git está en WSL** — ejecutar `wsl -e bash -c "cd ~/fontfreda-web && git ..."` desde PowerShell.
5. **node_modules solo en Windows** — no ejecutar `npm`/`tsc`/`vite` en WSL.
6. **Multiidioma obligatorio** — todo cambio de texto debe incluir ES + EN.
7. **20+ años**, nunca 10. **Larga estancia y GuarderiaEnCasa = solo perros**, nunca mencionar gatos.
8. **Cloudflare gestiona DNS** — redirects de dominio van en Cloudflare, no en `.htaccess`.
9. **`isEnglish`** es el patrón estándar; `GuarderiaEnCasa.tsx` usa `language = getLanguage()`.
10. **`LandingAdsCatala.tsx`** es solo CA, sin `isEnglish`, sin HrefLang.
