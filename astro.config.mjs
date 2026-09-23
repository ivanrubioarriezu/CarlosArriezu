// @ts-check
import { defineConfig } from 'astro/config';

const [githubOwner, githubRepository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isAccountPagesRepository =
  Boolean(githubOwner) && githubRepository === `${githubOwner}.github.io`;

// GitHub Pages project sites are served from /repository-name. A custom domain
// can override both values at build time with SITE_URL and BASE_PATH=/.
const defaultBase =
  process.env.GITHUB_ACTIONS && githubRepository && !isAccountPagesRepository
    ? `/${githubRepository}`
    : '/';

export default defineConfig({
  output: 'static',
  base: process.env.BASE_PATH ?? defaultBase,
  ...(process.env.SITE_URL ? { site: process.env.SITE_URL } : {}),
});
