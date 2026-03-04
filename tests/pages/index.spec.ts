import { test, expect } from '@playwright/test';

test('screenshot test for /en', async ({ page }) => {
  await page.goto('/en');
  await expect(page).toHaveScreenshot('en.png', { fullPage: true });
});

test('screenshot test for /ja', async ({ page }) => {
  await page.goto('/ja');
  await expect(page).toHaveScreenshot('ja.png', { fullPage: true });
});
