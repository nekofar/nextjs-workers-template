import { expect, test } from "@playwright/test";

test.describe("Meta & document basics", () => {
  test("html lang is set to en", async ({ page }) => {
    await page.goto("/");
    const lang = await page.evaluate(() => document.documentElement.lang);
    expect(lang).toBe("en");
  });
});
