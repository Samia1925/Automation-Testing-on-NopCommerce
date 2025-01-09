import { chromium, test } from "@playwright/test"
test("Register test demo", async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://test460.nop-station.com/en/");
    await page.waitForTimeout(3000);// to make the page wait for 3s or 3000ms 

    await page.click("//a[contains(text(), 'Register')]"); // clicking on login link
    await page.waitForTimeout(3000);

    await page.click("//input[@id='gender-female'] "); // clicking on gender
    await page.fill("//input[@name='FirstName'] ", "Jemmy");
    await page.fill("//input[@name='LastName'] ", "Smith");
    await page.selectOption("//select[@name='DateOfBirthDay']", '4');
    await page.selectOption("//select[@name='DateOfBirthMonth'] ", '12');
    await page.selectOption("//select[@name='DateOfBirthYear'] ", '1995');
    await page.fill("//input[@name='Email'] ", "jem@gmail.com");
    await page.fill("//input[@name='Company'] ", "ABC company");
    await page.click("//input[@type='checkbox' and @name='Newsletter'] ");
    await page.fill("//input[@type='password' and @id='Password'] ", "123456");
    await page.fill("//input[@type='password' and @id='ConfirmPassword'] ", "123456");
    await page.waitForTimeout(3000);
    await page.click("//button[contains(text(), 'Register')] ");

    await page.waitForTimeout(5000);


})
