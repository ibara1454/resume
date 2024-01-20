import { test, expect } from '@playwright/test';

test('screenshot test for /', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('index.png', { fullPage: true });
});
