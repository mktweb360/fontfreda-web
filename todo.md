# Fontfreda Web - TODO

## Completado

- [x] Estructura completa del sitio (Home, Residencia Canina/Felina, Larga Estancia, Guardería, Instalaciones, Blog, Contacto, FAQ, Páginas Legales)
- [x] Bilingüismo completo (ES/EN) con Hreflang tags y contexto de lenguaje
- [x] SEO optimization: Estructura de encabezados, Schema Markup, 301 redirects
- [x] Integración de imágenes originales del sitio fontfreda.net
- [x] Formulario de contacto y reservas con validación
- [x] Modal de confirmación de reservas
- [x] Página de Instalaciones con galería y lightbox
- [x] Página de Tarifas con tabla comparativa
- [x] Página de Guardería Canina
- [x] Blog con 11 artículos
- [x] Botón flotante de WhatsApp
- [x] Integración de email (SMTP SiteGround)
- [x] Páginas de Política de Cookies, Privacidad y Aviso Legal
- [x] Códigos de tracking (GA4, GTM, GSC)
- [x] .htaccess con redirecciones 301
- [x] Sistema de cache en memoria para optimizar Page Speed
- [x] Integración de RecentBlogPosts en Home.tsx

- [x] Páginas de artículos individuales del blog (/blog/:slug)
- [x] Artículos relacionados por categoría en páginas de blog
- [x] Google Maps integration en Contacto/Instalaciones
- [x] Auditoría de diseño responsive (móvil, tablet, desktop)

- [x] Optimización final de imágenes
- [x] Pruebas finales de SEO
- [x] Preparación para FTP upload a SiteGround

## Notas

- El componente RecentBlogPosts está completamente funcional y se muestra en Home.tsx
- Soporta filtrado por categoría y límite de artículos
- Usa lógica local de detección de lenguaje para evitar errores de contexto
- Próximo paso: crear rutas dinámicas para artículos individuales del blog


## Nuevas Optimizaciones

- [x] Crear redirects 301 en .htaccess
- [x] Optimizar robots.txt para SEO
- [x] Crear archivo .md para lectura de IAs
- [x] Agregar banners de conversión en artículos del blog
- [x] Verificar e implementar servicio de Guardería Canina Dentro de Casa
- [x] Auditoría de campaña de Google Ads (ID 946-240-2340) completada - Reporte y recomendaciones entregados
- [ ] Aplicación real de cambios en Google Ads pendiente de acceso operativo a la cuenta
- [ ] Verificar y corregir tracking de conversiones de Google Ads en el sitio (código duplicado detectado)

## Correcciones de Idiomas y SEO

- [x] Corregir error <a> anidado en TODOS los componentes (9 archivos)
- [x] Traducir al inglés 5 páginas (ResidenciaCanina, ResidenciaFelina, FAQ, LargaEstancia, Blog)
- [x] Corregir etiquetas hreflang con URLs reales
- [x] Corregir LanguageContext para switch correcto de idiomas
- [x] Traducir Footer.tsx completamente
- [x] Reemplazar "mascota"/"pet" por "perro y gato"/"dog and cat" en translations.ts


## Auditoría y Optimización On-Page Completa

- [ ] Auditoría inicial del estado actual de SEO on-page en todas las páginas
- [ ] Optimizar etiquetado HTML: title, meta description, h1-h6 en todas las páginas
- [ ] Optimizar Open Graph y Twitter Cards en todas las páginas
- [ ] Optimizar Schema Markup JSON-LD por tipo de página (LocalBusiness, Service, BlogPosting, FAQPage, BreadcrumbList)
- [ ] Optimizar contenido textual con keywords objetivo por página
- [ ] Optimizar enlaces internos (linkin) y externos (outlink)
- [ ] Optimizar imágenes: lazy loading, alt descriptivos, title, dimensiones, formato WebP
- [ ] Optimizar tiempos de carga y configuración de caché
- [ ] Optimizar textos destacados y CTAs
- [ ] Verificar y mejorar sección FAQ con Schema FAQPage
- [ ] Verificar Call to Actions en todas las páginas
- [ ] Verificar integración GA4, GTM, Google Ads y Search Console
- [ ] Verificar funcionamiento de formularios, WhatsApp y teléfono de contacto
- [ ] Generar reporte final de auditoría y optimización on-page
