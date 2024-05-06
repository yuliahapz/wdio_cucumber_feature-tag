import {$} from '@wdio/globals'

class LoginPage {
    get username(){
        return $('#user-name');
    }

    get password(){
        return $('#password');
    }

    get loginButton(){
        return $('#login-button');
    }

    async inputUsername(username) {
        await this.username.setValue(username);
    }

    async inputPassword(password) {
        await this.password.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    open() {
        // Open the URL and then add a delay using browser.pause()
        browser.url('https://www.saucedemo.com/');
        // Add a delay of 2 seconds (2000 milliseconds) before continuing
        browser.pause(2000);
    }
}

module.exports = new LoginPage();