import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly itemRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemRow = page.locator('[class="row"]');
    }

    async checkProductName(productName: string) {
        const product = this.page.locator(`text=${productName}`);
        await this.itemRow.waitFor({ state: "visible" });
        await expect(product).toHaveText(productName);
    }
}