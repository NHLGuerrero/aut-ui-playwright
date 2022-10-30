import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly categories: Locator;

    constructor(page: Page) {
        this.page = page;
        this.categories = page.locator('[class="list-group"]');
    }

    async searchByCategory(category: string) {
        await this.categories.locator(`text=${category}`).click();
    }

    async selectProduct(product: string) {
        const productName = this.page.locator(`text=${product}`);
        await expect(productName).toHaveText(product);
        await productName.click();
    }
}