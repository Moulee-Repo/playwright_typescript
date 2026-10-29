import { type Page, type Locator } from '@playwright/test';
import { tutorialLocators as locator } from '../pageLocators/tutorialPage';

export class TutorialKeywords {
  // 1. Keep locators encapsulated inside the Page Object
  private readonly page: Page;
//   private readonly locator : tutorialLocators;

  constructor(page: Page) {
    this.page = page;
    // this.locator = new tutorialLocators()
  }

  // Base navigation actions
  async navigateToFramesSection(): Promise<void> {
    await this.page.locator(locator.AlertsFramesWindowsLabel).click();
    await this.page.locator(locator.frameLabel).click();
  }

  /**
   * Correctly handles clicking a link inside an iframe that opens a new browser tab/popup
   * @param frameSelector The css selector for the iframe container
   * @param elementSelector The element inside the iframe to click
   */
  async clickIframeLinkAndGetPopup(frameSelector: string, elementSelector: string): Promise<Page> {
    // Both operations must start concurrently to avoid race-condition deadlocks.
    // Some popup pages can close immediately after opening, so guard the load-state check.
    const [popupPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator(frameSelector).locator(elementSelector).click()
    ]);

    if (!popupPage.isClosed()) {
      await popupPage.waitForLoadState('domcontentloaded').catch(() => undefined);
    }

    return popupPage;
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('load');
  }
}