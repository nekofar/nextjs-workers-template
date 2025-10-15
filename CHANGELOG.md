## [1.0.0-alpha.5] - 2025-10-15

### ⚙️ Miscellaneous Tasks

- *(github)* Update release workflow step structure
## [1.0.0-alpha.4] - 2025-10-15

### ⚙️ Miscellaneous Tasks

- *(github)* Group react dependencies in dependabot config
- *(deps)* Bump actions/checkout from 4.2.2 to 5.0.0 (#4)
- *(deps)* Bump softprops/action-gh-release from 2.0.5 to 2.4.1 (#5)
- *(deps)* Bump actions/setup-node from 4.1.0 to 6.0.0 (#6)
- *(github)* Add wrangler to dependabot config
- *(github)* Update release workflow for improved automation
## [1.0.0-alpha.3] - 2025-10-15

### 🚀 Features

- *(accessibility)* Add `role` and `aria-level` to card titles

### 🐛 Bug Fixes

- *(home)* Make hero title an accessible level-2 heading

### 📚 Documentation

- *(license)* Add Apache 2.0 license
- *(agents)* Add project guidelines to `AGENTS.md`
- *(readme)* Add template overview and usage steps
- *(agents)* Update repository guidelines for clarity
- *(guidelines)* Refine contributor practices
- *(agents)* Clarify shadcn/ui component editing guidelines
- *(testing)* Update testing guidelines for clarity

### 🎨 Styling

- *(config)* Fix indentation in `vitest` configuration

### 🧪 Testing

- Enable jest-dom matchers in Vitest setup
- Refine next/image mock to strip Next-specific props (e.g., priority)
- Add page and button component tests to repository
- *(home)* Tolerate multiple matches in quick links by using getAllBy* queries
- *(utils)* Add tests for `cn` utility function
- *(config)* Add Playwright configuration for tests
- *(playwright)* Enable `baseURL` for test actions
- *(playwright)* Update test runner configuration
- *(playwright)* Configure web server for testing
- *(playwright)* Make `baseURL` configurable via env
- *(playwright)* Remove `webkit` browser configuration
- *(scripts)* Add Playwright test commands
- *(playwright)* Add example spec for external site
- *(playwright)* Add e2e tests for info card links
- *(playwright)* Add e2e tests for home page
- *(playwright)* Add meta spec for document basics
- *(playwright)* Add e2e tests for UI interactions
- *(playwright)* Restructure docs smoke tests (#1)
- *(e2e)* Refactor home page flow (#2)
- *(e2e)* Share home navigation setup (#3)
- *(playwright)* Update test directory and matching pattern
- *(vitest)* Expand `include` pattern for unit tests
- *(e2e)* Move example tests to `e2e` folder

### ⚙️ Miscellaneous Tasks

- *(config)* Add `.editorconfig` for consistent formatting
- *(scripts)* Add `test` script for running tests
- *(config)* Add `vitest` configuration
- *(scripts)* Update `test` script to pass with no tests
- *(config)* Add test setup file for `vitest`
- *(ci)* Skip Biome on ignored src/components/ui files in lint-staged to prevent false failures
- *(gitignore)* Update ignore rules to include Playwright files
- *(playwright)* Add GitHub Actions workflow for Playwright tests
- *(github)* Run playwright on gitflow branches
- *(github)* Add issue templates for feature requests and bugs
- *(github)* Remove Playwright workflow
- *(github)* Add dependabot configuration
- *(github)* Add funding configuration
- *(github)* Add stale workflow configuration
- *(github)* Add CODEOWNERS file
- *(github)* Add multi-step CI pipeline
- *(github)* Pin workflow action versions
- *(github)* Use `pnpm/action-setup` in workflows
- *(github)* Use `node-version-file` in workflows
- *(github)* Add Git Flow workflow
- *(github)* Add template cleanup workflow
## [1.0.0-alpha.2] - 2025-10-15

### 🚀 Features

- *(utils)* Add `cn` utility for class name merging
- *(ui)* Add `Button` component with variants and sizes
- *(ui)* Add `Card` component with subcomponents
- *(ui)* Add `Badge` component with variants
- *(app)* Revamp home page layout with new UI components
- *(styles)* Update global styles with enhanced variables
- *(app)* Add `DM_Sans` font to layout

### 🎨 Styling

- *(globals)* Enhance theme and color variables
- *(config)* Enforce semicolons in JavaScript formatting
- *(app)* Format JSX with consistent indentation
- *(app)* Reorder font imports for consistency
- *(app)* Reorder imports for improved readability

### ⚙️ Miscellaneous Tasks

- *(config)* Update file includes in biome config
- *(config)* Add `lint-staged` configuration
- *(scripts)* Add `prepare` script for husky setup
- *(hooks)* Add `pre-commit` hook with `lint-staged`
- *(config)* Update `lint-staged` export style
## [1.0.0-alpha.1] - 2025-10-15

### ⚙️ Miscellaneous Tasks

- *(config)* Update project name in `wrangler.jsonc`
- *(config)* Specify package manager as `pnpm`
- *(config)* Add `engines` field for Node.js support
## [1.0.0-alpha.0] - 2025-10-15

### 📚 Documentation

- *(readme)* Remove default README content

### ⚙️ Miscellaneous Tasks

- *(build)* Configure pnpm workspace settings
- *(config)* Add `wrangler.jsonc` for Cloudflare Workers setup
- *(config)* Add `open-next.config.ts` for Cloudflare setup
- *(config)* Add `.dev.vars.example` for environment setup
- *(config)* Add `.env.example` for environment setup
- *(scripts)* Add Cloudflare deployment commands
- *(config)* Add cache headers for static assets
- *(gitignore)* Update ignore rules for wrangler and open-next
- *(config)* Initialize OpenNext for Cloudflare in dev mode
- *(scripts)* Update `cf-typegen` script for wrangler types
- *(types)* Add `cloudflare-env.d.ts` for type definitions
- *(config)* Update `tsconfig` with Cloudflare types
- *(config)* Add `git-cliff` configuration file
