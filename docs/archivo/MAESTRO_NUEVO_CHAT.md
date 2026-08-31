# MAESTRO_NUEVO_CHAT.md â Fontfreda Web

> Documento de referencia para nuevas sesiones de IA.  
> **Ãltima actualizaciÃ³n:** 10 de junio de 2026 (tarde/noche)

---

## 1. DescripciÃ³n del Proyecto

**Fontfreda** â residencia familiar para perros y gatos. Alt PenedÃ¨s, Barcelona.

| Campo | Valor |
|---|---|
| Dominio | https://www.fontfreda.net |
| DirecciÃ³n | Finca Can Farigola, 08790 Gelida, Barcelona |
| TelÃ©fono | +34 93 779 03 11 |
| Email | info@fontfreda.net |
| Google Ads | 946-240-2340 |
| GA4 | G-JR3N422110 |
| GTM | GTM-PB35J3M |

**AÃ±os de actividad: 40+** (Luis lleva ~45 aÃ±os, pero prefiere comunicar "mÃ¡s de 40 aÃ±os". Nunca escribir 10 ni 20).

### Dato diferencial clave â PENDIENTE DE INTEGRAR EN WEB
**5 parques de recreo de 400 a 600 mÂ² cada uno, vallados, dentro de la finca.**  
Este dato aÃºn no aparece en web ni landings â debe incorporarse en textos de servicio y anuncios.

---

## 2. Stack TÃ©cnico

- **Frontend:** React 19 + TypeScript, SPA, Vite, Tailwind CSS 4, wouter routing
- **Backend:** Express 4 + tRPC 11
- **DB:** MySQL/TiDB via Drizzle ORM
- **Email:** Brevo API REST (no SMTP)
- **Hosting:** Railway (proyecto `gleaming-recreation`, autodeploy desde `main`)
- **DNS/CDN:** Cloudflare
- **Node/npm:** Solo en Windows â no hay node_modules en WSL
- **Git:** Vive en WSL â ejecutar con `wsl -e bash -c "cd ~/fontfreda-web && git ..."`

### Patrones de cÃ³digo clave

```tsx
// DetecciÃ³n de idioma (mayorÃ­a de pÃ¡ginas)
const isEnglish = location.startsWith("/en");
const t = isEnglish ? { ...EN } : { ...ES };

// GuarderiaEnCasa usa variable distinta
const language = getLanguage(); // "es" | "en"

// LandingAdsCatala: solo CA, sin isEnglish, sin HrefLang
```

### PatrÃ³n formulario con memoria (sessionStorage)

Aplicado en las 4 landings de Ads. Ejemplo (clave varÃ­a por landing):

```tsx
const SESSION_KEY = "fontfreda_form_canina"; // _guarderia / _larga_estancia / _felina

const [form, setForm] = useState<FormState>(() => {
  try {
    const saved = sessionStorage.getItem(SESSION_KEY);
    return saved ? JSON.parse(saved) : INITIAL_FORM;
  } catch { return INITIAL_FORM; }
});

useEffect(() => {
  try { sessionStorage.setItem(SESSION_KEY, JSON.stringify(form)); } catch {}
}, [form]);

// En el handler de Ã©xito:
sessionStorage.removeItem(SESSION_KEY);
setForm(INITIAL_FORM);
```

---

## 3. Landings de Google Ads

| Archivo | Ruta ES | Estado |
|---|---|---|
| `LandingAdsCanina.tsx` | `/residencia-canina-barcelona` | â Hero real + galerÃ­a recreo (4 JPEGs nuevos jun 2026) + Trust section + sessionStorage |
| `LandingAdsGuarderia.tsx` | `/guarderia-canina-barcelona` | â Hero real + galerÃ­a + Trust section + sessionStorage |
| `LandingAdsLargaEstancia.tsx` | `/larga-estancia-perros-gatos` | â Hero real + galerÃ­a + Trust section + sessionStorage |
| `LandingAdsFelina.tsx` | `/residencia-felina-barcelona` | â ImÃ¡genes reales de Luis integradas jun 2026 (hero, instalaciones, vistas, galerÃ­a gatos); sessionStorage; Trust section; ServicePromoBanner |
| `LandingAdsCatala.tsx` | `/residencia-canina-barcelona-ca` | â Creada jun 2026, idioma CA, sin hreflang â â ï¸ verificar si necesita galerÃ­a propia |

**Landings EN** (`/en/dog-boarding-barcelona`, `/en/cat-boarding-barcelona`, `/en/long-term-boarding`): â ï¸ Pendientes de aplicar el patrÃ³n de imÃ¡genes reales.

