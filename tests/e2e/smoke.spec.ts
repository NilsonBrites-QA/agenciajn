import { expect, test } from "@playwright/test";

test("homepage carrega com status 200", async ({ page }) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();
  await expect(page).toHaveTitle(/Agencia JN/i);
});
