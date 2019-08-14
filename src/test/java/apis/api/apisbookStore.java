package apis.api;

import static org.hamcrest.Matchers.*;
import static net.serenitybdd.rest.SerenityRest.*;
import io.restassured.response.Response;

public class apisbookStore {

	public static void apisMethod()
	{
	com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().header("Content-Type","application/json").when().get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/displayUsers");
	response.then().assertThat().statusCode(200);
	
	System.out.println(response.asString());
	
}
	}