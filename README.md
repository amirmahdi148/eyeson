<div align="center">

# EyesOn Agency

**Global Level Motion & Design — without the slow process or high costs.**

A premium, remote creative studio delivering polished animations, UI visuals, product content, and edited videos at the speed of a lean team.

[eyeson.agency](https://eyeson.agency) · [hello@eyeson.agency](mailto:hello@eyeson.agency) · Tbilisi, Georgia · Remote worldwide

</div>

---

## What we make

EyesOn Studio creates premium visual content for modern brands, including:

- **Motion Graphics** & 2D/3D **Animation**
- **Video Production** & **Video Editing** (product launches, SaaS explainers, AI product videos, talking-head edits, short-form social)
- **Ad Creatives** (static + motion, performance-driven)
- **Branding** (logos, color systems, typography, visual identity)
- **UI/UX Visuals** (landing pages, user flows, product UI)
- **Case Studies**, **Showreels**, and ongoing **Content Pipelines**

We typically partner with **startups, SaaS, AI, crypto/fintech, agencies, founders, and creators** that need high-end visuals without building a full in-house team.

---

## Tech stack

| Layer | Tools |
| --- | --- |
| Framework | [Astro 6](https://astro.build) (SSR via `@astrojs/vercel`, `output: 'server'`) |
| UI | React 19, Svelte 5 |
| Styling | Tailwind CSS 4, `shadcn` (radix-nova preset), `tw-animate-css` |
| Animation | Framer Motion, GSAP, Lenis (smooth scroll) |
| 3D | Spline (`@splinetool/runtime`, `@splinetool/react-spline`) |
| Media | Video.js, Swiper |
| Icons | Lucide (`lucide-astro`, `lucide-react`, `@lucide/astro`) |
| CMS | Strapi (`@strapi/blocks-react-renderer`) — `PUBLIC_API_URL`, `PUBLIC_POST_URL` |
| Networking | Axios |
| Typography | Geist Variable (`@fontsource-variable/geist`) |
| Linting/Types | TypeScript 6, `@astrojs/check` |
| Deploy | Vercel Adapter |

---

## Project structure

```text
eyeson/
├── public/                       # Static assets (logos, og, hero images, favicon)
│   ├── logos/                    # Brand marks
│   ├── og/                       # Default OG / share image
│   ├── home/, about/, case/, ... # Section imagery
│   └── favicon.ico
├── src/
│   ├── pages/                    # File-based routes (Astro)
│   │   ├── index.astro           # Home — Hero, OrbitSystem, Services, Workflow, Testimonials
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── pricing.astro
│   │   ├── portfolio.astro
│   │   ├── blogs.astro
│   │   ├── blog/                 # Dynamic [slug].astro posts
│   │   ├── case/                 # Case studies
│   │   ├── animation.astro
│   │   ├── motiongraphics.astro
│   │   ├── video.astro
│   │   ├── videotesting.astro
│   │   ├── adcreatives.astro
│   │   ├── branding.astro
│   │   ├── uiux.astro
│   │   ├── login.astro
│   │   └── admin.astro           # Admin (auth-gated) + admin/*
│   ├── layouts/
│   │   ├── BaseLayout.astro      # SEO head, OG/Twitter, theme, Lenis smooth scroll, Header + Footer
│   │   └── AdminLayout.astro
│   ├── components/               # Astro components grouped by page/section
│   │   ├── Home/                 # Hero, CreativeDirections, OrbitSystem content, Workflow, WhyChooseUs
│   │   ├── About/, BrandingMain, AnimationMain
│   │   ├── Adcreatives/, MotionGraphics/, Uiux/, Video/, VideoTesting/
│   │   ├── Portfolio/, Case/, Blogs/, pricing/, Contact/
│   │   ├── FooterElements/       # Footer columns
│   │   ├── Shared/               # Cross-page UI (Header, Footer, FAQ, CostVideo, LogoCaro, …)
│   │   └── ui/                   # shadcn primitives (button, …)
│   ├── islands/                  # Interactive client components (`client:load` / `client:visible`)
│   │   ├── Home/                 # HeroHome, ProcessScrollSection, TestimonialsSection, HomeServicesSection
│   │   ├── Shared/               # MegaMenu, OrbitSystem, VideoWorkShowcaseSection, ContactUs
│   │   ├── CaseStudiesSection, StarBackground
│   │   ├── About/, Adcreatives/, Admin/, Auth/, Blogs/, branding/
│   │   ├── Case/, Contact/, MotionGraphics/, Portfolio/, pricing/
│   │   ├── UiUx/, Video/, VideoPlayer/, VideoTesting/
│   │   └── animations/
│   ├── services/                 # API clients (dashboardService, loginService)
│   ├── lib/                      # Shared helpers (orbitIcons, posts data, cn util)
│   ├── utils/                    # httpService, SmartImage, useAsyncOperation
│   └── styles/global.css         # Tailwind + shadcn tokens + custom keyframes
├── astro.config.mjs              # `site: 'https://eyeson.com'`, Vercel adapter, integrations
├── tailwind.config.ts            # Tailwind 4 config (Geist sans, neutral base, CSS variables)
├── components.json               # shadcn/ui config (radix-nova)
├── tsconfig.json
└── package.json
```

---

## Getting started

### Prerequisites

- **Node.js** 20+
- **pnpm** (recommended — see `.npmrc`)

### Install & run

```sh
pnpm install
pnpm dev          # Astro dev server on http://localhost:4321
```

### Build & preview

```sh
pnpm build        # Build production bundle to ./dist
pnpm preview      # Preview the production build locally
```

### Useful scripts

| Command | Action |
| --- | --- |
| `pnpm dev` | Start local dev server at `http://localhost:4321` |
| `pnpm build` | Build the production site to `./dist/` |
| `pnpm preview` | Preview the production build locally |
| `pnpm astro ...` | Run Astro CLI (e.g. `astro add`, `astro check`) |

---

## Environment variables

Create a `.env` file at the project root (see `.env` for the structure):

```env
PUBLIC_API_URL=     # Strapi API base URL (used by islands & services)
PUBLIC_POST_URL=    # Strapi posts endpoint / public asset host
```

Both variables are consumed by the Strapi-backed blog, case studies, and admin areas.

---

## Conventions & architecture notes

- **Astro first.** Pages and most presentational UI are `.astro` files; interactive pieces are React/Svelte **islands** hydrated with `client:load` or `client:visible`.
- **Section grouping.** `src/components/<Section>/` holds Astro components; `src/islands/<Section>/` holds the matching interactive islands.
- **shadcn/ui** is wired up via `components.json` (radix-nova preset, neutral base, CSS variables, Lucide icons, `@/components`, `@/lib` aliases).
- **Theming.** Dark-first brand identity — body uses `#000E17` with teal/cyan accents (`#00CFE8`, `#00A9BD`, `#38B6B3`, `#0D8F79`).
- **Typography.** Geist Variable (`@fontsource-variable/geist`) is loaded globally.
- **Motion.** Lenis for global smooth scroll; Framer Motion / GSAP for per-section choreography; Spline for the 3D hero.
- **SEO.** `BaseLayout.astro` derives `<title>`, description, canonical, OG and Twitter tags from page props. `@astrojs/sitemap` generates `sitemap.xml`.
- **Deployment.** `output: 'server'` with the Vercel adapter — push to `main` to ship.

---

## Contact

- **Email** — [hello@eyeson.agency](mailto:hello@eyeson.agency)
- **Telegram** — [@parhamfardian](https://t.me/parhamfardian)
- **Phone / WhatsApp** — +98 937 416 2476
- **Studio** — Tbilisi, Georgia · Remote-first, working with clients worldwide

---

<div align="center">

© EyesOn Agency. All rights reserved.

</div>
