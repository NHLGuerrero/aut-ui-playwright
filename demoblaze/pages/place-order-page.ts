import { expect, Locator, Page } from "@playwright/test";

export class PlaceOrder {
  readonly page: Page;
  readonly btnPlaceOrder: Locator;
  readonly name: Locator;
  readonly country: Locator;
  readonly city: Locator;
  readonly creditCard: Locator;
  readonly month: Locator;
  readonly year: Locator;
  readonly btnPurchase: Locator;
  readonly textThankYou: Locator;
  readonly btnOk: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnPlaceOrder = page.locator('button:has-text("Place Order")');
    this.name = page.locator("#name");
    this.country = page.locator("#country");
    this.city = page.locator("#city");
    this.creditCard = page.locator("#card");
    this.month = page.locator("#month");
    this.year = page.locator("#year");
    this.btnPurchase = page.locator('[onclick="purchaseOrder()"]');
    this.textThankYou = page.locator("text=Thank you for your purchase!");
    this.btnOk = page.locator('button:has-text("ok")');
  }

  async goPlaceOrder() {
    await this.btnPlaceOrder.click();
  }

  async completePlaceOrder(clientInfo: {
    name: string;
    country: string;
    city: string;
    creditCard: string;
    month: string;
    year: string;
    numeroAfiliado?: string;
  }) {
    await this.name.fill(clientInfo.name);
    await this.country.fill(clientInfo.country);
    await this.city.fill(clientInfo.city);
    await this.creditCard.fill(clientInfo.creditCard);
    await this.month.fill(clientInfo.month);
    await this.year.fill(clientInfo.year);
    await this.btnPurchase.click();
    await this.textThankYou.waitFor({ state: "visible" });
    await expect(this.textThankYou).toHaveText("Thank you for your purchase!");
    await this.btnOk.click();
  }
}