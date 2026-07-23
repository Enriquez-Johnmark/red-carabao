# Team AI conventions

This repository versions the project instructions, architecture guide, design context, and skill snapshots so every teammate and Codex session works from the same standards.

## What Codex uses automatically

- `AGENTS.md` at the repository root is the mandatory project instruction file.
- `.agents/skills/*` contains the project-local skills Codex discovers for this workspace.
- `PRODUCT.md` records durable product facts and constraints.
- `DESIGN.md` records the approved Red Carabao visual system.

Open the repository root as the Codex workspace. Read `AGENTS.md` before working; Codex should then select the relevant project skill automatically. Do not copy these rules into personal global instructions, where they could affect unrelated projects.

## Required project checks

Run the relevant checks before handing work over:

```bash
npm run check:architecture
npm run design:check
npm run test
npm run build
```

`npm run validate` runs all four in the required order.

## Updating conventions and skills

- Change `AGENTS.md`, `PRODUCT.md`, `DESIGN.md`, and `docs/architecture/bulletproof-react.md` through normal review, because they are team policy.
- Preserve upstream attribution and license files in `.agents/skills/`.
- Update a vendored third-party skill deliberately, review its diff and license, then record the source in the pull request.
- Keep personal Codex configuration in `.codex/`, Impeccable runtime state in `.impeccable/`, and temporary brainstorming artifacts in `.superpowers/`; these stay ignored.

## Skill provenance

| Skill | Source or ownership |
| --- | --- |
| `bulletproof-react` | Red Carabao project architecture adaptation based on [Bulletproof React](https://github.com/alan2207/bulletproof-react) |
| `frontend-design` | [Anthropic frontend-design skill](https://www.skills.sh/anthropics/skills/frontend-design) |
| `vercel-react-best-practices` | [Vercel Labs agent skills](https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) |
| `vercel-composition-patterns` | [Vercel Labs agent skills](https://www.skills.sh/vercel-labs/agent-skills/vercel-composition-patterns) |
| `web-design-guidelines` | [Vercel Labs agent skills](https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines) |
| `shadcn` | [shadcn/ui skill](https://www.skills.sh/shadcn/ui/shadcn) |
| `tailwind-design-system` | [Tailwind design-system skill](https://www.skills.sh/wshobson/agents/tailwind-design-system) |
| `brainstorming` | [Superpowers brainstorming skill](https://www.skills.sh/obra/superpowers/brainstorming) |
| `impeccable` | [Impeccable](https://impeccable.style/) project skill |
