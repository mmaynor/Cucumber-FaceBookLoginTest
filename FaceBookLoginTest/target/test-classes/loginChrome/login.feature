Feature: Loging in using different usernames and passwords that will fail

 Background: 
   User navigates to Facebook Given 
   I am on Facebook login page
   
Scenario Outline: Login fail - possible combinations
    When I enter username as "<UserName>"
   And I enter password as "<Password>" 
   Then Login should fail 

    Examples: 
      | UserName      | Password      |
      | wrongusername | 123456        |
      | ShankarGarg   | wrongpassword |
      | wrongusername | wrongpassword |