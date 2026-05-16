---
name: Cinematic Technical Noir
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#3a393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f21'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e1e3'
  on-surface-variant: '#c6c5d5'
  inverse-surface: '#e5e1e3'
  inverse-on-surface: '#313032'
  outline: '#908f9e'
  outline-variant: '#454652'
  surface-tint: '#bdc2ff'
  primary: '#bdc2ff'
  on-primary: '#121f8b'
  primary-container: '#5e6ad2'
  on-primary-container: '#fdfaff'
  inverse-primary: '#4854bb'
  secondary: '#c6c6c8'
  on-secondary: '#2f3132'
  secondary-container: '#454749'
  on-secondary-container: '#b4b5b7'
  tertiary: '#c2c7d0'
  on-tertiary: '#2c3138'
  tertiary-container: '#6f747d'
  on-tertiary-container: '#fbfbff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000965'
  on-primary-fixed-variant: '#2e3aa2'
  secondary-fixed: '#e2e2e4'
  secondary-fixed-dim: '#c6c6c8'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454749'
  tertiary-fixed: '#dee3ec'
  tertiary-fixed-dim: '#c2c7d0'
  on-tertiary-fixed: '#171c23'
  on-tertiary-fixed-variant: '#42474f'
  background: '#131315'
  on-background: '#e5e1e3'
  surface-variant: '#353436'
  surface-border: rgba(255, 255, 255, 0.06)
  accent-glow: rgba(94, 106, 210, 0.3)
  grid-line: rgba(255, 255, 255, 0.03)
  pink-accent: '#EC4899'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-xs:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-safe: 32px
  container-max: 1440px
---

## Brand & Style

The design system is engineered for high-performance development environments, evoking a "cinematic dark" atmosphere that prioritizes focus and technical depth. The brand personality is precise, avant-garde, and immersive, targeting elite engineers and designers who value tools that feel like futuristic consoles.

The aesthetic blends **Glassmorphism** with **Minimalism**, utilizing multi-layered ambient backgrounds, subtle noise textures, and ultra-fine hairline borders. The visual narrative is built on the concept of "light emerging from the void," where high-contrast typography and glowing accents guide the user's attention against a deep, near-black expanse.

**Key Visual Principles:**
- **Layered Depth:** Use of translucency and radial gradients to create a sense of three-dimensional space.
- **Precision:** Fine technical grids and monospaced metadata for an engineered feel.
- **Focus:** High-contrast text on near-black backgrounds to reduce eye strain and emphasize code or data.

## Colors

The palette is anchored in a near-black base (`#050506`) to create infinite depth. Primary interactions and high-value highlights utilize Indigo (`#5E6AD2`), often accompanied by a soft glow to simulate light emission. 

Typography follows a strict hierarchy of visibility:
- **Primary Text:** Off-white (`#EDEDEF`) for maximum readability.
- **Muted Text:** Medium gray (`#8A8F98`) for descriptions and secondary information.
- **Borders:** Ultra-low opacity white (`rgba(255,255,255,0.06)`) to define shapes without breaking the dark immersion.

Ambient backgrounds should incorporate large, low-opacity radial gradients of the primary Indigo to create a soft "nebula" effect behind content containers.

## Typography

This design system uses **Geist** for its clean, geometric, and developer-centric profile. 

- **Headlines:** Feature tight tracking (`-0.02em` to `-0.04em`) and a subtle vertical gradient fill (from `#EDEDEF` to `#8A8F98`) to enhance the cinematic feel.
- **Body Text:** Optimized for legibility with standard tracking and a generous line height.
- **Labels/Meta:** Uses **JetBrains Mono** at small scales with wide tracking (`0.1em+`) and all-caps styling to provide a technical, "readout" aesthetic.

On mobile devices, display sizes should scale down by 20%, while body text remains constant for readability.

## Layout & Spacing

The system employs an **asymmetric Bento Grid** layout, allowing for modularity while maintaining a sophisticated, editorial rhythm. 

- **Grid Model:** A 12-column fluid grid for desktop with 24px gutters.
- **Desktop:** Containers use "safe margins" of 32px or greater to allow background gradients and noise to breathe.
- **Bento Logic:** Components should span varying column widths (e.g., a 2x2 card next to a 1x2 card) to create visual interest.
- **Technical Overlays:** A subtle 32px or 64px square background grid line pattern (`grid-line` color) should be visible in the background of the main content area to reinforce the devtool theme.

## Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and **Glassmorphism** rather than traditional heavy shadows.

- **Level 0 (Background):** Deepest layer (`#050506`) with technical grid and noise texture.
- **Level 1 (Cards):** Translucent background (e.g., `rgba(255,255,255,0.02)`) with a hairline border (`rgba(255,255,255,0.06)`).
- **Level 2 (Popovers/Modals):** Increased backdrop blur (20px+) and a secondary, slightly brighter hairline border.
- **Shadows:** Use multi-layered, low-opacity shadows. For focused elements, apply a primary-colored "glow" shadow (`accent-glow`) with a large blur radius (30px-60px) to simulate a light source underneath the component.

## Shapes

The design system uses **Soft (0.25rem)** roundedness to maintain a precise, technical appearance without feeling sharp or aggressive.

- **Default Components:** 4px (`0.25rem`) corner radius.
- **Large Cards/Containers:** 12px (`0.75rem`) corner radius to create a distinct framing effect.
- **Buttons:** Match the container roundedness (4px) for a cohesive, blocky feel.
- **Interactive States:** Use slight corner radius expansion or glow effects rather than changing the physical shape.

## Components

- **Buttons:** Solid Indigo background for primary actions; hairline borders with "hover-glow" for secondary actions. Use `label-sm` typography for button text.
- **Translucent Cards:** The core container. Must feature a `backdrop-filter: blur(10px)`, a `1px` hairline border, and a subtle inner-shadow to give the appearance of depth.
- **Input Fields:** Minimalist design with only a bottom hairline border or a very subtle background tint. Focused state should trigger the `accent-glow`.
- **Chips/Badges:** Monospace `label-xs` text inside a pill-shaped container with a low-opacity Indigo fill.
- **Lists:** Separated by `1px` hairline dividers. Hover states should use a subtle horizontal gradient highlight.
- **Branding:** No avatars. Use geometric glyphs (squares, triangles, or initials in Geist) encased in a secondary-color hairline circle for user identity.
- **Technical Accents:** Small monospaced "coordinates" or "version numbers" placed in the corners of cards to enhance the devtool aesthetic.