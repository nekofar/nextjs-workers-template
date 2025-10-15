import { expect, test } from "./fixtures/home";

test.describe("Home page", () => {
  test("should render the core hero content", async ({ page, gotoHome }) => {
    await gotoHome();

    await test.step("renders page metadata", async () => {
      await expect(page).toHaveTitle("Create Next App", { timeout: 15000 });
    });

    await test.step("shows hero branding", async () => {
      await expect(page.getByAltText("Next.js logo")).toBeVisible({
        timeout: 15000,
      });
      await expect(page.getByText("Next.js + Cloudflare Workers")).toBeVisible({
        timeout: 15000,
      });
    });

    await test.step("displays primary calls to action", async () => {
      await expect(
        page.getByRole("heading", { level: 2, name: "Get Started" }),
      ).toBeVisible({ timeout: 15000 });
      await expect(page.getByRole("link", { name: "Deploy now" })).toBeVisible({
        timeout: 15000,
      });
      await expect(
        page.getByRole("link", { name: "Read our docs" }),
      ).toBeVisible({ timeout: 15000 });
    });

    await test.step("lists supporting resource cards", async () => {
      await expect(page.getByRole("heading", { name: "Learn" })).toBeVisible({
        timeout: 15000,
      });
      await expect(page.getByRole("heading", { name: "Examples" })).toBeVisible(
        { timeout: 15000 },
      );
      await expect(page.getByRole("heading", { name: "Next.js" })).toBeVisible({
        timeout: 15000,
      });
    });
  });

  test("should open the Deploy now CTA in a new tab", async ({
    page,
    browserName,
    gotoHome,
  }) => {
    test.skip(
      browserName === "firefox",
      "Popup event can be flaky on Firefox headless for external target=_blank links; covered by Chromium.",
    );

    await gotoHome();

    const link = page.getByRole("link", { name: "Deploy now" });
    const targetHref = await link.getAttribute("href");

    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.getByRole("link", { name: "Deploy now" }).click(),
    ]);

    await popup.waitForLoadState("domcontentloaded").catch(() => undefined);
    const popupUrl = popup.url();
    const effectiveUrl = popupUrl?.startsWith("http")
      ? popupUrl
      : (targetHref ?? "");

    expect(effectiveUrl).toContain("vercel.com");
    await popup.close();
  });
});
