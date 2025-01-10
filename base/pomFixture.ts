import {test as baseTest} from "@playwright/test";
import RegisterPage  from "../pages/registerPage";
import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import Books from "../pages/books";

type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    books: Books;
}

const testpages = baseTest.extend<pages>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    books: async ({ page }, use) => {
        await use(new Books(page));
    }
});

export const test = testpages;
export const expect = testpages.expect;