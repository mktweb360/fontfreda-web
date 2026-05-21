/**
 * Web Vitals Monitoring para GA4
 * Captura Core Web Vitals (CLS) y envía a Google Analytics
 * Nota: web-vitals 5.2.0 solo exporta getCLS, getTTFB
 */

export interface WebVitalsMetric {
  name: string;
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
}

/**
 * Envía métrica de Web Vitals a GA4
 */
export function sendWebVitalToGA4(metric: WebVitalsMetric) {
  if (!window.gtag) return;

  // Mapear nombre de métrica a evento GA4
  const eventName = `web_vitals_${metric.name.toLowerCase()}`;

  // Enviar evento a GA4
  window.gtag("event", eventName, {
    value: Math.round(metric.value),
    event_category: "web_vitals",
    event_label: metric.id,
    non_interaction: true,
    metric_rating: metric.rating,
    metric_delta: Math.round(metric.delta),
  });
}

/**
 * Inicializar monitoreo de Web Vitals
 * Monitorea CLS (Cumulative Layout Shift) y TTFB (Time to First Byte)
 */
export function initWebVitalsMonitoring() {
  // Importar dinámicamente web-vitals
  import("web-vitals").then(({ getCLS, getTTFB }: any) => {
    // Cumulative Layout Shift
    if (getCLS) {
      getCLS((metric: any) => {
        sendWebVitalToGA4({
          name: "CLS",
          value: metric.value,
          rating: metric.rating as "good" | "needs-improvement" | "poor",
          delta: metric.delta,
          id: metric.id,
        });
      });
    }

    // Time to First Byte
    if (getTTFB) {
      getTTFB((metric: any) => {
        sendWebVitalToGA4({
          name: "TTFB",
          value: metric.value,
          rating: metric.rating as "good" | "needs-improvement" | "poor",
          delta: metric.delta,
          id: metric.id,
        });
      });
    }

    // Nota: Para monitoreo completo de LCP, FID, FCP, considera usar:
    // - Google Analytics 4 Web + Measurement Protocol
    // - Core Web Vitals API nativa del navegador
    // - Herramientas como Sentry, LogRocket, etc.
  });
}

// Declaración de tipo para gtag
declare global {
  interface Window {
    gtag?: ((command: string, eventName: string, eventData: Record<string, any>) => void) | undefined;
  }
}
