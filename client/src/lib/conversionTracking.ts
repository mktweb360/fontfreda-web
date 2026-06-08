/**
 * Helper para tracking de conversiones de Google Ads y GA4.
 *
 * IDs configurados:
 *  - GA4: G-JR3N422110
 *  - Google Ads: AW-1010676556
 *  - GTM: GTM-PB35J3M
 *
 * IMPORTANTE: Las "conversion labels" (xxxxxxxx) se obtienen al crear
 * cada acción de conversión en la cuenta de Google Ads. Mientras no estén
 * disponibles, los eventos se siguen empujando al dataLayer y a GA4, por
 * lo que pueden ser usados como triggers desde Google Tag Manager.
 */

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

const safeGtag: GtagFn = (...args) => {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else if (Array.isArray(window.dataLayer)) {
    // Fallback: si gtag aún no se ha cargado, empujamos al dataLayer para GTM.
    window.dataLayer.push(args);
  }
};

/**
 * Conversión: envío de formulario de contacto/reserva.
 */
export function trackContactFormSubmission(payload?: {
  servicio?: string;
  origen?: string;
}) {
  safeGtag("event", "generate_lead", {
    event_category: "engagement",
    event_label: payload?.origen ?? "contact_form",
    servicio: payload?.servicio ?? "general",
  });

  // Envío a Google Ads (sustituir 'XXXX' por la conversion label real cuando se cree en Ads).
  safeGtag("event", "conversion", {
    send_to: "AW-1010676556/ML-rCJTY2NMBEMzm9uED",
    value: 1.0,
    currency: "EUR",
  });
}

/**
 * Conversión: clic en botón de WhatsApp.
 */
export function trackWhatsAppClick(origen?: string) {
  safeGtag("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: origen ?? "whatsapp_button",
  });

  safeGtag("event", "conversion", {
    send_to: "AW-1010676556/whatsapp_click",
    value: 1.0,
    currency: "EUR",
  });
}

/**
 * Conversión: clic en botón de llamada telefónica.
 */
export function trackPhoneClick(origen?: string) {
  safeGtag("event", "phone_click", {
    event_category: "engagement",
    event_label: origen ?? "phone_button",
  });

  safeGtag("event", "conversion", {
    send_to: "AW-1010676556/phone_click",
    value: 1.0,
    currency: "EUR",
  });
}

/**
 * Conversión genérica de evento personalizado (para futuras CTAs).
 */
export function trackCustomConversion(
  eventName: string,
  params?: Record<string, unknown>,
) {
  safeGtag("event", eventName, params ?? {});
}
