# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev          # Start local dev server at http://localhost:4321
npm run build        # Type-check and build production site to ./.next/
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run prettier     # Check formatting with Prettier
npm run test         # Run Playwright visual regression tests
npm run test:update  # Update Playwright screenshot baselines
```

The pre-commit hook runs `prettier --write` on all files and `eslint --fix` on `.{ts,tsx}` files via lint-staged.

## Architecture

This is a Next.js 16 App Router site deployed to Vercel, built with React, Tailwind CSS, and Font Awesome icons.

**Single source of truth for resume content:** All personal data lives in `src/data/profile.ts`, which exports a typed `profile` object. This is the only file that needs editing to update the resume content.

**Data flow:**

1. `src/data/profile.ts` — defines TypeScript interfaces (`Profile`, `Experience`, `Education`, `Skill`, `Certification`) and the `profile` data object
2. `app/page.tsx` — destructures `profile` and passes data as props to section components

**Component hierarchy:**

- `app/layout.tsx` (HTML shell) → `PrintableLayout` (A4-style page container) → `VStack` → section components
- Section components: `ProfileSection`, `WorkExperienceSection`, `EducationSection`, `SkillsSection`, `CertificationsSection`
- All components in `src/components/`: `Section`, `IconLink`, `PrintableLayout`, `VStack`, `HStack`, `Badge`, `Avatar`, `Text`, `Title`, `List`

**Path aliases** (defined in `tsconfig.json`):

- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`
- `@data/*` → `src/data/*`
- `@/*` → `./*`

**Experience type discrimination:** `Experience` is a union of `SinglePositionExperience` (has `activities[]`) and `MultiPositionExperience` (has `positions[]` where each position has its own `activities[]`). Use `isSinglePositionExperience()` / `isMultiPositionExperience()` type guards from `profile.ts`.

**Testing:** Visual regression only — Playwright takes a full-page screenshot of `/` and compares it against `tests/pages/index.spec.ts-snapshots/index-chromium-linux.png`. Run `test:update` after intentional visual changes.
