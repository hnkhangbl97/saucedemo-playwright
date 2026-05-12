import { Locator, LocatorScreenshotOptions, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CheckOutPage extends BasePage{
    readonly title: Locator;
    readonly continueBtn: Locator;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly errorMsg: Locator;
    readonly cancelBtn: Locator;
    readonly checkOutItemsName: Locator;
    readonly checkOutItemsDesc: Locator;
    readonly checkOutItemsPrice: Locator;
    readonly subTotalLabel: Locator;
    readonly taxLabel: Locator;
    readonly totalLabel: Locator;
    readonly finishBtn: Locator;
    readonly completeHeader: Locator;
    readonly completeText: Locator;
    readonly backHomeBtn: Locator;

    constructor(page: Page){
        super(page);
        this.title = page.getByTestId('title');
        this.continueBtn = page.getByTestId('continue');
        this.firstNameInput = page.getByTestId('firstName');
        this.lastNameInput = page.getByTestId('lastName');
        this.postalCodeInput = page.getByTestId('postalCode');
        this.errorMsg = page.getByTestId('error');
        this.cancelBtn = page.getByTestId('cancel');
        this.checkOutItemsName = page.getByTestId('inventory-item-name');
        this.checkOutItemsDesc = page.getByTestId('inventory-item-desc');
        this.checkOutItemsPrice = page.getByTestId('inventory-item-price');

        this.subTotalLabel = page.getByTestId('subtotal-label');
        this.taxLabel = page.getByTestId('tax-label');
        this.totalLabel = page.getByTestId('total-label');

        this.finishBtn = page.getByTestId('finish');

        this.completeHeader = page.getByTestId('complete-header');
        this.completeText = page.getByTestId('complete-text');

        this.backHomeBtn = page.getByTestId('back-to-products');

    }

    async clickContinueBtn(){
        await this.continueBtn.click();
    }

    async enterFirstName(text: string){
        await this.firstNameInput.fill(text);
    }

    async enterLastName(text: string){
        await this.lastNameInput.fill(text);
    }

    async enterPostalCode(text: string){
        await this.postalCodeInput.fill(text);
    }
    
    async clickCancelBtn(){
        await this.cancelBtn.click();
    }

    async clickFinishBtn(){
        await this.finishBtn.click();
    }

    async clickBackHomeBtn(){
        await this.backHomeBtn.click();
    }
}