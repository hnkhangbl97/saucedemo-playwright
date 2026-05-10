import {test,expect} from '../src/fixtures/fixtures';

test('TC-CP-001: Verify the functionality of Add to cart button', async({standardUser})=>{
    const productName = 'Sauce Labs Bolt T-Shirt';

    await standardUser.homePage.addToCart(productName);

    await expect(standardUser.homePage.removeBoltTShirtBtn).toBeVisible();
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');
})

test('TC-CP-002: Verify the functionality of Remove button', async({standardUser})=>{
    const productName = 'Sauce Labs Bolt T-Shirt';

    await standardUser.homePage.addToCart(productName);

    await expect(standardUser.homePage.removeBoltTShirtBtn).toBeVisible();
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.clickRemoveBoltTShirtBtn();
    
    await expect(standardUser.homePage.removeBoltTShirtBtn).not.toBeVisible();    
    await expect(standardUser.homePage.addBoltTShirtBtn).toBeVisible()    
})

test('TC-CP-003: Verify the functionality of Checkout button', async({standardUser})=>{
    const productName = 'Sauce Labs Bolt T-Shirt';

    await standardUser.homePage.addToCart(productName);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();

    await expect(standardUser.checkOutPage.checkOutStep1Title).toContainText('Checkout: Your Information');
     
})

test('TC-CP-004: Verify the functionality of Continue Shopping button', async({standardUser})=>{
    const productName = 'Sauce Labs Bolt T-Shirt';

    await standardUser.homePage.addToCart(productName);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickContinueShoppingBtn();

    await expect(standardUser.homePage.sortSelection).toBeVisible();
     
})

test('TC-CP-005: Verify the item badge count', async({standardUser})=>{
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickRemoveBoltTShirtBtn();
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');
     
})