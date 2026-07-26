
export const config = {
    baseUrl : process.env.BASE_URL || 'https://www.saucedemo.com',
    username: process.env.USERNAME || 'standard_user',
    password: process.env.PASSWORD || 'secret_sauce',
    invalidUsername: process.env.USERNAME || 'standarduser',
    invalidPassword: process.env.PASSWORD || 'secretsauce'
};