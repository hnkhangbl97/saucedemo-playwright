import {test,expect} from '../src/fixtures/fixtures';
test.describe('standard User',()=>{

    test('TC-LP-001: Verify login with valid credentials',async({pages}) => {
    
        await pages.page.goto('/');
        
        await pages.loginPage.enterUserName('standard_user');
        await pages.loginPage.enterPassword('secret_sauce');
        await pages.loginPage.clickLoginBtn();
    
        await expect(pages.homePage.shoppingCart).toBeVisible();
    })

    test('TC-LP-002: Verify login with incorrect password',async({pages,wrongUserNameOrPasswordErrorMsg}) => {

    await pages.page.goto('/');
    
    await pages.loginPage.enterUserName('standard_user');
    await pages.loginPage.enterPassword('wrong_password');
    await pages.loginPage.clickLoginBtn();

    await expect(pages.loginPage.errorMsg).toContainText(wrongUserNameOrPasswordErrorMsg);
})

    test('TC-LP-003: Verify logout functionality',async({standardUser}) =>{
        await standardUser.homePage.clickBurgerMenuBtn();
        await standardUser.homePage.clickLogOutBtn();
        await expect(standardUser.loginPage.loginBtn).toBeVisible();
    
    })
    
})

