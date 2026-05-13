import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    protected page: Page;
    readonly socialXIcon: Locator;
    readonly socialFacebookIcon: Locator;
    readonly socialLinkedinIcon: Locator;
    readonly footerCopyText: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.socialXIcon = page.getByTestId('social-twitter');
        this.socialFacebookIcon = page.getByTestId('social-facebook');
        this.socialLinkedinIcon = page.getByTestId('social-linkedin');
        this.footerCopyText = page.getByTestId('footer-copy');
    }

    async clickToSocialXIcon(){
        await this.socialXIcon.click();
    }

    async clickToSocialFacebookICon(){
        await this.socialFacebookIcon.click();
    }

    async clickToSocialLinkedinIcon(){
        await this.socialLinkedinIcon.click();
    }

    
}
