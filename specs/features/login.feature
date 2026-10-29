Feature: User Login
  Description:
  Scenario Outline: Valid <id> Login
    Given User is in SauceDemo
    When User enter the "<username>" and "<password>"
    Then User loggedin Successfully

    Examples:
      | id                    | username                | password     |
      | standardUser          | standard_use            | secret_sauce |
      | perfromanceglitchuser | performance_glitch_user | secret_sauce |

  Scenario: Invalid users Login
    Given User is in SauceDemo
    When User enters the following credentials
      | id            | username        | password     |
      | standardUser  | standard_use    | secret_sauce |
      | lockedoutuser | locked_out_user | secret_sauce |
      | Problemuser   | problem_user    | secret_sauce |
      | InvalidUser   | perform         | secret12     |
    Then User loggedin Successfully

