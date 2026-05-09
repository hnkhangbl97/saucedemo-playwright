import { Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { LoginPage } from "./login-page";
import { HomePage } from "./home-page";
import { ProductDetailPage } from "./product-detail-page";

export class PageManager {
    page: Page;
    basePage: BasePage;
    loginPage: LoginPage;
    homePage: HomePage;
    productDetailPage: ProductDetailPage;
    
    constructor(page: Page) {
        this.page = page;
        this.basePage = new BasePage(page);
        this.loginPage = new LoginPage(page);
        this.homePage = new HomePage(page);
        this.productDetailPage = new ProductDetailPage(page);
    }

}
