import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage{
    readonly shoppingCart: Locator;
    readonly burgerMenuBtn: Locator;
    readonly burgerMenuItems: Locator;

    readonly aboutBtn: Locator;
    readonly resetAppStateBtn: Locator;
    readonly logOutBtn: Locator;
    readonly sauceLabsBackpackImg: Locator;
    readonly itemPrices: Locator;
    readonly sortSelection: Locator;
    readonly productNames: Locator;
    readonly productsDesc: Locator;

    readonly removeBoltTShirtBtn: Locator;
    readonly addBoltTShirtBtn: Locator;

    readonly addBackpackBtn: Locator;
    readonly removeBackpackBtn: Locator;

    readonly itemCountBadge: Locator;

    constructor(page: Page){
        super(page);
        this.shoppingCart = page.locator('#shopping_cart_container');
        this.burgerMenuBtn = page.locator('#react-burger-menu-btn');
        this.burgerMenuItems = page.locator('nav.bm-item-list a');

        this.aboutBtn = page.getByTestId('about-sidebar-link');
        this.resetAppStateBtn = page.getByTestId('reset-sidebar-link');
        this.logOutBtn = page.getByRole('link',{name: 'Logout'});
        this.sauceLabsBackpackImg = page.getByTestId('inventory-item-sauce-labs-backpack-img');
        this.itemPrices = page.getByTestId('inventory-item-price');
        this.sortSelection = page.getByTestId('product-sort-container');
        this.productNames = page.getByTestId('inventory-item-name');
        this.productsDesc = page.getByTestId('inventory-item-description');
        this.removeBoltTShirtBtn = page.getByTestId('remove-sauce-labs-bolt-t-shirt');
        this.addBoltTShirtBtn = page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt');
        this.itemCountBadge = page.getByTestId('shopping-cart-badge');

        this.addBackpackBtn = page.getByTestId('add-to-cart-sauce-labs-backpack');
        this.removeBackpackBtn = page.getByTestId('remove-sauce-labs-backpack');


    }

    async clickBurgerMenuBtn(){
        await this.burgerMenuBtn.click();
    }

    async clickLogOutBtn(){
        await this.logOutBtn.click();
    }
    
    async getAllItemPrices(){
        await this.itemPrices.last().waitFor();

        const prices = await this.itemPrices.all();
        return prices
    }

    async getPricesList(){
        await this.itemPrices.last().waitFor();
        const pricesText = await this.itemPrices.allInnerTexts();
        const prices = pricesText.map(p=> parseFloat(p.replace('$','')));

        return prices
    }

    async getProductNamesList(){
        await this.productNames.last().waitFor();
        return (await this.productNames.allInnerTexts());
    }
    async selectSortType(type: string){
        await this.sortSelection.selectOption(type);

    }

    async clickToProductByName(productName: string){
        await this.productNames.filter({hasText: productName}).click();
        
    }

    async addToCart(productName: string){
        const targetProductName = this.productNames.filter({hasText: productName});
        const targetProductDesc = this.productsDesc.filter({has: targetProductName});
        await targetProductDesc.getByRole('button',{name: 'Add to cart'}).click();
    }

    async clickRemoveBoltTShirtBtn(){
        await this.removeBoltTShirtBtn.click();
    }

    async clickAboutBtn(){
        await this.aboutBtn.click();
    }

    async clickResetAppStateBtn(){
        await this.resetAppStateBtn.click();
    }

    async clickToCart(){
        await this.shoppingCart.click();
    }

}