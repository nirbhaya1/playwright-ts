
import { test, expect } from '../src/fixtures/baseFixture';
import { config } from '../src/utils/config';
import { urls } from '../src/constants/urls';
import { LoginPage } from '../src/pages/LoginPage';
import { InventoryPage } from '../src/pages/InventoryPage';
import { Page } from 'playwright/test';

test ('Inventory items displayed', async ({ loginPage , inventoryPage} ) => {
  await loginPage.goto(urls.login);
  await loginPage.login(config.username, config.password);
  await expect(loginPage.page).toHaveURL(urls.inventory);
  const count = await inventoryPage.getItemCount();
  console.log(count);
  expect(count).toBeGreaterThan(0);
  await loginPage.page.waitForTimeout(10000);
});

test ('Sort name (A to Z)', async ({loginPage,inventoryPage}) =>{
    await loginPage.goto(urls.login);
    await loginPage.login(config.username,config.password)
    await loginPage.page.waitForTimeout(5000)
    await inventoryPage.sortBy('az');
    const firstItem = await inventoryPage.getFirstItemName();
    const firstItemDes = await inventoryPage.getFirstItemDescription();
    console.log(firstItem)
    console.log(firstItemDes)
    expect(firstItem).toContain('Sauce Labs Backpack');
    expect(firstItemDes).toContain('carry.allTheThings() with the sleek');
}

);

test ('Sort name (Z to A)', async ({inventoryPage,loginPage}) =>{
    await loginPage.goto(urls.login);
    await loginPage.login(config.username,config.password)
    await inventoryPage.sortBy('za');
    const firstItem = await inventoryPage.getFirstItemName();
    const firstItemDes = await inventoryPage.getFirstItemDescription();
    expect(firstItem).toContain('Test.allTheThings() T-Shirt (Red)');
    console.log(firstItem)
    console.log(firstItemDes)
    expect(firstItemDes).toContain('This classic Sauce Labs t-shirt');
    
}

);



