Feature: Smoke Testing online book store

  @loginHomePage
  Scenario Outline: To Verify Whether user is able to login into online book store provided with valid credential
    Given a User with "<userName>" and "<password>"
    When login into online book store application
    Then online book store home page should be displayed

    Examples: 
      | userName | password |
      | ram      | ram      |

  @displayUsersAPI
  Scenario Outline: To validate the users in online book application
    Given a user "<usertype>"
    When request for users
    Then validate the status "<status>"

    Examples: 
      | usertype | status |
      | usertype |    200 |

  @searchBooksUI
  Scenario Outline: To validate whether user is able to search the books from search option in home page
    Given a User with "<userName>" and "<password>"
    When login into online book store application
    Then online book store home page should be displayed
    When enters "<searchCriteria>" in the search option
    And press enter key
    Then books related to "<searchCriteria>" should be displayed

    Examples: 
      | userName | password | searchCriteria |
      | ram      | ram      | eat            |

  @searchBooksAPI
  Scenario Outline: To validate whether user is able to search books for the requested criteria from API
    Given a user
    When send request to fetch the books based on "<searchCriteria>"
    Then the status code should be "<statusCode>"
    And books based on "<searchCriteria>" should be displayed

    Examples: 
      | searchCriteria | statusCode |
      | usertype |        200 |
