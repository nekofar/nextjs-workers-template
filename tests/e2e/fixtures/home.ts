import { test as base, expect } from "@playwright/test";

type HomeFixtures = {
  gotoHome: () => Promise<void>;
};

export const test = base.extend<HomeFixtures>({
  gotoHome: async ({ page }, use) => {
    const gotoHome = async () => {
      await page.goto("/", { waitUntil: "networkidle" });
      await page.getByRole("heading", { name: "Get Started" }).waitFor();
    };

    await gotoHome();
    await use(gotoHome);
  },
});

export { expect };
