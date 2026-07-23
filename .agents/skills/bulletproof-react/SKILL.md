---
name: bulletproof-react
description: Apply and enforce Red Carabao's Bulletproof React architecture. Use when creating, reviewing, refactoring, or reorganizing React features; deciding module boundaries, imports, public feature APIs, state ownership, or shared-vs-feature code; and before completing an architectural change.
---

# Bulletproof React

## Overview

Use this skill to keep the Vite application feature-oriented, with deliberate public APIs and one-way dependencies. It turns the project's architecture policy into a repeatable implementation and review workflow.

## Required reference

Read [`../../../docs/architecture/bulletproof-react.md`](../../../docs/architecture/bulletproof-react.md) before acting. It is the authoritative, project-specific architecture reference.

## Workflow

1. Identify the product feature that owns the change. Use an existing feature when the user-visible capability belongs there; otherwise create `src/features/<feature>/`.
2. Decide whether each module is feature-private or genuinely shared. Do not promote code to `src/components`, `src/lib`, `src/hooks`, `src/types`, or `src/utils` until another feature needs it.
3. Keep feature internals colocated and expose only intentional imports from `src/features/<feature>/index.ts`.
4. Check every import boundary: shared code does not import features; features do not import each other; composition code imports only a feature's `@/features/<feature>` public API.
5. Keep state at the smallest owning subtree. Do not add global state, API layers, or data-fetching libraries without a concrete current requirement.
6. Run `npm run check:architecture`. Resolve failures by changing the design rather than bypassing the check. Run relevant tests and the build before handoff.

## Review checklist

- Is the code owned by a clear feature?
- Does the feature have a small `index.ts` public API?
- Are there no cross-feature or deep-feature imports?
- Are shared modules truly shared and independent of features?
- Is state local by default and the public API explicit and typed?
- Did the architectural validation pass?

## Exceptions

Do not create exemptions casually. When a boundary appears inconvenient, first move the code to the owning feature or extract a feature-independent shared abstraction. Document an approved, narrowly-scoped exception in the architecture reference if one is unavoidable.
