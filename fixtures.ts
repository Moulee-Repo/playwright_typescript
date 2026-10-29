import { Page } from '@playwright/test';
import { test as base } from 'playwright-bdd';

// Define the types for your custom fixtures
type MyFixtures = {
  sharedPage: Page;
};

// Extend the base test runner with your custom fixture
export const test = base.extend<MyFixtures>({
  sharedPage: async ({ browser }, use) => {
    // 1. SETUP: Perform login sequence
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // 2. PASS TO TEST: Pass the configured page to the test
    await use(page);

    // 3. TEARDOWN: Runs automatically after the test finishes
    await context.close()
  },
});

export { expect } from '@playwright/test';
