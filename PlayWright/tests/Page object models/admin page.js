const { expect } = require('@playwright/test');
require('dotenv').config({path: "../.env"})

exports.AdminPage = class AdminPage {

    constructor(page) {
        this.page = page;
        this.pluginButton = page.getByRole('treeitem', { name: 'Plug-ins' });
        this.version = page.getByRole('row', { name: 'Plug-in is enabled EDS Data Source' })
    }

    async goto() {
        await this.page.goto('http://'+process.env["Url"]+':9080/navigator/?desktop=admin');
        await expect(this.page.getByText("that gives users access to a single repository.")).toBeVisible();
    }

    async seePlugins(){
        await this.pluginButton.click();
    }

    async checkPluginName(name){
        await expect(this.page.getByText(name)).toBeDefined();
    }

    async checkVersion(version){
        await expect(this.version.getByText(version)).toBeDefined();
    }
};