---
version: alpha
name: "Lusion Studio"
description: "Lusion is an award-winning 3D and interactive web studio whose homepage leads with a full-bleed 3D canvas hero set against a soft off-white (#f0f1fa) page background. The typographic system is built entirely on the custom typeface Aeonik at regular weight (w400), spanning from 14px UI labels up to 128px display headings. The palette is deliberately restrained. near-black (#000000) and off-white (#f0f1fa) anchor the layout, with an electric blue (#1a2ffb / #0016ec) reserved for accent moments and a neon green (#c1ff00) appearing as a footer accent. Buttons use pill-shaped (100px radius) and rounded-rect (15px–20px radius) forms. The overall feel is high-craft, motion-forward, and media-led."
colors:
  grey-blue: "#2b2e3a"
  header-blue: "#0016ec"
  neon-green: "#c1ff00"
  off-white: "#f0f1fa"
  black: "#000000"
  blue: "#1a2ffb"
  dark-white: "#e4e6ef"
  white: "#ffffff"
typography:
  display-xl:
    fontFamily: "Aeonik"
    fontSize: "128px"
    fontWeight: "400"
    lineHeight: "128px"
  display-l:
    fontFamily: "Aeonik"
    fontSize: "105px"
    fontWeight: "400"
    lineHeight: "105px"
  display-m:
    fontFamily: "Aeonik"
    fontSize: "102.4px"
    fontWeight: "400"
    lineHeight: "92.16px"
    letterSpacing: "-2.048px"
  display-s:
    fontFamily: "Aeonik"
    fontSize: "76.8px"
    fontWeight: "400"
    lineHeight: "88.32px"
  heading-xl:
    fontFamily: "Aeonik"
    fontSize: "47.25px"
    fontWeight: "400"
    lineHeight: "54.3375px"
  heading-l:
    fontFamily: "Aeonik"
    fontSize: "38.4px"
    fontWeight: "400"
    lineHeight: "44.16px"
  heading-m:
    fontFamily: "Aeonik"
    fontSize: "32px"
    fontWeight: "400"
    lineHeight: "35.2px"
  heading-s:
    fontFamily: "Aeonik"
    fontSize: "26px"
    fontWeight: "400"
    lineHeight: "26px"
  body-l:
    fontFamily: "Aeonik"
    fontSize: "19.2px"
    fontWeight: "400"
    lineHeight: "26.88px"
  body-m:
    fontFamily: "Aeonik"
    fontSize: "17.5px"
    fontWeight: "400"
    lineHeight: "20.125px"
  body-s:
    fontFamily: "Aeonik"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "18.4px"
  label-m:
    fontFamily: "Aeonik"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "16.1px"
rounded:
  radius-sm: "3px"
  radius-md: "10px"
  radius-lg: "15px"
  radius-global: "20px"
  radius-card: "18px"
  radius-pill: "100px"
  radius-pill-lg: "87.5px"
  radius-pill-xl: "74.4px"
spacing:
  space-1: "5px"
  space-2: "8.8px"
  space-3: "11.5px"
  space-4: "12.3px"
  space-5: "14px"
  space-6: "16px"
  space-7: "17.3px"
  space-8: "21px"
  space-9: "22.8px"
  space-10: "25px"
  space-11: "26px"
  space-12: "28px"
  space-13: "30px"
  space-14: "50px"
  space-15: "51.2px"
  space-16: "64px"
---

## Overview

