import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage{
    readonly shoppingCart: Locator;
    readonly burgerMenuBtn: Locator;
    readonly logOutBtn: Locator;
    readonly sauceLabsBackpackImg: Locator;

    constructor(page: Page){
        super(page);
        this.shoppingCart = page.locator('#shopping_cart_container');
        this.burgerMenuBtn = page.locator('#react-burger-menu-btn');
        this.logOutBtn = page.getByRole('link',{name: 'Logout'});
        this.sauceLabsBackpackImg = page.getByTestId('inventory-item-sauce-labs-backpack-img');
    }

    async clickBurgerMenuBtn(){
        await this.burgerMenuBtn.click();
    }

    async clickLogOutBtn(){
        await this.logOutBtn.click();
    }
    

}