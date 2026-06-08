# Fontfreda Web — Infraestructura y Contexto del Proyecto

**Última actualización:** 8 de junio de 2026

---

## 1. Descripción General

**Fontfreda** es una residencia familiar para perros y gatos ubicada en el Alt Penedès, Barcelona.

| Campo | Valor |
|---|---|
| **Nombre** | Fontfreda |
| **Dirección** | Finca Can Farigola, 08790 Gelida, Barcelona, España |
| **Teléfono** | +34 93 779 03 11 |
| **Email negocio** | info@fontfreda.net |
| **Email gestión Luis** | fontfreda.residencia@gmail.com |
| **URL** | https://www.fontfreda.net |
| **Coordenadas** | 41.5667°N, 1.8833°W |

---

## 2. Infraestructura

### 2.1 Dominio

- **Registrar:** Profesionalhosting
- **Dominio:** fontfreda.net
- **Configuración:** nameservers delegados a Cloudflare

### 2.2 DNS y CDN

- **Proveedor:** Cloudflare
- **Nameservers:** `max.ns.cloudflare.com` / `mona.ns.cloudflare.com`
- **Función:** DNS autoritativo + CDN + proxy (orange cloud)

### 2.3 Hosting (Railway)

- **Proveedor:** Railway
- **Proyecto activo:** `gleaming-recreation`
- **Proyecto ignorar:** `diplomatic-alignment` (inactivo, no usar)
- **URL Railway:** generada automáticamente por Railway, apuntada vía Cloudflare
- **Nota:** Migrado desde Manus Platform y anteriormente SiteGround

### 2.4 Hosting Antiguo (SiteGround)

- **Estado:** Pendiente cancelar tras completar migración de email
- **Acción pendiente:** Cancelar suscripción SiteGround una vez confirmado que el email ya no depende de él

### 2.5 Email — Brevo API

- **Proveedor:** Brevo (ex Sendinblue)
- **Integración:** API REST (no SMTP)
- **Dominio autenticado:** fontfreda.net
- **Plan:** Gratuito — 300 emails/día
- **Uso:** Envío de formularios de contacto/reservas al propietario y confirmación al usuario
- **Estado formularios:** Funcionando correctamente vía Brevo API
- **Archivo:** `server/` — integración en el router tRPC de contacto
- **Nota:** El AI_CONTEXT.md antiguo indicaba SMTP SiteGround — eso ya NO es correcto. Se usa Brevo API REST.

---

## 3. Stack Técnico

### Frontend

- **Framework:** React 19 + TypeScript
- **Estilos:** Tailwind CSS 4
- **Tipo:** SPA (Single Page Application) con rutas dinámicas
- **Bundler:** Vite

### Backend

- **Servidor:** Express 4
- **API:** tRPC 11
- **Base de datos:** MySQL / TiDB (Drizzle ORM)
- **Schema:** `drizzle/`

### Estructura de Carpetas

```
fontfreda-web/
├── client/
│   ├── public/          # Archivos estáticos (.htaccess, robots.txt)
│   └── src/
│       ├── pages/       # Páginas principales
│       ├── components/  # Componentes reutilizables
│       ├── contexts/    # LanguageContext (ES/EN)
│       ├── lib/         # tRPC client y utilidades
│       ├── App.tsx      # Rutas principales
│       └── index.css    # Estilos globales
├── server/
│   ├── routers.ts       # Procedimientos tRPC (incluye email vía Brevo)
│   ├── db.ts            # Helpers de base de datos
│   └── _core/           # Configuración interna
├── drizzle/             # Schema de base de datos
└── shared/              # Constantes y tipos compartidos
```

### Archivos de Configuración Clave

| Archivo | Descripción |
|---|---|
| `client/src/App.tsx` | Rutas principales |
| `client/src/pages/` | Páginas individuales |
| `client/src/components/` | Componentes reutilizables |
| `client/src/index.css` | Estilos globales |
| `client/public/.htaccess` | GZIP, caché, redirects, seguridad |
| `client/public/robots.txt` | Configuración crawlers |
| `railway.json` | Configuración de deploy Railway |

---

## 4. Páginas y Servicios

### Servicios (Páginas de Servicio)

| Servicio | Ruta ES | Ruta EN |
|---|---|---|
| Residencia Canina | `/residencia-canina` | `/en/residencia-canina` |
| Residencia Felina | `/residencia-felina` | `/en/residencia-felina` |
| Guardería Canina | `/guarderia` | `/en/guarderia` |
| Larga Estancia | `/larga-estancia` | `/en/larga-estancia` |
| Guardería en Casa | `/guarderia-canina-dentro-de-casa` | `/en/guarderia-canina-dentro-de-casa` |