### PatrÃ³n visual estÃ¡ndar (landings caninas)

```
Hero foto real (fetchpriority="high")
â Benefits
â GalerÃ­a 4 cols edge-to-edge (py-0, grid-cols-2 md:grid-cols-4, loading="lazy")
â Features
â Why
â Testimonial
â Otros servicios (ServicePromoBanner x2)
â Trust (foto Luis + Bulldog, badge "40+ aÃ±os")
â Formulario (#formulario)
â CTA final
```

---

## 4. ImÃ¡genes

**Estado: â Completado** â ImÃ¡genes reales integradas en todas las landings y pÃ¡ginas orgÃ¡nicas. **No hay URLs CloudFront en ningÃºn componente.**

UbicaciÃ³n: `client/public/images/` con subcarpetas:

### `canina/`
- `residencia-canina-9.jpg` â hero LandingAdsCanina
- `residencia-canina-fontfreda-7.jpg` â hero LandingAdsLargaEstancia, banner larga-estancia
- `guarderia-canina-1.jpg` â hero LandingAdsGuarderia *(archivo estÃ¡ en canina/, no en guarderia/)*
- `hotel-canino-fontfreda-2.jpg`, `residencia-canina-11.jpg`, `residencia-canina-7.jpg`, `residencia-canina-8.jpg`
- `hotel-canino-5.jpg`, `area-recreo-caninos-5.jpg`, `alojamiento-fontfreda.jpg`
- `perro_suelto_recinto_recreo.jpeg` â galerÃ­a recreo LandingAdsCanina *(nuevo jun 2026)*
- `paseo-perros-sueltos.jpeg` â galerÃ­a recreo LandingAdsCanina *(nuevo jun 2026)*
- `perros_espadio_recreo.jpeg` â galerÃ­a recreo LandingAdsCanina *(nuevo jun 2026)*
- `perros-residencia-canina.jpeg` â galerÃ­a recreo LandingAdsCanina *(nuevo jun 2026)*

### `guarderia/`
- `guarderia-canina-11.jpg`, `guarderia-canina-8-1080x1459.jpg`, `perro-en-area-de-recreo-3.jpg`
- `guarderia-canina-4.jpg`, `guarderia-canina-7.jpg`, `perro-en-area-de-recreo-2.jpg`

### `dentro-de-casa/`
- `hotel-canino-fontfreda-4.jpg` â hero GuarderiaEnCasa + banner dentro-de-casa
- `hotel-canino-3.jpg`, `hotel-canino-7.jpg`, `labrador-dentro-de-casa.jpg`, `guarderia-canina-en-casa-2.jpg`
- `akita-en-casa-interior.jpg`, `alojamiento-canino-en-casa.jpg`, `guarderia-canina-9.jpg`, `residencia-canina-12.jpg`, `teckel-inside.jpg`

### `instalaciones/`
- `instantanea-residencia-nevada.jpg` â galerÃ­a larga estancia
- `abitaculos-exteriores-perros.jpg`, `instalaciones-exteriores-residencia-2.jpg`, `instalaciones-residencia.jpg`
- `residencia-canina-fontfreda-4.jpg`, `residencia-fontfreda-1.jpg`, `vallado-exterior.jpg`
- `figuras-exterior.jpg`, `flora-interior-residencia.jpg`, `instalaciones-exteriores-verano.png`

### `entorno/`
- `alt-penedes.jpg`, `vistas-del-pareje.jpg`, `olivo.jpg`
- `lluis-con-conllins.jpg`, `luis-caballo-andaluz.jpg`, `luis-con-caballos.jpg`
- `fondo_instalaciones.jpg`, `instantanea-residencia-nevada.jpg`

### `trust/`
- `guarderia-canina-5.jpg` â foto Luis + Bulldog FrancÃ©s (usada en Trust section de todas las landings)
- `cachorro-akita-con-luis.jpg`, `haskit-con-luis.jpg`, `hotel-canino-8.jpg`
- `recepcion-perro-con-dueno.jpg`, `canon-027.jpeg`

### `recogida/`
- `transporte.jpg`, `transporte-1.jpg`, `recogida-entrega-animales.jpg.webp`, `transporte2.jpg.webp`

