# Stitch prompt — Personal website prototype (no imagery)

Paste the block below into **Stitch** to generate **high‑fidelity UI prototypes / wireframes** for a personal portfolio site.

---

You are Stitch. Generate **desktop-first** (+ mobile variants) UI prototypes for a **personal portfolio / personal brand website**.

## Hard constraints (must follow)

- **No photographic imagery**: do **NOT** include person photos, avatars, profile pictures, team photos, or stock photography placeholders.
- **No decorative bitmaps**: avoid image blocks that imply faces/people. Use **typography, layout, abstract shapes, gradients, icons, and UI chrome** only.
- If you need a “profile” area, use **initials in a typographic mark**, a **neutral geometric glyph**, or a **simple bordered container** — not a portrait frame.

## Brand & messaging (use exactly)

- **Site slogan (hero / lockup tagline):** `Grow freely`  
  *(Present it as polish marketing copy — title case acceptable: “Grow freely”.)*

## About page copy (English display)

Use the following paragraph **verbatim on the About page** (lead / manifesto-style body text — restrained, understated, still composed):

> I believe every genuine idea settles like its own tract in an immense digital expanse—not grandstanding, simply particular—carrying habits and constraints that belong to it alone. The work I care for thrives where orderly code intersects discerning aesthetics; in that narrow overlap, restraint and intuition are not opposites but coordinates. Growth, there, stays quiet: steady, unobtrusive, and free enough to correct itself as it proceeds.

(Optional pull-quote beneath the paragraph: **“Orderly code intersects discerning aesthetics.”**)

## Information architecture (minimum pages/sections)

1. **Home / Landing**
   - Hero with slogan **Grow freely**, supporting subhead (1–2 lines), primary + secondary CTA (e.g., “View work”, “About”).
   - Optional “signature elements” section as abstract bento cards (no images).
2. **About**
   - The English paragraph above as the main narrative.
   - Add clearly labeled placeholder sections for **timeline / skills / tools** using text rows and minimalist chips — **no icons that imply portrait or camera**.
3. **Work / Projects** *(can be simplified to a scaffold)*
   - Project list as cards with **text-only thumbnails** (e.g., monogram tile, gradient field, ASCII-style pattern) — **no screenshots unless abstract UI mock** and **never people**.
4. **Contact**
   - Simple form fields + subtle social/contact links styling (text links/buttons).

## Visual direction — “Linear-like / cinematic dark devtool” *(from provided design system)*

Implement the vibe of **premium developer tooling**: **near-black canvases**, **soft indigo ambient light**, **layered depth**, **quiet precision**, not generic template UI.

**Color & surfaces**

- Base background: **near-black** (`#050506` / `#020203` family) — **never pure `#000`**.
- Text: **off-white** primary (`#EDEDEF`), muted body (`#8A8F98`).
- Single accent family: **indigo** (`#5E6AD2` with glow `rgba(94,106,210,0.3)`).

**Background depth (critical)**

- **Multi-layer ambient background**: radial base gradient + ultra-subtle noise + faint technical grid overlay.
- **Large blurred gradient blobs** (slow drift) as light pools — not busy, **cinematic**.

**Typography**

- Prefer **Inter / Geist Sans / system sans** pairing.
- **Display headlines**: large, tight tracking, **gradient-filled text** (white → softer white).
- Accent emphasis sparingly (**shimmer-ish gradient acceptable**).
- Labels/meta: **small mono** with widened tracking.

**Layout**

- Generous whitespace; modular sections separated by hairline borders `rgba(255,255,255,0.06)`.
- **Asymmetric “bento” grids** with varied spans (avoid uniform tile grids).

**Elevation & shadows**

- Cards: translucent surfaces + **multi-layer shadows** (hairline boundary + diffuse depth + optional accent glow).
- CTAs: accent glow; crisp hover lift **≤ 8px**, **200–300ms**, **expo-out** feel (not bouncy).

**Interaction affordances (prototype-level)**

- Show **mouse-tracking spotlight** on key cards as a **labeled effect** (“spotlight follows cursor”).
- Indicate **hero scroll-linked parallax** subtly in notes or Motion panel (respect reduced-motion in copy).

## Accessibility annotations (prototype notes)

- Ensure **focus rings** are visible on interactive elements (accent ring + offset matching background).
- Keep contrast strong for primary text vs background.
- Mention **`prefers-reduced-motion`** alternatives where parallax/floating blobs are used.

## Deliverables

- Produce **multiple frames**: Home, About (with the verbatim English paragraph), Work scaffold, Contact, plus **mobile** counterparts.
- Annotate spacing, grid, and semantic structure for handoff — **consistent with tokens** above.

## Reference lineage (do not cite as binding requirements)

Style inspiration aligned with **Linear / Vercel / Raycast**-like modern product UI; further token detail may be informed by design systems such as those discussed on [designprompts.dev](https://www.designprompts.dev/).

---

## One-line brief (optional, for title field)

**“Dark, ambient-indigo personal site: ‘Grow freely’ — About copy in English; no photos or avatars.”**
