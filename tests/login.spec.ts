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