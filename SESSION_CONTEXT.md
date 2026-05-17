# Spooky Route 66 — Session Context
Last updated: April 18, 2026

---

## YOUR TODOS (before the next coding session)

These are all content tasks that only you can complete. Nothing else can be built until they exist.

### High Priority (blocks site completion)
- [ ] **Install Node.js** on your machine — https://nodejs.org — then run `npm install` in this folder
- [x] **Export Keynote as PDF** → saved as `public/spooky-route-66-presentation.pdf` ✓
      `src/pages/slideshow.astro` line 5 updated to `pdfReady = true`
- [ ] **Photos** — one hero photo per location (landscape, 1200px+ wide, JPEG or WebP)
      Drop them into `public/images/` — filenames can be anything; you'll wire them up together

### Medium Priority (improves site quality)
- [ ] **Verify visiting info** for each of the 13 locations — hours, admission, addresses
      Some are pre-populated with best-available info; confirm or correct them in each story's `.md` file
- [ ] **Lodging recommendations** for the Trip Planner (6 nights):
      Night 1: Holbrook or Winslow
      Night 2-3: Flagstaff (2 nights — 3 stops in the city)
      Night 4: Williams or Flagstaff
      Night 5: Kingman (base for Peach Springs + Hackberry)
      Night 6: Oatman or Kingman
- [ ] **Practical travel tips** for Trip Planner: best season, road conditions, what to bring
- [ ] **Side stories / detours** for Trip Planner: anything not in the main presentation

### Before Go-Live
- [ ] **Panelist review and approval** from all four: Chance Houston, Debe Branning,
      Colleen Sulzer, Carolee Jackson

- [ ] **FTP upload** of the `dist/` folder to Bluehost public_html after final build

---

## WHERE WE LEFT OFF

### What is complete
- [x] Planning document (`README.md`) — full project brief, all decisions recorded
- [x] Implementation plan (`~/.claude/plans/let-s-plan-the-tasks-curious-diffie.md`)
- [x] Full Astro project scaffold — all 28 files written:
      - Config: `package.json`, `astro.config.mjs`, `tsconfig.json`
      - Design system: `src/styles/global.css` (dark mode, tokens, fonts, Leaflet overrides)
      - Layout + components: `BaseLayout.astro`, `Nav.astro`, `Footer.astro`,
        `StoryCard.astro`, `VisitInfo.astro`
      - Content schema: `src/content/config.ts`
      - 13 story content files: `src/content/stories/*.md` (one per haunted location)
      - All 6 pages: `index.astro`, `stories/index.astro`, `stories/[slug].astro`,
        `map.astro`, `trip-planner.astro`, `slideshow.astro`
      - Favicon: `public/favicon.svg`

### What is NOT yet possible
- The site cannot run until Node.js is installed and `npm install` is executed
- Photos are all placeholder gradients (numbered boxes) until real photos are added
- The Trip Planner has structural framework but lodging/tips content marked as TBD
- The Slideshow page shows a "Coming Soon" card until the Keynote PDF is exported
- No deployment to Bluehost yet (that's the final step)

---

## HOW TO START THE SITE LOCALLY

```
# 1. Install Node.js from https://nodejs.org (LTS version)

# 2. Open Terminal, navigate to this folder
cd /Users/chance/Code/Spooky66

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev

# 5. Open your browser to http://localhost:4321
```

To build for production (creates the /dist/ folder for Bluehost upload):
```
npm run build
```

---

## PROJECT OVERVIEW (quick reference)

| Field | Value |
|-------|-------|
| Site | spooky66.com |
| Hosting | Bluehost (static file upload via FTP) |
| Framework | Astro 4 (static output) |
| Map | Leaflet.js + CartoDB Dark Matter tiles |
| Fonts | Bunny Fonts: Bebas Neue + Crimson Pro |
| Analytics | None (intentional — no cookies, no tracking) |
| Panel date | Saturday June 6, 2026, 12–1 PM |
| Room | North 128AB Horror, Phoenix Fan Fusion |

### Panelists
- Chance Houston (presenter, paranormal investigator, site owner, developer)
- Debe Branning (MVD Ghostchasers; author, "Arizona's Haunted Route 66", Haunted America)
- Colleen Sulzer (paranormal investigator)
- Carolee Jackson (paranormal investigator; backup photo source)

### The 13 Stops (east to west)
```
01  Petrified Forest              Holbrook
02  Navajo County Courthouse      Holbrook
03  La Posada Hotel                Winslow
04  Apache Death Cave / Two Guns  Canyon Diablo
05  Hotel Monte Vista              Flagstaff
06  Weatherford Hotel              Flagstaff
07  Museum Club                    Flagstaff
08  Red Garter Inn                 Williams
09  Grand Canyon Caverns           Peach Springs
10  Hotel Brunswick / Mr. D'z      Kingman
11  Oatman Hotel                   Oatman
12  Hackberry Mine                 Hackberry
13  Phantom Hitchhikers            Entire AZ stretch
```

---

## KEY FILES TO KNOW

| File | Purpose |
|------|---------|
| `README.md` | Full project brief, all decisions, design system |
| `src/pages/slideshow.astro` | Change `pdfReady = false` to `true` on line 10 when PDF is ready |
| `src/content/stories/*.md` | One file per location — add `heroImage:` filename when photos arrive |
| `public/images/` | Drop photos here |
| `public/spooky-route-66-presentation.pdf` | Drop Keynote export here |
| `src/pages/trip-planner.astro` | Find `class="tbd"` sections to fill in lodging and tips |

---

## DESIGN DECISIONS (already made — do not revisit)

- **Dark mode only** — no light mode toggle
- **Tone** — campy and fun, not genuinely scary
- **Colors** — night sky bg, amber neon accents, faded Route 66 green, warm cream text
- **Fonts** — Bebas Neue (headings), Crimson Pro (body)
- **Map** — Leaflet.js with CartoDB Dark Matter tiles, amber ghost pins, no API key needed
- **No QR code** — site name is simple enough to type/remember
- **No analytics or cookies** of any kind
- **Book reference** — Debe's book gets a natural mention in Slideshow "Further Reading"
  and Trip Planner intro, not a sales pitch
- **About section** — no dedicated bios page; panelists mentioned contextually

---

## NEXT SESSION AGENDA (suggested)

1. Confirm Node.js is installed and site runs locally (`npm run dev`)
2. Add photos to `public/images/` and wire up `heroImage:` in story frontmatter
3. Review the live local site and note any design or content changes
4. Fill in Trip Planner lodging and tips
5. Flip `pdfReady` to `true` and test slideshow page once PDF is exported
6. Panelist review round
7. Final build + FTP upload to Bluehost
