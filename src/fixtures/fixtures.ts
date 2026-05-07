import { mergeTests } from '@playwright/test';
import { test as pages } from './pages';
import { test as data } from './data';

export const test = mergeTests(pages, data);
export { expect } from '@playwright/test';