import 'dotenv/config';
import { createRequire } from 'node:module';

const require = createRequire(__filename);
const { version: playwrightVersion } = require('@playwright/test/package.json') as {
  version: string;
};

export function createBrowserStackProject() {
  const username = process.env.BROWSERSTACK_USERNAME;
  const accessKey = process.env.BROWSERSTACK_ACCESS_KEY;

  if (!username || !accessKey) {
    throw new Error(
      'BrowserStack execution requires BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY. ' +
        'Set them in .env or as environment variables.',
    );
  }

  const capabilities = {
    browser: 'playwright-chromium',
    browser_version: process.env.BROWSERSTACK_BROWSER_VERSION || 'latest',
    os: process.env.BROWSERSTACK_OS || 'Windows',
    os_version: process.env.BROWSERSTACK_OS_VERSION || '11',
    project: process.env.BROWSERSTACK_PROJECT_NAME || 'Playwright TypeScript',
    build:
      process.env.BROWSERSTACK_BUILD_NAME ||
      `Playwright-${new Date().toISOString().replace(/[:.]/g, '-')}`,
    name: 'Playwright test suite',
    'browserstack.username': username,
    'browserstack.accessKey': accessKey,
    'client.playwrightVersion': playwrightVersion,
  };

  return {
    name: 'BrowserStack Chromium',
    use: {
      browserName: 'chromium' as const,
      connectOptions: {
        wsEndpoint:
          'wss://cdp.browserstack.com/playwright?caps=' +
          encodeURIComponent(JSON.stringify(capabilities)),
        timeout: 60_000,
      },
    },
  };
}
