import { expect, test } from "@playwright/test";

// Skipping external Playwright website checks to avoid network dependency in CI.
test.describe.skip("Playwright docs smoke tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://playwright.dev/");
  });

  test("should display the docs title", async ({ page }) => {
    await expect(page).toHaveTitle(/Playwright/);
  });

  test("should show the Installation heading after opening Get started", async ({
    page,
  }) => {
    await test.step("Open the Get started guide", async () => {
      await page.getByRole("link", { name: "Get started" }).click();
    });

    await expect(
      page.getByRole("heading", { name: "Installation" }),
    ).toBeVisible();
  });
});
