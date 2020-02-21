$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/book.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke Testing online book store",
  "description": "",
  "id": "smoke-testing-online-book-store",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "To Verify Whether user is able to login into online book store provided with valid credential",
  "description": "",
  "id": "smoke-testing-online-book-store;to-verify-whether-user-is-able-to-login-into-online-book-store-provided-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@loginHomePage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a User with \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login into online book store application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "online book store home page should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "smoke-testing-online-book-store;to-verify-whether-user-is-able-to-login-into-online-book-store-provided-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 10,
      "id": "smoke-testing-online-book-store;to-verify-whether-user-is-able-to-login-into-online-book-store-provided-with-valid-credential;;1"
    },
    {
      "cells": [
        "ram",
        "ram"
      ],
      "line": 11,
      "id": "smoke-testing-online-book-store;to-verify-whether-user-is-able-to-login-into-online-book-store-provided-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "To Verify Whether user is able to login into online book store provided with valid credential",
  "description": "",
  "id": "smoke-testing-online-book-store;to-verify-whether-user-is-able-to-login-into-online-book-store-provided-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@loginHomePage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "a User with \"ram\" and \"ram\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "login into online book store application",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "online book store home page should be displayed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ram",
      "offset": 13
    },
    {
      "val": "ram",
      "offset": 23
    }
  ],
  "location": "booksteps.a_User_with_and(String,String)"
});
