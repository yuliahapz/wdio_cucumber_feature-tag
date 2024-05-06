import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

When('user input username with {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('user input password with {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('user should redirect to homepage', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('user click button', () => {
  // Write code here that turns the phrase above into concrete actions
})

When('user login using username {string} and password {string}', (s, s2) => {
  // Write code here that turns the phrase above into concrete actions
})

Given('user is on sauce-demo page', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('user add {string} to cart', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('user should see empty cart', () => {
  // Write code here that turns the phrase above into concrete actions
})

Then('user should see {string} on cart page', (s) => {
  // Write code here that turns the phrase above into concrete actions
})

When('user click cart button', () => {
  // Write code here that turns the phrase above into concrete actions
})

