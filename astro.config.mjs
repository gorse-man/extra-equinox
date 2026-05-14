import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Tailwind v4 uses a Vite plugin instead of the old 'integrations' array.
  // This is the most modern and fastest way to run Tailwind in Astro.
  vite: {
    plugins: [tailwindcss()],
    server: {
      // This ensures Windows correctly tracks file changes for the Tailwind scanner
      watch: {
        usePolling: true,
      },
    },
  },
});