import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://test460.nop-station.com/en/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.getByLabel('Email:').click();
  await page.getByLabel('Email:').fill('jemmy123@gmail.com');
  await page.getByLabel('Password:').click();
  await page.getByLabel('Password:').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
});
