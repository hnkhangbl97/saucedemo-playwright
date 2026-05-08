import { ERROR_MESSAGES } from "../data/error-messages";
import { PageManager } from "../pages/page-manager";
import { test as base } from '@playwright/test';

type MyFixtures = {
    errorMsgs: typeof ERROR_MESSAGES
}

export const test = base.extend<MyFixtures>({
    errorMsgs: async({},use)=>{
        await use(ERROR_MESSAGES);
    }
});

export { expect } from '@playwright/test';