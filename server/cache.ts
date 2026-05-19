import type { Response } from 'express';

/**
 * Middleware de cache para optimizar Page Speed Insight
 * Implementa estrategias de cache para diferentes tipos de contenido
 */

export function setCacheHeaders(res: Response, cacheType: 'static' | 'dynamic' | 'api' | 'html') {
  switch (cacheType) {
    // Recursos estáticos (imágenes, fonts, CSS, JS)
    case 'static':
      res.set('Cache-Control', 'public, max-age=31536000, immutable');
      res.set('ETag', generateETag());
      break;

    // Contenido dinámico (páginas, datos)
    case 'dynamic':
      res.set('Cache-Control', 'public, max-age=3600, must-revalidate');
      res.set('ETag', generateETag());
      break;

    // API responses
    case 'api':
      res.set('Cache-Control', 'private, max-age=300, must-revalidate');
      res.set('ETag', generateETag());
      break;

    // HTML pages
    case 'html':
      res.set('Cache-Control', 'public, max-age=3600, must-revalidate');
      res.set('ETag', generateETag());
      res.set('Content-Encoding', 'gzip');
      break;
  }

  // Headers de seguridad y performance
  res.set('X-Content-Type-Options', 'nosniff');
  res.set('X-Frame-Options', 'SAMEORIGIN');
  res.set('X-XSS-Protection', '1; mode=block');
  res.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');
}

/**
 * Generar ETag simple basado en timestamp
 */
function generateETag(): string {
  return `"${Date.now().toString(36)}"`;
}

/**
 * Cache en memoria para datos frecuentes
 */
export class MemoryCache {
  private cache = new Map<string, { data: unknown; expires: number }>();
  private cleanupInterval: NodeJS.Timeout | null = null;

  constructor(cleanupIntervalMs = 60000) {
    // Limpiar cache expirado cada minuto
    this.cleanupInterval = setInterval(() => this.cleanup(), cleanupIntervalMs);
  }

  set(key: string, data: unknown, ttlSeconds = 3600) {
    this.cache.set(key, {
      data,
      expires: Date.now() + ttlSeconds * 1000,
    });
  }

  get(key: string): unknown | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expires) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string) {
    this.cache.delete(key);
  }

  clear() {
    this.cache.clear();
  }

  private cleanup() {
    const now = Date.now();
    const keysToDelete: string[] = [];
    this.cache.forEach((value, key) => {
      if (now > value.expires) {
        keysToDelete.push(key);
      }
    });
    keysToDelete.forEach(key => this.cache.delete(key));
  }

  destroy() {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
    }
    this.clear();
  }
}

// Instancia global de cache
export const globalCache = new MemoryCache();

/**
 * Middleware para agregar headers de cache automáticamente
 */
export function cacheMiddleware(req: any, res: Response, next: any) {
  // Determinar tipo de cache basado en la ruta
  if (req.path.match(/\.(js|css|woff2|png|jpg|jpeg|gif|svg|webp)$/)) {
    setCacheHeaders(res, 'static');
  } else if (req.path.startsWith('/api/')) {
    setCacheHeaders(res, 'api');
  } else if (req.path.match(/\.(html)$/)) {
    setCacheHeaders(res, 'html');
  } else {
    setCacheHeaders(res, 'dynamic');
  }

  next();
}
