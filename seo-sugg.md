# SEO Suggestions — EyesOn Agency

## Priority: Critical (missing entirely)

### 1. Install `@astrojs/sitemap` and generate `sitemap.xml`
- **File**: `astro.config.mjs`
- **Action**: Add the integration and configure `site` URL in `defineConfig`.
- **Why**: Without a sitemap, search engines may not discover all pages (especially dynamic blog posts). The `site` property is also required for canonical URLs and OG image absolute URLs.

### 2. Create `public/robots.txt`
- **File**: `public/robots.txt`
- **Action**: Add a `robots.txt` allowing all crawlers with a `Sitemap` directive pointing to the sitemap URL.
- **Why**: Controls crawler access and explicitly points search engines to your sitemap.

### 3. Add JSON-LD Structured Data
- **Location**: `BaseLayout.astro` (global) + `blog/[slug].astro` (per-post)
- **Action**: Inject `<script type="application/ld+json">` for:
  - **Organization** (global) — agency name, logo, URL, social profiles.
  - **BreadcrumbList** (blog pages) — Home > Blog > Post Title.
  - **Article** / **BlogPosting** (per post) — headline, description, datePublished, dateModified, author, image, publisher.
  - **FAQPage** (pricing/FAQ sections if applicable).
- **Why**: Structured data enables rich snippets in SERPs (enhanced visibility, higher CTR).

---

## Priority: High (big SEO impact, easy to fix)

### 4. Pass unique `title` and `description` to EVERY page
- **Problem**: Only `blog/[slug].astro` passes `title`; every other page uses the generic `BaseLayout` default.
- **Files**: All page `.astro` files: `index`, `about`, `blogs`, `blog/example`, `animation`, `pricing`, `portfolio`, `branding`, `uiux`, `motiongraphics`, `video`, `adcreatives`, `videotesting`, `login`.
- **Action**: Add page-specific `title` and `description` props to each `<BaseLayout>`. Example:
  ```astro
  <BaseLayout
    title="Portfolio — EyesOn Agency"
    description="View our portfolio of motion graphics, video production, branding, and UI/UX projects."
  >
  ```

### 5. Fix blog listing page heading hierarchy
- **File**: `src/islands/Blogs/MainBlogs.tsx`
- **Problem**: The main heading "Less Noise More Insight" is likely an `<h2>` or non-semantic element.
- **Action**: Ensure it's an `<h1>`. The page title in `<title>` should match or closely relate to this visible heading.
- **Why**: Each page needs exactly one `<h1>` that describes the page content.

### 6. Pass post description + OG image on `blog/[slug].astro`
- **File**: `src/pages/blog/[slug].astro`
- **Problem**: Only `title` is passed to `BaseLayout`. Post `description` (excerpt) and per-post OG image (`coverUrl`) are not passed.
- **Action**: Pass `description` (from `postData.description` or `postData.excerpt`) and `ogImage` (from `coverUrl`) to the layout.
- **Why**: Every blog post shares the same default OG image and meta description — kills click-through differentiation.

### 7. Add `article:*` Open Graph tags for blog posts
- **File**: `BaseLayout.astro` (or create a blog-specific head partial)
- **Action**: Support OG article props:
  ```html
  <meta property="article:published_time" content="..." />
  <meta property="article:modified_time" content="..." />
  <meta property="article:author" content="Eyeson Studio" />
  <meta property="article:section" content="{category}" />
  ```
- **Why**: These tags control how articles appear in Facebook/Google News/Search. Missing = generic preview.

### 8. Add `twitter:site` and `twitter:creator` meta tags
- **File**: `BaseLayout.astro`
- **Action**: Add:
  ```html
  <meta name="twitter:site" content="@eyesonagency" />
  <meta name="twitter:creator" content="@eyesonagency" />
  ```
- **Why**: Twitter card attribution — shows brand handle in shared tweet previews.

### 9. Set canonical URLs on every page
- **File**: All page `.astro` files
- **Problem**: `BaseLayout` accepts a `canonicalUrl` prop, but NO page passes it.
- **Action**: Pass `Astro.url.href` or a constructed canonical URL (e.g., `https://eyeson.com${Astro.url.pathname}`) to the layout.
- **Why**: Prevents duplicate content issues, especially if the site is accessible via multiple domains or with/without trailing slashes.

---

## Priority: Medium (good improvements, moderate effort)

### 10. Replace hardcoded `localhost:1337` API URL
- **Files**: `src/pages/blog/[slug].astro`, `src/islands/Blogs/RealBlogs.tsx`
- **Problem**: Strapi API URL is hardcoded as `http://localhost:1337` — won't work in production.
- **Action**: Move to an environment variable (`PUBLIC_STRAPI_URL` or `STRAPI_URL`). Add a fallback to the static `posts.ts` data.
- **Why**: SEO impact when blog content doesn't load = thin/dead pages.

### 11. Add `alt` text to blog cover images
- **File**: `src/islands/Blogs/RealBlogs.tsx` (card grid), `src/islands/Blogs/BlogHero.tsx` (hero)
- **Action**: Use post title or excerpt as `alt` text for cover images.
- **Why**: Accessibility + keyword relevance for image search.

