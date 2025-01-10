import {test, expect} from "@playwright/test";
import RegisterPage  from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import Books from "../pages/books";
import { register } from "module";


const email= "ela12@gmail.com";
const password= "123456";

test.describe("Register, Login, Add to cart testing ", async() =>{
    test("Register test 01", async({page}) => {
        const register = new RegisterPage(page);
            await page.goto('https://test460.nop-station.com/en/register?returnUrl=%2Fen%2Fbooks');
            await register.enterFirstName("Ela");
            await register.enterLastName("Ros");
            await register.enterEmail(email);
            await register.enterCompany("asd");
            await register.enterPassword(password);
            await register.enterConfirmPassword(password);
            expect(await register.isNewsletterChecked()).toBe(true);
            await register.clickRegisterBtn();
        
        })
        
        test("Login test 02", async({page}) =>{
            const login= new LoginPage(page);
            await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
            await login.enterEmail(email);
            await login.enterPassword(password);
            await login.clickLoginBtn();
            expect(await page.locator("//a[contains(text(), 'My account')][1]"));
        
        })
        
        test("Add to cart test 03", async({page}) => {
            const login= new LoginPage(page);
            const homePage = new HomePage(page);
            const books= new Books(page);
            await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
            // await page.goto("https://test460.nop-station.com/en/books/13");
            await login.login(email, password);
            await homePage.clickOnBooks();
            await books.addFirstProductToTheCart()
        
        })
})
