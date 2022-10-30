import { Expect, expect, Locator, Page } from '@playwright/test';

export class SingUpPage {
    readonly page: Page;
    readonly btnSingIn: Locator;
    readonly btnUserName: Locator;
    readonly btnPassword: Locator;
    readonly btnSingUp: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnSingIn = page.locator('#signin2');
        this.btnUserName = page.locator('#sign-username');
        this.btnPassword = page.locator('#sign-password');
        this.btnSingUp = page.locator('button', { hasText: 'Sign up' })
      }


    async goto(){
      await this.page.goto('/index.html');
    }
  
    async createAccount(){
      await this.btnSingIn.click();
      await this.btnUserName.fill('usuario1996');
      await this.btnPassword.fill('12345678');
      await this.btnSingUp.click();
      await this.page.on('dialog', async dialog => {
        await dialog.accept('Sign up successful.')
    });
    }
}
