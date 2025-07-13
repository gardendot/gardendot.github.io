export const trackGAEvent = (eventName, params = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params)
  } else {
    console.warn('gtag not initialized')
  }
}
