# Impeccable workflow

The project skill is versioned at `.agents/skills/impeccable`. Product and design context in `PRODUCT.md` and `DESIGN.md` are shared with the team; each developer's runtime hook/configuration remains local and excluded from Git.

## First-time setup

1. Run `npx impeccable check` to check for updates.
2. Reload Codex, then use `/impeccable init` to refresh durable product context in `PRODUCT.md` when product facts change.
3. Use `/impeccable document` after a material design-system change to refresh `DESIGN.md` from the implementation.
4. Enable or inspect the automatic hook with `/impeccable hooks on` or `/impeccable hooks status`. Codex may ask for local hook approval the first time.

## Required design flow

1. `/impeccable shape <surface>` before a new visual surface or redesign.
2. Build only after the design direction is approved.
3. `/impeccable critique <target>` to identify hierarchy, UX, and visual issues.
4. `/impeccable polish <target>` for the final implementation pass.
5. `/impeccable audit <target>` before shipping.
6. Run `npm run design:check` and resolve genuine detector findings instead of adding broad ignores.

## Live Mode

With the local Vite server running, use `/impeccable live` to choose an element in the browser, review variants, and accept only the selected variant into source. Use it for the later full landing-page redesign; do not use it to invent facts or replace verified Red Carabao content.

## Updates

Run `npx impeccable update` from the project root, then restart Codex. Review changed local skill and hook files before continuing work.
