import { Page } from "@playwright/test";
export default class LoginPage{

    constructor(public page: Page) {

    }

    async login(email, password){
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(email: string){
        await this.page.locator("//input[@name='Email'] ")
        .type(email);
    }

    async enterPassword(password: string){
        await this.page.locator("//input[@name='Password'] ")
        .type(password);
    }

    async clickLoginBtn(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            await this.page.click("//button[contains(text(),'Log in')] ")
        ])
        
    }
}