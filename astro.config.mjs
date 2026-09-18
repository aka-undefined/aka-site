import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

// Markdown links to other sites open in a new tab; rel blocks reverse tabnabbing.
const externalLinks = {
  name: 'external-links',
  element: {
    filter: ['a'],
    visit(node) {
      const href = node.properties?.href;
      if (typeof href !== 'string' || !/^https?:\/\//i.test(href)) return;
      return {
        ...node,
        properties: {
          ...node.properties,
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      };
    },
  },
};

export default defineConfig({
  output: 'static',
  site: 'https://arunkumaranguraja.com',
  integrations: [sitemap()],
  markdown: {
    processor: satteri({ hastPlugins: [externalLinks] }),
  },
});
