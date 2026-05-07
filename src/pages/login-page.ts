import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly errorMsg: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginBtn = page.getByRole('button',{name: 'Login'});
        this.errorMsg = page.getByTestId('error');
    }

    async enterUserName(value: string){
        await this.username.fill(value); 
    }
    
    async enterPassword(value: string){
        await this.password.fill(value); 
    }

    async clickLoginBtn(){
        await this.loginBtn.click();
    }


} 