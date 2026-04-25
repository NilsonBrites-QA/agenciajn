import { expect, test } from "@playwright/test";

test("secoes principais da landing estao visiveis", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Cresca com um site/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Entrega criativa/i })).toBeVisible();
  await expect(page.getByRole("heading", { name: /Projetos reais/i })).toBeVisible();
});
