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
	
	@When("^send request with \"([^\"]*)\" and \"([^\"]*)\" to login in Online Book store application$")
	public void send_request_with_and_to_login_in_Online_Book_store_application(String userName, String password) throws Throwable {
		objApi.apiLogin(userName, password);
	}

	@Then("^the status code of login should be \"([^\"]*)\"$")
	public void the_status_code_of_login_should_be(String arg1) throws Throwable {
	   
	}

	@Then("^user should be logged in into Book Application$")
	public void user_should_be_logged_in_into_Book_Application() throws Throwable {
	   
	}
	
	@When("^send request with \"([^\"]*)\" and \"([^\"]*)\" to add the book in cart for Online Book store application$")
	public void send_request_with_and_to_add_the_book_in_cart_for_Online_Book_store_application(String user_id, String book_id) throws Throwable {
		objApi.apiAddToCart(user_id, book_id);
	}

	@When("^book should be successfully added to the cart$")
	public void book_should_be_successfully_added_to_the_cart() throws Throwable {
	   
	}


	@When("^OTP should be generated successfully$")
	public void otp_should_be_generated_successfully() throws Throwable {
	
	}
	
	@When("^send request to generate the OTP with \"([^\"]*)\", \"([^\"]*)\" and PaymentID$")
	public void send_request_to_generate_the_OTP_with_and_PaymentID(String user_id, String book_id) throws Throwable {
		objApi.apiBuyNow(user_id, book_id);
	}



@When("^send request to buy the selected book with  \"([^\"]*)\", \"([^\"]*)\" PaymentID \"([^\"]*)\" and OTP$")
public void send_request_to_buy_the_selected_book_with_PaymentID_and_OTP(String user_id, String book_id,String paymenttype) throws Throwable {
	objApi.apiFinalAPI( user_id,  book_id, paymenttype);
}


@When("^add book into the cart$")
public void add_book_into_the_cart() throws Throwable {
	objBook.addToCartUI();
   
}

@Then("^Buy Now page should be displayed$")
public void buy_Now_page_should_be_displayed() throws Throwable {
  
}

@When("^Clicks on Buy Now$")
public void clicks_on_Buy_Now() throws Throwable {
	objBook.buyNow();
}

@Then("^Payment page should be displayed$")
public void payment_page_should_be_displayed() throws Throwable {
   
}

@When("^user clicks on add payment$")
public void user_clicks_on_add_payment() throws Throwable {
	objBook.addPayment();
}

@Then("^payment should be successfull$")
public void payment_should_be_successfull() throws Throwable {
   
}

@Then("^user should be able to buy the book$")
public void user_should_be_able_to_buy_the_book() throws Throwable {
   
}


}