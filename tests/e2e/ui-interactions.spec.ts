import { expect, test } from "./fixtures/home";

test.describe("UI interactions & accessibility", () => {
  test("should open docs popup when activated via keyboard", async ({
    page,
    gotoHome,
  }) => {
    await gotoHome();

    const link = page.getByRole("link", { name: "Read our docs" });
    const targetHref = await link.getAttribute("href");
    await link.focus();

    const [popup] = await Promise.all([
      page.waitForEvent("popup"),
      page.keyboard.press("Enter"),
    ]);

    await popup.waitForLoadState("domcontentloaded").catch(() => undefined);
    const popupUrl = popup.url();
    const effectiveUrl = popupUrl?.startsWith("http")
      ? popupUrl
      : (targetHref ?? "");

    expect(effectiveUrl).toContain("nextjs.org/docs");
    await popup.close();
  });

  test("should set CTA target and rel attributes for safety", async ({
    page,
    gotoHome,
  }) => {
    await gotoHome();

    const deploy = page.getByRole("link", { name: "Deploy now" });
    const docs = page.getByRole("link", { name: "Read our docs" });

    await expect(deploy).toHaveAttribute("target", "_blank", {
      timeout: 15000,
    });
    await expect(docs).toHaveAttribute("target", "_blank", { timeout: 15000 });

    await expect(deploy).toHaveAttribute("rel", /noopener/, { timeout: 15000 });
    await expect(docs).toHaveAttribute("rel", /noopener/, { timeout: 15000 });
  });
});
