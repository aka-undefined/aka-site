import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://arunkumaranguraja.com',
  integrations: [sitemap()],
});
