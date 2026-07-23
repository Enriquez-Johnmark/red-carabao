---
name: Red Carabao
description: Red-forward cinematic field notes for purposeful Coron expeditions.
colors:
  canvas: '#fff8eb'
  surface: '#f5f0df'
  dune: '#e6d7b5'
  paper: '#fffdf5'
  coral-wordmark: '#9f2f33'
  coral-pressed: '#7e2428'
  deep-tide: '#164e42'
  lagoon: '#315b50'
  sun: '#e2b95b'
  sun-soft: '#f3d894'
  sea-foam: '#c6d5c7'
  muted-ink: '#49635b'
  border: '#c9b995'
  on-dark: '#fff8eb'
  on-image-muted: '#eef0df'
  header-surface: 'rgba(255, 248, 235, .96)'
  hero-shade-start: 'rgba(8, 49, 42, .58)'
  hero-shade-mid: 'rgba(8, 49, 42, .25)'
  hero-shade-end: 'rgba(8, 49, 42, .16)'
  hero-shade-mobile-start: 'rgba(8, 49, 42, .12)'
  hero-shade-mobile-end: 'rgba(8, 49, 42, .63)'
typography:
  display:
    fontFamily: 'Afacad, Arial, sans-serif'
    fontWeight: 600
    lineHeight: 0.94
    letterSpacing: '-0.035em'
  body:
    fontFamily: 'Figtree, Arial, sans-serif'
    fontWeight: 400
    lineHeight: 1.65
  accent:
    fontFamily: 'Kaushan Script, cursive'
    usage: 'Sparing field-note marks only; never navigation or body copy.'
rounded:
  micro: '4px'
  focus: '6px'
  compact: '8px'
  card: '12px'
  image: '14px'
  panel: '16px'
  control: '999px'
spacing:
  compact: '16px'
  section: '96px'
components:
  button-primary:
    backgroundColor: '{colors.coral-wordmark}'
    textColor: '{colors.salt}'
    rounded: '{rounded.control}'
    padding: '12px 18px'
---

# Design System: Red Carabao

## Overview

**Creative North Star: "The Cinematic Island Field Note"**

The first view is a real moving Coron moment. Red Carabao coral directs action and editorial emphasis; sun-washed paper and deep tide make room for landscape, hosts, food, and the proof of actual time on Coron Island. It is warm and social, never party-tour loud or generic-resort precious.

## Colors

Canvas is the warm salt-paper base; Surface is the reading field; Dune appears only in selected sun-washed editorial sections. Deep Tide carries immersive and mission-led sections. Coral Wordmark is the decisive brand/action color, never a wall-to-wall background.

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
