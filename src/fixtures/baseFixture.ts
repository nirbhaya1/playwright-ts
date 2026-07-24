
import { Page, Locator } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import {test as base} from "@playwright/test"


type Pages = {
    loginPage : LoginPage;
    inventoryPage : InventoryPage; 
}



export const test = base.extend<Pages>({
    
     loginPage: async({page }, use ) => {await use (new LoginPage(page))},
     inventoryPage: async({page}, use) => {await use (new InventoryPage(page))}
    
});

console.log("LoginPage:", LoginPage);
console.log("InventoryPage:", InventoryPage);


//export const expect = base.expect
export {expect} from '@playwright/test';
