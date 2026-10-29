// import { Given, When, Then } from '@cucumber/cucumber';
import { createBdd } from 'playwright-bdd';
import { test } from '../../../fixtures';
import { TutorialKeywords } from '../../../pageObjectModel/pageKeywords/tutorialKeywords'
import { tutorialLocators as tutloc } from '../../../pageObjectModel/pageLocators/tutorialPage'
import { sauceKeywords } from '../../../pageObjectModel/pageKeywords/sauceKeywords'
import { commonVariables } from '../../../pageObjectModel/commonVariables'
import { helper } from '../../../utilities/helper'
import loginData from '../../../testData/logincred.json'
import { DataTable } from '@cucumber/cucumber';



const { Given, When, Then } = createBdd(test);
let saucePage: any;

Given('User is in SauceDemo', async ({sharedPage}) => {
  await sharedPage.goto(commonVariables.sauceDemo);
});

When('User enter the {string} and {string}', async ({sharedPage}, username : string , password: string) => {
  saucePage = new sauceKeywords(sharedPage)
  await saucePage.userLogin(username, password)
  
});

When('User enters the following credentials', async ({ sharedPage }, dataTable: DataTable) => {
  const saucePage = new sauceKeywords(sharedPage);
  
  // Converts the data table into an array of objects based on headers
  const rows = dataTable.hashes(); 

  // Loop through each row in the data table
  for (const row of rows) {
    const username = row.username;
    const password = row.password;
    const id = row.id; // Optional: use this if your login logic changes based on the user type
    console.log(`Running login step for user type: ${id}`);
    // Execute the login function for each row
    await saucePage.userLogin(username, password);
  }
});

// When('User clicks login button', async ({ sharedPage }) => {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

Then('User loggedin Successfully', async ({ sharedPage }) => {
  // Write code here that turns the phrase above into concrete actions
  await saucePage.verifyUserLogin()
  const log = new helper()
  await log.log(` logined in successfully`)
});

// Given('User signin SauceDemo', async ({ sharedPage }) => {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// When('User added the Product to cart', async ({ sharedPage }) => {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// When('User Procced to checkout', async ({ sharedPage }) => {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });

// Then('User Successfully Placed Order', async ({ sharedPage }) => {
//   // Write code here that turns the phrase above into concrete actions
//   return 'pending';
// });