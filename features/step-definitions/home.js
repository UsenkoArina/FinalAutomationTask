import { Given, When, Then } from '@wdio/cucumber-framework';
import homePage from '../page-objects/home.page.js';
import { parseMenuExpression } from '../utils/utils.js';
import menuPage from '../page-objects/menu.page.js';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import searchPage from '../page-objects/search.page.js';
import searchResultsPage from '../page-objects/search.results.page.js';


let cart = {
    items: [],
    quantity: 0,
  };


Given('I am on the home page', async function() {
    await homePage.open();
});

When('I select {string} menu item', async function(menuExpression) {
    const menuItems = parseMenuExpression(menuExpression);
    await menuPage.selectMenuItem(menuItems);
});

When('I enter {string} into the search box', async function (searchText) {
    await searchPage.enterSearchText(searchText);
});

When('I clicks on the search button', async function () {
    await searchPage.searchButton.click();
});

Then('The search results should be displayed', async function () {
    const resultsDisplayed = await searchResultsPage.areSearchResultsDisplayed();
    expect(resultsDisplayed).toBe(true);
});


Then('Each result should contain the text {string}', async function (expectedText) {
    const searchResults = await searchResultsPage.getSearchResults();
    expect(searchResults).toBeDefined();

    for (const result of searchResults) {
        const resultText = await result.getText();
        expect(resultText).toMatch(expectedText);
    }
});

Then('The quantity of items in the cart should be {int}', async (expectedQuantity) => {
    expect(cart.quantity).toBe(expectedQuantity);
});
  
Then('The total price in the cart should reflect the correct amount', async () => {
});