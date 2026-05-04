import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';

export default defineConfig({
  output: 'static',

  integrations: [react(), svelte()],
});