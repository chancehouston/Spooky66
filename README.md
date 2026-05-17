# Spooky 66

```
 ___  ___  ___  ___  ___  _  _     __ __
/ __>| . \| . \| . || . \| || |   / // /
\__ \|  _/|   /| | ||  _/| || |_ / // _ \
<___/|_|  |_\_\`___/|_|  |_||___|/_/|____/
```

Companion website for the **"Arizona's Spooky Route 66"** presentation
at [Phoenix Fan Fusion 2026](https://phoenixfanfusion.com).

Live site: **[spooky66.com](https://spooky66.com)**

---

## What's on the site

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Overview and links to all sections |
| Stories | `/stories` | 13 haunted locations along Arizona's Route 66 |
| Map | `/map` | Interactive map of every stop (powered by Leaflet) |
| Slideshow | `/slideshow` | Presentation slides used during the panel |
| Trip Planner | `/trip-planner` | Plan your own spooky road trip |

The haunted locations covered include the Petrified Forest curse, La Posada Hotel,
Apache Death Cave & Two Guns, Hotel Monte Vista, the Weatherford Hotel, the Museum
Club, the Red Garter Inn, Hotel Brunswick, Grand Canyon Caverns, Oatman Hotel,
the Hackberry Mine murders, and Route 66's phantom hitchhikers.

---

## Tech stack

- **[Astro](https://astro.build)** v4 — static site generator
- **[Leaflet](https://leafletjs.com)** — interactive map
- **TypeScript**
- Outputs plain static HTML/CSS/JS — no server required

---

## Prerequisites

- [Node.js](https://nodejs.org) 18 or later
- npm (included with Node.js)

---

## Getting started

```bash
# 1. Clone the repo
git clone https://github.com/chancehouston/spooky66.git
cd spooky66

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321) in your browser.

---

## Available commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build the static site to `./dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Astro's TypeScript type-checker |

---

## Project structure

```
spooky66/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/
│   │   └── stories/      # Markdown files — one per haunted location
│   ├── layouts/          # Base page layout
│   ├── pages/            # File-based routing
│   │   ├── index.astro
│   │   ├── map.astro
│   │   ├── slideshow.astro
│   │   ├── trip-planner.astro
│   │   └── stories/
│   └── styles/
│       └── global.css
├── public/               # Static assets (images, PDF, favicon)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Content lives in `src/content/stories/` as Markdown files. Adding a new haunted
location is as simple as dropping a new `.md` file in that directory.

---

## Deploying your own copy

Since this is a fully static site, you can host it anywhere that serves files:

- **Netlify / Vercel** — connect the repo and set the build command to
  `npm run build` with publish directory `dist`
- **GitHub Pages** — use the `dist/` output with a GitHub Actions workflow
- **Any static host** — run `npm run build` and upload the `dist/` folder

---

*Presented at Phoenix Fan Fusion 2026 by Chance Houston.*
