import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CartPage extends BasePage{
    readonly checkOutBtn: Locator;
    readonly continueShoppingBtn: Locator; 

    constructor(page: Page){
        super(page);
        this.checkOutBtn = page.getByTestId('checkout');
        this.continueShoppingBtn = page.getByTestId('continue-shopping');
    }

    async clickCheckOutBtn(){
        await this.checkOutBtn.click();
    }

    async clickContinueShoppingBtn(){
        await this.continueShoppingBtn.click();
    }
    
}