### `felina/` â imÃ¡genes reales de Luis integradas jun 2026
**Archivos nuevos (11 JPEGs, fotos reales):**
- `gatos-en-la-residencia.jpeg` â hero LandingAdsFelina + hero ResidenciaFelina
- `espacio-interior-residencia-felina.jpeg` â instalaciones LandingAdsFelina col 1; galerÃ­a ResidenciaFelina col 1
- `interior-residencia-2.jpeg` â instalaciones LandingAdsFelina col 2; galerÃ­a ResidenciaFelina col 4
- `exterior-residencia-felina.jpeg` â instalaciones LandingAdsFelina col 3
- `gato_interior-redidencia.jpeg` â banner vistas LandingAdsFelina *(typo en nombre: "redidencia", no corregir)*
- `gatos-residencia-felina.jpeg` â galerÃ­a gatos LandingAdsFelina col 1
- `gato-sillon-residencia.jpeg` â galerÃ­a gatos LandingAdsFelina col 2
- `gato-durmiendo-en-la-residencia-felina.jpeg` â galerÃ­a gatos LandingAdsFelina col 3
- `gatos-alojados-residencia-felina.jpeg` â galerÃ­a gatos LandingAdsFelina col 4
- `gato-alojado-en-residencia.jpeg` â galerÃ­a ResidenciaFelina col 2
- `gato-2-residencia-felina.jpeg` â galerÃ­a ResidenciaFelina col 3

**Archivos legacy (mantener, no eliminar):**
- `hero.jpg`, `instalaciones-1.jpg`, `instalaciones-2.jpg`, `instalaciones-3.jpg`, `vistas-1.jpg`
- `gato-1.jpg`, `gato-5.jpg`, `gato-7.jpg`, `gato-8.jpg`

---

## 5. PÃ¡ginas OrgÃ¡nicas de Servicio

| PÃ¡gina | Archivo | Estado |
|---|---|---|
| Residencia Canina | `ResidenciaCanina.tsx` | â Hero local `/images/canina/residencia-canina-9.jpg`; CloudFront eliminado; ServicePromoBanner; Service + FAQPage + Breadcrumb schema |
| Residencia Felina | `ResidenciaFelina.tsx` | â Hero local `/images/felina/gatos-en-la-residencia.jpeg` (CloudFront eliminado jun 2026); galerÃ­a 4 cols aÃ±adida tras secciÃ³n principal; Service + FAQPage + Breadcrumb schema |
| GuarderÃ­a Canina | `Guarderia.tsx` | â Service + Breadcrumb schema; badge 40+ aÃ±os |
| Larga Estancia | `LargaEstancia.tsx` | â Solo perros; imÃ¡genes reales; galerÃ­a; Trust; LocalBusiness + Service + Breadcrumb schema |
| GuarderÃ­a en Casa | `GuarderiaEnCasa.tsx` | â Solo perros; hero real; galerÃ­a; Trust; Service + Breadcrumb schema |

---

## 6. Componentes Reutilizables

### `ServicePromoBanner`

**Archivo:** `client/src/components/ServicePromoBanner.tsx`  
**Creado:** SesiÃ³n junio 2026

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
- `LandingAdsCanina.tsx` â entre Testimonial y Trust
- `LandingAdsGuarderia.tsx` â entre Testimonial y Trust
- `LandingAdsFelina.tsx` â entre GalerÃ­a de gatos y Trust
- `ResidenciaCanina.tsx` â antes del CTA final
- `Guarderia.tsx` â antes de Trust section
- `BlogPost.tsx` â despuÃ©s de BlogConversionBanner

**Variante `dentro-de-casa`:**
- Imagen: `/images/dentro-de-casa/hotel-canino-fontfreda-4.jpg`
- ES: "Residencia Dentro de Casa" / "Tu perro vive dentro de nuestra casa familiar..."
- EN: "Dog Boarding In-Home" / "Your dog lives inside our family home..."
- Link ES: `/guarderia-canina-dentro-de-casa` | EN: `/en/guarderia-canina-dentro-de-casa`

**Variante `larga-estancia`:**
- Imagen: `/images/canina/residencia-canina-fontfreda-7.jpg`
- ES: "Larga Estancia para Perros" / "Meses o aÃ±os con tarifas especiales..."
- EN: "Long-Term Dog Boarding" / "Months or years with special rates..."
- Link ES: `/larga-estancia` | EN: `/en/larga-estancia`

---

## 6b. SEO TÃ©cnico y Schema JSON-LD

**Estado tras sesiÃ³n 10 jun 2026 â cobertura 100% en todas las pÃ¡ginas:**

### Infraestructura SEO

