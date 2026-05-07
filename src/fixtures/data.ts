import { PageManager } from "../pages/page-manager";
import { test as base } from '@playwright/test';

type MyFixtures = {
    wrongUserNameOrPasswordErrorMsg: string;
}

export const test = base.extend<MyFixtures>({
    wrongUserNameOrPasswordErrorMsg: async({},use)=>{
        await use('Epic sadface: Username and password do not match any user in this service');
    }
});

export { expect } from '@playwright/test';