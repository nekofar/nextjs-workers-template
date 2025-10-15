import { expect, test } from "@playwright/test";

test.describe("Meta & document basics", () => {
  test.beforeEach(async ({ page }) => page.goto("/"));

  test("should set html lang to en", async ({ page }) => {
    const lang = await page.evaluate(() => document.documentElement.lang);
    expect(lang).toBe("en");
  });
});