### Páginas Principales

| Página | Ruta |
|---|---|
| Inicio | `/` |
| Instalaciones | `/instalaciones` |
| Tarifas | `/tarifas` |
| Blog | `/blog` |
| Artículo individual | `/blog/:slug` |
| FAQ | `/faq` |
| Contacto | `/contacto` |
| Política de Privacidad | `/politica-privacidad` |
| Política de Cookies | `/politica-cookies` |
| Aviso Legal | `/aviso-legal` |

### Landing Pages para Google Ads

| URL ES | URL EN | Keyword objetivo |
|---|---|---|
| `/residencia-canina-barcelona` | `/en/dog-boarding-barcelona` | dog boarding Barcelona |
| `/residencia-felina-barcelona` | `/en/cat-boarding-barcelona` | cat boarding Barcelona |
| `/larga-estancia-perros-gatos` | `/en/long-term-boarding` | long-term boarding |

---

## 5. Multiidioma (ES/EN)

- Rutas con prefijo `/en/` para inglés
- Detección automática basada en URL
- `LanguageContext` en `client/src/contexts/`
- Hreflang tags configurados en todas las páginas
- Todas las páginas, botones y formularios traducidos
- **Fix aplicado (5 jun 2026):** Selector de idioma corregido

---

## 6. SEO

### Schema Markup implementado

- `LocalBusiness` — datos del negocio (ubicación, teléfono, email)
- `Service` — páginas de servicios
- `BlogPosting` — artículos del blog
- `FAQPage` — página de preguntas frecuentes
- `BreadcrumbList` — todas las páginas

### Otros elementos SEO

- Sitemap XML dinámico en `/sitemap.xml`
- `robots.txt` optimizado
- `.htaccess` con redirects 301, GZIP, caché, headers de seguridad
- Open Graph + Twitter Cards en todas las páginas
- Canonical tags en páginas con versiones duplicadas

---

## 7. Tracking y Analytics

| Herramienta | ID |
|---|---|
| Google Analytics 4 | G-JR3N422110 |
| Google Tag Manager | GTM-PB35J3M |
| Google Ads | AW-1010676556 |
| Google Search Console | Configurado |

### Eventos de conversión rastreados

- Envío de formulario de contacto
- Click en WhatsApp
- Click en teléfono

---

## 8. Blog

**11 artículos** sobre cuidado de mascotas:

1. Cómo preparar a tu perro para la primera vez en residencia
2. Beneficios de la socialización en perros
3. Salud dental en perros y gatos
4. Ansiedad por separación en perros
5. Nutrición para perros activos
6. Comportamiento de gatos bajo estrés
7. Vacunación y desparasitación en perros
8. Ejercicio diario para perros
9. Cuidados de gatos ancianos
10. Juegos y enriquecimiento para gatos
11. Residencia familiar vs guardería

Cada artículo incluye Schema BlogPosting, meta tags, enlaces internos a servicios y artículos relacionados por categoría.

---

## 9. Google Ads

- **Cuenta:** 946-240-2340
- **Campaña activa:** Residencia Canina Barcelona
- **Pendiente:** Crear campaña Residencia Felina
- **Acceso operativo:** Pendiente — cliente debe otorgar acceso para aplicar cambios

### Grupos de anuncios — Campaña Residencia Canina Barcelona

| Grupo de anuncios | Keywords principales | Estado |
|---|---|---|
| Residencia canina Barcelona | residencia canina barcelona, hotel perros barcelona | Activo |
| Guardería canina Barcelona | guardería perros barcelona, guardería canina barcelona | Activo |
| Larga estancia perros | alojamiento perros larga estancia, pensión canina larga duración | Activo |
| Residencia canina Alt Penedès | residencia canina gelida, residencia perros penedès | Activo |

> ⚠️ **ALERTA CRÍTICA:** Las **290.372 conversiones históricas registradas NO son leads reales** — son resultado de un tracking incorrecto (eventos mal configurados contabilizan como conversión cada visita/pageview). El número real de leads es muy inferior. Ver sección 13 para diagnóstico completo y correcciones pendientes.

---

## 10. Plan de trabajo — Prioridades urgentes (junio 2026)

