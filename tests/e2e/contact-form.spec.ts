import { expect, test } from "@playwright/test";

test("turnstile presente no formulario", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("turnstile-widget")).toBeVisible();
});