Lusion is an award-winning 3D and interactive web studio whose homepage leads with a full-bleed 3D canvas hero set against a soft off-white (#f0f1fa) page background. The typographic system is built entirely on the custom typeface Aeonik at regular weight (w400), spanning from 14px UI labels up to 128px display headings. The palette is deliberately restrained. near-black (#000000) and off-white (#f0f1fa) anchor the layout, with an electric blue (#1a2ffb / #0016ec) reserved for accent moments and a neon green (#c1ff00) appearing as a footer accent. Buttons use pill-shaped (100px radius) and rounded-rect (15px–20px radius) forms. The overall feel is high-craft, motion-forward, and media-led.

**Signature traits:**
- Single-family weight hierarchy: Builds hierarchy from Aeonik across 2 weights rather than multiple families.
- Soft, rounded geometry: Generous corner rounding up to 100px.
- Layered elevation: Depth comes from 1 validated shadow token.

## Colors

The palette uses 8 validated color tokens across 1 theme profile. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **action-text** maps to `black`: Role "text" is grounded by usage context "Primary text, borders, button backgrounds, and link color across all zones".
- **surface-background** maps to `off-white`: Role "background" is grounded by usage context "Page background and surface fills; the dominant canvas color".
- **action-border** maps to `white`: Role "border" is grounded by usage context "Text on dark surfaces, button hover text, and border highlights".
- **action-background** maps to `grey-blue`: Role "background" is grounded by usage context "Dark button surface in header (e.g. 'LET'S TALK' button background)".

### Text Scale
- **Black** (#000000): Primary text, borders, button backgrounds, and link color across all zones. Role: text. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.1}
- **Blue** (#1a2ffb): Brand accent color used on footer links and key highlight elements. Role: text. {authored: rgb(26, 47, 251), space: rgb}

### Interactive
- **Dark White** (#e4e6ef): Subtle border and button surface variant in header. Role: border. {authored: rgb(228, 230, 239), space: rgb}
- **White** (#ffffff): Text on dark surfaces, button hover text, and border highlights. Role: border. {authored: rgb(255, 255, 255), space: rgb}

### Surface & Shadows
- **Grey Blue** (#2b2e3a): Dark button surface in header (e.g. 'LET'S TALK' button background). Role: background. {authored: rgb(43, 46, 58), space: rgb}
- **Header Blue** (#0016ec): Header background color accent, localized to header zone. Role: background. {authored: rgb(0, 22, 236), space: rgb}
- **Neon Green** (#c1ff00): Footer accent color, used sparingly for high-energy highlight moments. Role: background. {authored: rgb(193, 255, 0), space: rgb}
- **Off White** (#f0f1fa): Page background and surface fills; the dominant canvas color. Role: background. {authored: rgb(240, 241, 250), space: rgb}

## Typography

Typography uses Aeonik across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Uses Aeonik throughout for a uniform feel. Weight range spans regular, medium. Sizes range from 11.52px to 128px.

### Font Roles
- **Headline Font**: Aeonik
- **Body Font**: Aeonik

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Largest display heading, hero-scale typographic statements | Aeonik | 128px | 400 | 128px | normal | Aeonik | Extracted token |
| Large display heading variant | Aeonik | 105px | 400 | 105px | normal | Aeonik | Extracted token |
| Tracked-in display heading with negative letter-spacing for visual tightness | Aeonik | 102.4px | 400 | 92.16px | -2.048px | Aeonik | Extracted token |
| Section-level large heading | Aeonik | 76.8px | 400 | 88.32px | normal | Aeonik | Extracted token |
| Sub-section headings and project titles | Aeonik | 47.25px | 400 | 54.3375px | normal | Aeonik | Extracted token |
| Primary hero tagline and prominent section headings (highest frequency: 692 hits) | Aeonik | 38.4px | 400 | 44.16px | normal | Aeonik | Extracted token |
| Mid-level section headings | Aeonik | 32px | 400 | 35.2px | normal | Aeonik | Extracted token |
| Small headings and callout labels | Aeonik | 26px | 400 | 26px | normal | Aeonik | Extracted token |
| Large body text and introductory paragraphs | Aeonik | 19.2px | 400 | 26.88px | normal | Aeonik | Extracted token |
| Standard body copy | Aeonik | 17.5px | 400 | 20.125px | normal | Aeonik | Extracted token |
| UI body text, button labels, navigation items | Aeonik | 16px | 400 | 18.4px | normal | Aeonik | Extracted token |
| Secondary labels, captions, and metadata | Aeonik | 14px | 400 | 16.1px | normal | Aeonik | Extracted token |

## Layout

Responsive system uses 4 breakpoint tier(s): mobile, tablet, desktop, wide.

This system uses a 16px base grid with scale values 5, 8.8, 11.5, 12.3, 14, 16, 17.3, 21, 22.8, 25, 26, 28, 30, 50, 51.2, 64, 80.

### Responsive Strategy
- **mobile (380-1200px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **tablet (>= 1000px)**: Increase spacing and column structure for medium-width viewports.
- **desktop (Unknown)**: Expand layout density and horizontal composition for wide viewports.
- **wide (>= 1600px)**: Stretch composition with generous gutters and wider layout spans.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| space-1 | 5px | 5 | Extracted spacing token |
| space-2 | 8.8px | 8.8 | Extracted spacing token |
| space-3 | 11.5px | 11.5 | Extracted spacing token |
| space-4 | 12.3px | 12.3 | Extracted spacing token |
| space-5 | 14px | 14 | Extracted spacing token |
| space-6 | 16px | 16 | Extracted spacing token |
| space-7 | 17.3px | 17.3 | Extracted spacing token |
| space-8 | 21px | 21 | Extracted spacing token |
| space-9 | 22.8px | 22.8 | Extracted spacing token |
| space-10 | 25px | 25 | Extracted spacing token |
| space-11 | 26px | 26 | Extracted spacing token |
| space-12 | 28px | 28 | Extracted spacing token |
| space-13 | 30px | 30 | Extracted spacing token |
| space-14 | 50px | 50 | Extracted spacing token |
| space-15 | 51.2px | 51.2 | Extracted spacing token |
| space-16 | 64px | 64 | Extracted spacing token |
| space-17 | 80px | 80 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| shadow-card | 2 | 0px 6px 10px 0px rgba(0, 0, 0, 0.04) |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | outline-color | rgb(0, 0, 0) ; rgb(255, 255, 255) ; rgb(26, 47, 251) |
| Light | outline-width | 3px ; 0px |
| Light | outline-offset | 0px |
| Light | transform | matrix(1, 0, 0, 1, 0, -706.5) ; matrix(1, 0, 0, 1, 0, 0) ; matrix(1, 0, 0, 1, 0, 26.875) |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| radius-sm | 3px | 3 | Subtle corner |
| radius-md | 10px | 10 | Control corner |
| radius-lg | 15px | 15 | Card corner |
| radius-card | 18px | 18 | Card corner |
| radius-global | 20px | 20 | Card corner |
| radius-pill-xl | 74.4px | 74.4 | Large surface corner |
| radius-pill-lg | 87.5px | 87.5 | Large surface corner |
| radius-pill | 100px | 100 | Large surface corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-sm | 3px | px |
| radius-md | 10px | px |
| radius-lg | 15px | px |
| radius-global | 20px | px |
| radius-card | 18px | px |
| radius-pill | 100px | px |
| radius-pill-lg | 87.5px | px |
| radius-pill-xl | 74.4px | px |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Single-family weight hierarchy, Soft, rounded geometry, Layered elevation without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 380px | (max-width: 380px) |
| Mobile | <= 400px | (max-width: 400px) |
| Mobile | <= 480px | (max-width: 480px) |
| Mobile | <= 560px | (max-width: 560px) |
| Breakpoint 5 | <= 812px | (max-width: 812px) |
| Breakpoint 6 | <= 1000px | (max-width: 1000px) |
| Breakpoint 7 | <= 1200px | (max-width: 1200px) |
| Mobile | 380-812px | (max-height: 1080px) and (max-width: 812px) and (min-width: 380px) |
| Tablet | >= 1000px | (min-width: 1000px) and (hover: hover) |
| Desktop | >= 1600px | (min-width: 1600px) |
| Breakpoint 11 | Unknown | (hover: hover) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
