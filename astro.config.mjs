// @ts-check
import { defineConfig } from 'astro/config';

// The site uses a custom domain, so GitHub Pages must serve it from the root.
const siteUrl = process.env.SITE_URL ?? 'https://www.carlosarriezu.com';
const defaultBase = '/';

export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH ?? defaultBase,
  site: siteUrl,
});
