# SEO Suggestions — EyesOn Agency Blog

## Blog Architecture Overview

- **Routes**: `/blogs` (SSG listing), `/blog/[slug]` (SSR detail), `/blog/example` (SSG demo)
- **CMS**: Strapi at `http://localhost:1337/api/posts` (hardcoded)
- **Components**: `MainBlogs.tsx` → `RealBlogs.tsx` (listing), `BlogHero.tsx` (detail)
- **Layout**: `BaseLayout.astro` handles all meta/OG tags
- **Data fields**: `id`, `title`, `slug`, `category`, `publishedAt`, `readTime`, `cover.url`, `content` (Strapi blocks)

---

## Critical (missing entirely)

### ~~1. Install `@astrojs/sitemap` and configure `site` URL~~
- **File**: `astro.config.mjs`
- **Status**: ✅ Fixed — `site` is set and `@astrojs/sitemap` is installed and configured

### ~~2. Add `public/robots.txt`~~
- **Status**: ✅ Fixed — `public/robots.txt` exists with `Disallow: /admin/` and `Disallow: /login/`

### 3. Add JSON-LD Structured Data
- **Location**: `BaseLayout.astro` (global) + `blog/[slug].astro` (per-post)
- **Status**: ⚠️ Partial — **Organization** (BaseLayout) and **Article** (blog/[slug].astro) are implemented. **BreadcrumbList** still missing.
- **Action**: Inject `<script type="application/ld+json">` for:
  - ~~**Organization** (global)~~ — ✅ Done
  - **BreadcrumbList** (blog pages) — Home > Blog > Post Title ❌ Missing
  - ~~**Article/BlogPosting** (per post)~~ — ✅ Done
- **Why**: Rich snippets in SERPs = higher CTR

---

## High (big SEO impact, easy to fix)

### ~~4. Fix `blog/[slug].astro` — missing meta props~~
- **File**: `src/pages/blog/[slug].astro`
- **Status**: ✅ Fixed — passes `title`, `description`, `ogImage`, `canonicalUrl`, `ogType="article"`, `keywords`, `datePublished`, `dateModified`, `articleSection`

### ~~5. Fix `/blogs` listing page — missing meta~~
- **File**: `src/pages/blogs.astro`
- **Status**: ✅ Fixed — passes `title`, `description`, and `canonicalUrl`

### ~~6. Fix heading hierarchy on listing page~~
- **File**: `src/islands/Blogs/MainBlogs.tsx`
- **Status**: ✅ Fixed — single `<h1>` wraps "Less Noise More Insight" with "Blog & Articles" as a `<span>` inside it

### ~~7. Add `article:*` OG tags for blog posts~~
- **File**: `BaseLayout.astro`
- **Status**: ✅ Fixed — `article:published_time`, `article:modified_time`, `article:author`, `article:section` all supported

### ~~8. Add `twitter:site` / `twitter:creator`~~
- **File**: `BaseLayout.astro`
- **Status**: ✅ Fixed — both present

### ~~9. Pass canonical URL from every page~~
- **File**: All page `.astro` files
- **Status**: ✅ Fixed — all pages pass `canonicalUrl` to `BaseLayout`

---

## Medium (good improvements, moderate effort)

### 10. ~~Replace hardcoded `localhost:1337` with env variable~~
- **Files**: `src/pages/blog/[slug].astro`, `src/islands/Blogs/RealBlogs.tsx`, `src/islands/Blogs/BlogHero.tsx`
- **Status**: ⚠️ Partial — `import.meta.env.PUBLIC_POST_URL` is used but all three files still have `|| "http://localhost:1337"` as fallback. Remove the fallback for production safety.
- **Why**: Blog breaks in production = thin/dead pages hurt rankings

### ~~11. Add descriptive `alt` text to blog cover images~~
- **File**: `src/islands/Blogs/RealBlogs.tsx`, `src/islands/Blogs/BlogHero.tsx`
- **Status**: ✅ Fixed — uses `alt={post.title}` and `alt={title}` respectively

