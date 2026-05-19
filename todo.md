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

## En Progreso

- [ ] Páginas de artículos individuales del blog (/blog/:slug)
- [ ] Artículos relacionados por categoría en páginas de blog
- [ ] Google Maps integration en Contacto/Instalaciones

## Pendiente

- [ ] Auditoría de diseño responsive (móvil, tablet, desktop)
- [ ] Optimización final de imágenes
- [ ] Pruebas finales de SEO
- [ ] Preparación para FTP upload a SiteGround

## Notas

- El componente RecentBlogPosts está completamente funcional y se muestra en Home.tsx
- Soporta filtrado por categoría y límite de artículos
- Usa lógica local de detección de lenguaje para evitar errores de contexto
- Próximo paso: crear rutas dinámicas para artículos individuales del blog
