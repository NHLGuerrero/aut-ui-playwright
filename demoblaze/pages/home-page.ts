import { Locator, Page, expect } from '@playwright/test';

export class HomePage {
    readonly categorieLaptops: Locator;
    readonly productMacbookAir: Locator;

    constructor(page: Page) {
        this.categorieLaptops = page.locator('text=Laptops');
        this.productMacbookAir = page.locator('text=MacBook air');
    }

    async searchByCategory(category: string) {
        await expect(this.categorieLaptops).toHaveText(category);
        await this.categorieLaptops.click();
    }

    async selectProduct(product: string) {
        await expect(this.productMacbookAir).toHaveText(product)
        await this.productMacbookAir.click();
    }
}