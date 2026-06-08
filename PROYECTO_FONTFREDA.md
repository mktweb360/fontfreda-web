# PROYECTO_FONTFREDA.md
**Estado real del proyecto — actualizado 6 de junio de 2026**

---

## 1. DESCRIPCIÓN GENERAL

**Fontfreda** es una residencia familiar para perros y gatos ubicada en Gelida, Barcelona.  
Este repositorio contiene el sitio web completo: frontend React SPA + backend Express.

- **URL producción:** https://www.fontfreda.net  
- **Hosting:** Railway (deploy con `railway.json`)  
- **Dirección:** Finca Can Farigola, 08790 Gelida, Barcelona, España  
- **Teléfono:** +34 93 779 03 11  
- **Email:** info@fontfreda.net

---

## 2. STACK TÉCNICO

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Frontend | React | 19.2.1 |
| Language | TypeScript | 5.6.3 |
| CSS | Tailwind CSS | 4.1.14 |
| UI Components | shadcn/ui (Radix UI) | — |
| Routing | wouter | 3.3.5 |
| Forms | react-hook-form + zod | 7.64.0 / 4.1.12 |
| Animations | framer-motion | 12.23.22 |
| Build tool | Vite | 7.1.7 |
| Backend | Express | 4.21.2 |
| Database | MySQL / TiDB Cloud | mysql2 3.22.3 |
| Email | nodemailer (SMTP Brevo) | 8.0.7 |
| Newsletter | Brevo API | — |
| Package manager | pnpm | 10.4.1 |
| Deploy | Railway (Nixpacks) | — |

---

## 3. ESTRUCTURA DE CARPETAS

```
fontfreda-web/
├── client/
│   ├── index.html              # HTML principal (GTM, GA4, meta tags)
│   ├── public/
│   │   ├── .htaccess           # 301 redirects, GZIP, caché, headers seguridad
│   │   └── robots.txt          # Configuración crawlers + sitemap
│   └── src/
│       ├── main.tsx            # Entry point React
│       ├── App.tsx             # Definición de rutas (wouter)
│       ├── index.css           # Tailwind + variables CSS personalizadas
│       ├── pages/              # 23 páginas React (ver sección 5)
│       ├── components/         # Componentes reutilizables (ver sección 6)
│       │   └── ui/             # 55+ componentes shadcn/ui
│       ├── contexts/
│       │   ├── LanguageContext.tsx   # Idioma global ES/EN
│       │   └── ThemeContext.tsx      # Tema claro/oscuro (dark no activo)
│       ├── lib/
│       │   ├── translations.ts       # Traducciones UI completas ES/EN
│       │   ├── pageTranslations.ts   # Traducciones SEO por página
│       │   ├── conversionTracking.ts # GA4 + Google Ads tracking
│       │   └── utils.ts              # Helpers generales
│       └── hooks/
│           ├── useMobile.tsx
│           ├── usePersistFn.ts
│           └── useComposition.ts
├── server/
│   ├── index.ts                # Express server principal
│   ├── email.ts                # Envío de emails (SMTP)
│   ├── cache.ts                # Cache en memoria
│   ├── db.newsletter.ts        # Funciones BD newsletter
│   ├── routers/
│   │   └── newsletter-express.ts
│   ├── services/
│   │   └── newsletter.service.ts   # Integración Brevo API
│   └── routes/
│       └── sitemap.ts              # Sitemap XML dinámico (cache 1h)
├── drizzle/
│   ├── schema_newsletter.sql         # 10 tablas newsletter
│   └── newsletter_procedures.sql     # 10 stored procedures
├── shared/
│   └── const.ts                # Constantes compartidas (COOKIE_NAME, etc.)
├── railway.json                # Configuración deploy Railway
├── vite.config.ts              # Vite: aliases, plugins, proxy dev
├── tsconfig.json               # TypeScript strict mode
├── .prettierrc
├── .prettierignore
├── .node-version
├── package.json                # Scripts y dependencias raíz
└── [docs]                      # Archivos de documentación (ver sección 11)
```

---

