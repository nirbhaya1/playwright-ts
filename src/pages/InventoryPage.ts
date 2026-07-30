import { Page, Locator} from 'playwright/test';
import { LoginPage } from './LoginPage';

export class InventoryPage {
    readonly page : Page;
    readonly InventoryItem : Locator;
    readonly sortDropDown : Locator;
    //readonly option : String;
    readonly addToCartButton : Locator;
    readonly removeButton : Locator;
    readonly cartIcon : Locator;
    readonly checkoutButton : Locator;


    constructor(page : Page){
        this.page = page;
        this.InventoryItem = page.locator('.inventory_item');
        this.sortDropDown = page.locator('.product_sort_container');
        this.addToCartButton = page.locator('button[data-test^="add-to-cart"]');
        this.removeButton= page.locator('button[data-test^="remove-sauce"]');
        this.cartIcon= page.locator('.shopping_cart_link');
        this.checkoutButton= page.locator('#checkout');

    }

    async getItemCount() {
        return  await this.InventoryItem.count();
    }

    async getFirstItemName(){
        return  this.page.locator('.inventory_item_name').first().innerText();

    }


    async getFirstItemDescription() {
        return this.page.locator('.inventory_item_desc').first().innerText();

    }

    async sortBy(option : string){
        await this.sortDropDown.selectOption(option);

    }

    async addFirstItemToCart(){
        await this.addToCartButton.first().click();

    }

    async removeFirstItemFromCart() {
        await this.removeButton.first().click();
        
    }

    async goToCart() {
        await this.cartIcon.click();
        
    }

    async chekout() {
        await this.checkoutButton.click();
        
    }
    


}