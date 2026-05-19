# Fontfreda Web - Contexto para IAs

## Descripción General del Proyecto

**Fontfreda** es una residencia familiar para perros y gatos ubicada en el Alt Penedès, Barcelona. El sitio web es una aplicación React con soporte bilingüe (Español/Inglés), SEO optimizado y diseño responsive.

**URL:** https://fontfreda.net  
**Ubicación:** Finca Can Farigola, 08790 Gelida, Barcelona, España  
**Teléfono:** +34 93 779 03 11  
**Email:** info@fontfreda.net

---

## Arquitectura Técnica

### Stack Tecnológico

- **Frontend:** React 19 + TypeScript + Tailwind CSS 4
- **Backend:** Express 4 + tRPC 11
- **Base de Datos:** MySQL/TiDB
- **Autenticación:** Manus OAuth
- **Hosting:** Manus Platform
- **Mapas:** Google Maps API (embebido)

### Estructura de Carpetas

```
fontfreda-web/
├── client/
│   ├── public/          # Archivos estáticos (.htaccess, robots.txt)
│   ├── src/
│   │   ├── pages/       # Páginas principales (Home, Blog, Contacto, etc.)
│   │   ├── components/  # Componentes reutilizables
│   │   ├── contexts/    # React Contexts (LanguageContext)
│   │   ├── lib/         # Utilidades (tRPC client)
│   │   ├── App.tsx      # Rutas principales
│   │   └── index.css    # Estilos globales
├── server/
│   ├── routers.ts       # Procedimientos tRPC
│   ├── db.ts            # Helpers de base de datos
│   └── _core/           # Configuración interna
├── drizzle/             # Schema de base de datos
└── shared/              # Constantes y tipos compartidos
```

---

## Características Principales

### 1. Servicios Ofrecidos

| Servicio | Descripción | Página |
|----------|-------------|--------|
| **Residencia Canina** | Alojamiento para perros con paseos diarios y vigilancia 24h | `/residencia-canina` |
| **Residencia Felina** | Espacio especializado de 180 m² para gatos | `/residencia-felina` |
| **Guardería Canina** | Servicio especializado para cachorros | `/guarderia` |
| **Larga Estancia** | Alojamiento para estancias prolongadas (meses/años) | `/larga-estancia` |
| **Guardería Dentro de Casa** | Nuevo servicio - Guardería en el hogar del cliente | `/guarderia-canina-dentro-de-casa` |

### 2. Páginas Principales

| Página | Ruta | Descripción |
|--------|------|-------------|
| Inicio | `/` | Landing page con servicios y testimonios |
| Blog | `/blog` | Lista de artículos sobre cuidado de mascotas |
| Artículo Individual | `/blog/:slug` | Página de artículo con artículos relacionados |
| Instalaciones | `/instalaciones` | Galería de instalaciones con filtros |
| Contacto | `/contacto` | Formulario de reservas y Google Maps |
| Tarifas | `/tarifas` | Tabla comparativa de precios |
| FAQ | `/faq` | Preguntas frecuentes |
| Páginas Legales | `/politica-privacidad`, etc. | Política de privacidad, cookies, aviso legal |

### 3. Soporte Multiidioma

El sitio soporta **Español (ES)** e **Inglés (EN)**:
- URLs con prefijo: `/es/` y `/en/`
- Hreflang tags para SEO
- Contexto de lenguaje con `LanguageContext`
- Detección automática basada en URL

**Rutas Bilingües:**
- ES: `/residencia-canina` → EN: `/en/residencia-canina`
- ES: `/blog` → EN: `/en/blog`
- ES: `/blog/beneficios-larga-estancia` → EN: `/en/blog/benefits-long-stay`

### 4. Blog

**11 artículos** sobre cuidado de mascotas:
- Beneficios de la larga estancia
- Comportamiento de perros en residencia
- Preparar gato para residencia felina
- Vacunación en perros
- Desparasitación externa
- Socialización de cachorros
- Y más...

**Características:**
- Artículos relacionados por categoría
- Últimos 3 artículos en homepage
- Rutas dinámicas `/blog/:slug`
- Schema Markup para SEO

### 5. SEO Optimización

- **Schema Markup:** LocalBusiness, BlogPosting, FAQPage, BreadcrumbList
- **Meta Tags:** Title, description, Open Graph, Twitter Card
- **Hreflang:** Soporte multiidioma
- **Sitemap:** Generado automáticamente
- **Robots.txt:** Optimizado para crawlers
- **.htaccess:** Redirects 301, GZIP, caching, seguridad

### 6. Formulario de Contacto/Reservas

Campos:
- Datos personales (nombre, email, teléfono)
- Detalles de reserva (servicio, fechas)
- Información de mascota (nombre, tipo, raza, edad)
- Requisitos especiales

Validación completa y modal de confirmación.

### 7. Google Maps