| Archivo | Estado |
|---|---|
| `client/src/components/SEO.tsx` | â Gestiona meta tags, OG, Twitter Cards, geo tags. Default `ogImage` corregido a URL local. |
| `client/src/components/SchemaMarkup.tsx` | â URLs WordPress muertas corregidas. Exporta: `localBusinessSchema`, `organizationSchema`, `websiteSchema`, `createFAQSchema`, `createServiceSchema`, `createBreadcrumbSchema`, `createBlogPostSchema`, `createReviewSchema`. |
| `client/public/robots.txt` | â URL sitemap corregida a `https://www.fontfreda.net/sitemap.xml` |
| `server/routes/sitemap.ts` | â DinÃ¡mico. AÃ±adidas: `/guarderia-canina-barcelona`, `/en/dog-daycare-barcelona`, `/residencia-canina-barcelona-ca` |
| `client/public/llms.txt` | â Creado. Instrucciones para crawlers IA (ChatGPT, Perplexity, Claude). Incluye reglas de negocio crÃ­ticas. |

### Cobertura de schema por pÃ¡gina

| PÃ¡gina | LocalBusiness | Organization | WebSite | Service | FAQPage | Breadcrumb |
|---|---|---|---|---|---|---|
| `Home.tsx` | â | â | â | â | â | â |
| `ResidenciaCanina.tsx` | â | â | â | â | â | â |
| `ResidenciaFelina.tsx` | â | â | â | â | â | â |
| `Guarderia.tsx` | â | â | â | â | â | â |
| `GuarderiaEnCasa.tsx` | â | â | â | â | â | â |
| `LargaEstancia.tsx` | â | â | â | â | â | â |
| `FAQ.tsx` | â | â | â | â | â | â |
| `BlogPost.tsx` | â | â | â | â | â | â + BlogPosting â |
| `LandingAdsCanina.tsx` | â | â | â | â | â | â |
| `LandingAdsGuarderia.tsx` | â | â | â | â | â | â |
| `LandingAdsLargaEstancia.tsx` | â | â | â | â | â | â |
| `LandingAdsFelina.tsx` | â | â | â | â | â | â |
| `LandingAdsCatala.tsx` | â | â | â | â | â | â |

### URLs de referencia en schemas (corregidas)
- **Imagen negocio:** `https://www.fontfreda.net/images/instalaciones/residencia-fontfreda-1.jpg`
- **Logo:** `https://www.fontfreda.net/images/logo-fontfreda_cuadrado.jpg`
- **OG image default:** `https://www.fontfreda.net/images/instalaciones/residencia-fontfreda-1.jpg`

---

## 6c. Google Ads â Estado Cuenta 946-240-2340

### CampaÃ±a Residencia Felina
- â 42 keywords negativas aÃ±adidas a nivel campaÃ±a
- â Keywords de residencia/guarderÃ­a/hotel felino aÃ±adidas
- â Keywords de intenciÃ³n vacacional aÃ±adidas
- â ï¸ **Recordatorio 1 julio 2026:** revisar estrategia de puja

### Grupo GuarderÃ­a Canina
- â 2 keywords eliminadas
- â 2 sitelinks nuevos aÃ±adidos
- â 3 anuncios â calidad **Excelente**

### Grupo Residencia Perros
- â 14 keywords eliminadas
- â 4 keywords vacacional aÃ±adidas
- â 3 anuncios â calidad **Excelente**

### Pendiente revisar
- â ï¸ Grupo "fontfreda english"
- â ï¸ Grupo "fontfreda catalÃ "

---

## 7. Correcciones Aplicadas (Reglas de Negocio)

> Estas correcciones son definitivas. No revertir.

- **AÃ±os de experiencia:** Fontfreda tiene **40+ aÃ±os** de actividad. Nunca escribir 10 ni 20. (Luis lleva ~45 aÃ±os; prefiere comunicar "mÃ¡s de 40".)
- **Larga estancia es exclusivamente para perros** â eliminadas referencias a gatos en `LargaEstancia.tsx` y `GuarderiaEnCasa.tsx`.
- `guarderia-canina-1.jpg` estÃ¡ en `canina/`, no en `guarderia/`.
- **Instalaciones.tsx:** Eliminados `servicio-veterinaria` y `servicio-higiene` del array `galleryItems` y la categorÃ­a `"servicios"` del filtro. Motivo: eran servicios falsos con imÃ¡genes Unsplash que Fontfreda no ofrece como servicio independiente. â ï¸ Resto de imÃ¡genes en Instalaciones.tsx siguen siendo Unsplash â pendiente sustituir por fotos reales.
- **CloudFront eliminado:** La Ãºltima URL CloudFront (hero ResidenciaFelina) fue sustituida por imagen local en jun 2026. **Ya no hay URLs CloudFront en ningÃºn componente.**

