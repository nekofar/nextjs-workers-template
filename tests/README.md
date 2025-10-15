# Tests

This project keeps all unit-level specs under `tests/unit` using a directory structure that mirrors the source modules in `src`.

For example:

- `src/app/page.tsx` ↔ `tests/unit/app/page.test.tsx`
- `src/lib/utils.ts` ↔ `tests/unit/lib/utils.test.ts`
- `src/components/ui/button.tsx` ↔ `tests/unit/components/ui/button.test.tsx`

When adding a new unit test, place it in the matching folder inside `tests/unit` and import the target module with the `@/` alias. End-to-end specs remain under `tests/e2e`.
