import{test,expect} from "@playwright/test";

test("validate page title",async({page})=>{

    await page.goto("https://www.demoblaze.com/");
    
    await page.waitForTimeout(5000);

    await expect(page).toHaveTitle("STORE");

});

test("verify Login",async({page})=>{
await page.goto("https://www.demoblaze.com/");
await page.getByRole("link",{name:"Log in"}).click();
//await page.waitForTimeout(5000);
await page.locator("#loginusername").fill("admin");
await page.locator("#loginpassword").fill("admin@123");
await page.waitForTimeout(5000);
})