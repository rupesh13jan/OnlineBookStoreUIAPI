package ui.pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import net.serenitybdd.core.pages.PageObject;
import net.thucydides.core.annotations.Managed;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class onlineBookPages extends PageObject {

	public void signInApp(String userName, String password) throws InterruptedException {
		getDriver().get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com");
		WebElement userName1 = getDriver().findElement(By.xpath("//*[@name='username']"));
		userName1.sendKeys(userName);
		WebElement password1 = getDriver().findElement(By.xpath("//*[@name='password']"));
		password1.sendKeys(password);
		WebElement btnSigIn = getDriver().findElement(By.xpath("//*[@value='Sign In']"));
		btnSigIn.click();
		Thread.sleep(3000);
	}

	public void verificationHomePage() {
		String title = getDriver().getTitle();
		Assert.assertEquals("Tile is matching", "Login Page", title);
		//getDriver().quit();
	}
	
	public void enterSearchCritera(String searchCriteria) {
		WebElement searchTextBox = getDriver().findElement(By.xpath("//*[@id='searchBook']"));
		searchTextBox.sendKeys(searchCriteria);
	}
	
	public void pressEnterKeys() {
		getDriver().findElement(By.xpath("//*[@id='searchBook']")).sendKeys(Keys.ENTER);
	}
	
	public void verificationSearchCritera() {
		WebElement verifyBook=getDriver().findElement(By.xpath("//*[@src='/resources/Eat.jpg']"));
		Assert.assertEquals(true, verifyBook.isDisplayed());
		getDriver().quit();
	}

}