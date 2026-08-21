# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: flipkart.spec.ts >> amazon
- Location: tests\flipkart.spec.ts:19:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Timeout: 5000ms
- Expected  - 3
+ Received  + 1

-  Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
-         
-
+ Amazon.in

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    5 × locator resolved to <html lang="en">…</html>
      - unexpected value ""
    - waiting for "https://www.amazon.in/" navigation to finish...
    - navigated to "https://www.amazon.in/"
    8 × locator resolved to <html lang="en-us" class="a-no-js">…</html>
      - unexpected value "Amazon.in"

```

```yaml
- heading "Click the button below to continue shopping" [level=4]
- button "Continue shopping"
- link "Conditions of Use & Sale":
  - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
- link "Privacy Notice":
  - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
- text: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | 
  4  | test('flipkart', async ({ page }) => {
  5  |     await page.goto(`https://www.flipkart.com/`);
  6  | 
  7  |     const title = await page.title();
  8  |     console.log(`page title ${title}`);
  9  | 
  10 |     const pageURL = await page.url();
  11 |     console.log(`page url this is a ${pageURL}`);
  12 | 
  13 |     await expect(page).toHaveTitle(`Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!`);
  14 |     await expect(page).toHaveURL(`https://www.flipkart.com/`);
  15 | 
  16 |     await page.close();
  17 | })
  18 | 
  19 | test('amazon', async ({ page }) => {
  20 |     await page.goto(`https://www.amazon.in/`);
  21 | 
  22 |     const title = await page.title();
  23 |     console.log(`page title ${title}`);
  24 | 
  25 |     const pageURL = await page.url();
  26 |     console.log(`page url is ${pageURL}`);
  27 | 
> 28 |     await expect(page).toHaveTitle(` Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  29 |         
  30 | `);
  31 |     await expect(page).toHaveURL(`https://www.amazon.in/`)
  32 | })
```