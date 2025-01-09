import { chromium, test } from "@playwright/test"
test("Login test demo", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://test460.nop-station.com/en/");
    await page.waitForTimeout(3000);// to make the page wait for 3s or 3000ms 

    await page.click("//a[contains(text(), 'Log in')]"); // clicking on login link
    await page.waitForTimeout(3000);

    await page.fill("//input[@name='Email'] ", "jemmy123@gmail.com");
    await page.fill("//input[@name='Password'] ", "123456");
    await page.waitForTimeout(3000);
    await page.click("//button[contains(text(),'Log in')] ");

    await page.waitForTimeout(5000);

    // new page without cached content
    // const newContext = await browser.newContext();
    // const newPage = await newContext.newPage();
    // await newPage.goto("https://test460.nop-station.com/en/");

    // await page.waitForTimeout(5000);

})
