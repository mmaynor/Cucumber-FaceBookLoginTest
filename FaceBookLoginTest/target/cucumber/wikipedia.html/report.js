$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login.feature");
formatter.feature({
  "line": 1,
  "name": "annotation",
  "description": "",
  "id": "annotation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7921666596,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": " User navigates to Facebook Given \n I am on Facebook login page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 8,
      "value": "#Scenario with AND"
    }
  ],
  "line": 9,
  "name": "",
  "description": "",
  "id": "annotation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I enter username as \"TOM\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter password as \"JERRY\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterUsername(String)"
});
formatter.result({
  "duration": 631534695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterPassword(String)"
});
formatter.result({
  "duration": 5675305694,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkFail()"
});
formatter.result({
  "duration": 3334061,
  "status": "passed"
});
formatter.after({
  "duration": 1726319994,
  "status": "passed"
});
formatter.before({
  "duration": 8882855018,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#This is how background can be used to eliminate duplicate steps"
    }
  ],
  "line": 4,
  "name": "",
  "description": " User navigates to Facebook Given \n I am on Facebook login page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 14,
      "value": "#Scenario with BUT"
    }
  ],
  "line": 15,
  "name": "",
  "description": "",
  "id": "annotation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I enter username as \"TOM\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter password as \"JERRY\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Relogin option should be available",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "TOM",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterUsername(String)"
});
formatter.result({
  "duration": 56169552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JERRY",
      "offset": 21
    }
  ],
  "location": "FaceBookLogin.enterPassword(String)"
});
formatter.result({
  "duration": 5316028866,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkFail()"
});
formatter.result({
  "duration": 3134946,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkRelogin()"
});
formatter.result({
  "duration": 2966620,
  "status": "passed"
});
formatter.after({
  "duration": 2161292866,
  "status": "passed"
});
});