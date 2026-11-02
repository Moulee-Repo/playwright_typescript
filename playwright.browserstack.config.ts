import { defineConfig } from '@playwright/test';
import nativeConfig from './playwright.native.config';
import { createBrowserStackProject } from './utilities/browserstack';

export default defineConfig({
  ...nativeConfig,
  projects: [createBrowserStackProject()],
});
