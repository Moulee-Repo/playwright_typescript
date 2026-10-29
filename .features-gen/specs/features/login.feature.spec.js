// Generated from: specs\features\login.feature
import { test } from "../../../fixtures.ts";

test.describe('User Login', () => {

  test.describe('Valid <id> Login', () => {

    test('Valid standardUser Login', async ({ Given, When, Then, sharedPage }) => { 
      await Given('User is in SauceDemo', null, { sharedPage }); 
      await When('User enter the "standard_use" and "secret_sauce"', null, { sharedPage }); 
      await Then('User loggedin Successfully', null, { sharedPage }); 
    });

    test('Valid perfromanceglitchuser Login', async ({ Given, When, Then, sharedPage }) => { 
      await Given('User is in SauceDemo', null, { sharedPage }); 
      await When('User enter the "performance_glitch_user" and "secret_sauce"', null, { sharedPage }); 
      await Then('User loggedin Successfully', null, { sharedPage }); 
    });

  });

  test('Invalid users Login', async ({ Given, When, Then, sharedPage }) => { 
    await Given('User is in SauceDemo', null, { sharedPage }); 
    await When('User enters the following credentials', {"dataTable":{"rows":[{"cells":[{"value":"id"},{"value":"username"},{"value":"password"}]},{"cells":[{"value":"standardUser"},{"value":"standard_use"},{"value":"secret_sauce"}]},{"cells":[{"value":"lockedoutuser"},{"value":"locked_out_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"Problemuser"},{"value":"problem_user"},{"value":"secret_sauce"}]},{"cells":[{"value":"InvalidUser"},{"value":"perform"},{"value":"secret12"}]}]}}, { sharedPage }); 
    await Then('User loggedin Successfully', null, { sharedPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('specs\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":8,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":9,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in SauceDemo","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enter the \"standard_use\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"standard_use\"","children":[{"start":16,"value":"standard_use","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":34,"value":"\"secret_sauce\"","children":[{"start":35,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":11,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User loggedin Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given User is in SauceDemo","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When User enter the \"performance_glitch_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":15,"value":"\"performance_glitch_user\"","children":[{"start":16,"value":"performance_glitch_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"\"secret_sauce\"","children":[{"start":46,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":17,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then User loggedin Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":22,"pickleLine":13,"tags":[],"steps":[{"pwStepLine":23,"gherkinStepLine":14,"keywordType":"Context","textWithKeyword":"Given User is in SauceDemo","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When User enters the following credentials","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Outcome","textWithKeyword":"Then User loggedin Successfully","stepMatchArguments":[]}]},
]; // bdd-data-end