import {test,expect} from '@playwright/test';
test('locator',async({page})=>{
//     page.goto
    await page.goto('https://demoqa.com/text-box');
    //Updated by Swetha Maran
    await page.locator('#userName').fill('Sri');
    await expect(page.locator('#userName')).toHaveValue('Swetha');
    await expect (page.locator("//h1")).toBeVisible();
    await expect(page).toHaveURL(/text-box/);
    
});