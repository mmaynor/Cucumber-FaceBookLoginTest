$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("loginChrome/login.feature");
formatter.feature({
  "line": 1,
  "name": "Loging in using different usernames and passwords that will fail",
  "description": "",
  "id": "loging-in-using-different-usernames-and-passwords-that-will-fail",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ],
      "line": 13,
      "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;;1"
    },
    {
      "cells": [
        "wrongusername",
        "123456"
      ],
      "line": 14,
      "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;;2"
    },
    {
      "cells": [
        "ShankarGarg",
        "wrongpassword"
      ],
      "line": 15,
      "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;;3"
    },
    {
      "cells": [
        "wrongusername",
        "wrongpassword"
      ],
      "line": 16,
      "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5969669936,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "User navigates to Facebook Given \nI am on Facebook login page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"wrongusername\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wrongusername",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterUsername(String)"
});
formatter.result({
  "duration": 523732967,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterPassword(String)"
});
formatter.result({
  "duration": 1451807808,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkFail()"
});
formatter.result({
  "duration": 4700776,
  "status": "passed"
});
formatter.after({
  "duration": 664312036,
  "status": "passed"
});
formatter.before({
  "duration": 4963631593,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "User navigates to Facebook Given \nI am on Facebook login page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 15,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"ShankarGarg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"wrongpassword\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ShankarGarg",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterUsername(String)"
});
formatter.result({
  "duration": 574262820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongpassword",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterPassword(String)"
});
formatter.result({
  "duration": 1933416072,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkFail()"
});
formatter.result({
  "duration": 4421604,
  "status": "passed"
});
formatter.after({
  "duration": 657573300,
  "status": "passed"
});
formatter.before({
  "duration": 5189249141,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "User navigates to Facebook Given \nI am on Facebook login page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 16,
  "name": "Login fail - possible combinations",
  "description": "",
  "id": "loging-in-using-different-usernames-and-passwords-that-will-fail;login-fail---possible-combinations;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I enter username as \"wrongusername\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter password as \"wrongpassword\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wrongusername",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterUsername(String)"
});
formatter.result({
  "duration": 551069724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wrongpassword",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterPassword(String)"
});
formatter.result({
  "duration": 1708321564,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkFail()"
});
formatter.result({
  "duration": 4701597,
  "status": "passed"
});
formatter.after({
  "duration": 675933012,
  "status": "passed"
});
});