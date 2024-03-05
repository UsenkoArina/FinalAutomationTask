import { Page } from './page.js';
import { browser } from '@wdio/globals';

class SearchResultsPage extends Page {
  // REVIEW: Did you see that #search ID corresponds to the whole page?
  // You will basically check if all of the page contains your "Blouse" text
  // So even if you search for somehting that doesn't exist, the test will pass because the page will always contain the text you entered in the input field.
  // The entered text is also visible on error message when nothing is found, so it will make the test pass regardless of the outcome.
  get searchResults() { return $$('#search'); }

  async getSearchResults() {
    return this.searchResults;
  }

  async areSearchResultsDisplayed() {
    // REVIEW: What if the search results load a bit longer?
    // The $$() function doesn't wait on anything, just returns whatever is on the page.
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
