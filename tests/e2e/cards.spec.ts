import { expect, test } from "./fixtures/home";

test.describe("Info cards", () => {
  test("should keep CTAs target and rel safe", async ({ page, gotoHome }) => {
    await gotoHome();

    const links = [
      { name: "Learn more", expectedRel: /noopener/ },
      { name: "View examples", expectedRel: /noopener/ },
      { name: "Go to nextjs.org", expectedRel: /noopener/ },
    ];

    for (const l of links) {
      const a = page.getByRole("link", { name: l.name });
      await expect(a).toBeVisible({ timeout: 15000 });
      await expect(a).toHaveAttribute("target", "_blank", { timeout: 15000 });
      await expect(a).toHaveAttribute("rel", l.expectedRel, { timeout: 15000 });
    }
  });

  test("should point CTA hrefs to correct domains", async ({
    page,
    gotoHome,
  }) => {
    await gotoHome();

    const entries = [
      { name: "Learn more", contains: "nextjs.org/learn" },
      { name: "View examples", contains: "vercel.com/templates" },
      { name: "Go to nextjs.org", contains: "nextjs.org" },
    ];

    for (const e of entries) {
      const a = page.getByRole("link", { name: e.name });
      await expect(a).toBeVisible({ timeout: 15000 });
      await expect(a).toHaveAttribute("href", new RegExp(e.contains), {
        timeout: 15000,
      });
    }
  });
});
