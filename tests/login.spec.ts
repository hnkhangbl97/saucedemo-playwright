import { start } from 'node:repl';
import {test,expect} from '../src/fixtures/fixtures';

test.describe('Standard User',()=>{

    test('TC-LP-001: Verify login with valid credentials',async({pages}) => {
    
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('standard_user');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();
    
        await expect(pages.homePage.shoppingCart).toBeVisible();
    })

    test('TC-LP-002: Verify login with incorrect password',async({pages,errorMsgs}) => {

        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('standard_user');
        await pages.loginPage.enterPassword('wrong_password');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    })

    test('TC-LP-003: Verify logout functionality',async({standardUser}) =>{
        await standardUser.homePage.clickBurgerMenuBtn();
        await standardUser.homePage.clickLogOutBtn();
        await expect(standardUser.loginPage.loginBtn).toBeVisible();
    
    })

    test('TC-LP-014: Verify login without entering credentials',async({pages,errorMsgs}) => {

        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('');
        await pages.loginPage.enterPassword('');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.requiredUsername);
    
    })

    test('TC-LP-020: Verify case sensitivity of login',async({pages,errorMsgs}) => {

        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('STANDARD_USER');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    
    })

    test('TC-LP-026: Verify login with incorrect password',async({pages,errorMsgs}) => {

        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('standard_user');
        await pages.loginPage.enterPassword('wrong_password');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    })

})

test.describe('Locked out user',() =>{
    test('TC-LP-004: Verify login for locked out user', async({pages,errorMsgs})=>{
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('locked_out_user');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.lockedOut);
    })

    test('TC-LP-009: Verify login with incorrect password', async({pages,errorMsgs})=>{
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('locked_out_user');
        await pages.loginPage.enterPassword('wrong_password');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    })

    test('TC-LP-021: Verify case sensitivity of login',async({pages,errorMsgs}) => {

        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('LOCKED_OUT_USER');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    
    })

})

test.describe('Performance Glitch User',() =>{
    test('TC-LP-006: Verify login with performance glitch user',async({pages})=>{
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('performance_glitch_user');
        await pages.loginPage.enterPassword('secret_sauce');
        
        const startTime = Date.now();
        await pages.loginPage.clickLoginBtn();
    
        await expect(pages.homePage.shoppingCart).toBeVisible();
        const duration = Date.now() - startTime;

        console.log(`Duration is ${duration}ms`);
        expect(duration).toBeGreaterThan(1_000);
    })

    test('TC-LP-010: Verify login with incorrect password', async({pages,errorMsgs})=>{
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('performance_glitch_user');
        await pages.loginPage.enterPassword('wrong_password');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    })

    test('TC-LP-023: Verify case sensitivity of login',async({pages,errorMsgs}) => {

        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('PERFORMANCE_GLITCH_USER');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    
    })
})

test.describe('Visual User',() => {
    test('TC-LP-008: Verify login with visual user', async ({pages,isMobile}) =>{  
        test.skip(isMobile);
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('visual_user');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();
    
        await expect(pages.homePage.shoppingCart).toBeVisible();
        
        // const boundingBox = await pages.homePage.sauceLabsBackpackImg.boundingBox();
        // console.log(boundingBox); this approach work too

        await expect(pages.homePage.sauceLabsBackpackImg).toHaveCSS('width',/^261\.53/);
    })

    test('TC-LP-013: Verify login with incorrect password', async({pages,errorMsgs})=>{
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('visual_user');
        await pages.loginPage.enterPassword('wrong_password');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    })
    
    test('TC-LP-025: Verify case sensitivity of login',async({pages,errorMsgs}) => {

        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('VISUAL_USER');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();

        await expect(pages.loginPage.errorMsg).toContainText(errorMsgs.login.wrongCredentials);
    
    })

})

test.describe('Other conditions',() =>{
    test('TC-LP-044: Check whether password is marked',async ({pages})=>{
        await pages.page.goto('/');
        
        await expect(pages.loginPage.password).toHaveAttribute('type','password');
    })
})
