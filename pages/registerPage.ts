import { Page } from "@playwright/test";
export default class RegisterPage{

    constructor(public page: Page) {

    }

    async enterFirstName(firstname: string){
        await this.page.locator("//input[@name='FirstName'] ")
        .type(firstname);
    }

    async enterLastName(lastname: string){
        await this.page.locator("//input[@name='LastName'] ")
        .type(lastname);
    }

    async enterEmail(email: string){
        await this.page.locator("//input[@name='Email'] ")
        .type(email);
    }

    async enterCompany(company: string){
        await this.page.locator("//input[@name='Company'] ")
        .type(company);
    }

    async enterPassword(password: string){
        await this.page.locator("//input[@type='password' and @id='Password'] ")
        .type(password);
    }

    async enterConfirmPassword(password: string){
        await this.page.locator("//input[@type='password' and @id='ConfirmPassword'] ")
        .type(password);
    }

    async isNewsletterChecked(){
        return await this.page.locator("//input[@type='checkbox' and @name='Newsletter'] ").isChecked();
    }

    async clickRegisterBtn(){
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            await this.page.click("//button[contains(text(), 'Register')] ")
        ])
        
    }
}