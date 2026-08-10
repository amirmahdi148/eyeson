import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import nodeAdapter from "@astrojs/node";

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eyesonstudio.com',
  output: 'server',
  adapter: nodeAdapter({ mode: 'standalone' }),
  integrations: [react(), svelte(), sitemap({
    filter: (page) => !page.startsWith('https://eyesonstudio.com/admin/') && page !== 'https://eyesonstudio.com/login/',
  })],
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
      chunkSizeWarningLimit: 1000,
    },
  },
});