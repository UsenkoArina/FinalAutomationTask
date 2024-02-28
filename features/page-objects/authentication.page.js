import { Page } from './page.js';
import { browser } from '@wdio/globals';

class AuthenticationPage extends Page {
    get authenticationPageTitle() { return $('.authentication-page-title'); }

    async open() {
        const url = 'http://www.automationpractice.pl/index.php?controller=authentication&back=http%3A%2F%2Fwww.automationpractice.pl%2Findex.php%3Fcontroller%3Dorder%26step%3D1';
        await browser.url(url);
        await this.authenticationPageTitle.waitForDisplayed();
    }

    
}

export default new AuthenticationPage();