import {$} from '@wdio/globals'

class CartPage {
    get checkoutButton() {
        return $('#checkout');
    }

    async validateOnPage() {
        await browser.pause(2000); // Pause for 2 seconds (adjust as needed)
        
        await expect(this.checkoutButton).toHaveText("checkout");
    }
}

module.exports = new CartPage();
