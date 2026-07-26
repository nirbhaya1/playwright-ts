import { test, expect } from '../src/fixtures/baseFixture';
import { config } from '../src/utils/config';
import { urls } from '../src/constants/urls';

test ('Valid login', async ({ loginPage }) => {
  await loginPage.goto(urls.login);
  console.log(config.username);
  await loginPage.login(config.username, config.password);
  await expect(loginPage.page).toHaveURL(urls.inventory);
}
);

test ('Invalid login', async ({loginPage}) => {
    await loginPage.goto(urls.login);
    await loginPage.login(config.invalidUsername, config.invalidPassword);
    await loginPage.page.waitForTimeout(5000);
    const msg = await loginPage.getinvalidLoginMessage();
    console.log("meg:",msg)
    await expect(msg).toBe('Epic sadface: Username and password do not match any user in this service');
}

);