$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login/login.feature");
formatter.feature({
  "line": 1,
  "name": "annotation",
  "description": "",
  "id": "annotation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11874350103,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": " User navigates to Facebook Given \n I am on Facebook login page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Scenario with AND"
    }
  ],
  "line": 8,
  "name": "",
  "description": "",
  "id": "annotation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I enter username as \"TOM\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter password as \"JERRY\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 154493367,
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
  "duration": 5353931491,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkFail()"
});
formatter.result({
  "duration": 4720893,
  "status": "passed"
});
formatter.after({
  "duration": 1990525781,
  "status": "passed"
});
formatter.before({
  "duration": 11882499482,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": " User navigates to Facebook Given \n I am on Facebook login page",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "comments": [
    {
      "line": 13,
      "value": "#Scenario with BUT"
    }
  ],
  "line": 14,
  "name": "",
  "description": "",
  "id": "annotation;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I enter username as \"TOM\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter password as \"JERRY\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Login should fail",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
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
  "duration": 60192514,
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
  "duration": 5327834178,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkFail()"
});
formatter.result({
  "duration": 3644025,
  "status": "passed"
});
formatter.match({
  "location": "FaceBookLogin.checkRelogin()"
});
formatter.result({
  "duration": 15792579178,
  "status": "passed"
});
formatter.after({
  "duration": 2113358497,
  "status": "passed"
});
});