import { expect, test } from "@playwright/test";

test("botao flutuante de WhatsApp esta presente", async ({ page }) => {
  await page.goto("/");
  const whatsappLink = page.getByRole("link", { name: /Abrir WhatsApp da Agencia JN/i });
  await expect(whatsappLink).toBeVisible();
  await expect(whatsappLink).toHaveAttribute("href", /wa\.me\/5511940825120/);
});
