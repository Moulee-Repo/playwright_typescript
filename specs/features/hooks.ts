import { test, expect ,Page, BrowserContext, Browser,chromium } from '@playwright/test';
// import { BeforeAll, AfterAll, Before, After } from '@cucumber/cucumber';

export let browser: Browser;
export let context: BrowserContext;
export let sharedPage: Page

test.beforeAll(async function () {
    // browser = await chromium.launch({ headless: false });
    // context = await browser.newContext();
    // sharedPage = await context.newPage();
});

test.beforeEach(async function () {
});

test.afterEach(async function () {
  if (context) await context.close();
});

test.afterAll(async function () {
  if (browser) await browser.close();
});