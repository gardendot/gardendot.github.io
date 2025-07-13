import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico','favicon-32.png','favicon-48.png','favicon-64.png', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'Garden dot',
        short_name: 'Garden dot',
        start_url: '/',
        display: 'standalone',
        background_color: '#f0fdf4',
        theme_color: '#047857',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
});
