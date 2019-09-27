package apis.api;

import static org.hamcrest.Matchers.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import com.google.gson.JsonArray;
import com.google.gson.JsonParser;

import static net.serenitybdd.rest.SerenityRest.*;
import io.restassured.response.Response;

public class apisbookStore {
	
	public static String paymentID;
	public static String otp;

	public static void apisMethod()
	{
	com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().header("Content-Type","application/json").when().get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/displayUsers");
	response.then().assertThat().statusCode(200);
	
	System.out.println(response.asString());
	
}
	
	public static void apiSearchBooks(String searchCriteria)
	{
	com.jayway.restassured.response.Response response= given().relaxedHTTPSValidation().header("Content-Type","application/json").when().get("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/viewBooks/e");
	response.then().assertThat().statusCode(200);
	response.prettyPrint();
	
}
	
	public static void apiLogin(String userName, String password) throws IOException
	{
		Path path = Paths.get("src/test/resources/api/body/loginAPI.json");
		String json = new String(Files.readAllBytes(path));
		json=json.replace("UID", userName).replace("Password", password);
		
		com.jayway.restassured.response.Response response=given().relaxedHTTPSValidation().contentType("application/json").when().body(json).post("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/loginapi");
		response.then().assertThat().statusCode(202);
	response.prettyPrint();
	
}
	
	public static String apiAddToCart(String user_id, String book_id) throws IOException
	{
		Path path = Paths.get("src/test/resources/api/body/addToCart.json");
		String json = new String(Files.readAllBytes(path));
		json=json.replace("userid", user_id).replace("bookid", book_id);
		
		com.jayway.restassured.response.Response response=given().relaxedHTTPSValidation().contentType("application/json").when().body(json).post("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/addToCart");
		response.prettyPrint();
		response.then().assertThat().statusCode(202);
		 paymentID=response.jsonPath().getString("OrderID.paymentID");
		 paymentID=paymentID.replace("[", "").replace("]", "");
	return paymentID;
	
}
	public static String apiBuyNow(String user_id, String book_id) throws IOException
	{
		JsonArray js = new JsonArray();
		Path path = Paths.get("src/test/resources/api/body/buyNowAPI.json");
		String json = new String(Files.readAllBytes(path));
		json=json.replace("USERID", user_id).replace("bookID", book_id).replace("paymentId", paymentID);
		
		com.jayway.restassured.response.Response response=given().relaxedHTTPSValidation().contentType("application/json").when().body(json).post("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/buynow");
		response.then().assertThat().statusCode(202);
		response.prettyPrint();
		String[] arr=response.getBody().asString().split(",");
		String[] arr1=arr[arr.length-1].split(":");
		
		System.out.println(arr1[1].split("\n")[0].substring(1, arr1[1].split("\n")[0].length()));
		otp=arr1[1].split("\n")[0].substring(1, arr1[1].split("\n")[0].length());
		System.out.println(response.getBody().asString());
		
	return otp;
	
}
	
	public static void apiFinalAPI(String user_id, String book_id,String paymenttype) throws IOException
	{
		
		Path path = Paths.get("src/test/resources/api/body/finalAPI.json");
		String json = new String(Files.readAllBytes(path));
		json=json.replace("UID", user_id).replace("BID", book_id).replace("PID", paymentID).replace("Ptype", paymenttype).replace("finalOTP", otp);
		
		com.jayway.restassured.response.Response response=given().relaxedHTTPSValidation().contentType("application/json").when().body(json).post("http://onlinebookstorecognizant.us-east-2.elasticbeanstalk.com/addpayment");
		response.then().assertThat().statusCode(202);
		response.prettyPrint();
		System.out.println(response.getBody().asString());
		

	
}
	}