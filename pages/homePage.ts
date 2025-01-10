import { Page } from "@playwright/test";
export default class HomePage{

    constructor(public page: Page) {

    }
async clickOnBooks(){
    await this.page.click("//a[@href='/en/books'][1]")
}
}