import { expect, Locator, Page } from '@playwright/test';

export class ProductDetailPage {
    readonly page: Page;
    readonly textMacbook: Locator;
    readonly addMacbook: Locator;
    readonly cart: Locator;
    readonly itemRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textMacbook = page.locator('text=MacBook air');
        this.addMacbook = page.locator('[onclick="addToCart(11)"]');
        this.cart = page.locator('#cartur');
        this.itemRow = page.locator('#tbodyid');
    }

    async checkProductName(productName: string) {
        await this.itemRow.waitFor({ state: "visible" });
        await expect(this.textMacbook).toHaveText(productName);
    }

    async addtocart() {
        await this.addMacbook.click();
        await this.page.on('dialog', async dialog => {
            await dialog.accept('Product added.')
        });
    }

    async goToCart() {
        await this.cart.click();
    }
}