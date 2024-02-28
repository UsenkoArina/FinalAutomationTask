import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductPage extends Page {
    get productTitle() { return $('.name'); }
    get productPrice() { return $('#our_price_display'); }
    get firstSize() { return $('#uniform-group_1'); }
    get SecondColorButton() { return $('.color_pick selected'); }
    get addToCartButton() { return $('#add_to_cart'); }
    get cartButton(){return $('.shopping_cart');}
}

export default new ProductPage();