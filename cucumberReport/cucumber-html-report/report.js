$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/book.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke Testing online book store",
  "description": "",
  "id": "smoke-testing-online-book-store",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 59,
  "name": "User to login in successfully and buy a book Online (Integration Testing)",
  "description": "",
  "id": "smoke-testing-online-book-store;user-to-login-in-successfully-and-buy-a-book-online-(integration-testing)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@EndToEndAPI"
    },
    {
      "line": 58,
      "name": "@api3"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "a user",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "send request with \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" to login in Online Book store application",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the status code of login should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user should be logged in into Book Application",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "send request to fetch the books based on \"\u003csearchCriteria\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "the status code should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "books based on \"\u003csearchCriteria\u003e\" should be displayed",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "send request with \"\u003cuser_id\u003e\" and \"\u003cbook_id\u003e\" to add the book in cart for Online Book store application",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "the status code should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "book should be successfully added to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "send request to generate the OTP with \"\u003cuser_id\u003e\", \"\u003cbook_id\u003e\" and PaymentID",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "the status code should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "OTP should be generated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "send request to buy the selected book with  \"\u003cuser_id\u003e\", \"\u003cbook_id\u003e\" PaymentID \"\u003cpaymenttype\u003e\" and OTP",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "the status code should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 76,
  "name": "",
  "description": "",
  "id": "smoke-testing-online-book-store;user-to-login-in-successfully-and-buy-a-book-online-(integration-testing);",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "searchCriteria",
        "user_id",
        "book_id",
        "statusCode",
        "paymenttype"
      ],
      "line": 77,
      "id": "smoke-testing-online-book-store;user-to-login-in-successfully-and-buy-a-book-online-(integration-testing);;1"
    },
    {
      "cells": [
        "ram",
        "ram",
        "usertype",
        "1",
        "1",
        "202",
        "NetBanking"
      ],
      "line": 78,
      "id": "smoke-testing-online-book-store;user-to-login-in-successfully-and-buy-a-book-online-(integration-testing);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 78,
  "name": "User to login in successfully and buy a book Online (Integration Testing)",
  "description": "",
  "id": "smoke-testing-online-book-store;user-to-login-in-successfully-and-buy-a-book-online-(integration-testing);;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 58,
      "name": "@api3"
    },
    {
      "line": 58,
      "name": "@EndToEndAPI"
    }
  ]
});
formatter.step({
  "line": 60,
  "name": "a user",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "send request with \"ram\" and \"ram\" to login in Online Book store application",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the status code of login should be \"202\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user should be logged in into Book Application",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "send request to fetch the books based on \"usertype\"",
  "matchedColumns": [
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "the status code should be \"202\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "books based on \"usertype\" should be displayed",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "send request with \"1\" and \"1\" to add the book in cart for Online Book store application",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "the status code should be \"202\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "book should be successfully added to the cart",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "send request to generate the OTP with \"1\", \"1\" and PaymentID",
  "matchedColumns": [
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "the status code should be \"202\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "OTP should be generated successfully",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "send request to buy the selected book with  \"1\", \"1\" PaymentID \"NetBanking\" and OTP",
  "matchedColumns": [
    3,
    4,
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "the status code should be \"202\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "booksteps.a_user()"
});
formatter.result({
  "duration": 379294187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram",
      "offset": 19
    },
    {
      "val": "ram",
      "offset": 29
    }
  ],
  "location": "booksteps.send_request_with_and_to_login_in_Online_Book_store_application(String,String)"
});
formatter.result({
  "duration": 3499908437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202",
      "offset": 36
    }
  ],
  "location": "booksteps.the_status_code_of_login_should_be(String)"
});
formatter.result({
  "duration": 71740,
  "status": "passed"
});
formatter.match({
  "location": "booksteps.user_should_be_logged_in_into_Book_Application()"
});
formatter.result({
  "duration": 53995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usertype",
      "offset": 42
    }
  ],
  "location": "booksteps.send_request_to_fetch_the_books_based_on(String)"
});
formatter.result({
  "duration": 767783993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202",
      "offset": 27
    }
  ],
  "location": "booksteps.the_status_code_should_be(String)"
});
formatter.result({
  "duration": 208425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "usertype",
      "offset": 16
    }
  ],
  "location": "booksteps.books_based_on_should_be_displayed(String)"
});
formatter.result({
  "duration": 148767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 19
    },
    {
      "val": "1",
      "offset": 27
    }
  ],
  "location": "booksteps.send_request_with_and_to_add_the_book_in_cart_for_Online_Book_store_application(String,String)"
});
formatter.result({
  "duration": 1163398007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202",
      "offset": 27
    }
  ],
  "location": "booksteps.the_status_code_should_be(String)"
});
formatter.result({
  "duration": 39647,
  "status": "passed"
});
formatter.match({
  "location": "booksteps.book_should_be_successfully_added_to_the_cart()"
});
formatter.result({
  "duration": 20389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 39
    },
    {
      "val": "1",
      "offset": 44
    }
  ],
  "location": "booksteps.send_request_to_generate_the_OTP_with_and_PaymentID(String,String)"
});
formatter.result({
  "duration": 756877553,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202",
      "offset": 27
    }
  ],
  "location": "booksteps.the_status_code_should_be(String)"
});
formatter.result({
  "duration": 130643,
  "status": "passed"
});
formatter.match({
  "location": "booksteps.otp_should_be_generated_successfully()"
});
formatter.result({
  "duration": 45309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 45
    },
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "NetBanking",
      "offset": 64
    }
  ],
  "location": "booksteps.send_request_to_buy_the_selected_book_with_PaymentID_and_OTP(String,String,String)"
});
formatter.result({
  "duration": 757104856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "202",
      "offset": 27
    }
  ],
  "location": "booksteps.the_status_code_should_be(String)"
});
formatter.result({
  "duration": 52106,
  "status": "passed"
});
});