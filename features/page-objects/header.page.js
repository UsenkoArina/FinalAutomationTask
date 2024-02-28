import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HeaderPage extends Page {
    get cartButton() { return $('.shopping_cart'); }
    get checkOutButton() { return $('.button_order_cart'); }
    get proceedToCheckoutButton() { return $('button btn btn-default standard-checkout button-medium'); }
    get counterNumber() { return $('.cart_quantity_input form-control grey'); }
}

export default new HeaderPage();