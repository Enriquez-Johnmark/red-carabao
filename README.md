# Red Carabao

Static marketing prototype for **Red Carabao**, a social enterprise in Coron, Palawan, and its one-day expedition **Island Crash**. The site introduces the experience, the Tagbanua host communities behind it, and the mission that travel supports.

The prototype is client-ready and intentionally static: it has no booking, payment, form submission, or data storage. The "Apply for an expedition" call to action opens a notice that future applications are not yet open.

## Routes

| Path            | Page                                               |
| --------------- | -------------------------------------------------- |
| `/`             | Home: full-screen Coron video hero, mission, press |
| `/island-crash` | Island Crash: itinerary, camp, and shared BBQ      |
| `/about-us`     | About Us: the social enterprise and its mission    |
| `/our-team`     | Our Team: the people behind the expeditions        |

## Tech stack

- [React 19](https://react.dev) with TypeScript (strict mode)
- [Vite 8](https://vite.dev) for development and builds
- [React Router 7](https://reactrouter.com) for client-side routing
- [Tailwind CSS v4](https://tailwindcss.com) with semantic tokens in `src/styles.css`
- [shadcn/ui](https://ui.shadcn.com) primitives built on [Base UI](https://base-ui.com) (`src/components/ui`)
- [Vitest](https://vitest.dev) and Testing Library for tests
- Prettier for formatting

## Getting started

Requirements: Node.js and npm. A current LTS release is recommended.

```bash
npm ci          # install exact versions from package-lock.json
npm run dev     # start the Vite dev server
```

## Scripts

| Command                      | What it does                                                         |
| ---------------------------- | -------------------------------------------------------------------- |
| `npm run dev`                | Start the local dev server                                           |
| `npm run build`              | Type-check (`tsc -b`) and produce a production build in `dist/`      |
| `npm run preview`            | Serve the production build locally                                   |
| `npm run test`               | Run the Vitest suite once                                            |
| `npm run format`             | Format the project with Prettier                                     |
| `npm run format:check`       | Verify formatting without writing changes                            |
| `npm run check:architecture` | Enforce feature-module boundaries (see below)                        |
| `npm run design:check`       | Scan `src/` with Impeccable for design-quality issues                |
| `npm run validate`           | Run format check, architecture check, design check, tests, and build |

Run `npm run validate` before handing work over.

## Project structure

```text
src/
  App.tsx                 # route composition root
  main.tsx                # React entry point
  styles.css              # Tailwind/shadcn imports, semantic tokens, base styles
  styles/                 # global accessibility and responsive rules
  components/
    site/                 # shared shell: header, footer, layout, brand, booking dialog
    ui/                   # shadcn/ui primitives
  features/
    about/                # About Us page
    island-crash/         # Island Crash page
    landing/              # Home page and cinematic hero
    team/                 # Our Team page
  assets/                 # logo, photography, and press marks
  lib/utils.ts            # shared helpers (cn)
  test/setup.ts           # Vitest setup
public/media/             # Coron video served as a static asset
scripts/check-architecture.mjs
```

Each feature in `src/features/<feature>/` exposes its public API through `index.ts`, and it keeps its own components, content, styles, and tests. Code outside a feature imports only from `@/features/<feature>`. Features may import shared code, but never each other. `scripts/check-architecture.mjs` enforces these rules.

## Project guidance

This repository includes instructions for AI coding agents and contributors. Read these before making changes:

- [`AGENTS.md`](AGENTS.md): always-on conventions for architecture, styling, and quality
- [`PRODUCT.md`](PRODUCT.md): product purpose, verified facts, and content constraints
- [`DESIGN.md`](DESIGN.md): the approved visual system (colors, typography, layout, components)
- [`docs/architecture/bulletproof-react.md`](docs/architecture/bulletproof-react.md): module boundaries and feature layout
- [`docs/design/impeccable-workflow.md`](docs/design/impeccable-workflow.md): design-review workflow
- [`docs/agent-setup.md`](docs/agent-setup.md): project skills and their sources

Project skills are vendored in `.agents/skills/`. Their upstream attribution is listed in `docs/agent-setup.md`.

## Content rules

The copy and imagery must stay traceable to verified Red Carabao material. Do not add invented dates, prices, availability, testimonials, biographies, or impact metrics. Keep the official wordmark and public Red Carabao photography unaltered.

## Deployment

The site is a single-page app. `vercel.json` rewrites all paths to `index.html`, so deep links such as `/island-crash` resolve on Vercel.

For a subpath deployment, set `VITE_BASE_PATH` at build time (for example `VITE_BASE_PATH=/red-carabao/ npm run build`). The router basename and asset paths follow this value.

## Accessibility

The site targets semantic landmarks and headings, descriptive image alternatives, visible keyboard focus, sufficient color contrast, responsive layouts from phone to desktop, and reduced-motion support.
