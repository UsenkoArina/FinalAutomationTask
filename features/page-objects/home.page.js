import { Page } from './page.js';
import { browser } from '@wdio/globals';

class HomePage extends Page {

    async open() {
        await browser.navigateTo('http://www.automationpractice.pl/');
    }

}

 export default new HomePage();