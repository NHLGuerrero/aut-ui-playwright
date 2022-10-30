import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly laptops: Locator;
    readonly macbook: Locator;

    constructor(page: Page) {
        this.laptops = page.locator('text=Laptops');
        this.macbook = page.locator ('text=MacBook air');
    }

    async toBuylaptop(){
        await this.laptops.click();
        await this.macbook.click();
    }
}