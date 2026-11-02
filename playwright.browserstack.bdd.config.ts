import { defineConfig } from '@playwright/test';
import bddConfig from './playwright.bdd.config';
import { createBrowserStackProject } from './utilities/browserstack';

export default defineConfig({
  ...bddConfig,
  projects: [createBrowserStackProject()],
});
