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

The deployment workflow runs on pushes to `main`. The site is served from the custom domain `www.carlosarriezu.com`, so the Astro base path is `/` and `public/CNAME` keeps the GitHub Pages domain mapping in the generated site.