## 4. SCRIPTS DISPONIBLES

```bash
pnpm dev        # Arranca frontend (Vite :3000) + backend
pnpm build      # Build frontend (dist/public) + bundle server (dist/index.js)
pnpm start      # Inicia servidor producción: node dist/index.js
pnpm preview    # Preview del build
pnpm check      # TypeScript type check (sin emitir)
pnpm format     # Prettier
```

El build genera:
- `dist/public/` — SPA estática servida por Express
- `dist/index.js` — Bundle del servidor (esbuild ESM)

---

## 5. RUTAS / PÁGINAS

### Servicios

| Ruta ES | Ruta EN | Página | Descripción |
|---------|---------|--------|-------------|
| `/` | `/en` | Home.tsx | Landing principal: hero, servicios, testimonios, blog reciente |
| `/residencia-canina` | `/en/residencia-canina` | ResidenciaCanina.tsx | Alojamiento perros, características, proceso, FAQ |
| `/residencia-felina` | `/en/residencia-felina` | ResidenciaFelina.tsx | Espacio 180m² exclusivo gatos |
| `/guarderia` | `/en/guarderia` | Guarderia.tsx | Guardería canina de día |
| `/guarderia-canina-dentro-de-casa` | `/en/guarderia-canina-dentro-de-casa` | GuarderiaEnCasa.tsx | Guardería en domicilio del cliente |
| `/larga-estancia` | `/en/larga-estancia` | LargaEstancia.tsx | Estancias de meses/años |

### Contenido e Información

| Ruta ES | Ruta EN | Página |
|---------|---------|--------|
| `/instalaciones` | `/en/instalaciones` | Instalaciones.tsx — galería con lightbox |
| `/blog` | `/en/blog` | Blog.tsx — listado 11 artículos |
| `/blog/:slug` | `/en/blog/:slug` | BlogPost.tsx — artículo individual |
| `/tarifas` | `/en/tarifas` | Tarifas.tsx — tabla comparativa |
| `/faq` | `/en/faq` | FAQ.tsx — acordeón suave |
| `/contacto` | `/en/contacto` | Contacto.tsx — formulario + Google Maps |

### Legales y Utilidades

| Ruta ES | Ruta EN | Página |
|---------|---------|--------|
| `/politica-privacidad` | `/en/politica-privacidad` | PoliticaPrivacidad.tsx |
| `/politica-cookies` | `/en/politica-cookies` | PoliticaCookies.tsx |
| `/aviso-legal` | `/en/aviso-legal` | AvisoLegal.tsx |
| `/confirmar-newsletter` | `/en/confirmar-newsletter` | ConfirmarNewsletter.tsx — confirmación por token |
| `/404` + `*` | — | NotFound.tsx |

### Landing Pages para Google Ads (6 rutas)

| Ruta ES | Ruta EN | Página |
|---------|---------|--------|
| `/residencia-canina-barcelona` | `/en/dog-boarding-barcelona` | LandingAdsCanina.tsx |
| `/residencia-felina-barcelona` | `/en/cat-boarding-barcelona` | LandingAdsFelina.tsx |
| `/larga-estancia-perros-gatos` | `/en/long-term-boarding` | LandingAdsLargaEstancia.tsx |
| `/ads/residencia-canina` | `/en/ads/residencia-canina` | LandingResidenciaCanina.tsx |
| `/ads/residencia-felina` | `/en/ads/residencia-felina` | LandingResidenciaFelina.tsx |
| `/ads/larga-estancia` | `/en/ads/larga-estancia` | LandingLargaEstancia.tsx |

### Artículos del Blog (11 slugs en Blog.tsx)

| Slug | Título |
|------|--------|
| `como-cuidar-perro-verano` | Cuidados perros en verano |
| `convivencia-perros-gatos-embarazo` | Convivencia mascotas + embarazo |
| `tiempo-gato-solo` | Tiempo máximo gatos solos |
| `sindrome-pica-perros-gatos` | Síndrome pica explicado |
| `cachorro-solo-casa` | Dejar cachorro solo |
| `beneficios-larga-estancia-residencia-canina` | Beneficios larga estancia |
| `como-preparar-perro-primera-vez-residencia` | Preparar perro para residencia |
| `beneficios-socializacion-perros` | Socialización de perros |
| `salud-dental-perros-gatos` | Salud dental |
| `ansiedad-separacion-perros` | Ansiedad por separación |
| `nutricion-perros-activos` | Nutrición perros activos |

