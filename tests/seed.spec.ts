import { test, expect } from '@playwright/test';

test.describe('Sauce Demo login flow', () => {
  test('logs in successfully with valid credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle(/Swag Labs/);
    await expect(page.locator('.login_logo')).toBeVisible();

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
  });
});
