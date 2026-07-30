import {test, expect} from '../src/fixtures/baseFixture';
import { config } from '../src/utils/config';
import { InventoryPage } from '../src/pages/InventoryPage';
import { Page } from 'playwright/test';
import { LoginPage } from '../src/pages/LoginPage';
import { urls } from '../src/constants/urls';

test.beforeEach(async ({ loginPage}) => {
    await loginPage.goto(urls.login);
    await loginPage.login(config.username, config.password);
}); 

test ('Add to Cart', async ({inventoryPage})=> {
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await expect(inventoryPage.page.locator('.cart_item')).toHaveCount(1);


});

test ('Remove from Cart', async ({inventoryPage})=> {
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await inventoryPage.removeFirstItemFromCart();
    await expect(inventoryPage.page.locator('.cart_item')).toHaveCount(0);
});


test ('Checkout flow', async ({inventoryPage})=> {
    await inventoryPage.addFirstItemToCart();
    await inventoryPage.goToCart();
    await inventoryPage.chekout();
    console.log("Current URL:", inventoryPage.page.url());
    await expect(inventoryPage.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});


