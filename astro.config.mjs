import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel/serverless'

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [react(), svelte()],
});