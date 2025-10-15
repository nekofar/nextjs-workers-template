import { expect, test } from "@playwright/test";

test.describe("UI interactions & accessibility", () => {
  test.beforeEach(async ({ page }) => page.goto("/"));

  test("should open docs popup when activated via keyboard", async ({
    page,
  }) => {
    const link = page.getByRole("link", { name: "Read our docs" });
    await link.focus();

    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.keyboard.press("Enter"),
    ]);

    await popup.waitForLoadState("domcontentloaded");
    expect(popup.url()).toContain("nextjs.org/docs");
    await popup.close();
  });

  test("should set CTA target and rel attributes for safety", async ({
    page,
  }) => {
    const deploy = page.getByRole("link", { name: "Deploy now" });
    const docs = page.getByRole("link", { name: "Read our docs" });

    await expect(deploy).toHaveAttribute("target", "_blank");
    await expect(docs).toHaveAttribute("target", "_blank");

    await expect(deploy).toHaveAttribute("rel", /noopener/);
    await expect(docs).toHaveAttribute("rel", /noopener/);
  });
});
