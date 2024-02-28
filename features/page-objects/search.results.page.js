import { Page } from './page.js';
import { browser } from '@wdio/globals';
//search
class SearchResultsPage extends Page {
  get searchResults() { return $$('#search'); }

  async getSearchResults() {
    return this.searchResults;
  }

  async areSearchResultsDisplayed() {
    return await this.searchResults.length > 0;
  }

  async doSearchResultsContainText(expectedText) {
    for (const result of this.searchResults) {
      const resultText = await result.getText();
      if (!resultText.includes(expectedText)) {
        return false;
      }
    }
    return true;
  }
}

export default new SearchResultsPage();
