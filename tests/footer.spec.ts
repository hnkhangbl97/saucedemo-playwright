import {getCurrentYear} from '../utils/helper';
import {test,expect} from '../src/fixtures/fixtures';

test('TC-F-001: Verify redirect to Sauce X page',async ({standardUser})=>{
    
    const context = standardUser.page.context();
    const pagePromise = context.waitForEvent('page');
    
    await standardUser.basePage.clickToSocialXIcon();
    const newPage = await pagePromise;

    await expect(newPage).toHaveURL('https://x.com/saucelabs');

})

test('TC-F-002: Verify redirect to Facebook page',async ({standardUser,isMobile})=>{
    
    const context = standardUser.page.context();
    const pagePromise = context.waitForEvent('page');
    
    await standardUser.basePage.clickToSocialFacebookICon();
    const newPage = await pagePromise;

    if(isMobile)
        await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs/');
    else 
        await expect(newPage).toHaveURL('https://www.facebook.com/saucelabs'); 
})

test('TC-F-003: Verify redirect to Linkedin page',async ({standardUser})=>{
    
    const context = standardUser.page.context();
    const pagePromise = context.waitForEvent('page');
    
    await standardUser.basePage.clickToSocialLinkedinIcon();
    const newPage = await pagePromise;

    await expect(newPage).toHaveURL('https://www.linkedin.com/company/sauce-labs/');

})

test('TC-F-006: Verify the current year', async({standardUser})=>{
    const currentYear = getCurrentYear().toString();
    // console.log(currentYear);
    await expect(standardUser.basePage.footerCopyText).toContainText(currentYear);
})





