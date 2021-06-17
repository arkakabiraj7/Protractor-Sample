

'use strict'
const { Given, Then, When, But } = require('cucumber');
const { browser, by, element } = require('protractor');
var chai = require('chai');
const { protractor } = require('protractor');
chai.use(require('chai-smoothie'));
var expect = chai.expect;

var status = false;

let Ec = protractor.ExpectedConditions;



Given('When browser  opens up and  navigate to url {string}', { timeout: 10 * 1000 }, function (url) {
	browser.ignoreSynchronization = true;
	browser.get(url);
	browser.driver.manage().window().maximize();
	browser.driver.manage().timeouts().implicitlyWait(40000);
});


Then('page should be displayed and page title should be {string}', function (titleFromFeatureFile) {

	return browser.wait(Ec.titleIs(titleFromFeatureFile), 13000).then(function () {

		return browser.getTitle().then(function (title) {

			expect(title).to.equal(titleFromFeatureFile);


		})

	});

});

Given('When browser  opens up and  redirect to url {string}', { timeout: 80 * 1000 }, function (url) {

	return browser.getCurrentUrl().then(function (currentUrl) {


		expect(currentUrl).to.equal(url);

	})
});


Then('logo should be properly displayed', { timeout: 10 * 1000 }, function () {

	return element(by.xpath("//div[@class='logo__media']")).isDisplayed().then(function (status) {

		expect(status).to.be.true;

	})

});


Given('When browser  opens up and  get to url {string}', { timeout: 80 * 1000 }, function (url) {
	return element(by.xpath("//*[@id='signonToggle']/button/span")).isEnabled().then(function (status) {

		expect(status).to.be.true;

	})
});


Then('I click on Sign on', { timeout: 80 * 1000 }, function () {


	return element(by.xpath("//*[@id='signonToggle']/button/span")).isEnabled().then(function () {

		expect(true).to.be.true;

		element(by.xpath("//*[@id='signonToggle']/button/span")).click();

	})



});


Then('I click on Sign On Button', { timeout: 80 * 1000 }, function () {

	var iframe = element(by.xpath("//*[@id='ibxForm']/div/iframe"));
	browser.driver.switchTo().frame(iframe.getWebElement());

	return browser.wait(Ec.visibilityOf(element(by.xpath("//*[text()=' Sign On']"))), 12000).then(function () {

		element(by.xpath("//*[text()=' Sign On']")).click();

	})

});


Then('SecureSignOn Page Should be displayed', { timeout: 80 * 1000 }, function () {

	browser.driver.switchTo().defaultContent();

	return browser.wait(Ec.visibilityOf(element(by.xpath("//*[@id='signInMain']/div[2]"))), 12000).then(function () {

		element(by.xpath("//*[@id='signInMain']/div[2]")).isDisplayed().then(function (status) {

			expect(status).to.be.true;
		})


	});






});


Then('I enter userid {string}', { timeout: 80 * 1000 }, function (userid) {

	element(by.name('userId')).sendKeys(userid);

});


When('Click on Continue', { timeout: 80 * 1000 }, function () {

	return element(by.xpath("//*[@id='signInMain']/div[2]/div[4]/button[1]")).isEnabled().then(function () {

		element(by.xpath("//*[@id='signInMain']/div[2]/div[4]/button[1]")).click();
	})

});


Then('I enter password {string} and  page will be displayed', { timeout: 80 * 1000 }, function (pwd) {

	element(by.name('inputPassword')).sendKeys(pwd);

});

When('I  Click on Continue button', { timeout: 80 * 1000 }, function () {
	return element(by.xpath("//*[@id='signInMain']/div[3]/div[2]/button")).isEnabled().then(function () {

		element(by.xpath("//*[@id='signInMain']/div[3]/div[2]/button")).click();
	})
});


Then('i should get the wrong userid id message', { timeout: 80 * 1000 }, function () {


	return browser.wait(Ec.visibilityOf(element(by.xpath("//*[@id='signInMain']/div[1]/div/div/div[2]/p"))), 12000).then(function () {

		element(by.xpath("//*[@id='signInMain']/div[1]/div/div/div[2]/p")).getText().then(function (txt) {


		 	if(txt==="The User ID or password is incorrect. Please try again.")
		 	{
		         expect(true).to.be.true;
			 }

			 else
			 {
				 expect(true).to.be.false;
			 }

		})



	})



});
