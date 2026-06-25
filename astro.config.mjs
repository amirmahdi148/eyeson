import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vercelAdapter from "@astrojs/vercel";
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eyeson.agency',
  output: 'server',
  adapter: vercelAdapter(),
  integrations: [react(), svelte(), sitemap({
    filter: (page) => !page.startsWith('https://eyeson.agency/admin/') && page !== 'https://eyeson.agency/login/',
  })],
  vite: {
    plugins: [tailwindcss()],
    build: {
      chunkSizeWarningLimit: 1000,
    },
  },
});