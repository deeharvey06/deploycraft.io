# DeployCraft — Marketing Site

Software delivery consulting site for **DeployCraft** (deploycraft.io), built to feel like a modern SaaS product (Vercel / Linear / Stripe style) rather than a typical consulting site.

## Stack

- React 19 + Vite + TypeScript
- Tailwind CSS (dark theme, DeployCraft design tokens in `tailwind.config.js`)
- Motion (Framer Motion) for scroll reveals, hover, and the hero parallax/dashboard animation
- React Router
- Lucide React icons
- React Hook Form + TanStack Query (wired up and ready for a contact form / live data later)
- shadcn/ui-style `Button` component (`class-variance-authority` + `tailwind-merge`)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    ui/
      Button.tsx        shadcn-style button (primary / secondary / ghost)
      FadeIn.tsx         scroll-triggered fade-in wrapper used across all sections
    Layout.tsx           Navbar + <Outlet/> + Footer shell for every route
    Navbar.tsx           sticky nav, router-aware links, always-visible "Schedule Consultation" CTA
    Hero.tsx             headline + mouse-parallax + animated gradient
    DeployDashboard.tsx  the signature element — animated deploy console (build logs,
                         service health, build time, deployment status)
    TrustedTech.tsx      grayscale-to-color technology strip
    Services.tsx         3 large hover-lift service cards
    WhyDeployCraft.tsx   split layout, self-drawing scroll-linked timeline
    Capabilities.tsx     4-column capabilities grid (Frontend / Backend / Cloud / Leadership)
    EngagementModels.tsx 4-card engagement model breakdown (Project Delivery, Fractional
                         Leadership, DevOps Modernization, Engineering Acceleration)
    Process.tsx          5-step delivery process cards
    Industries.tsx        industries grid
    CTA.tsx              closing call-to-action band
    ContactForm.tsx       React Hook Form contact form with validation + success state
    Footer.tsx
  pages/
    Home.tsx             assembles all landing sections
    About.tsx             mission, principles, closing CTA
    Insights.tsx           article grid (sample content — swap in real posts later)
    Contact.tsx             contact hero + direct details + ContactForm
  lib/utils.ts            `cn()` class-merging helper
  main.tsx                router (Layout wraps all routes) + query client + mount
  index.css               Tailwind base + design-token utilities
tailwind.config.js         DeployCraft palette, fonts, shadows, keyframes
```

Routes: `/`, `/about`, `/insights`, `/contact`. Section anchors (`#services`, `#solutions`, `#industries`) live on `/` — nav and footer links resolve to `/#services` etc. when you're on another page.

## Design tokens

| Token | Value |
|---|---|
| Background | `#0B1220` |
| Surface | `#111827` |
| Primary | `#2563EB` |
| Accent | `#14B8A6` |
| Text | `#F9FAFB` |
| Secondary text | `#94A3B8` |
| Border | `#1E293B` |
| Success | `#22C55E` |

Headings use **Space Grotesk**, body copy uses **Inter** (both loaded from Google Fonts in `index.html`).

## Notes for next steps

- Insights articles are placeholder content (titles, excerpts, categories) — no detail page exists yet. Say the word and I'll build an article template + routing for individual posts.
- The contact form simulates a submission (loading state → success state) but isn't wired to a real backend yet. Swap the `onSubmit` handler in `ContactForm.tsx` for a POST to your CRM, inbox, or a service like Formspree/Resend.
- Motion respects `prefers-reduced-motion` globally via `index.css`.
- This was scaffolded without network access, so `node_modules` isn't included — run `npm install` before `npm run dev`.
# deploycraft.io
# deploycraft.io
