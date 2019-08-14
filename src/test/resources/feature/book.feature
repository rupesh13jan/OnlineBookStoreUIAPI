Feature: Smoke Testing

  #Background: set property
   # Given driver path

  @loginHomePage
  Scenario Outline: To Verify Whether user is able to login into online book store provided with valid credential
    Given a User with "<userName>" and "<password>"
    When login into book store application
    Then online book store home page should display

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