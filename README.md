# Spooky Route 66
**"100 Years of Ghost Stories from the Desert"**
Phoenix Fan Fusion 2026 — Supporting Website at spooky66.com

---

## Project Overview

A static website to support the "Spooky Route 66" presentation at Phoenix Fan Fusion 2026, coinciding with the 100th anniversary of Route 66. The site serves two audiences:

1. **Live audience** — Follow along on their phones during the presentation (PDF slideshow access)
2. **Trip planners** — Use after the event to plan their own drive along Arizona's Route 66 with destination and attraction info for each haunted location

---

## Site Positioning

**This site is a memento, not a marketing tool.** Attendees will not learn about spooky66.com until they arrive at the presentation — the URL will be shared during the talk (via QR code or verbal mention). The goal is to give the audience something to take home: a place to re-read the stories, revisit the locations, and plan their own drive.

The site should feel like a souvenir program, not a sales funnel. There are no pre-event promotions, no email capture, no ads.

### Event Details

| Field | Info |
|-------|------|
| **Panel title** | 100 Years of Arizona's Haunted Route 66 |
| **Date** | Saturday, June 6, 2026 |
| **Time** | 12:00 PM – 1:00 PM |
| **Room** | North 128AB Horror |
| **Convention** | Phoenix Fan Fusion 2026 |
| **Schedule link** | https://memberships.phoenixfanfusion.com/schedules/view/924392 |

### Panelists

All four panelists must approve the presentation and website before publication.

- **Chance Houston** — Presenter, site owner, developer. Introduces the panel.
- **Debe Branning** — Director of Arizona's MVD Ghostchasers. Debe and a group of paranormal investigator friends completed the full Arizona Route 66 road trip in six days (approximately five years ago) and documented that journey in her book **"Arizona's Haunted Route 66"**, published by **Haunted America**.
- **Colleen Sulzer** — Panelist / paranormal investigator.
- **Carolee Jackson** — Panelist / paranormal investigator.

**How to handle the book on the site:** Reference it naturally as a resource for people who want to go deeper — not a sales pitch. A brief, respectful mention (e.g., in a "Further Reading" or "About the Panelists" section) is appropriate. Debe will have direct input on how her book and work are represented.

---

## Content Foundation

The presentation covers **13 haunted locations** along Arizona's Route 66, traveling east to west:

| # | Location | Town |
|---|----------|------|
| 1 | Curse of the Petrified Forest | Holbrook |
| 2 | George Smiley's Ghost — Navajo County Courthouse | Holbrook |
| 3 | La Posada Hotel's Mysterious Guests | Winslow |
| 4 | Apache Death Cave & Cursed Two Guns | Between Winslow & Flagstaff |
| 5 | Hotel Monte Vista's Celebrity Ghosts | Flagstaff |
| 6 | Weatherford Hotel's Eternal Honeymooners | Flagstaff |
| 7 | Don and Thorna's Museum Club | Flagstaff |
| 8 | Red Garter Inn's Murdered Madam | Williams |
| 9 | Grand Canyon Caverns' Restless Spirits | Peach Springs |
| 10 | Hotel Brunswick's Love Triangle | Kingman |
| 11 | Oatman Hotel's Hollywood Ghosts | Oatman |
| 12 | The Hackberry Mine Murders | Hackberry |
| 13 | Route 66's Phantom Hitchhikers | Entire AZ stretch |

---

## Proposed Site Architecture

```
spooky66.com/
├── /                   → Landing page (intro, event info, CTA to map + stories + PDF)
├── /map/               → Interactive map — 13 pins east to west, each linking to its story page
├── /stories/           → Index of all 13 haunted locations
├── /stories/[slug]/    → Individual story pages (one per location)
├── /trip-planner/      → Full multi-day itinerary with lodging and side stories
└── /slideshow/         → Downloadable/inline PDF of the Keynote presentation
```

The interactive map is a **core feature**, not a stretch goal. It is the natural entry point for the road trip audience — users scan the route, tap a pin, and read the story. It also reinforces the east-to-west journey structure of the presentation.

