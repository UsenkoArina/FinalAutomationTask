import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    // REVIEW: Not a good name for image selector. It's not the product name.
    // get productName() { return $('.product-container .product-name'); }
    get productName() { return $('.product_img_link'); }
}


export default new ProductsPage();
