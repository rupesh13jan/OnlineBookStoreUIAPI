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

  @loginAPI @api1
  Scenario Outline: To validate whether user is able to login in Online book store application through API
    Given a user
    When send request with "<userName>" and "<password>" to login in Online Book store application
    Then the status code of login should be "<statusCode>"
    And user should be logged in into Book Application

    Examples: 
      | userName | password | statusCode |
      | ram      | ram      |        202 |

  @searchBooksAPI @api2
  Scenario Outline: To validate whether user is able to search books for the requested criteria from API
    Given a user
    When send request to fetch the books based on "<searchCriteria>"
    Then the status code should be "<statusCode>"
    And books based on "<searchCriteria>" should be displayed

    Examples: 
      | searchCriteria | statusCode |
      | usertype       |        200 |

  @EndToEndAPI @api3
  Scenario Outline: User to login in successfully and buy a book Online (Integration Testing)
    Given a user
    When send request with "<userName>" and "<password>" to login in Online Book store application
    Then the status code of login should be "<statusCode>"
    And user should be logged in into Book Application
    When send request to fetch the books based on "<searchCriteria>"
    Then the status code should be "<statusCode>"
    And books based on "<searchCriteria>" should be displayed
    When send request with "<user_id>" and "<book_id>" to add the book in cart for Online Book store application
    Then the status code should be "<statusCode>"
    And book should be successfully added to the cart
    When send request to generate the OTP with "<user_id>", "<book_id>" and PaymentID
    Then the status code should be "<statusCode>"
    And OTP should be generated successfully
    When send request to buy the selected book with  "<user_id>", "<book_id>" PaymentID "<paymenttype>" and OTP
    Then the status code should be "<statusCode>"

    Examples: 
      | userName | password | searchCriteria | user_id | book_id | statusCode | paymenttype |
      | ram      | ram      | usertype       |       1 |       1 |        202 | NetBanking  |
      
      
      @BuyBookEndToEndUI
  Scenario Outline: User to login in successfully and buy a book Online (E2E validation through UI)
    Given a User with "<userName>" and "<password>"
    When login into online book store application
    Then online book store home page should be displayed
    When add book into the cart
    Then Buy Now page should be displayed
    When Clicks on Buy Now
    Then Payment page should be displayed
    When user clicks on add payment
    Then payment should be successfull
    And user should be able to buy the book

    Examples: 
      | userName | password |
      | ram      | ram      |
      
