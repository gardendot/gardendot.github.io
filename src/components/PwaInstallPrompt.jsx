import { useEffect, useState } from 'react'

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstall, setShowInstall] = useState(false)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstall(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      console.log('PWA installed')
    }
    setShowInstall(false)
    setDeferredPrompt(null)
  }

  return (
    showInstall && (
      <div style={{ position: 'fixed', bottom: 20, left: 20, padding: '1rem', background: '#4CAF50', color: '#fff', borderRadius: '10px' }}>
        <span>Install Garden dot?</span>
        <button style={{ marginLeft: '1rem' }} onClick={handleInstallClick}>
          Install
        </button>
      </div>
    )
  )
}
