import { test } from '@playwright/test';

test('screenshot test for /', async ({ page }) => {
  await page.goto('/');
  await page.screenshot({ path: 'tests/__screenshots__/index.png', fullPage: true });
});