| # | Tarea | Prioridad | Bloqueador |
|---|---|---|---|
| 1 | **Corregir conversion tracking** — eliminar falsos positivos, implementar eventos reales de lead | 🔴 Urgente | Ver sección 13 |
| 2 | **Redirect 301 `fontfreda.net` → `www.fontfreda.net`** — configurar en Cloudflare (Page Rule o Redirect Rule) | 🔴 Urgente | Acceso Cloudflare |
| 3 | **Obtener acceso operativo Google Ads** (cuenta 946-240-2340) — cliente debe otorgar acceso | 🔴 Urgente | Cliente |
| 4 | **Crear campaña Google Ads — Residencia Felina** — una vez con acceso y tracking corregido | 🟠 Alta | Tarea 1 + 3 |

### Pendientes adicionales

| Tarea | Prioridad | Estado |
|---|---|---|
| Tabla MySQL para newsletter | Media | Pendiente |
| Cancelar SiteGround | Media | Pendiente (confirmar que email ya no depende de SiteGround) |

---

## 11. Diseño Visual

- **Filosofía:** Minimalismo cálido profesional
- **Color primario:** Verde Tierra `#2D5016`
- **Fondo:** Blanco Cálido `#FAFAF8`
- **Secundario:** Beige Suave `#F3EFE8`
- **Tipografía titulares:** Playfair Display (serif)
- **Tipografía cuerpo:** Inter (sans-serif)

---

## 13. CONVERSION TRACKING — ESTADO REAL

### Problema detectado

Google Ads muestra **290.372 conversiones históricas** que NO corresponden a leads reales. Causa: eventos de pageview o micro-interacciones están marcados como conversiones principales en Google Ads.

### Tabla de acciones rastreadas — diagnóstico

| # | Acción | Evento GA4 | En Google Ads | Diagnóstico |
|---|---|---|---|---|
| 1 | Formulario contacto enviado | `contact_form_submit` | Sí (conversión) | ✅ Correcto — es lead real |
| 2 | Formulario reserva enviado | `contact_form_submit` | Sí (conversión) | ✅ Correcto — es lead real |
| 3 | Click WhatsApp | `whatsapp_click` | Sí (conversión) | ⚠️ Revisar — puede ser lead real o exploración |
| 4 | Click teléfono (header) | `phone_click` | Sí (conversión) | ⚠️ Revisar — puede ser lead real o exploración |
| 5 | Click teléfono (footer/landing) | `phone_click` | Sí (conversión) | ⚠️ Revisar — duplicado posible |
| 6 | Visita landing page Ads | `page_view` | Posiblemente sí | 🔴 Error probable — pageview NO es conversión |
| 7 | Visita página `/contacto` | `page_view` | Posiblemente sí | 🔴 Error probable — pageview NO es conversión |
| 8 | Suscripción newsletter | `newsletter_subscribe` | Desconocido | ⚠️ Verificar si está importado en Ads |
| 9 | Tiempo en página / scroll | `engagement` | Posiblemente sí | 🔴 Error probable — engagement NO es conversión |

### Correcciones pendientes (4)

1. **Auditar Google Ads → Conversiones** — identificar qué acciones están marcadas como conversión principal y desmarcar pageviews/engagement.
2. **Unificar eventos de formulario** — asegurar que `contact_form_submit` se dispara una sola vez por envío exitoso (sin duplicados por re-renders).
3. **Revisar clicks de teléfono** — consolidar eventos de header, footer y landing en un único evento con parámetro `origen` (ya implementado en `conversionTracking.ts`, verificar que funciona).
4. **Importar solo conversiones reales en Google Ads** — únicamente formulario enviado y llamadas verificadas deben contar como conversión principal; clicks WhatsApp como conversión secundaria.

### Archivos relevantes

- `client/src/lib/conversionTracking.ts` — funciones de tracking implementadas
- `client/index.html` — scripts GA4 (G-JR3N422110), Google Ads (AW-1010676556), GTM (GTM-PB35J3M)

---

## 12. Instrucciones para IAs

1. **Stack es SPA React** — no confundir con Next.js ni SSR
2. **Email usa Brevo API REST**, no SMTP — ignorar referencias antiguas a SiteGround SMTP
3. **Hosting activo es Railway proyecto `gleaming-recreation`** — ignorar `diplomatic-alignment`
4. **Multiidioma obligatorio** — cualquier cambio de texto debe incluir ES y EN
5. **Mantener SEO** — actualizar Schema Markup y meta tags al crear/modificar páginas
6. **Selector de idioma ya tiene fix aplicado** — no volver a modificar sin leer el código actual
7. **Cloudflare gestiona DNS** — los cambios de dominio/redirect se hacen en Cloudflare, no en Railway ni en el código
8. **El redirect `fontfreda.net → www`** está pendiente y debe hacerse en Cloudflare (Page Rule o Redirect Rule), no en `.htaccess`
