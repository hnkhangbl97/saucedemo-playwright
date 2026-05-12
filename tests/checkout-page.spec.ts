import { LABELS } from '../src/data/labels';
import {test,expect} from '../src/fixtures/fixtures';
import {getCurrentYear, calculateTotalPrice} from '../utils/helper';

test('TC-CKO-001: Verify the checkout button ',async({standardUser,systemLabels}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    
    await expect(standardUser.checkOutPage.title).toContainText(systemLabels.checkOut.step1Title);
})

test('TC-CKO-002: Verify the continue button ',async({standardUser,sampleUserInfo,systemLabels}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();

    // await expect(standardUser.checkOutPage.title).toContainText('Checkout: Overview');
    await expect(standardUser.checkOutPage.title).toContainText(systemLabels.checkOut.step2Title);
})

test('TC-CKO-003-1: Verify first name empty ',async({standardUser,sampleUserInfo,errorMsgs}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    // await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();

    // await expect(standardUser.checkOutPage.errorMsg).toContainText('Error: First Name is required');
    await expect(standardUser.checkOutPage.errorMsg).toContainText(errorMsgs.checkOut.firstNameRequired);
})

test('TC-CKO-003-2: Verify last name empty ',async({standardUser,sampleUserInfo,errorMsgs}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    // await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();

    // await expect(standardUser.checkOutPage.errorMsg).toContainText('Error: Last Name is required');
    await expect(standardUser.checkOutPage.errorMsg).toContainText(errorMsgs.checkOut.lastNameRequired);
})

test('TC-CKO-003-3: Verify postal code empty ',async({standardUser,sampleUserInfo,errorMsgs}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    // await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();

    // await expect(standardUser.checkOutPage.errorMsg).toContainText('Error: Postal Code is required');
    await expect(standardUser.checkOutPage.errorMsg).toContainText(errorMsgs.checkOut.postalCodeRequired);
})

test('TC-CKO-005: Verify the cancel button',async({standardUser,systemLabels}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    
    // await expect(standardUser.checkOutPage.title).toContainText('Checkout: Your Information');
    await expect(standardUser.checkOutPage.title).toContainText(systemLabels.checkOut.step1Title);

    await standardUser.checkOutPage.clickCancelBtn();
    
    await expect(standardUser.cartPage.checkOutBtn).toBeVisible();
})

test('TC-CKO-006: Verify the items in checkout page',async({standardUser,sampleUserInfo}) => {
    const product1 = {
        name: 'Sauce Labs Bolt T-Shirt',
        desc: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        price: '15.99'

    }
    const product2 = {
        name: 'Sauce Labs Backpack',
        desc: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        price: '29.99'
    }

    await standardUser.homePage.addToCart(product1.name);
    
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(product2.name);
    
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();

    await expect(standardUser.checkOutPage.checkOutItemsName).toContainText([
        product1.name,
        product2.name
    ]);

    await expect(standardUser.checkOutPage.checkOutItemsDesc).toContainText([
        product1.desc,
        product2.desc
    ]);

    await expect(standardUser.checkOutPage.checkOutItemsPrice).toContainText([
        product1.price,
        product2.price
    ]);
    
})

test('TC-CKO-010: Verify the total price calculation',async({standardUser,sampleUserInfo}) => {
    const product1 = {
        name: 'Sauce Labs Bolt T-Shirt',
        desc: 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.',
        price: '15.99'

    }
    const product2 = {
        name: 'Sauce Labs Backpack',
        desc: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
        price: '29.99'
    }

    const totalPrice = calculateTotalPrice([parseFloat(product1.price),parseFloat(product2.price)]);

    // console.log(totalPrice);

    await standardUser.homePage.addToCart(product1.name);
    
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(product2.name);
    
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();

    await expect(standardUser.checkOutPage.subTotalLabel).toContainText(totalPrice.itemTotal);
    await expect(standardUser.checkOutPage.taxLabel).toContainText(totalPrice.tax);
    await expect(standardUser.checkOutPage.totalLabel).toContainText(totalPrice.total);
    
})

test('TC-CKO-011: Verify the cancel button in Checkout: Overview',async({standardUser,sampleUserInfo,systemLabels}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();

    // await expect(standardUser.checkOutPage.title).toContainText('Checkout: Overview');
    await expect(standardUser.checkOutPage.title).toContainText(systemLabels.checkOut.step2Title);

    await standardUser.checkOutPage.clickCancelBtn()
    await expect(standardUser.homePage.sortSelection).toBeVisible();  
})

test('TC-CKO-012: Verify the finish button in Checkout: Overview',async({standardUser,sampleUserInfo,systemLabels}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();
    await standardUser.checkOutPage.clickFinishBtn();
    
    // await expect(standardUser.checkOutPage.title).toContainText('Checkout: Complete!')
    await expect(standardUser.checkOutPage.title).toContainText(systemLabels.checkOut.completeTitle)
})

test('TC-CKO-013: Verify the orders success message',async({standardUser,sampleUserInfo,systemLabels}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();
    await standardUser.checkOutPage.clickFinishBtn();
    
    await expect(standardUser.checkOutPage.title).toContainText(systemLabels.checkOut.completeTitle);
    await expect(standardUser.checkOutPage.completeHeader).toContainText(systemLabels.checkOut.completeHeader);
    await expect(standardUser.checkOutPage.completeText).toContainText(systemLabels.checkOut.completeText);

})

test('TC-CKO-014: Verify the back home button',async({standardUser,sampleUserInfo,systemLabels}) => {
    const productName1 = 'Sauce Labs Bolt T-Shirt';
    const productName2 = 'Sauce Labs Backpack';

    await standardUser.homePage.addToCart(productName1);
    await expect(standardUser.homePage.itemCountBadge).toContainText('1');

    await standardUser.homePage.addToCart(productName2);
    await expect(standardUser.homePage.itemCountBadge).toContainText('2');

    await standardUser.homePage.clickToCart();
    await standardUser.cartPage.clickCheckOutBtn();
    await standardUser.checkOutPage.enterFirstName(sampleUserInfo.firstName);
    await standardUser.checkOutPage.enterLastName(sampleUserInfo.lastName);
    await standardUser.checkOutPage.enterPostalCode(sampleUserInfo.postalCost);
    await standardUser.checkOutPage.clickContinueBtn();
    await standardUser.checkOutPage.clickFinishBtn();
    
    await expect(standardUser.checkOutPage.title).toContainText(systemLabels.checkOut.completeTitle);
    
    await standardUser.checkOutPage.clickBackHomeBtn();

    await expect(standardUser.homePage.sortSelection).toBeVisible();
})

