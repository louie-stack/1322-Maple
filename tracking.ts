export const trackEvent = (
  event: string,
  params: Record<string, string | number | boolean> = {}
) => {
  try {
    const payload = { event, ...params };

    // Google gtag
    const gtag = (window as any).gtag;
    if (typeof gtag === 'function') {
      gtag('event', event, params);
    }

    // GTM dataLayer
    const dataLayer = (window as any).dataLayer;
    if (Array.isArray(dataLayer)) {
      dataLayer.push(payload);
    }

    // Debug fallback
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.log('[trackEvent]', payload);
    }
  } catch {
    // no-op
  }
};
