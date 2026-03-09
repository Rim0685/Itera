import { test, expect } from '@playwright/test';
test('Gå inn på demo', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect (page.tohaveURL('https://www.saucedemo.com/'));

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByTestId('password').fill('passord');

});