---

## 8. Pendientes

### ð´ Urgente

- **Actualizar textos "5 parques de recreo de 400-600 mÂ² cada uno"** en pÃ¡ginas de servicio y landings â dato diferencial clave aÃºn no en web.
- **Redirect 301** `fontfreda.net` â `www.fontfreda.net` (configurar en Cloudflare, no en cÃ³digo).

### ð¡ Media prioridad

- **Instalaciones.tsx imÃ¡genes Unsplash** â sustituir todas las imÃ¡genes placeholder por fotos reales de Fontfreda.
- **Revisar referencia a Huskys en pÃ¡gina GuarderÃ­a** â posible menciÃ³n incorrecta pendiente de confirmar.
- **Optimizar grupos "fontfreda english" y "fontfreda catalÃ "** en Google Ads.
- **Recordatorio 1 julio 2026:** revisar estrategia de puja campaÃ±a Residencia Felina.
- **ArtÃ­culos de blog individuales:** Crear rutas `/blog/:slug` con contenido completo.
- **Aplicar patrÃ³n imÃ¡genes a landings EN:** `/en/dog-boarding-barcelona`, `/en/cat-boarding-barcelona`, `/en/long-term-boarding`.
- **LandingAdsCatala.tsx:** Verificar galerÃ­a o Hero propio.
- **FAQPage schema** en `Guarderia.tsx` y `GuarderiaEnCasa.tsx`.

### ð¢ Baja prioridad / Backlog

- Instalar Claude para Excel.
- CampaÃ±a Google Ads **GuarderÃ­a Dentro de Casa**.
- Cancelar suscripciÃ³n SiteGround (confirmar que email no depende de Ã©l).
- Tabla MySQL para newsletter.
- Corregir anomalÃ­as router: `/instalaciones` en bloque EN, ruta `/blog` duplicada.

---

## 9. Historial de Commits Relevantes (Jun 2026)

| Hash | DescripciÃ³n |
|---|---|
| `01c0b86` | feat: integrate new real photos from Luis into felina and canina components |
| `5bc41ef` | feat: add new real jpeg photos from Luis (11 felina + 4 canina) |
| `61f085c` | fix: update 40yr experience, add form persistence, remove fake services from Instalaciones |
| `66091bb` | feat: add all dog and cat images to repository |
| `9f65b82` | docs: update MAESTRO_NUEVO_CHAT.md end of session june 10 2026 |
| `1699289` | feat: add felina images, fix ResidenciaCanina hero, add Trust and banners to LandingAdsFelina |
| `7290867` | seo: add Service schema to all Ads landings and fix BlogPost schema |
| `dbb6e7d` | feat: add ServicePromoBanner to Guarderia and blog, fix 20yr copy, add Trust to Guarderia |
| `6db3cf4` | seo: fix dead URLs, complete schema coverage, add llms.txt, update sitemap |
| `edc715c` | feat: add ServicePromoBanner component and insert into canine pages |
| `cdd6c13` | feat: integrate real images into LargaEstancia and GuarderiaEnCasa |
| `fa730f5` | fix: update trust badge to 20+ years experience |

---

## 10. Instrucciones para IAs

1. **SPA React** â no confundir con Next.js/SSR.
2. **Email = Brevo API REST** â no SMTP, no SiteGround.
3. **Hosting activo = Railway `gleaming-recreation`** â push a `main` dispara autodeploy.
4. **Git estÃ¡ en WSL** â ejecutar `wsl -e bash -c "cd ~/fontfreda-web && git ..."` desde PowerShell.
5. **node_modules solo en Windows** â no ejecutar `npm`/`tsc`/`vite` en WSL.
6. **Multiidioma obligatorio** â todo cambio de texto debe incluir ES + EN.
7. **40+ aÃ±os**, nunca 10 ni 20. **Larga estancia y GuarderiaEnCasa = solo perros**, nunca mencionar gatos.
8. **Cloudflare gestiona DNS** â redirects de dominio van en Cloudflare, no en `.htaccess`.
9. **`isEnglish`** es el patrÃ³n estÃ¡ndar; `GuarderiaEnCasa.tsx` usa `language = getLanguage()`.
10. **`LandingAdsCatala.tsx`** es solo CA, sin `isEnglish`, sin HrefLang.
11. **No hay URLs CloudFront en ningÃºn componente** â todas las imÃ¡genes son rutas locales `/images/...`.
12. **Formulario con sessionStorage** â patrÃ³n implementado en las 4 landings Ads; ver secciÃ³n 2.
