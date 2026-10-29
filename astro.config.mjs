// Site estático: o GitHub Pages serve a pasta dist/ gerada por `npm run build`.
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://neosenti.com',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
});
