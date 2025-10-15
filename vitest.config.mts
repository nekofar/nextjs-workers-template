import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: [
      "tests/unit/**/*.test.ts",
      "tests/unit/**/*.test.tsx",
      "src/**/*.test.ts",
      "src/**/*.test.tsx",
    ],
    coverage: {
      provider: "v8",
      reports: ["text", "lcov"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "**/*.test.*",
        "**/*.spec.*",
        "**/*.stories.*",
        "**/__mocks__/**",
        "**/__fixtures__/**",
        ".next/**",
        "dist/**",
        "coverage/**",
        "public/**",
        "node_modules/**",
        "tests/**",
        "**/*config*.{js,ts,mjs,cjs}",
        "next.config.ts",
        "playwright.config.ts",
        "vitest.config.mts",
        "postcss.config.mjs",
        "open-next.config.ts",
      ],
      thresholds: {
        lines: 60,
        branches: 50,
        statements: 60,
        functions: 60,
      },
    },
  },
});
