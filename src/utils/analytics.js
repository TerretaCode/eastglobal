/**
 * Utility for tracking Google Analytics events
 */
export const trackEvent = (action, category, label) => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (window.gtag && gaId) {
        window.gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    // No warning in production if ID is missing to keep console clean
};
