import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  // Change this to your custom domain once DNS points at Cloudflare.
  site: 'https://aka-site.arunrgcet.workers.dev',
  integrations: [sitemap()],
});