Mapa embebido en página de Contacto mostrando:
- Ubicación: Finca Can Farigola, Gelida, Barcelona
- Información de contacto (dirección, teléfono, email)
- Enlaces activos para llamadas y correos

### 8. Diseño Responsive

Breakpoints:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

Todas las páginas se adaptan perfectamente a todos los dispositivos.

---

## Componentes Principales

### RecentBlogPosts
Componente que muestra últimos artículos del blog:
- Filtra por categoría
- Limita número de artículos
- Soporte bilingüe
- Grid responsive

**Ubicaciones:**
- Homepage (últimos 3 artículos)
- Página de artículo individual (artículos relacionados)

### Header
Navegación principal con:
- Logo de Fontfreda
- Menú de servicios
- Selector de idioma (ES/EN)
- Botón CTA "Contactar"

### Footer
Pie de página con:
- Links a servicios
- Links a información
- Datos de contacto
- Copyright

### DashboardLayout
Layout para futuras secciones administrativas (no actualmente usado).

---

## Rutas Dinámicas

### Blog
- ES: `/blog/:slug` → Artículo individual en español
- EN: `/en/blog/:slug` → Artículo individual en inglés

**Ejemplo:** `/blog/beneficios-larga-estancia`

### Servicios
- `/residencia-canina` - Residencia para perros
- `/residencia-felina` - Residencia para gatos
- `/guarderia` - Guardería canina
- `/larga-estancia` - Larga estancia
- `/guarderia-canina-dentro-de-casa` - Guardería dentro de casa (NUEVO)

---

## Datos de Contacto y Ubicación

| Campo | Valor |
|-------|-------|
| **Nombre** | Fontfreda |
| **Dirección** | Finca Can Farigola, 08790 Gelida, Barcelona, España |
| **Teléfono** | +34 93 779 03 11 |
| **Email** | info@fontfreda.net |
| **Ubicación GPS** | 41.5667°N, 1.8833°W |
| **Zona de Servicio** | Barcelona capital (recogida/entrega) + Alt Penedès |

---

## Palabras Clave Principales

### Servicios
- Residencia canina Barcelona
- Guardería perros Barcelona
- Hotel para perros
- Residencia felina
- Alojamiento mascotas
- Cuidado de perros

### Ubicación
- Residencia perros Alt Penedès
- Guardería canina Gelida
- Alojamiento mascotas Barcelona

### Largo Tail
- Residencia familiar para perros
- Guardería canina dentro de casa
- Alojamiento perros larga estancia
- Cuidado mascotas en naturaleza

---

## Optimizaciones Implementadas

### Performance
- Compresión GZIP
- Caching de navegador
- Lazy loading de imágenes
- Minificación de CSS/JS

### SEO
- Schema Markup estructurado
- Meta tags optimizados
- Hreflang para multiidioma
- Sitemap XML
- Robots.txt optimizado
- .htaccess con redirects 301

### Seguridad
- Headers de seguridad (X-Frame-Options, X-Content-Type-Options)
- HTTPS forzado
- Protección contra MIME sniffing
- XSS protection

### Accesibilidad
- Contraste de colores adecuado
- Navegación por teclado
- Alt text en imágenes
- Estructura semántica HTML

---

## Próximas Mejoras

1. **Banners de Conversión en Blog** - CTAs estratégicos en artículos
2. **Página de Guardería Dentro de Casa** - Nuevo servicio
3. **Optimización de Google Ads** - Mejora de campaña actual
4. **Análisis de Conversiones** - Tracking mejorado
5. **Chat en Vivo** - Soporte al cliente en tiempo real

---

## Instrucciones para IAs

### Al Leer Este Documento

1. **Entiende la estructura:** El sitio es una SPA React con rutas dinámicas
2. **Considera el multiidioma:** Todas las páginas tienen versión ES e EN
3. **Respeta el diseño:** Usa Tailwind CSS y componentes existentes
4. **Mantén SEO:** Actualiza Schema Markup y meta tags
5. **Prueba responsive:** Verifica en mobile, tablet, desktop

### Al Hacer Cambios

1. Actualiza `todo.md` con nuevas tareas
2. Crea componentes reutilizables en `/components`
3. Mantén coherencia visual con el diseño actual
4. Prueba en ambos idiomas
5. Verifica SEO con Schema Markup

### Archivos Clave a Modificar

- `client/src/App.tsx` - Rutas principales
- `client/src/pages/` - Páginas individuales
- `client/src/components/` - Componentes reutilizables
- `client/src/index.css` - Estilos globales
- `client/public/.htaccess` - Configuración servidor
- `client/public/robots.txt` - Configuración crawlers

---

## Contacto y Soporte

Para preguntas sobre el proyecto:
- **Email:** info@fontfreda.net
- **Teléfono:** +34 93 779 03 11
- **WhatsApp:** +34 93 779 03 11

---

*Documento actualizado: Mayo 2026*
*Versión: 1.0*
