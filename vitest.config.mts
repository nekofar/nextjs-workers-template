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
  },
});
