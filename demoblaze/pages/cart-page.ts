import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly itemRow: Locator;
    readonly productName: Locator;

    constructor(page: Page) {
        this.page = page;
        this.itemRow = page.locator('[id="tbodyid"]');
        const productName = page.locator(`text=${productName}`);
    }

    async checkProductName(productName: string) {
        await this.itemRow.waitFor({ state: "visible" });
        await expect(this.productName).toHaveText(productName);
    }
}