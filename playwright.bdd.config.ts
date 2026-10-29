import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd'; 
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

const testDir = defineBddConfig({
  features: 'specs/features/**/*.feature',
  steps: [
    'specs/features/step_definitions/**/*.ts', 
    'fixtures.ts'
  ],
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  timeout: 30000, // Global test timeout
  expect: {
    timeout: 5000, // Global assertion timeout
  },
  use: {
    actionTimeout: 0, // No action limit globally
    navigationTimeout: 30000,
    trace: 'on-first-retry',
    browserName: 'chromium', // Default browser for all tests
    headless: false,
  },
  // Retry failing tests twice on CI, but 0 times locally
  retries: process.env.CI ? 2 : 0, 
  testDir: testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 2 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { open: 'always', outputFile: 'reports/bdd-results.html' }], // Kept for local interactive debugging
    ['json', { outputFile: 'reports/bdd-results.json' }] // Outputs the structured JSON file
  ],

  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    // { name: 'firefox', use: { browserName: 'firefox' } },
    // { name: 'webkit', use: { browserName: 'webkit' } },
  ],

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