---

## 6. COMPONENTES PRINCIPALES

| Componente | Propósito |
|-----------|-----------|
| Header.tsx | Navegación sticky, logo, menú móvil, selector idioma ES/EN |
| Footer.tsx | Links, datos de contacto, copyright |
| HeroSection.tsx | Sección hero reutilizable con imagen y CTA |
| ServiceCard.tsx | Tarjeta de servicio con icono, descripción, CTA |
| SEO.tsx | Meta tags, Open Graph, Twitter Card dinámicos |
| SchemaMarkup.tsx | JSON-LD: LocalBusiness, FAQPage, BlogPosting, BreadcrumbList, Service |
| HrefLang.tsx | Tags hreflang para alternativas de idioma |
| ErrorBoundary.tsx | Error boundary React |
| Map.tsx | Google Maps embed (página Contacto) |
| NewsletterSubscription.tsx | Formulario suscripción newsletter |
| BlogConversionBanner.tsx | Banner CTA dentro de artículos del blog |
| RecentBlogPosts.tsx | Grid de últimos artículos (homepage + artículos relacionados) |
| SmoothAccordion.tsx | Acordeón con animación suave (FAQ) |
| FloatingCTA.tsx | CTA flotante al hacer scroll |
| WhatsAppButton.tsx | Botón flotante WhatsApp (todas las páginas) |

**UI (shadcn/ui):** 55+ componentes en `components/ui/` — Button, Card, Dialog, Form, Input, Select, Tabs, Badge, Tooltip, Accordion, Calendar, Chart, Drawer, Pagination, Sidebar, etc.

---

## 7. FORMULARIOS

### Formulario de Contacto (`/contacto`)
- Campos: nombre, email, teléfono, asunto, mensaje
- Endpoint: `POST /api/contact`
- Envía email a `info@fontfreda.net` + confirmación al usuario
- Tracking: GA4 + Google Ads conversion

### Formulario de Reserva (`/contacto`)
- Campos: nombre, email, teléfono, servicio, fechaEntrada, fechaSalida, nombreMascota, tipoMascota, raza (opcional), edad (opcional), requisitosEspeciales (opcional)
- Endpoint: `POST /api/reserva`
- Envía email a `info@fontfreda.net` + confirmación al usuario
- Tracking: GA4 + Google Ads conversion

### Formulario Newsletter (`NewsletterSubscription.tsx`)
- Campos: email, nombre, tipoMascota (perro/gato/ambos)
- Endpoint: `POST /api/newsletter/subscribe`
- Flujo: suscripción pendiente → email confirmación con token → `POST /api/newsletter/confirm`
- Backend: guarda en TiDB Cloud + crea contacto en Brevo

---

## 8. API ENDPOINTS (BACKEND EXPRESS)

| Método | Ruta | Propósito |
|--------|------|-----------|
| POST | `/api/contact` | Envía consulta de contacto por email |
| POST | `/api/reserva` | Envía solicitud de reserva por email |
| POST | `/api/newsletter/subscribe` | Suscribe email al newsletter |
| POST | `/api/newsletter/confirm` | Confirma suscripción con token |
| POST | `/api/newsletter/unsubscribe` | Desuscribe email |
| POST | `/api/newsletter/preferences` | Actualiza preferencias de frecuencia/contenido |
| GET | `/api/newsletter/stats/:email` | Estadísticas de un suscriptor |
| GET | `/api/newsletter/monthly-stats/:mes/:año` | Estadísticas mensuales globales |
| GET | `/api/newsletter/test-connection` | Test conexión Brevo API |
| GET | `/sitemap.xml` | Sitemap XML dinámico (caché 1h) |
| GET | `*` | Sirve SPA (index.html) para client-side routing |

