import { test, expect } from '@playwright/test';

test('screenshot test for /legacy', async ({ page }) => {
  await page.goto('/legacy');
  await expect(page).toHaveScreenshot('legacy.png', { fullPage: true });
});
