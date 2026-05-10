import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class CheckOutPage extends BasePage{
    readonly checkOutStep1Title: Locator;

    constructor(page: Page){
        super(page);
        this.checkOutStep1Title = page.getByTestId('title');
    }
}