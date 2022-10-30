import { expect, Locator, Page } from '@playwright/test';

export class ProductDetailPage {
    readonly page: Page;
    readonly btnAddToCart: Locator;
    readonly cart: Locator;
    readonly itemRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnAddToCart = page.locator('[class="btn btn-success btn-lg"]');
        this.cart = page.locator('#cartur');
        this.itemRow = page.locator('#tbodyid');
    }

    async checkProductName(productName: string) {
        const product = this.page.locator(`text=${productName}`);
        await this.itemRow.waitFor({ state: "visible" });
        await expect(product).toHaveText(productName);
    }

    async addtocart() {
        await this.itemRow.waitFor({ state: "visible" });
        await this.btnAddToCart.click();
        await this.page.on('dialog', async dialog => {
            await dialog.accept('Product added.')
        });
    }

    async goToCart() {
        await this.cart.click();
    }
}