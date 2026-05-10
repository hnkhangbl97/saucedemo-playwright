import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { LoginPage } from "./login-page";
import { HomePage } from "./home-page";
import { ProductDetailPage } from "./product-detail-page";
import { CartPage } from "./cart-page";
import { CheckOutPage } from "./checkout-page";

export class PageManager {
    page: Page;
    basePage: BasePage;
    loginPage: LoginPage;
    homePage: HomePage;
    productDetailPage: ProductDetailPage;
    cartPage: CartPage;
    checkOutPage: CheckOutPage;
    
    constructor(page: Page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.productDetailPage = new ProductDetailPage(page);
        this.cartPage = new CartPage(page);
        this.checkOutPage = new CheckOutPage(page);
    }

}
