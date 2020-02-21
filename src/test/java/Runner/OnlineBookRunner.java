package Runner;


import cucumber.api.CucumberOptions;
import net.serenitybdd.cucumber.CucumberWithSerenity;
import org.junit.runner.RunWith;

@RunWith(CucumberWithSerenity.class)
@CucumberOptions(
		features = "src/test/resources/feature/book.feature"
		,glue={"stepdefination"},
		plugin={"pretty", "html:cucumberReport/cucumber-html-report","json:cucumberReport/cucumber-report.json"}
		,tags={"@loginHomePage,@searchBooksUI"}
		//,tags={"@displayUsersAPI"}
		//,tags={"@searchBooksUI"}
		//,tags={"@searchBooksAPI"}
		//,tags={"@loginAPI"}
		//,tags={"@EndToEndAPI"}
		//,tags={"@BuyBookEndToEndUI"}
		)

public class OnlineBookRunner {

}
