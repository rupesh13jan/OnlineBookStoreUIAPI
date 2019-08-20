$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/book.feature");
formatter.feature({
  "line": 1,
  "name": "Smoke Testing",
  "description": "",
  "id": "smoke-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 37,
  "name": "To validate whether user is able to search books for the requester criteria from API",
  "description": "",
  "id": "smoke-testing;to-validate-whether-user-is-able-to-search-books-for-the-requester-criteria-from-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@searchBooksAPI"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "a user",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "send request to fetch the books based on \"\u003csearchCriteria\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the status code should be \"\u003cstatusCode\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "books based on \"\u003csearchCriteria\u003e\" should be displayed",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "smoke-testing;to-validate-whether-user-is-able-to-search-books-for-the-requester-criteria-from-api;",
  "rows": [
    {
      "cells": [
        "searchCriteria",
        "statusCode"
      ],
      "line": 44,
      "id": "smoke-testing;to-validate-whether-user-is-able-to-search-books-for-the-requester-criteria-from-api;;1"
    },
    {
      "cells": [
        "usertype",
        "200"
      ],
      "line": 45,
      "id": "smoke-testing;to-validate-whether-user-is-able-to-search-books-for-the-requester-criteria-from-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 45,
  "name": "To validate whether user is able to search books for the requester criteria from API",
  "description": "",
  "id": "smoke-testing;to-validate-whether-user-is-able-to-search-books-for-the-requester-criteria-from-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 36,
      "name": "@searchBooksAPI"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "a user",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "send request to fetch the books based on \"usertype\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "the status code should be \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "books based on \"usertype\" should be displayed",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "booksteps.a_user()"
});
formatter.result({
  "duration": 339131722,
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
  "duration": 3174881638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 27
    }
  ],
  "location": "booksteps.the_status_code_should_be(String)"
});
formatter.result({
  "duration": 72118,
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
  "duration": 85711,
  "status": "passed"
});
});