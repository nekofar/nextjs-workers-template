import { expect, test } from "./fixtures/home";

test.describe("Meta & document basics", () => {
  test("should set html lang to en", async ({ page, gotoHome }) => {
    await gotoHome();

    const lang = await page.evaluate(() => document.documentElement.lang);
    expect(lang).toBe("en");
  });
});
