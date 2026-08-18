import { test } from '@playwright/test';

test('Prompt Alert', async ({ page }) => {

    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async dialog => {
        console.log('Type:', dialog.type());
        console.log('Message:', dialog.message());
        
        await dialog.accept('Swetha');
        console.log('Prompt Accepted');
    });

    await page.locator('#promtButton').click();
  
});