# Red Carabao — Team Codex Conventions

This is the repository's always-on Codex instruction file. Follow these rules for every task. Read [the detailed architecture reference](docs/architecture/bulletproof-react.md) before changing React module boundaries, creating a feature, or reviewing architecture.

## Required workflow

- For React architecture, feature creation, refactors, module-boundary decisions, state ownership, or architectural reviews, use the local `bulletproof-react` skill.
- For visual feature work, use `brainstorming` before implementation and `frontend-design` while designing. For React implementation, apply `vercel-react-best-practices`; use `vercel-composition-patterns` when designing reusable APIs.
- For shadcn/ui work, use the `shadcn` skill and prefer installed primitives. For Tailwind tokens or reusable patterns, use `tailwind-design-system`.
- For any visual creation, redesign, typography, or UI refinement, use the project `impeccable` skill: load project context, preserve `PRODUCT.md` and `DESIGN.md`, and use its critique/polish/audit flow. Keep only runtime hook/configuration artifacts local.
- For Red Carabao page work, preserve the approved red-forward cinematic field-note system: Coron video is Home’s only moving focal point; coral directs action and editorial emphasis; the shared header is large, adaptive, and visibly accessible.
- Before declaring UI work complete, use `web-design-guidelines` to review accessibility and interface quality.

## Architecture — non-negotiable

- Organize product code by feature in `src/features/<feature>/`. Colocate its components, content, data, hooks, tests, and styles there.
- A feature exposes only its intentional public API through `src/features/<feature>/index.ts`. Code outside that feature imports only `@/features/<feature>`, never a deep feature path.
- Preserve dependency direction: `shared → features → app`. `src/components`, `src/hooks`, `src/lib`, `src/types`, and `src/utils` may be imported by features; one feature must never import another feature.
- Keep `src/app` (when introduced) as composition/wiring only. Until then, `src/App.tsx` is the composition root and follows the same rule.
- Keep state local by default. Do not add global state, API clients, server-state libraries, or an abstraction layer without a demonstrated product requirement.
- Prefer composition and explicit variants over boolean-prop proliferation. Keep public APIs typed; no `any`.
- Run `npm run check:architecture` after changing React module boundaries, and `npm run validate` before handoff.

## Stack and UI

- Build with React, TypeScript, Tailwind CSS v4, and shadcn/ui.
- Use semantic Tailwind tokens (`bg-background`, `text-foreground`, `bg-primary`) and component variants; do not use raw palette utilities for product UI. Put Tailwind v4 tokens in the global CSS `@theme` layer.
- Use `gap-*`, `size-*`, `cn()`, visible focus states, and reduced-motion-safe animation.
- Match Red Carabao's editorial travel identity; avoid generic SaaS visual patterns.

## Quality bar

- Avoid unnecessary client state, large eager dependencies, and avoidable re-renders.
- Ensure keyboard operation, focus management, semantic headings, contrast, descriptive alt text, responsive behavior, and motion preferences.
- Run relevant tests and the production build; visually inspect desktop and mobile layouts when UI changes.
