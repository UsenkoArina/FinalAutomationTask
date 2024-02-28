import { Page } from './page.js';
import { browser } from '@wdio/globals';


class SearchPage extends Page {
    get searchBox() { return $('#search_query_top'); }
    get searchButton() { return $('button.button-search'); }

  
    // searchResultsLink = 'http://www.automationpractice.pl/index.php?controller=search&orderby=position&orderway=desc&search_query=Blouse&submit_search=';

    async enterSearchText(searchText) {
      await this.searchBox.setValue(searchText);
    }
  
    async clickSearchButton() {
      await this.searchButton.click();
    }

    // async openSearchResults() {
    //     await browser.navigateTo(this.searchResultsLink);
    // }


  }
  
  export default new SearchPage();