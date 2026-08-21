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
    await page.goto(`https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=2867626201928924589&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197818&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=2867626201928924589--&hvexpln=nav&gad_source=1`);

    const title = await page.title();
    console.log(`page title ${title}`);

    const pageURL = await page.url();
    console.log(`page url is ${pageURL}`);

    await expect(page).toHaveTitle(` Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
`);
    await expect(page).toHaveURL(`https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_7hz2t19t5c_e&adgrpid=155259815513&hvpone=&hvptwo=&hvadid=815461303151&hvpos=&hvnetw=g&hvrand=2867626201928924589&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9197818&hvtargid=kwd-10573980&hydadcr=14453_2462831&mcid=4c22dcdee2bf3a71b0b832c5c4ba9c17&hvocijid=2867626201928924589--&hvexpln=nav&gad_source=1`);
})