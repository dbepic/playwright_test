import { test, expect } from '@playwright/test';


test('flipkart', async ({ page }) => {
    await page.goto(`https://www.flipkart.com/`);

    const title = await page.title();
    console.log(`page title ${title}`);

    const pageURL = await page.url();
    console.log(`page url this is a ${pageURL}`);

    await expect(page).toHaveTitle(`Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!`);
    await expect(page).toHaveURL(`https://www.flipkart.com/`);

    await page.close();
})

test('amazon', async ({ page }) => {
    await page.goto(`https://www.amazon.in/`);

    const title = await page.title();
    console.log(`page title ${title}`);

    const pageURL = await page.url();
    console.log(`page url is ${pageURL}`);
    console.log(`page urk is ${pageURL}`)

    await expect(page).toHaveTitle(` Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
        
`);
    await expect(page).toHaveURL(`https://www.amazon.in/`)
})