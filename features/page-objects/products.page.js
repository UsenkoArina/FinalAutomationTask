import { Page } from './page.js';
import { browser } from '@wdio/globals';

class ProductsPage extends Page {
    get productName() { return $('.product_img_link'); }
}


export default new ProductsPage();