---

## 9. BASE DE DATOS (TiDB Cloud / MySQL)

Conexión: `mysql2` pool con SSL, host en AWS us-east-1.

### Tablas Newsletter (10 tablas)

- `newsletter_subscribers` — suscriptores con estado, segmento, métricas
- `newsletter_subscriber_preferences` — frecuencia, tipos de contenido
- `newsletter_emails` — emails enviados con estadísticas apertura/clic
- `newsletter_email_clicks` — registro de clicks por URL/CTA
- `newsletter_conversions` — conversiones atribuidas a emails
- `newsletter_templates` — plantillas reutilizables
- `newsletter_campaigns` — campañas de envío masivo
- `newsletter_automation_flows` — flujos de automatización
- `newsletter_automation_activations` — activaciones por suscriptor
- `newsletter_statistics` — estadísticas diarias agregadas

### Stored Procedures (10 procedures)
`sp_subscribe_newsletter`, `sp_confirm_newsletter_subscription`, `sp_unsubscribe_newsletter`, `sp_record_email_open`, `sp_record_email_click`, `sp_record_newsletter_conversion`, `sp_get_subscribers_by_segment`, `sp_update_daily_statistics`, `sp_get_subscriber_metrics`, `sp_cleanup_old_newsletter_data`

---

## 10. VARIABLES DE ENTORNO NECESARIAS

> No incluir en el repositorio. Configurar en Railway Dashboard → Variables.

### Base de datos (TiDB Cloud)
```
DB_HOST=        # gateway03.us-east-1.prod.aws.tidbcloud.com
DB_PORT=        # 4000
DB_USER=        # usuario TiDB
DB_PASSWORD=    # contraseña TiDB
DB_NAME=        # nombre base de datos
```

### Email / SMTP (Brevo SMTP)
```
SMTP_HOST=      # smtp-relay.brevo.com (o mail.fontfreda.net si SMTP propio)
SMTP_PORT=      # 587
SMTP_USER=      # usuario SMTP Brevo
SMTP_PASSWORD=  # contraseña SMTP Brevo
```

### Brevo API (marketing / newsletter)
```
BREVO_API_KEY=  # xkeysib-...
```

### Analytics (Umami, opcional)
```
VITE_ANALYTICS_ENDPOINT=   # URL instancia Umami
VITE_ANALYTICS_WEBSITE_ID= # ID del sitio en Umami
```

### Railway (se configura automáticamente)
```
PORT=           # Railway inyecta esto automáticamente
NODE_ENV=       # production en Railway
```

### Notas sobre variables VITE_*
Las variables con prefijo `VITE_` se embeben en el build del frontend. Deben estar disponibles **en tiempo de build**, no sólo en runtime. En Railway, configurarlas antes de hacer redeploy.

---

## 11. CONFIGURACIÓN RAILWAY

