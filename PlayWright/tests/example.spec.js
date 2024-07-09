// @ts-check
const { test, expect } = require('@playwright/test');
const { AdminPage } = require('./Page object models/admin page');


test.use({
    ignoreHTTPSErrors: true
});


test('test plug-in version', async ({ page }) => {
    let adminPage = new AdminPage(page);
    await adminPage.goto();
    await adminPage.seePlugins();
    await adminPage.checkVersion("3.321.1")
});

test('test plug-in name', async ({ page }) => {
    let adminPage = new AdminPage(page);
    await adminPage.goto();
    await adminPage.seePlugins();
    await adminPage.checkPluginName("EDS Data Source")
});

