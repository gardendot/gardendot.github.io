import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useAnalytics(measurementId = 'G-KK958J3B2X') {
  const location = useLocation()

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', measurementId, {
        page_path: location.pathname,
      });
    }
  }, [location])
}
