import {test, expect} from "../base/pomFixture";
import * as data from "../test-data/addToCart-test-data.json"
// import RegisterPage  from "../pages/registerPage";
// import LoginPage from "../pages/loginPage";
// import HomePage from "../pages/homePage";
// import Books from "../pages/books";
// import { register } from "module";


const email= "ela12@gmail.com";
const password= "123456";

test.describe("Register, Login, Add to cart testing ", async() =>{
    test("Register test 01", async({page, registerPage}) => {
        // const register = new RegisterPage(page);
            await page.goto('https://test460.nop-station.com/en/register?returnUrl=%2Fen%2Fbooks');
            await registerPage.enterFirstName(data.firstname);
            await registerPage.enterLastName(data.lastname);
            await registerPage.enterEmail(data.email);
            await registerPage.enterCompany(data.company);
            await registerPage.enterPassword(data.password);
            await registerPage.enterConfirmPassword(data.password);
            expect(await registerPage.isNewsletterChecked()).toBe(true);
            await registerPage.clickRegisterBtn();
        
        })
        
        test("Login test 02", async({page, loginPage}) =>{
            // const login= new LoginPage(page);
            await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
            await loginPage.enterEmail(data.email);
            await loginPage.enterPassword(data.password);
            await loginPage.clickLoginBtn();
            expect(await page.locator("//a[contains(text(), 'My account')][1]"));
        
        })
        
        test("Add to cart test 03", async({page, loginPage, homePage, books }) => {
            // const login= new LoginPage(page);
            // const homePage = new HomePage(page);
            // const books= new Books(page);
            await page.goto("https://test460.nop-station.com/en/login?returnUrl=%2Fen%2F");
            // await page.goto("https://test460.nop-station.com/en/books/13");
            await loginPage.login(data.email, data.password);
            await homePage.clickOnBooks();
            await books.addFirstProductToTheCart()
        
        })
})
