# Bulletproof React architecture

This project applies [Bulletproof React](https://github.com/alan2207/bulletproof-react) as an architectural guide, not as a template to copy wholesale. The aim is understandable feature boundaries that remain proportionate to this small Vite application.

## Source layout

```text
src/
  App.tsx                         # composition root until src/app is needed
  components/                     # shared, reusable UI only
  features/
    <feature>/
      index.ts                    # the feature's deliberate public API
      components/                 # feature-private components, when needed
      hooks/                      # feature-private hooks, when needed
      data.ts                     # feature-specific static content
      <feature>.tsx
      <feature>.test.tsx
  hooks/                           # shared hooks only
  lib/                             # shared integrations and utilities
  types/                           # shared domain types only
  utils/                           # shared pure helpers only
```

Create a folder only when it serves a real need. A small feature may keep its files flat, as `landing` currently does.

## Dependency rules

1. Shared modules never import a feature.
2. A feature may import shared modules and its own files.
3. A feature never imports another feature, directly or indirectly.
4. Composition roots import a feature through `@/features/<feature>` only. Never import a feature's internal file from outside it.
5. Export only the feature's intended public components, types, and functions from its `index.ts`.

`npm run check:architecture` enforces the feature-boundary and public-import rules. If a necessary exception arises, redesign first; document a narrowly-scoped exception in this file only after it is agreed.

## Implementation rules

- Keep related code and tests together; avoid organizing product code by technical layer alone.
- Use strict TypeScript and `@/` imports for cross-directory shared code. Prefer relative imports inside a feature.
- Keep UI state local to the smallest component subtree that owns it. Introduce context only for a real shared concern. Introduce a server-state solution only when a real remote-data requirement exists.
- Avoid speculative repositories, API clients, global stores, and generic wrappers.
- Prefer simple, explicit public APIs and composition over switches of unrelated boolean props.

## Change checklist

- Does this belong in an existing feature or a new product feature?
- Is it feature-private, or truly reusable shared code?
- Does the feature export a small public API from `index.ts`?
- Are imports flowing only from shared to feature to composition root?
- Did `npm run check:architecture` pass?
