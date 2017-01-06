# React axe-webdriverjs demo

Test a React project for accessibility with [aXe](https://github.com/dequelabs/axe-core) and Selenium Webdriver, bundled together with [axe-webdriverjs](https://github.com/dequelabs/axe-webdriverjs). This combination ensures you can run all of the necessary accessibility tests including color contrast, which is not supported by JSDOM.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup
```
npm install
```

## Run tests

The webdriver tests can be found in [e2e-test/test.js](e2e-test/test.js). It uses the Mocha framework but you could easily replace that with something else.

In the project directory, start the web server:
```
npm start
```

In a separate tab, run the tests:
```
npm run webdriver
```
The project comes packaged with 0 accessibility violations. You would likely want to write a test for each page and state in your app, including things like opening menus or modal dialogs.