**Map implementation approach:** Use [Leaflet.js](https://leafletjs.com/) with OpenStreetMap tiles — fully open source, no API key required, no tracking, works as static HTML. Each of the 13 stops gets a custom styled pin. Clicking a pin shows a brief teaser and links to the full story page.

---

## Technical Constraints

- **Hosting:** Self-hosted static site on Bluehost (spooky66.com — domain owned, already active)
- **Current state:** The domain currently redirects to an early PDF draft of the slideshow for panelist review. This will be replaced by the full site.
- **Static only:** No server-side runtime, no cookies, no analytics tracking
- **Mobile-first:** Primary use case is audience members on phones during a live presentation
- **Privacy:** No visitor analytics, no cookies, no tracking of any kind

### Static Site Generator: Astro

**Decision: Astro** — best fit for this project for the following reasons:
- Outputs pure static HTML with zero JavaScript by default — fast load on mobile over convention center Wi-Fi
- Built-in support for content collections, making 13 story pages easy to manage as structured data
- Clean, readable templates with no obscure syntax
- Produces a standard folder of HTML/CSS/JS files that can be uploaded directly to Bluehost via FTP
- Handles the interactive map component (if included) without needing a separate framework

---

## Design Direction

### Tone
Campy and fun — not genuinely scary. The presentation's voice is warm, entertaining, and historically grounded. The site should match: a Halloween attraction you'd enjoy, not one that keeps you up at night.

### Era
Route 66 golden age (1930s–1960s) as the foundation, layered with a spooky/Halloween aesthetic. Think roadside Americana — diners, motor courts, neon signs — gone eerie after dark.

### Color Palette — Dark Mode
The site runs in dark mode throughout. No light mode toggle.

| Role | Direction |
|------|-----------|
| **Background** | Deep desert night sky — near-black with a cool blue-black or dark indigo undertone |
| **Primary accent** | Amber / orange neon — evoking vintage roadside signs and jack-o-lanterns |
| **Secondary accent** | Faded Route 66 road sign green — muted, aged, not pure green |
| **Text** | Off-white / warm cream — easier to read on dark backgrounds than pure white |
| **Danger / highlight** | Deep blood red — used sparingly for spooky emphasis |

### Typography
Two-font system:

| Role | Style | Notes |
|------|-------|-------|
| **Display / headings** | Vintage road sign — bold, condensed, all-caps capable | Evokes highway signage and 1950s Americana |
| **Body / story text** | Spooky serif — slightly weathered or editorial serif | Readable at length on mobile; adds gothic texture without being illegible |

Both fonts should work well at small sizes on mobile screens. Legibility over style when in conflict.

---

## Content Decisions

### Slideshow / PDF
- Created in **Keynote**, exported as a **multi-page PDF**
- Delivered on the site as an inline/downloadable PDF — no separate slideshow page needed, just a clean PDF viewer or download link
- No QR code needed; spooky66.com is simple enough to type or remember

### Story Pages
Each of the 13 location pages should go **beyond the presentation text** and give visitors everything they need to actually visit the location: hours, admission, addresses, links to official sites, practical tips, and any interesting details or side stories not covered in the main presentation.

### Photography
- **Primary:** Chance Houston's personal road trip photo collection
- **Secondary:** Carolee Jackson's photos as needed
- No reliance on stock or Creative Commons images

### Trip Planner
Full **multi-day itinerary** covering the entire Arizona Route 66 stretch, with:
- Lodging recommendations at or near each stop
- Driving directions / route order (east to west)
- Interesting side stories and detours not in the main presentation
- Practical travel tips (best times to visit, what to bring, etc.)

### About the Panelists
The slideshow will include presenter information. The website should **mention all four panelists in the context of the road trip** but does not need a dedicated bios or introductions page. Keep it brief and woven naturally into the site (e.g., a short note on the landing page or trip planner intro).

---

## Stretch Goals (Flag If Interested)
- "Scare rating" or thematic tags per story (cursed objects, murder, Hollywood ghosts, etc.)
- Email/social share prompts so audience members can send the site to friends

---

## Source Files

- [presentation.txt](presentation.txt) — Raw text of all 13 stories (reference only, not published)
