import { test, expect } from '@playwright/test';

test('screenshot test for /simple', async ({ page }) => {
  await page.goto('/simple');
  await expect(page).toHaveScreenshot('simple.png', { fullPage: true });
});
