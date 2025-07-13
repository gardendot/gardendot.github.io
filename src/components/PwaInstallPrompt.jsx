import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

export default function PwaInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);

      // Auto-dismiss after 12 seconds
      const id = setTimeout(() => {
        setShowInstall(false);
      }, 12000);
      setTimeoutId(id);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      console.log('PWA installed');
    }
    setShowInstall(false);
    setDeferredPrompt(null);
    if (timeoutId) clearTimeout(timeoutId);
  };

  const handleClose = () => {
    setShowInstall(false);
    if (timeoutId) clearTimeout(timeoutId);
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 sm:left-6 sm:w-auto z-50 bg-gradient-to-r from-cyan-600 to-emerald-500 text-white shadow-xl rounded-2xl flex items-center px-4 py-3 backdrop-blur-md animate-fade-in">
      <img
        src="./favicon-32x32.png"
        alt="App Logo"
        className="bg-white w-8 h-8 rounded-full animate-pulse"
      />
      <div className="ml-3 flex-1 text-sm font-medium">
        Install <span className="font-semibold">Garden Dot</span> App to explore offline plant game and more.
      </div>
      <button
        onClick={handleInstallClick}
        className="ml-4 flex items-center bg-white text-cyan-700 hover:bg-cyan-100 font-semibold px-3 py-1.5 rounded-lg shadow transition-all duration-200"
      >
        <Download size={18} className="mr-1" />
        Install
      </button>
      <button
        onClick={handleClose}
        className="ml-2 text-white hover:text-red-200 transition-all"
        aria-label="Close"
      >
        <X size={18} />
      </button>
    </div>
  );
}
