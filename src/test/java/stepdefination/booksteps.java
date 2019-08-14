package stepdefination;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.serenitybdd.core.pages.PageObject;
import ui.pages.onlineBookPages;

import static org.hamcrest.Matcher.*;

import apis.api.apisbookStore;




public class booksteps {
	onlineBookPages objBook = new onlineBookPages();
	apisbookStore objApi= new apisbookStore();
	
	@Given("^a User with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void a_User_with_and(String userName, String password) throws Throwable {
		objBook.signInApp(userName, password);
	}

	@When("^login into book store application$")
	public void login_into_book_store_application() throws Throwable {
		System.out.println("User is able to login");
	}

	@Then("^online book store home page should display$")
	public void online_book_store_home_page_should_display() throws Throwable {
		objBook.verificationHomePage();
	}

	/*@Given("^driver path$")
	public void driver_path() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "D:\\chromedriver.exe");
	}*/

	@Given("^a user \"([^\"]*)\"$")
	public void a_user(String usertype) throws Throwable {
		System.out.println("User is able to login");
	}

	@When("^request for users$")
	public void request_for_users() throws Throwable {

		
	}
	@Then("^validate the status \"([^\"]*)\"$")
	public void validate_the_status(String status) throws Throwable {
		objApi.apisMethod();
	}

}