Archivo `railway.json` en la raíz:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "nixpacksPlan": {
      "phases": {
        "setup": { "nixPkgs": ["nodejs_22", "pnpm-10_x"] },
        "install": { "cmds": ["npm install -g corepack", "pnpm i --frozen-lockfile"] },
        "build": { "cmds": ["pnpm build"] }
      },
      "start": { "cmd": "node dist/index.js" }
    }
  },
  "deploy": {
    "startCommand": "node dist/index.js",
    "healthcheckPath": "/",
    "restartPolicyType": "ON_FAILURE"
  }
}
```

El servidor Express (puerto `process.env.PORT || 3000`) sirve:
1. La API en `/api/*`
2. El sitemap en `/sitemap.xml`
3. Los archivos estáticos del build de Vite en `dist/public/`
4. Todas las demás rutas → `dist/public/index.html` (SPA fallback)

---

## 12. SEO Y TRACKING

### Analytics implementado
- **Google Analytics 4:** G-JR3N422110
- **Google Ads:** AW-1010676556
- **Google Tag Manager:** GTM-PB35J3M
- **Google Search Console:** meta tag verificación `A9xQmpLR1xXwpQWwBop6F20yM6bEawjzVDRYUJezwZw`
- **Umami** (custom): configurable vía variables de entorno

### Eventos de conversión trackeados
- Envío formulario contacto/reserva → `trackContactFormSubmission()`
- Click en WhatsApp → `trackWhatsAppClick()`
- Click en teléfono → `trackPhoneClick()`

### Schema Markup (JSON-LD)
LocalBusiness, BreadcrumbList, FAQPage, BlogPosting, Service

### Hreflang
Bidireccional ES ↔ EN en todas las páginas.

### .htaccess (client/public/)
- Redirects 301 (URLs antiguas → nuevas)
- GZIP compression
- Cache-Control: 1 año assets, no-cache HTML
- Security headers: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy, Permissions-Policy
- React Router fallback: todas las rutas → index.html

---

## 13. DISEÑO Y ESTILOS

### Paleta de colores (CSS variables en index.css)

| Variable | Valor | Uso |
|----------|-------|-----|
| `--primary` | `#2D5016` | Verde tierra Fontfreda |
| `--background` | `#FAFAF8` | Fondo blanco cálido |
| `--foreground` | `#2D3E2D` | Texto principal |
| `--secondary` | `#F3EFE8` | Beige suave |
| `--muted` | `#E8F0E3` | Verde claro |
| `--border` | `#E5E7EB` | Bordes suaves |

### Tipografía
- **Titulos (H1–H3):** Playfair Display (serif), negrita
- **Cuerpo:** Inter (sans-serif)

### Breakpoints responsives
- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

### Tema oscuro
Implementado en CSS (oklch colors) pero **no activado** en la UI actual. ThemeContext existe pero el toggle no está expuesto al usuario.

---

## 14. MULTIIDIOMA

- **Idiomas:** Español (ES, por defecto) e Inglés (EN)
- **Detección:** Basada en URL pathname (`/en/*` → EN, demás → ES)
- **Persistencia:** localStorage
- **Traducciones UI:** `client/src/lib/translations.ts`
- **Traducciones SEO/páginas:** `client/src/lib/pageTranslations.ts`
- **Hreflang:** Automático con componente `HrefLang.tsx`

---

## 15. ESTADO ACTUAL Y PENDIENTES

### Funcionalidades completadas
- Todas las páginas (23) en ES + EN
- Blog completo (11 artículos)
- 6 landing pages para Google Ads
- Formularios contacto, reserva y newsletter con backend real
- Sistema newsletter completo (Brevo API + TiDB)
- SEO técnico completo (schema, hreflang, sitemap, robots)
- Tracking conversiones GA4 + Google Ads
- Deploy en Railway funcionando

### TODOs encontrados en código
**Ninguno.** El código está limpio, sin comentarios TODO/FIXME.

### Posibles mejoras futuras (documentadas en archivos .md del repo)
- Activar selector de tema oscuro en la UI
- Chat en vivo / soporte en tiempo real
- Más artículos de blog
- Análisis de conversiones avanzado
- Optimización de campañas Google Ads

---

## 16. ARCHIVOS DE DOCUMENTACIÓN DEL REPO

| Archivo | Contenido |
|---------|-----------|
| `PROYECTO_FONTFREDA.md` | **Este archivo** — estado real del proyecto |
| `AI_CONTEXT.md` | Contexto histórico para IAs (puede estar desactualizado) |
| `PROGRESS.md` | Log de progreso histórico |
| `PRODUCTION_CHECKLIST.md` | Checklist de producción (mayo 2026) |
| `ARQUITECTURA_WEB.md` | Arquitectura, diseño visual, keywords SEO |
| `SEO_AUDIT_REPORT.md` | Auditoría SEO completa por página |
| `LANDING_PAGES_ADS.md` | Documentación landing pages Google Ads |
| `COPYS_ESTRATEGICOS.md` | Copys y messaging estratégico |
| `RESPONSIVE_AUDIT.md` | Auditoría responsive design |
| `ASSET_URLS.md` | URLs de imágenes y assets (Unsplash) |

---

*Generado el 6 de junio de 2026 mediante auditoría completa del código fuente.*
