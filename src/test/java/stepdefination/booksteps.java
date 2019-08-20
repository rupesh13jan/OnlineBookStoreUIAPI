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

	@When("^login into online book store application$")
	public void login_into_online_book_store_application() throws Throwable {
		System.out.println("User is able to login");
	}

	@Then("^online book store home page should be displayed$")
	public void online_book_store_home_page_should_be_displayed() throws Throwable {
		objBook.verificationHomePage();
	}

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
	
	@When("^enters \"([^\"]*)\" in the search option$")
	public void enters_in_the_search_option(String searchCriteria) throws Throwable {
		objBook.enterSearchCritera(searchCriteria);
	}

	@When("^press enter key$")
	public void press_enter_key() throws Throwable {
		objBook.pressEnterKeys();  
	}

	@Then("^books related to \"([^\"]*)\" should be displayed$")
	public void books_related_to_should_be_displayed(String arg1) throws Throwable {
		objBook.verificationSearchCritera(); 
	}
	
	@Given("^a user$")
	public void a_user() throws Throwable {
	}

	@When("^send request to fetch the books based on \"([^\"]*)\"$")
	public void send_request_to_fetch_the_books_based_on(String searchCriteria) throws Throwable {
		objApi.apiSearchBooks(searchCriteria);
	}

	@Then("^the status code should be \"([^\"]*)\"$")
	public void the_status_code_should_be(String statusCode) throws Throwable {
	}

	@Then("^books based on \"([^\"]*)\" should be displayed$")
	public void books_based_on_should_be_displayed(String searchCriteria) throws Throwable {
	}

}