### 12. Add `width` / `height` to blog cover images
- **Files**: As above
- **Problem**: Unsplash/Strapi images loaded without explicit dimensions → Cumulative Layout Shift.
- **Action**: Extract dimensions from the image data (or use `aspect-ratio` CSS as fallback).
- **Why**: Core Web Vitals — CLS is a ranking factor.

### 13. Remove `noindex` from contact page or add a thank-you page
- **File**: `src/pages/contact.astro`
- **Action**: If the contact page contains useful info (address, phone, etc.), remove `noindex, nofollow`. Otherwise, consider a `/contact/thank-you` page that is indexable.
- **Why**: Contact info is often searched for branded queries.

### 14. Add breadcrumbs to blog post pages
- **File**: `src/islands/Blogs/BlogHero.tsx`
- **Action**: Add visual breadcrumb navigation: `Home > Blog > {Post Title}`. Also include `BreadcrumbList` JSON-LD.
- **Why**: UX + internal linking signals + rich snippet eligibility.

### 15. Implement related posts at end of blog articles
- **File**: `src/islands/Blogs/BlogHero.tsx`
- **Action**: Show 2-3 related posts based on category or tags below the article body.
- **Why**: Internal linking distributes link equity, reduces bounce rate, increases pages per session.

### 16. Add `rel="prev"` / `rel="next"` pagination tags on blog listing
- **File**: Blog listing page or a head component
- **Action**: When paginated posts exist, add:
  ```html
  <link rel="prev" href="/blogs?page=1" />
  <link rel="next" href="/blogs?page=3" />
  ```
- **Why**: Helps search engines understand paginated series and consolidate ranking signals.

---

## Priority: Low (nice-to-have / polish)

### 17. Accurate per-post read time
- **File**: `src/lib/posts.ts`
- **Problem**: All 24 posts have hardcoded `"8 min read"`.
- **Action**: Calculate read time from word count (~200 words/min) or set it per-post.
- **Why**: User expectations — wrong read time lowers trust.

### 18. Add `hreflang` if multilingual support is planned
- **When**: If a Persian/Farsi version or other locale is added.
- **Action**: Use `<link rel="alternate" hreflang="fa" href="..." />`.

### 19. Blog post slug in URL should use post data, not rely on CMS alone
- **File**: `src/pages/blog/[slug].astro`
- **Action**: Consider generating `getStaticPaths()` from `posts.ts` to pre-render common posts as a fallback when Strapi is unavailable.
- **Why**: SSD / resilience — blog pages still work if CMS is down.

### 20. Add `meta name="keywords"` (optional — low modern value)
- Modern search engines largely ignore `<meta keywords>`, but it's harmless to add relevant keywords per page if desired.

### 21. Add `meta name="author"` on blog posts
- **File**: `BaseLayout.astro` or blog-specific head
- **Action**: `<meta name="author" content="Eyeson Studio" />`

### 22. Optimize blog images for WebP with srcset
- **File**: Blog card/hero images
- **Action**: Use the existing `SmartImage` utility for blog cover images (it already generates WebP srcsets).
- **Why**: Faster load times — LCP improvement

### 23. Add `format-detection` meta tag
- **File**: `BaseLayout.astro`
- **Action**: `<meta name="format-detection" content="telephone=no, email=no" />`
- **Why**: Prevents mobile browsers from auto-linking numbers/emails incorrectly.

### 24. Audit heading hierarchy (h1-h6) across all pages
- Check that no page has multiple `<h1>` elements and that heading levels don't skip (e.g., h1 → h3 without h2).
- **File**: All pages/components

### 25. Add `Link[rel="preload"]` for hero/LCP images
- **File**: `BaseLayout.astro` or individual page `<head>`
- **Action**: Preload the LCP image (e.g., the main hero image on homepage).
- **Why**: LCP improvement

### 26. Enable response compression if not already done
- **File**: Astro node adapter or reverse proxy config (nginx/etc.)
- **Action**: Ensure Brotli/Gzip compression is enabled for HTML/CSS/JS/assets.
- **Why**: Largest Contentful Paint / Speed Index improvement.

### 27. Ensure 200 status for all pages, 404 for unknowns
- **File**: Astro config / error handling
- **Action**: Verify that unknown routes (`/random-thing`) return a 404, not 200. Add a custom 404 page at `src/pages/404.astro`.
- **Why**: Soft 404s hurt crawl budget and rankings.

### 28. Add social media `<meta property="fb:app_id">` if Facebook page exists
- **Optional** but improves Facebook preview analytics.

---

## Summary: Top 5 actions to do first

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | Install `@astrojs/sitemap` + `site` in config + generate sitemap | 10 min | Critical |
| 2 | Add `public/robots.txt` | 5 min | Critical |
| 3 | Pass unique `title` + `description` to every `<BaseLayout>` | 30 min | High |
| 4 | Pass `description` + `ogImage` on `blog/[slug].astro` | 10 min | High |
| 5 | Add JSON-LD structured data (Organization + Article + BreadcrumbList) | 1-2 hr | High |
