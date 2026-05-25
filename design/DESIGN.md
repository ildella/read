---
version: alpha
name: Frankie Read Design System
description: Calm editorial landing system for a reading-and-listening app.
colors:
  background: "#F6EFE3"
  backgroundDeep: "#EADCC7"
  surface: "#FFF7E8"
  text: "#2B241D"
  muted: "#766856"
  faint: "#9D8E78"
  border: "#D7C7AD"
  accent: "#A8582D"
  accentDark: "#74401F"
  gold: "#D3A14E"
  sage: "#69705A"
typography:
  display:
    fontFamily: "Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "88px"
    fontWeight: 750
    lineHeight: 0.89
  body:
    fontFamily: "Iowan Old Style, Palatino Linotype, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
rounded:
  sm: "18px"
  md: "28px"
  lg: "38px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "14px"
  md: "24px"
  lg: "44px"
  xl: "78px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFF8E9"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  button-secondary:
    backgroundColor: "rgba(255,248,234,.58)"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    padding: "14px 22px"
  editorial-card:
    backgroundColor: "#FFF7E8"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "32px"
---

## Overview
Frankie Read should feel like a quiet reading room rather than a SaaS dashboard. The page uses warm paper tones, restrained terracotta accents, large literary typography, and generous whitespace to communicate calm confidence.

## Colors
- Backgrounds are cream and parchment, never pure white.
- Primary text is a warm near-black brown.
- Accent color is terracotta for CTAs and small emphasis.
- Gold is reserved for warmth and subtle attention cues.
- Sage supports calm secondary labels.

## Typography
- Display typography is literary, large, and tightly set.
- Body copy should read like an essay: generous line-height, no cramped measures.
- Avoid corporate sans-serifs and startup-blue UI cues.

## Layout
- Sections breathe with large vertical rhythm.
- Prefer editorial split layouts, margin notes, and asymmetric compositions.
- Avoid dense feature grids; group only what reinforces the product ritual.

## Elevation & Depth
Use soft warm shadows and translucent paper surfaces. Depth should feel like layered pages, not floating software cards.

## Shapes
Rounded forms are generous but not bubbly. Pill buttons, large soft cards, and organic hero shapes are acceptable when restrained.

## Components
- Primary CTA: terracotta pill, warm text, soft shadow.
- Secondary CTA: translucent paper pill with warm border.
- Step cards: page-like panels separated by hairline borders.
- FAQ details: quiet disclosure rows with strong keyboard focus.

## Do's and Don'ts
- Do use calm, direct copy about finishing saved reading.
- Do use inline SVG, typography, and texture instead of screenshots.
- Do preserve the offline-first and reader-first positioning.
- Don't use purple gradients, chat bubbles, robots, fake testimonials, or hard-sell language.
- Do explain app access in plain-language terms: web app for phone/desktop plus a browser extension for saving.

- Don't add SaaS dashboards, fake product screenshots, or inflated social proof.
