Repository Guidelines
=====================

## Project Structure & Module Organization
- Application code lives under `src`, with Next.js routes in `src/app`, shared UI primitives in `src/components/ui`, and helpers in `src/lib`.
- Place co-located tests near their subjects or in `tests/`; keep fixtures small and deterministic.
- Static assets and headers rules belong in `public`; configuration stays at the repo root (`next.config.ts`, `open-next.config.ts`, `wrangler.jsonc`, Tailwind/Biome configs).

## Build, Test, and Development Commands
- `pnpm install`: install workspace-pinned dependencies.
- `pnpm dev`: run the Turbopack development server.
- `pnpm build`: produce the production bundle for Workers.
- `pnpm start`: serve the compiled output locally.
- `pnpm preview`: emulate the Cloudflare deployment.
- `pnpm deploy` / `pnpm upload`: push to staging or production; confirm environment bindings first.
- `pnpm lint`, `pnpm format`: enforce Biome rules and auto-fix where possible.
- `pnpm cf-typegen`: regenerate Cloudflare binding types; run after updating Worker environments.

## Coding Style & Naming Conventions
- Target Node 22 and modern Next.js with TypeScript.
- Follow Biome defaults: two-space indentation, single quotes in TS/JS, trailing commas where valid.
- Prefer kebab-case filenames (`my-component.tsx`), while component exports stay PascalCase and hooks camelCase (`useThing`); styles remain kebab-case when using CSS modules.
- Reuse shared helpers and exported types in `src/lib` to keep implementations fully typed; avoid `any` unless there's a documented contract gap.
- Use Zod for client-side validation and parsing; colocate schemas with the feature or consolidate them under `src/lib/validation`.
- Lean on Remeda utilities (e.g., `isEqual`, `isNullish`) instead of crafting ad-hoc helpers or using `lodash`.
- Add shadcn/ui primitives via the generator (`pnpm shadcn add <component>`); never paste copies manually.
- **Never edit shadcn/ui components** in `src/components/ui` directly. These files are registry-managed and must remain
  untouched. If you need to modify behavior, wrap the component or extend it in a separate file. If you need an updated
  version, re-add it using `pnpm shadcn add <component>` to sync with the latest registry definition.
- Favor semantic Tailwind variants via `clsx` or `tailwind-merge` instead of raw utility strings.

## Testing Guidelines
- No bundled runner yet—introduce tests with Vitest + React Testing Library or similar that run in the Workers context.
- Name test files `*.test.ts(x)`; colocate them next to the source or place them in a root-level `tests` directory.
- Ensure new test scripts integrate with `pnpm lint`; document additional setup in this file if added.

## Commit & Pull Request Guidelines
- Use Conventional Commits (`feat`, `fix`, `chore`, `docs`, `style`, `test`): e.g., `feat(api): add worker handler`.
- Limit commits to related changes; prefer focused PRs.
- PRs should include a concise summary, verification steps (commands run, screenshots for UI changes), linked issues, and call out deployment or env updates.

## Security & Deployment Notes
- Generate environment bindings via the script in `package.json` (e.g., `pnpm cf-typegen`) instead of editing `cloudflare-env.d.ts` directly; never commit live secrets.
- Update `wrangler.jsonc` when adding bindings or routes and validate with `pnpm preview`.
- Review dependency upgrades via `pnpm up --interactive` followed by `pnpm lint`.
