import { Given, When, Then } from '@wdio/cucumber-framework';
import productsPage from '../page-objects/products.page.js';
import productPage from '../page-objects/product.page.js';
import headerPage from '../page-objects/header.page.js';
import homePage from '../page-objects/home.page.js';
import cartPage from '../page-objects/cart.page.js';
import { priceStringToNumber } from '../utils/utils.js';

When('I click on a product', async function() {
    
    await expect(productsPage.productName).toBeDisplayed();
    await productsPage.productName.waitForDisplayed();
    await productsPage.productName.click();
    await browser.debug()
});


When('I select size and color', async function() {
    const sizeElement = await productPage.firstSizeButton;
    await sizeElement.click();
    this.sizeText = await sizeElement.getText();

    const colorElement = await productPage.SecondColorButton;
    await colorElement.click();
    this.color = await colorElement.getAttribute('title');
});

When('I click the Add to Card button', async function() {
    this.productTitle = await productPage.productTitle.getText();
    this.productPrice = await productPage.productPrice.getText();

    await productPage.addToCartButton.click();
});

When('I click on the close window button', async function () {
    const closeButton = await driver.findElement(By.className('cross'));
    await closeButton.click();
});
  
  When('I click on the cart button', async function () {
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
    await authenticationPage.waitForDisplayed({ timeout: 15000, reverse: false });
});