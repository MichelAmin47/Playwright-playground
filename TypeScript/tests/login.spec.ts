import { test, expect } from '@playwright/test';
import {HomePage} from "../pages/home-page";
import { LoginPage } from '../pages/login-page';

test('User logs in to the MyAccount page', async ({page }) => {
    await page.goto('https://webshop.mobiletestautomation.nl/');

    await expect(page).toHaveTitle('Valori Automation Practice Shop');

    await page.locator('text=Sign in').click();

    await page.locator('form#login-form input[type="email"]').type('testerino@tester.com');
    await page.locator('form#login-form input[type="password"]').type('1qazxsw2');
    await page.locator('form#login-form button[type="submit"]').click();

    await expect(page.locator('section#main h1')).toContainText('Your account');
});

test('User logs in to the MyAccount page with the Page Object Model', async ({page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.goSignIn();

    const loginPage = new LoginPage(page);
    await loginPage.signIn();

    // CSS combined with text locator!
    await expect(page.locator('section#main h1')).toContainText('Your account');

    console.log(await page.locator('h1:has-text("Your account")').textContent())
    await expect(page.locator('h1:has-text("Your account")')).toBeVisible();

    console.log(await page.locator('section#main >> text=Your account').allInnerTexts());
    await expect(page.locator('section#main >> text=Your account')).toBeVisible();
});
