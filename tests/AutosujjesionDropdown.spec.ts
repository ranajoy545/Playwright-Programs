import {test,expect, Locator} from "@playwright/test";

test("handleing Autosujjestion dropdown",async({page})=>{
page.goto("https://www.flipkart.com");
await page.waitForLoadState('networkidle');

const closeButton = page.locator("button:has-text('✕')");

    if (await closeButton.isVisible()) {
        await closeButton.click();
    }

//await page.locator("form[class='lilxh_ header-form-search'] input[placeholder='Search for Products, Brands and More']").click();
const searchbox = page.locator("input.nw1UBF.v1zwn25:visible");
await searchbox.click();
await page.waitForTimeout(5000);
await searchbox.fill("smartphone");
await page.waitForTimeout(5000);

// Autosuggestion locator
    const options = page.locator("ul li:visible");

    // Wait for first suggestion to appear
   // Wait for dropdown
    await options.nth(0).waitFor();

    // Count suggestions
    const count = await options.count();

    console.log("Total Suggestions:", count);

    for(let i=0;i<count;i++){
     const text = await options.nth(i).innerText();
     console.log(text);
     if (text?.includes("smartphones under 10000")) {
            await options.nth(i).click();
            break;
        }
    }



})