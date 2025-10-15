import { expect, test } from "./fixtures/home";

test.describe("Getting started guidance", () => {
  test("should outline local onboarding instructions", async ({
    page,
    gotoHome,
  }) => {
    await gotoHome();

    await test.step("shows the onboarding description", async () => {
      await expect(
        page.getByText("Begin your journey with Next.js and Shadcn UI"),
      ).toBeVisible({ timeout: 15000 });
    });

    await test.step("emphasizes editable source file", async () => {
      const codeSample = page
        .locator("code")
        .filter({ hasText: "src/app/page.tsx" });
      await expect(codeSample).toHaveText("src/app/page.tsx", {
        timeout: 15000,
      });
      await expect(
        page.getByText("Get started by editing", { exact: false }),
      ).toBeVisible({ timeout: 15000 });
    });

    await test.step("reinforces instant feedback messaging", async () => {
      await expect(
        page.getByText("Save and see your changes instantly with hot reload."),
      ).toBeVisible({ timeout: 15000 });
    });
  });
});
