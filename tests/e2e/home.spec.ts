import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should render the core hero content", async ({ page }) => {
    await test.step("renders page metadata", async () => {
      await expect(page).toHaveTitle("Create Next App");
    });

    await test.step("shows hero branding", async () => {
      await expect(page.getByAltText("Next.js logo")).toBeVisible();
      await expect(
        page.getByText("Next.js + Cloudflare Workers"),
      ).toBeVisible();
    });

    await test.step("displays primary calls to action", async () => {
      await expect(
        page.getByRole("heading", { level: 2, name: "Get Started" }),
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: "Deploy now" }),
      ).toBeVisible();
      await expect(
        page.getByRole("link", { name: "Read our docs" }),
      ).toBeVisible();
    });

    await test.step("lists supporting resource cards", async () => {
      await expect(page.getByRole("heading", { name: "Learn" })).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Examples" }),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", { name: "Next.js" }),
      ).toBeVisible();
    });
  });

  test("should open the Deploy now CTA in a new tab", async ({
    page,
    browserName,
  }) => {
    test.skip(
      browserName === "firefox",
      "Popup event can be flaky on Firefox headless for external target=_blank links; covered by Chromium.",
    );

    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Deploy now" }).click(),
    ]);

    await popup.waitForLoadState("domcontentloaded");
    expect(popup.url()).toContain("vercel.com");
    await popup.close();
  });
});
