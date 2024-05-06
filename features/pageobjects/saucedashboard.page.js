import {$} from '@wdio/globals';

class DashboardPage {
    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-bike-light');
    }

    get cartButton() {
        return $('#shopping_cart_container a');
    }

    async validateOnPage() {
        await browser.pause(2000); 
        
        await expect(this.addToCartButton).toHaveTextContaining("Add to Cart");
    }

    async klikCartButton() {
        
        await this.cartButton.click();

        await this.cartButton.waitForDisplayed({ timeout: 20000 }); 
    }
}

module.exports = new DashboardPage();