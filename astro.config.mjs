import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import node from '@astrojs/node';
import vercelAdapter from "@astrojs/vercel";
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://eyeson.com',
  output: 'server',
  // adapter: node({ mode: 'standalone' }),
  adapter: vercelAdapter(),
  integrations: [react(), svelte(), sitemap()],
});