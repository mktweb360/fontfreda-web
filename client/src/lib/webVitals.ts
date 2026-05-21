/**
 * Web Vitals Monitoring para GA4
 * Captura Core Web Vitals y envía a Google Analytics
 * Métrica: LCP, FID, CLS, TTFB
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
 */
export function initWebVitalsMonitoring() {
  // Importar dinámicamente web-vitals
  import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
  // Cumulative Layout Shift
  getCLS((metric: any) => {
      sendWebVitalToGA4({
        name: "CLS",
        value: metric.value,
        rating: metric.rating as "good" | "needs-improvement" | "poor",
        delta: metric.delta,
        id: metric.id,
      });
    });

  // First Input Delay
  getFID((metric: any) => {
      sendWebVitalToGA4({
        name: "FID",
        value: metric.value,
        rating: metric.rating as "good" | "needs-improvement" | "poor",
        delta: metric.delta,
        id: metric.id,
      });
    });

  // First Contentful Paint
  getFCP((metric: any) => {
      sendWebVitalToGA4({
        name: "FCP",
        value: metric.value,
        rating: metric.rating as "good" | "needs-improvement" | "poor",
        delta: metric.delta,
        id: metric.id,
      });
    });

  // Largest Contentful Paint
  getLCP((metric: any) => {
      sendWebVitalToGA4({
        name: "LCP",
        value: metric.value,
        rating: metric.rating as "good" | "needs-improvement" | "poor",
        delta: metric.delta,
        id: metric.id,
      });
    });

  // Time to First Byte
  getTTFB((metric: any) => {
      sendWebVitalToGA4({
        name: "TTFB",
        value: metric.value,
        rating: metric.rating as "good" | "needs-improvement" | "poor",
        delta: metric.delta,
        id: metric.id,
      });
    });
  });
}

// Declaración de tipo para gtag
declare global {
  interface Window {
    gtag?: ((command: string, eventName: string, eventData: Record<string, any>) => void) | undefined;
  }
}
