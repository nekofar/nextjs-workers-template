import { expect, test } from "@playwright/test";

test.describe("Info cards", () => {
  test("CTAs have safe target and rel", async ({ page }) => {
    await page.goto("/");

    const links = [
      { name: "Learn more", expectedRel: /noopener/ },
      { name: "View examples", expectedRel: /noopener/ },
      { name: "Go to nextjs.org", expectedRel: /noopener/ },
    ];

    for (const l of links) {
      const a = page.getByRole("link", { name: l.name });
      await expect(a).toHaveAttribute("target", "_blank");
      await expect(a).toHaveAttribute("rel", l.expectedRel);
    }
  });

  test("CTAs hrefs point to correct domains", async ({ page }) => {
    await page.goto("/");

    const entries = [
      { name: "Learn more", contains: "nextjs.org/learn" },
      { name: "View examples", contains: "vercel.com/templates" },
      { name: "Go to nextjs.org", contains: "nextjs.org" },
    ];

    for (const e of entries) {
      const a = page.getByRole("link", { name: e.name });
      await expect(a).toHaveAttribute("href", new RegExp(e.contains));
    }
  });
});
