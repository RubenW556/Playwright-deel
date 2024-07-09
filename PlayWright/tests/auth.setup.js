import { test as setup, expect } from '@playwright/test';
require('dotenv').config({path: '../.env'})
const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
    await page.goto('http://'+process.env["Url"]+':9080/navigator/?desktop=admin');
    await page.getByRole('textbox', { name: 'User name:'}).fill(process.env["Username"]);
    await page.getByRole('textbox', { name: 'Password:' }).fill(process.env["Password"]);
    await page.getByRole('button', { name: 'Log In' }).click();
    await expect(page.getByText("that gives users access to a single repository.")).toBeVisible();
    await page.context().storageState({ path: authFile });
});