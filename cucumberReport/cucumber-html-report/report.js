$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/book.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke Testing",
  "description": "",
  "id": "smoke-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "To validate the users in online book application",
  "description": "",
  "id": "smoke-testing;to-validate-the-users-in-online-book-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@displayUsersAPI"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a user \"\u003cusertype\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "request for users",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validate the status \"\u003cstatus\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "smoke-testing;to-validate-the-users-in-online-book-application;",
  "rows": [
    {
      "cells": [
        "usertype",
        "status"
      ],
      "line": 23,
      "id": "smoke-testing;to-validate-the-users-in-online-book-application;;1"
    },
    {
      "cells": [
        "usertype",
        "200"
      ],
      "line": 24,
      "id": "smoke-testing;to-validate-the-users-in-online-book-application;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "To validate the users in online book application",
  "description": "",
  "id": "smoke-testing;to-validate-the-users-in-online-book-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@displayUsersAPI"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "a user \"usertype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "request for users",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "validate the status \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "usertype",
      "offset": 8
    }
  ],
  "location": "booksteps.a_user(String)"
});
formatter.result({
  "duration": 425404011,
  "status": "passed"
});
formatter.match({
  "location": "booksteps.request_for_users()"
});
formatter.result({
  "duration": 25676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "booksteps.validate_the_status(String)"
});
formatter.result({
  "duration": 4407423615,
  "error_message": "java.lang.ClassCastException: net.serenitybdd.rest.decorators.ResponseDecorated cannot be cast to io.restassured.response.Response\r\n\tat apis.api.apisbookStore.apisMethod(apisbookStore.java:12)\r\n\tat stepdefination.booksteps.validate_the_status(booksteps.java:52)\r\n\tat ✽.Then validate the status \"200\"(src/test/resources/feature/book.feature:20)\r\n",
  "status": "failed"
});
});