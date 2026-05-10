import { start } from 'node:repl';
import {test,expect} from '../src/fixtures/fixtures';

test('TC-MP-002: Verify the price of each product of each product have a correct price format',async({standardUser}) => {
    
        // await standardUser.page.goto('/');
        const itemPrices = await standardUser.homePage.getAllItemPrices();

        for (const price of itemPrices){
            // console.log(await price.textContent());
            await expect(price).toContainText('$');
        }

    })

test('TC-MP-004: Verify Name (A to Z) sorting',async({standardUser}) =>{
    const expectedProductNames = (await standardUser.homePage.getProductNamesList()).toSorted();

    await standardUser.homePage.selectSortType('az');

    const actualProductNames = await standardUser.homePage.getProductNamesList();

    // console.log(expectedProductNames);
    // console.log(actualProductNames);
    expect(actualProductNames).toEqual(expectedProductNames);
})

test('TC-MP-005: Verify Name (Z to A) sorting',async({standardUser}) =>{
    const expectedProductNames = (await standardUser.homePage.getProductNamesList()).toSorted().toReversed();

    await standardUser.homePage.selectSortType('za');

    const actualProductNames = await standardUser.homePage.getProductNamesList();

    // console.log(expectedProductNames);
    // console.log(actualProductNames);
    expect(actualProductNames).toEqual(expectedProductNames);
})

test('TC-MP-006: Verify Price (low to high) sorting',async({standardUser}) =>{
    const expectedPrices = (await standardUser.homePage.getPricesList()).toSorted((a,b)=> (a - b));

    await standardUser.homePage.selectSortType('lohi');

    const actualPrices = await standardUser.homePage.getPricesList();

    // console.log(expectedPrices);
    // console.log(actualPrices);
    expect(actualPrices).toEqual(expectedPrices);
})

test('TC-MP-007: Verify Price (high to low) sorting',async({standardUser}) =>{
    const expectedPrices = (await standardUser.homePage.getPricesList()).toSorted((a,b)=> (a - b)).toReversed();

    await standardUser.homePage.selectSortType('hilo');

    const actualPrices = await standardUser.homePage.getPricesList();

    // console.log(expectedPrices);
    // console.log(actualPrices);
    expect(actualPrices).toEqual(expectedPrices);
})

test('TC-MP-009: Verify navigate to product detail page',async({standardUser}) => {
    const productName = 'Sauce Labs Bolt T-Shirt';
    
    await standardUser.homePage.clickToProductByName(productName);
    
    await expect(standardUser.productDetailPage.productName).toContainText(productName);

    await standardUser.productDetailPage.clickBackToProductsBtn();

    await expect(standardUser.homePage.sortSelection).toBeVisible();

})

test('TC-MP-010: Verify the functionality of add to cart button', async({standardUser})=>{
    const productName = 'Sauce Labs Bolt T-Shirt';

    await standardUser.homePage.addToCart(productName);

    await expect(standardUser.homePage.removeBoltTShirtBtn).toBeVisible();
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

})

test('TC-MP-011: Verify the functionality of remove button', async({standardUser})=>{
    const productName = 'Sauce Labs Bolt T-Shirt';

    await standardUser.homePage.addToCart(productName);

    await expect(standardUser.homePage.removeBoltTShirtBtn).toBeVisible();
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.clickRemoveBoltTShirtBtn();
    
    await expect(standardUser.homePage.removeBoltTShirtBtn).not.toBeVisible();    
    await expect(standardUser.homePage.addBoltTShirtBtn).toBeVisible()    
})

test('TC-MP-012: Verify the functionality of the side bar', async({standardUser})=>{

    const expectedMenuItems = [
        'All Items',
        'About',
        'Logout',
        'Reset App State',
    ];

    await expect(standardUser.homePage.burgerMenuItems).toContainText(expectedMenuItems);
})

test('TC-MP-014: Navigate to Sauce Labs site',async({standardUser}) => {
    
    await standardUser.homePage.clickBurgerMenuBtn();
    await standardUser.homePage.clickAboutBtn();

    expect(standardUser.page.url()).toBe('https://saucelabs.com/');
    
})

test('TC-MP-016: Verify the functionality of the Reset App State',async({standardUser}) => {
    const productName = 'Sauce Labs Bolt T-Shirt';

    await standardUser.homePage.addToCart(productName);

    await expect(standardUser.homePage.removeBoltTShirtBtn).toBeVisible();
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.clickBurgerMenuBtn();
    await standardUser.homePage.clickResetAppStateBtn();
    
    await expect(standardUser.homePage.itemCountBadge).not.toBeVisible();
    
})

test('TC-MP-017: View the cart',async({standardUser}) => {

    await standardUser.homePage.clickToCart();

    await expect(standardUser.cartPage.checkOutBtn).toBeVisible();
    
})

