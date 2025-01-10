import { Page } from "@playwright/test";
export default class Books{

    constructor(public page: Page) {

    }
async addFirstProductToTheCart(){
    const firstAddToCartButton = this.page.locator("//button[contains(text(), 'Add to cart')]").first();
    await firstAddToCartButton.click();
}


}