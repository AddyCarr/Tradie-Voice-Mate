import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build
export default defineConfig({
  site: 'https://tradievoicemate.com.au',
  integrations: [tailwind()],
});
