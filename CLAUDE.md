# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Summary

**Spooky Route 66** is a static website supporting a Phoenix Fan Fusion 2026 presentation ("100 Years of Arizona's Haunted Route 66," Sat June 6, 2026). The site serves live audience members following along on phones and post-event trip planners. Built with Astro, hosted on Bluehost (spooky66.com) as static HTML/CSS/JS uploaded via FTP.

## Commands

```bash
npm run dev       # start local dev server
npm run build     # build to dist/
npm run preview   # preview the built output locally
npm run check     # TypeScript / Astro type checking
```

No test suite. Validate with `npm run check` before building.

## Architecture

**Framework:** Astro 4 with `output: 'static'`. Zero JS by default — the only client-side JS is the Leaflet map on `/map/`.

**Content layer:** The 13 haunted locations live as Markdown files in `src/content/stories/`. The schema is defined in `src/content/config.ts`. Each story has frontmatter fields including `order` (1–13, east-to-west along AZ Route 66), `coordinates` ([lat, lng]), `heroImage`, and `tags`. Story pages are generated via `src/pages/stories/[slug].astro`.

**Map:** `src/pages/map.astro` serializes all story data into a `data-stories` attribute on the `#map` div, then a client-side `<script>` initializes Leaflet with CartoDB Dark Matter tiles (no API key needed), renders numbered ghost-pin SVG markers, draws a dashed polyline along the route, and shows a popup teaser + link on pin click.

**Layout:** All pages use `src/layouts/BaseLayout.astro` which wraps content with `Nav`, `Footer`, and a Google Fonts–free font stack (Bunny Fonts: Bebas Neue for display, Crimson Pro for body). Page-specific styles are scoped `<style>` blocks inside each `.astro` file; shared tokens and global rules live in `src/styles/global.css`.

**Static assets:** Hero images are in `public/images/` and referenced in story frontmatter as bare filenames (e.g., `petrified-forest.jpg`). The presentation PDF is at `public/spooky-route-66-presentation.pdf`.

## Design System

Dark mode only — no toggle. CSS custom properties defined in `global.css`:

| Token | Value | Role |
|---|---|---|
| `--color-bg` | `#0a0d14` | Page background |
| `--color-accent-amber` | `#e8841a` | Primary accent (buttons, links, map pins) |
| `--color-accent-green` | `#4a6741` | Secondary (Route 66 sign green) |
| `--color-text` | `#e8e0d0` | Body text |
| `--color-red` | `#8b1a1a` | Spooky emphasis — use sparingly |
| `--font-display` | Bebas Neue | Headings, labels, buttons |
| `--font-body` | Crimson Pro | Story text |

Buttons use `.btn-primary`, `.btn-secondary`, `.btn-outline` from `global.css`.

## Content Notes

- Stories are numbered 1–13 east to west: Holbrook → Winslow → Flagstaff → Williams → Peach Springs → Kingman → Oatman, plus phantom hitchhikers spanning the full stretch (#13).
- `presentation.txt` is source material only — not published.
- All four panelists (Chance Houston, Debe Branning, Colleen Sulzer, Carolee Jackson) must approve the site before publication. Debe Branning's book *"Arizona's Haunted Route 66"* should be referenced naturally, not pitched.
- No analytics, no cookies, no tracking of any kind — this is a design constraint, not just a preference.
