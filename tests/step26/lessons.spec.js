import { expect, test } from "@playwright/test";

test("roadmap reaches the final capstone lesson", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("link", { name: /Step 31/ }).click();

  await expect(page.getByRole("heading", { name: "Production capstone project" })).toBeVisible();
});
