import { Page } from './page.js';
import { browser } from '@wdio/globals';


class SearchPage extends Page {
    get searchBox() { return $('#search_query_top'); }
    get searchButton() { return $('button.button-search'); }

  
    

    async enterSearchText(searchText) {
      await this.searchBox.setValue(searchText);
    }
  
    async clickSearchButton() {
      await this.searchButton.click();
    }


  }
  
  export default new SearchPage();