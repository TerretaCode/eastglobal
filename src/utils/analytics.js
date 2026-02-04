/**
 * Utility for tracking Google Analytics events
 * @param {string} action - The action performed (e.g., 'click_budget_button')
 * @param {string} category - Category of the event (e.g., 'Conversion')
 * @param {string} label - Optional label for more detail
 */
export const trackEvent = (action, category, label) => {
    const gaId = import.meta.env.VITE_GA_ID;
    if (window.gtag && gaId) {
        window.gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    } else {
        console.warn('Google Analytics (gtag) is not initialized or VITE_GA_ID is missing.');
    }
};
