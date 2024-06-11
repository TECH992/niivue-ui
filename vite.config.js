import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  base: './',
  server: {
    fs: {
      allow: [
        // Allow serving files from the project root and its subdirectories
        'D:/niivue-ui',
      ],
    },
  },
});
