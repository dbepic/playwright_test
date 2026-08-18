import {test, expect} from '@playwright/test'


test('amazon', async ({ page }) => {
    await page.goto(`https://www.amazon.in/`);

    const title = await page.title();
    console.log(`page title ${title}`);

    const pageURL = await page.url();
    console.log(`page url is ${pageURL}`);
    console.log("ebduedj");
    

    await expect(page).toHaveTitle(` Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
`);
    await expect(page).toHaveURL(`https://www.amazon.in/`);
})