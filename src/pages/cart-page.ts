import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CartPage extends BasePage{
    readonly checkOutBtn: Locator;
    
    constructor(page: Page){
        super(page);
        this.checkOutBtn = page.getByTestId('checkout');
    }

    
}