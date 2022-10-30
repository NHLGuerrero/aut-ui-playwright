import { Expect, expect, Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly btnLogin: Locator;
    readonly btnUserName: Locator;
    readonly btnPassword: Locator;
    readonly btnLogIn: Locator;
    readonly validateLogin: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.btnLogin = page.locator('#login2');
        this.btnUserName = page.locator('#loginusername');
        this.btnPassword = page.locator('#loginpassword');
        this.btnLogIn = page.locator('button:has-text("Log in")');
        this.validateLogin = page.locator('#nameofuser');
      }


    async goto(){
      await this.page.goto('/index.html');
    }

    async logIn(){
        await this.btnLogin.click();
        await this.btnUserName.fill('usuario1996');
        await this.btnPassword.fill('12345678');
        await this.btnLogIn.click();
        await expect(this.validateLogin).toHaveText('Welcome usuario1996');
    }
}
