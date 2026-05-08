import { PageManager } from "../pages/page-manager";
import { test as base, expect } from '@playwright/test';
type MyFixtures = {
    pages: PageManager;
    standardUser: PageManager;
}

export const test = base.extend<MyFixtures>({
    pages: async ({ page }, use) => {
        const pages = new PageManager(page);
        await use(pages);
    },

    standardUser: async({pages},use)=>{
    
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('standard_user');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();
    
        await expect(pages.homePage.shoppingCart).toBeVisible();
        await use(pages);
    }
});

export { expect } from '@playwright/test';