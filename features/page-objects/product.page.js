import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get productTitle() { return $('[itemprop="name"]'); }
    get productPrice() { return $('#our_price_display'); }
    get SecondColorButton() { return $('#color_14'); }
    get addToCartButton() { return $('#add_to_cart'); }
    get cartButton(){return $('.shopping_cart');}
}

export default new ProductPage();