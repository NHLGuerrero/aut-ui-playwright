import { expect, Locator, Page } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly textMacBook: Locator;
    readonly itemRow: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textMacBook = page.locator("text=MacBook air");
        this.itemRow = page.locator('[id="tbodyid"]');
    }

    async checkProductName(productName: string) {
        await this.itemRow.waitFor({ state: "visible" });
        await expect(this.textMacBook).toHaveText(productName);
    }
}
