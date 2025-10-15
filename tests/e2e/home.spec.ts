import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test("loads and shows core content", async ({ page }) => {
    await page.goto("/");

    // Title from app metadata
    await expect(page).toHaveTitle("Create Next App");

    // Hero/logo and badge
    await expect(page.getByAltText("Next.js logo")).toBeVisible();
    await expect(page.getByText("Next.js + Cloudflare Workers")).toBeVisible();

    // Main section & CTAs
    await expect(
      page.getByRole("heading", { level: 2, name: "Get Started" }),
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Deploy now" })).toBeVisible();
    await expect(
      page.getByRole("link", { name: "Read our docs" }),
    ).toBeVisible();

    // Info cards
    await expect(page.getByRole("heading", { name: "Learn" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Examples" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Next.js" })).toBeVisible();
  });

  test("Deploy now CTA opens in a new tab", async ({ page, browserName }) => {
    test.skip(
      browserName === "firefox",
      "Popup event can be flaky on Firefox headless for external target=_blank links; covered by Chromium.",
    );
    await page.goto("/");

    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Deploy now" }).click(),
    ]);

    await popup.waitForLoadState("domcontentloaded");
    expect(popup.url()).toContain("vercel.com");
    await popup.close();
  });
});
