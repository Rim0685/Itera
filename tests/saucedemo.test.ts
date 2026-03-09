import { test, expect } from '@playwright/test';
test('Gå inn på demo', async ({ page }) => {
    await page.goto('')
    await expect (page.tohaveURL(''))
});