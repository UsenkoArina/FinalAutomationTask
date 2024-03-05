import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import headerPage from '../page-objects/header.page.js';
import homePage from '../page-objects/home.page.js';
import cartPage from '../page-objects/cart.page.js';
import authenticationPage from '../page-objects/authentication.page.js';
// REVIEW: Where is this used? Is it just copied from previous project?
import { priceStringToNumber } from '../utils/utils.js';


When('I click on a product', async function() {
    const productName = await productsPage.productName;
    await productName.waitForDisplayed();
    await productName.click();
    // REVIEW: This was forgotten here probably
    // await browser.debug();
});


When('I select color', async function() {
    // REVIEW: This is wrong. First, "secondColorButton" doesn't exist in your page object, you have defined "SecondColorButton"
    // Second, awaiting and validating an element doesn't make sense. The $() always retruns something regardles of the element being visible.
    // To check something there are "isDisplayed", "isExisting", "waitForDisplayed", etc... methods.
    // const colorElement = await productPage.secondColorButton;
    const colorElement = await productPage.SecondColorButton;
    if (colorElement) {
        await colorElement.waitForClickable({ timeout: 5000 });
        await colorElement.click();
        this.color = await colorElement.getAttribute('title');
    } else {
        console.error('Color element is not found.');
        return;
    }
});



When('I click the Add to Card button', async function() {
    this.productTitle = await productPage.productTitle.getText();
    this.productPrice = await productPage.productPrice.getText();
    await productPage.addToCartButton.click();

    
});


When('I click on the close window button', async function () {
    // REVIEW: Needed this
    await browser.$('.cross').waitForClickable();
    // REVIEW: Where is the page object?
    const closeButton = await browser.$('.cross');
    await closeButton.click();
});
  
  When('I click on the cart button', async function () {
    // REVIEW: What is "cartButton"?
    // Ok, I assume you didn't get this far because of the issues before.
    await cartButton.click();
});
  

When('I click the Proceed to checkout button', async function() {
    await headerPage.proceedToCheckoutButton.click();
});

Then('I click on the delete button', async function() {
    await deleteButton.click();
});

Given('I have no items in my cart', async function() {
    await cartPage.open();
    await cartPage.removeAllProducts();
    await homePage.open();
});

Then('I am on the authentication page', async function() {
    await authenticationPage.open();
});