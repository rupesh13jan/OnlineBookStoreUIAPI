package ui.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Managed;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;


public class onlineBookPages extends PageObject{
	
	//@Managed	
	// WebDriver webdriver;
	public  void signInApp(String userName,String password) throws InterruptedException
	{
	//System.setProperty("webdriver.chrome.driver","D:\\chromedriver.exe");
getDriver().get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com");
	//webdriver.get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com");
	WebElement userName1=getDriver().findElement(By.xpath("//*[@name='username']"));
	userName1.sendKeys(userName);
	WebElement password1=getDriver().findElement(By.xpath("//*[@name='password']"));
	password1.sendKeys(password);
	WebElement btnSigIn=getDriver().findElement(By.xpath("//*[@value='Sign In']"));
	btnSigIn.click();
	Thread.sleep(3000);
	
	}
	
	public  void verificationHomePage()
	{
		String title=getDriver().getTitle();
		Assert.assertEquals("Tile is matching", "Login Page", title);
		getDriver().quit();
	}
	
}