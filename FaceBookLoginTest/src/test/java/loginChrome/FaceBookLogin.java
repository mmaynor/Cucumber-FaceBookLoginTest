package loginChrome;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When; 

public class FaceBookLogin { 
   WebDriver driver = null; 
   @Given("^I am on Facebook login page$") 

   @Before
   public void goToFacebook() { 
	   System.setProperty("webdriver.chrome.driver","C:\\Users\\Mine\\Downloads\\chromedriver_win32\\chromedriver.exe");
	   driver = new ChromeDriver(); 
	   driver.navigate().to("https://www.facebook.com/");
   }
   
   @After
   public void after() {
       driver.quit();
   }
	
   @When("^I enter username as \"(.*)\"$") 
   public void enterUsername(String arg1) {   
      driver.findElement(By.id("email")).sendKeys(arg1); 
   }
	
   @When ("^I enter password as \"(.*)\"$") 
   public void enterPassword(String arg1) {
      driver.findElement(By.id("pass")).sendKeys(arg1);
      driver.findElement(By.xpath("// input[@data-testid = 'royal_login_button']")).click();
   } 
	
   @Then("^Login should fail$") 
   public void checkFail() {  
      if(driver.getCurrentUrl().equalsIgnoreCase(
         "https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110")){ 
            System.out.println("Test1 Pass"); 
      } else { 
         System.out.println("Test1 Failed"); 
      } 
   } 
	
   @Then("^Relogin option should be available$") 
   public void checkRelogin() {
	 // new WebDriverWait(driver, 20).until(ExpectedConditions.urlToBe("https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110"));
      if(driver.getCurrentUrl().equalsIgnoreCase(
         "https://www.facebook.com/login/device-based/regular/login/?login_attempt=1&lwv=110")){ 
            System.out.println("Test2 Pass"); 
      } else { 
         System.out.println("Test2 Failed"); 
      } 
   }
} 