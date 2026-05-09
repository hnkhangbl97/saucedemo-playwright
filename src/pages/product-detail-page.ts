import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class ProductDetailPage extends BasePage{
    readonly backToProductsBtn: Locator;
    readonly productName: Locator;


    constructor(page: Page){
        super(page);
        this.backToProductsBtn = page.getByTestId('back-to-products');
        this.productName = page.getByTestId('inventory-item-name');
    }

    async clickBackToProductsBtn(){
        await this.backToProductsBtn.click();
    }
    
}