import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://test460.nop-station.com/en/');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.getByLabel('Female').check();
    await page.getByLabel('First name:').click();
    await page.getByLabel('First name:').fill('Jem');
    await page.getByLabel('Last name:').click();
    await page.getByLabel('Last name:').fill('Rose');
    await page.locator('select[name="DateOfBirthDay"]').selectOption('4');
    await page.locator('select[name="DateOfBirthMonth"]').selectOption('12');
    await page.locator('select[name="DateOfBirthYear"]').selectOption('1998');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').fill('jem1234@gmail.com');
    await page.getByLabel('Company name:').click();
    await page.getByLabel('Company name:').fill('ABC company');
    await page.getByLabel('Newsletter:').uncheck();
    await page.getByLabel('Password:', { exact: true }).click();
    await page.getByLabel('Password:', { exact: true }).fill('123456');
    await page.getByLabel('Confirm password:').click();
    await page.getByLabel('Confirm password:').fill('123456');
    await page.getByRole('button', { name: 'Register' }).click();
});
