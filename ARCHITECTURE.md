# Project architecture

This is a static Astro website. It has no server-side code, database, CMS, or client framework.

```
src/
  components/          Reusable visual components (to be added during design)
  content/site.ts      Artist copy, projects, media, contact links, and navigation
  layouts/             Shared document structure and metadata
  pages/               Route entry points
  styles/              Global design tokens and styles (to be added during design)
public/
  media/images/        Replaceable image files served as static assets
  media/videos/        Replaceable self-hosted video files, if needed
.github/workflows/     GitHub Pages deployment workflow
```

## Content workflow

- Edit `src/content/site.ts` to update text, projects, links, and externally hosted media.
- Add static images and video files under `public/media/` and reference them with paths beginning with `/media/`.
- Future page sections and components should read from `siteContent`; they should not hard-code artist information.

## GitHub Pages

The deployment workflow runs on pushes to `main`. For a standard project Pages URL, `astro.config.mjs` derives its base path from the repository name during GitHub Actions builds. For a custom domain, provide `SITE_URL` and `BASE_PATH=/` as build environment variables and add `public/CNAME` when the domain is known.
