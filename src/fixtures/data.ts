import { ERROR_MESSAGES } from "../data/error-messages";
import {LABELS} from '../data/labels';
import { test as base } from '@playwright/test';

type userInfo = {
    firstName: string,
    lastName: string,
    postalCost: string,
}

type MyFixtures = {
    errorMsgs: typeof ERROR_MESSAGES,
    systemLabels: typeof LABELS
    sampleUserInfo: userInfo
}

export const test = base.extend<MyFixtures>({
    errorMsgs: async({},use)=>{
        await use(ERROR_MESSAGES);
    },

    systemLabels: async({},use)=>{
        await use(LABELS);
    },

    sampleUserInfo: async({},use) => {
        await use({
            firstName: 'testFirstname',
            lastName: 'testLastName',
            postalCost: '70000'
        }) 
    }
});

export { expect } from '@playwright/test';