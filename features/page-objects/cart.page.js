import { Page } from './page.js';
import { browser } from '@wdio/globals';

class CartPage extends Page {
    get removeItemButtons() { return $$('.action.delete'); }
    get pageTitle() { return $('.page-title'); }
    get deleteButton(){return $('.icon-trash'); }

    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/index.php?controller=order');
    }

    async removeAllProducts() {
        await browser.waitUntil(async () => {
            try {
                await this.removeItemButtons[0].waitForDisplayed({ timeout: 2000 });
                await this.removeItemButtons[0].click();

                return false;
            } catch {

                return true;
            }
        }, { timeout: 30000 });
    }
}

export default new CartPage();
