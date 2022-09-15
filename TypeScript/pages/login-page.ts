import { expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.emailField = page.locator('form#login-form input[type="email"]');
        this.passwordField = page.locator('form#login-form input[type="password"]');

        // locater filtering / element child
        this.signInButton = page.locator('footer', { has: page.locator('button', { hasText: 'Sign in' }) })
    }

    async signIn() {
        await this.emailField.type('testerino@tester.com');
        await this.passwordField.type('1qazxsw2');
        await this.signInButton.click();
    }
}
