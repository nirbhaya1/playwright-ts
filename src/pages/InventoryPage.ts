import { Page, Locator} from 'playwright/test';

export class InventoryPage {
    readonly page : Page;
    readonly InventoryItem : Locator;
    readonly sortDropDown : Locator;
    //readonly option : String;

    constructor(page : Page){
        this.page = page;
        this.InventoryItem = page.locator('.inventory_item');
        this.sortDropDown = page.locator('.product_sort_container');
    }

    async getItemCount() {
        return  await this.InventoryItem.count();
    }

    async getFirstItemName(){
        return  this.page.locator('.inventory_item_name').first().innerText();

    }


    async getFirstItemDescription(){
        return this.page.locator('.inventory_item_desc').first().innerText();

    }

    async sortBy(option : string){
        await this.sortDropDown.selectOption(option);

    }
    


}