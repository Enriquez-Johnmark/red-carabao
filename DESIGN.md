---
name: Red Carabao
description: Red-forward cinematic field notes for purposeful Coron expeditions.
colors:
  coral-wordmark: "#9f2f33"
  deep-tide: "#174e42"
  lagoon: "#315b50"
  sand: "#f5f0df"
  sun-wash: "#eadbba"
  salt: "#fffaf0"
  paper-light: "#f9f4e8"
  warm-white: "#fff8e9"
  coral-light: "#e56045"
  sun: "#f4c968"
  sea-foam: "#eef0df"
  moss-text: "#4e665e"
  eucalyptus: "#456158"
  sea-glass: "#bed3c8"
  lagoon-light: "#b9d2c1"
  card-sand: "#faf4e7"
  card-ink: "#21463d"
  muted-sea: "#62776d"
  badge-sun: "#f3cf70"
  copy-sea: "#587067"
  copy-forest: "#52655c"
  copy-lagoon: "#5c7067"
  copy-muted: "#5b7067"
  footer-muted: "#6d7c74"
  sand-border: "#cfc8b5"
  soft-border: "#cbc5b3"
  dialog-border: "#d9d0bc"
  dialog-sand: "#fbf6e9"
  mobile-border: "#dfd8c7"
  coral-hover: "#85282c"
  rice-sun: "#ffd38c"
  rice-paper: "#fff0de"
  ink-12: "rgba(18,62,54,.12)"
  ink-15: "rgba(18,62,54,.15)"
  ink-18: "rgba(18,62,54,.18)"
  cinematic-overlay-strong: "rgba(5,29,25,.82)"
  cinematic-overlay-mid: "rgba(5,29,25,.43)"
  cinematic-overlay-light: "rgba(5,29,25,.16)"
  cinematic-overlay-hero: "rgba(5,29,25,.84)"
  cinematic-overlay-mobile-start: "rgba(5,29,25,.2)"
  cinematic-overlay-mobile-end: "rgba(5,29,25,.83)"
  tide-overlay-strong: "rgba(15, 51, 44, .82)"
  tide-overlay-soft: "rgba(15, 51, 44, .25)"
  hero-overlay-strong: "rgba(20, 51, 44, .77)"
  hero-overlay-mid: "rgba(20, 51, 44, .39)"
  hero-overlay-light: "rgba(20, 51, 44, .12)"
  white-10: "rgba(255, 255, 255, .1)"
  white-12: "rgba(255, 255, 255, .12)"
  white-35: "rgba(255, 255, 255, .35)"
  white-55: "rgba(255, 255, 255, .55)"
typography:
  display:
    fontFamily: "Afacad, Arial, sans-serif"
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Figtree, Arial, sans-serif"
    fontWeight: 400
    lineHeight: 1.65
  accent:
    fontFamily: "Kaushan Script, cursive"
    usage: "Sparing field-note marks only; never navigation or body copy."
rounded:
  micro: "4px"
  focus: "6px"
  compact: "8px"
  card: "12px"
  image: "14px"
  panel: "16px"
  control: "999px"
spacing:
  compact: "16px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.coral-wordmark}"
    textColor: "{colors.salt}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
---

# Design System: Red Carabao

## Overview

**Creative North Star: "The Cinematic Island Field Note"**

The first view is a real moving Coron moment. Red Carabao coral directs action and editorial emphasis; sun-washed paper and deep tide make room for landscape, hosts, food, and the proof of actual time on Coron Island. It is warm and social, never party-tour loud or generic-resort precious.

## Colors

Deep Tide carries immersive and mission-led sections; Sand and Salt provide sunlit reading surfaces. Coral Wordmark is the decisive brand/action color, not a wall-to-wall background.

## Typography

**Display:** Afacad, used for expressive headlines and page titles.  
**Body:** Figtree, used for reading, navigation, controls, and factual labels.  
**Accent:** Kaushan Script, reserved for a few hand-marked field-note details—not body copy, navigation, or controls.

Body copy is 17px on desktop and 16px on mobile. Navigation and buttons never fall below 14px.

## Layout

Use a cinematic video hero only on Home, then generous photography, an editorial reading measure, and responsive single-column stacking. Make more room above headings than below; treat the Island Crash itinerary as a true sequence, not a decorative card grid.

## Shapes

Cards are restrained 12px surfaces; primary actions are pill-shaped. Avoid ornamental glass, gradients, fake texture, and icon-card scaffolding.

## Components

Use existing shadcn primitives for controls, overlays, cards, and disclosure. Links are semantic links, including when styled as actions.

## Do's and Don'ts

- Do use real Red Carabao imagery and the original wordmark.
- Do use a large adaptive sticky header: transparent over the Home video, solid on scroll and interior pages.
- Do let the location and hosts lead the story.
- Do not invent operational facts or use placeholder biographies.
- Do not turn every section into a tracked all-caps eyebrow and card grid.
