package ui.pages;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import net.serenitybdd.core.annotations.findby.FindBy;
import net.serenitybdd.core.pages.PageObject;
import net.serenitybdd.core.pages.WebElementFacade;
import net.thucydides.core.annotations.Managed;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class onlineBookPages extends PageObject {

	
	@FindBy(xpath="//*[@name='username']")
	WebElementFacade txtUserName;
	
	@FindBy(xpath="//*[@name='password']")
	WebElementFacade txtPassword;
	
	@FindBy(xpath="//*[@value='Sign In']")
	WebElementFacade btnSigIn;
	
	@FindBy(xpath="//*[@id='searchBook']")
	WebElementFacade txtSearchBox;
	
	@FindBy(xpath="//*[@src='/resources/Eat.jpg']")
	WebElementFacade lblSearchBooks;
	
	public void signInApp(String userName, String password) throws InterruptedException {
		getDriver().get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com");
		getDriver().manage().window().maximize();
		txtUserName.sendKeys(userName);
		txtPassword.sendKeys(password);
		btnSigIn.click();
		getDriver().manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
	}

	public void verificationHomePage() {
		String title = getDriver().getTitle();
		Assert.assertEquals("Tile is matching", "Login Page", title);
	}
	
	public void enterSearchCritera(String searchCriteria) {
		txtSearchBox.sendKeys(searchCriteria);
	}
	
	public void pressEnterKeys() {
		txtSearchBox.sendKeys(Keys.ENTER);
	}
	
	public void verificationSearchCritera() {
		Assert.assertEquals(true, lblSearchBooks.isDisplayed());
		getDriver().quit();
	}

}