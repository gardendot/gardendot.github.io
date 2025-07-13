import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico','favicon-16x16.png','favicon-32x32.png','android-chrome-192x192.png', 'android-chrome-512x512.png'],
      manifest: {
        name: 'Garden Dot',
        short_name: 'Garden Dot',
        start_url: '/',
        display: 'standalone',
        background_color: '#f0fdf4',
        theme_color: '#87CEEB',
        icons: [
          { src: 'android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'android-chrome-512x5122.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
});
