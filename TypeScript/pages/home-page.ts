import { expect, Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = page.locator('text=Sign in');
    }

    async goto() {
        await this.page.goto('https://webshop.mobiletestautomation.nl/');
        await expect(this.page).toHaveTitle('Valori Automation Practice Shop');
    }

    async goSignIn() {
        await this.signInButton.click()
        await expect(this.page.locator('h1', { hasText: ' Log in to your account' })).toBeVisible();
    }
}
