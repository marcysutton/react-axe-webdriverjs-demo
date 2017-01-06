const WebDriver = require('selenium-webdriver'),
	  AxeBuilder = require('axe-webdriverjs');

const assert = require('assert');

var util = require('util');

describe('aXe demo', function() {
	this.timeout(10000);

	let driver;

	beforeEach(function(done) {
		driver = new WebDriver.Builder()
		  .forBrowser('chrome')
		  .build();

		done();
	});

	afterEach(function(done) {
		driver.quit().then(function() {
			done();
		});
	});

	it('should find no accessibility violations', function(done) {
		driver
		  .get('http://localhost:3000/')
		  .then(function () {
		    new AxeBuilder(driver)
		      .analyze(function (results) {
		      	if (results.violations.length > 0) {
			      	console.log(results.violations.length + ' Accessibility Violations');
			        console.log(results.violations);
			    }
			    else {
			    	console.log('No accessibility violations');
			    }
		        assert.equal(results.violations.length, 0);
		        done();
		      });
		  });
	})
});