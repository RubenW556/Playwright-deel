const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.

(async () => {
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('http://'+process.argv[3]+':9080/navigator/?desktop=admin');
    await page.getByRole('textbox', { name: 'User name:'}).fill(process.argv[4]);
    await page.getByRole('textbox', { name: 'Password:' }).fill(process.argv[5]);
    await page.getByRole('button', { name: 'Log In' }).click();
    await page.getByRole('treeitem', { name: 'Plug-ins' }).click();
    await page.getByRole('gridcell', { name: 'EDS Data Source' }).click();
    await page.getByRole('button', { name: 'Edit' }).click();
    await page.getByRole('textbox', { name: 'JAR file path:' }).fill('C:\\Plug-ins\\'+process.argv[2]+'.jar');
    await page.getByLabel('Load').nth(1).click();
    await page.getByLabel('Save', { exact: true }).click();
    await browser.close();
})();