### 12. Add `width` / `height` or `aspect-ratio` on blog images
- **Files**: `src/islands/Blogs/RealBlogs.tsx`, `src/islands/Blogs/BlogHero.tsx`
- **Status**: ⚠️ Partial — BlogHero hero uses `aspect-[1.02/1]` on container, related posts use `aspect-[16/9]`. But the cards in RealBlogs.tsx still use plain `<img>` without explicit dimensions. CLS risk remains.

### ~~13. Add `rel="prev"` / `rel="next"` on paginated blog listing~~
- **File**: `src/islands/Blogs/RealBlogs.tsx`
- **Status**: ✅ Fixed — dynamically injected in `useEffect`

### 14. Add breadcrumbs to blog post pages
- **File**: `src/islands/Blogs/BlogHero.tsx`
- **Status**: ⚠️ Partial — Visual breadcrumb (`Home / Blog / Title`) exists at line 288-294, but **`BreadcrumbList` JSON-LD** is missing

### ~~15. Show related posts at end of articles~~
- **File**: `src/islands/Blogs/BlogHero.tsx`
- **Status**: ✅ Fixed — fetches up to 3 related posts by category and renders them below the article

### ~~16. Add `<meta name="keywords">` per blog post~~
- **File**: `BaseLayout.astro` + `src/pages/blog/[slug].astro`
- **Status**: ✅ Fixed — `BaseLayout` accepts `keywords` prop and renders `<meta name="keywords">`, `[slug].astro` fetches and passes `post.keywords`

## Low (nice-to-have / polish)

### 17. Accurate per-post read time
- **File**: Strapi post data
- **Problem**: All posts show static "8 min read"
- **Action**: Calculate read time dynamically from `content` word count (~200 wpm)

### 18. Pre-render popular blog posts with `getStaticPaths()`
- **File**: `src/pages/blog/[slug].astro` (currently `export const prerender = false`)
- **Status**: ❌ Not fixed — still SSR-only, no `getStaticPaths()`

### 19. Use `SmartImage` for blog cover images
- **File**: `src/islands/Blogs/RealBlogs.tsx`, `src/islands/Blogs/BlogHero.tsx`
- **Status**: ❌ Not fixed — both still use plain `<img>` for cover images. `SmartImage` is only used for small decorative icons

### ~~20. Add `<meta name="author">` on blog posts~~
- **File**: `BaseLayout.astro`
- **Status**: ✅ Fixed — rendered when `ogType="article"`

### ~~21. Add `format-detection` meta tag~~
- **File**: `BaseLayout.astro`
- **Status**: ✅ Fixed

### 22. Audit heading hierarchy (h1-h6) across all pages
- **Status**: ⚠️ Partial — Blog listing has proper single `<h1>`. Need to verify across all pages.

### 23. Preload hero/LCP images
- **File**: `BaseLayout.astro` or individual pages
- **Status**: ❌ Not fixed — no `<link rel="preload">` found anywhere

### ~~24. Ensure 404 for unknown routes~~
- **Status**: ✅ Fixed — custom `src/pages/404.astro` exists with full design

---

## Summary: Top 5 Actions

| # | Action | Effort | Impact | Status |
|--:|--------|--------|--------|--------|
| 1 | `public/robots.txt` | 5 min | Critical | ✅ Done |
| 2 | Pass `description` + `ogImage` on `blog/[slug].astro` | 10 min | High | ✅ Done |
| 3 | Add JSON-LD structured data | 1-2 hr | High | ⚠️ Partial |
| 4 | Fix heading hierarchy (`<h1>`) on blog listing | 5 min | High | ✅ Done |
| 5 | Replace hardcoded `localhost:1337` with env variable | 15 min | Medium | ⚠️ Partial |
