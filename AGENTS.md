# Repository Guidelines

## Project Structure & Module Organization

Application code lives under `src`, with routed pages in `src/app`, reusable UI primitives in `src/components/ui`, and
shared helpers in `src/lib`. Static assets and headers rules stay in `public`. Build and deployment configuration is
centralized in root files such as `next.config.ts`, `open-next.config.ts`, and `wrangler.jsonc`, while TypeScript,
Biome, and Tailwind settings sit alongside them for quick reference.

## Build, Test, and Development Commands

Install dependencies with `pnpm install` to honor the pinned workspace setup. Use `pnpm dev` for the Turbopack
development server, `pnpm build` to produce a production bundle, and `pnpm start` to serve the compiled output. Run
`pnpm preview` to emulate the Cloudflare deployment locally, and prefer `pnpm deploy` or `pnpm upload` for staging and
production pushes. Keep the codebase healthy with `pnpm lint`, `pnpm format`, and regenerate Worker bindings via
`pnpm cf-typegen`.

## Coding Style & Naming Conventions

The project targets Node 22 and modern Next.js with TypeScript. Follow Biome defaults (two-space indentation, single
quotes in TS/JS) and let tailored lint fixes guide adjustments. Keep React components and files in PascalCase (
`Button.tsx`), hook-like utilities in camelCase, and CSS modules or global styles in kebab-case. Tailwind utilities may
be composed via `clsx` or `tailwind-merge`; favor semantic component variants over raw class strings when possible.

## Testing Guidelines

No dedicated test runner ships today, so add coverage thoughtfully as you extend the template. Co-locate component tests
near their sources or under a `src/__tests__` folder, and select tooling (e.g., Vitest with React Testing Library) that
runs cleanly inside the Cloudflare Workers target. Ensure new tests integrate with `pnpm lint` and document any setup
changes in this guide.

## Commit & Pull Request Guidelines

Commits follow Conventional Commit syntax (`type(scope): summary`) to support the git-cliff release pipeline. Reach for
`feat`, `fix`, `chore`, `docs`, `style`, or `test` and keep bodies concise. When opening a pull request, supply a clear
summary, list verification steps (commands, screenshots for UI tweaks), link related issues, and flag any deployment or
environment changes. Avoid bundling unrelated work; small, focused PRs review faster.

## Security & Deployment Notes

Cloudflare environment bindings are defined in `cloudflare-env.d.ts`; never commit actual secrets or API keys. Update
`wrangler.jsonc` when new bindings or routes are required, and validate changes with `pnpm preview` before promoting
them. For external dependencies, rely on `pnpm up --interactive` to review upgrades and run lint checks afterward.
