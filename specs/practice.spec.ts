import { test, expect } from '../fixtures';
import { TutorialKeywords } from '../pageObjectModel/pageKeywords/tutorialKeywords'
import { tutorialLocators as tutloc } from '../pageObjectModel/pageLocators/tutorialPage'
import { sauceKeywords } from '../pageObjectModel/pageKeywords/sauceKeywords'
import { commonVariables } from '../pageObjectModel/commonVariables'
import { helper } from '../utilities/helper'
import loginData from '../testData/logincred.json'

test.describe('tutorialspoint practice', () => {
  // Run tests sequentially in one single worker process
  test.describe.configure({ mode: 'serial' });

  // ** hooks **
  test.beforeEach(async ({ sharedPage }) => {
    await sharedPage.goto(commonVariables.tutorialSpoint);
  })

  // ** Test Cases **
  test.describe('Iframe and Popup Tab Management', () => {

    test('has title and handles multiple iframe popups smoothly', async ({ sharedPage }) => {
      const tutKey = new TutorialKeywords(sharedPage);

      await tutKey.navigateToFramesSection();
      const page1 = await tutKey.clickIframeLinkAndGetPopup(tutloc.frame1, tutloc.navigationbutton);
      await expect(page1).toHaveTitle(/.*Tutorial.*/i);

      await sharedPage.goto(commonVariables.tutorialSpoint);
      await tutKey.navigateToFramesSection();

      const page2 = await tutKey.clickIframeLinkAndGetPopup(tutloc.frame2, tutloc.navigationbutton);
      await expect(page2).not.toBeNull();
      await tutKey.waitForPageLoad();
    });

  });
})

test.describe('Sauce demo practice', () => {
  // Run tests sequentially in one single worker process
  test.describe.configure({ mode: 'serial' });

  // ** hooks **
  test.beforeEach(async ({ sharedPage }) => {
    await sharedPage.goto(commonVariables.sauceDemo);
  })

  // ** Test Cases **
  for (const data of loginData) {
    const currentIndex = loginData.indexOf(data)
    const isSuccessfulLogin = [0, 2, 3].includes(currentIndex)

    test(`has title for ${data.id}`, async ({ sharedPage }) => {
      const saucePage = await new sauceKeywords(sharedPage)
      await saucePage.userLogin(data.username, data.password)

      if (isSuccessfulLogin) {
        await saucePage.verifyUserLogin()
      } else {
        await saucePage.verifyloginError()
      }

      const log = await new helper()
      await log.log(`${data.id} logined in successfully`)
    });
  }

  test('shows the expected error message for invalid credentials', async ({ sharedPage }) => {
    const saucePage = new sauceKeywords(sharedPage)

    await saucePage.userLogin('perform', 'secret12')
    await saucePage.verifyloginError(
      'Epic sadface: Username and password do not match any user in this service',
    )
  })
})

test.describe('SauceDemo API Authentication Tests', () => {
  // Run tests sequentially in one single worker process
  test.describe.configure({ mode: 'serial' });

  // Test Case 1: Successful Login (Positive Flow)
  test('Should successfully create a new object with valid payload', async ({ request }) => {
    const response = await request.post('https://api.restful-api.dev/objects', {
      data: {
        name: 'Apple MacBook Pro 16',
        data: {
          year: 2019,
          price: 1849.99,
          CPU: 'Intel Core i9',
          HDD: '1 TB',
        }
      },
      headers: {
        'Content-Type': 'application/json'
      }
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id');
    expect(responseBody.name).toBe('Apple MacBook Pro 16');
    expect(responseBody.data).toHaveProperty('CPU', 'Intel Core i9');
  });
})

test.describe('Sauce Labs homepage visual snapshot', () => {
  test('shows and visually matches the main heading', async ({ sharedPage, browserName }) => {
    test.skip(browserName !== 'chromium', 'Visual baseline is recorded in Chromium');

    await sharedPage.goto(commonVariables.sauceLabsHome, { waitUntil: 'domcontentloaded' });
    await expect(sharedPage).toHaveTitle(/Sauce Labs/i);
    const mainHeading = sharedPage.getByRole('heading', {
      level: 1,
      name: "Verify AI-generated code at the pace it's written.",
    });

    await expect(mainHeading).toBeVisible();
    await expect(mainHeading).toHaveText("Verify AI-generated code at the pace it's written.");
    await expect(mainHeading).toHaveScreenshot('saucelabs-main-heading.png', {
      animations: 'disabled',
    });
  });
});
