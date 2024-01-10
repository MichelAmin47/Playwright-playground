import { test, expect } from '@playwright/test';

test('User logs in to the MyAccount page', async ({page }) => {
  await page.goto('https://webshop.mobiletestautomation.nl/');

  await expect(page).toHaveTitle('Valori Automation Practice Shop');

  await page.locator('text=Sign in').click();

  await page.locator('form#login-form input[type="email"]').type('testerino@tester.com');
  await page.locator('form#login-form input[type="password"]').type('1qazxsw2');
  await page.locator('form#login-form button[type="submit"]').click();

  await expect(page.locator('section#main h1')).toContainText('Your account');
});
