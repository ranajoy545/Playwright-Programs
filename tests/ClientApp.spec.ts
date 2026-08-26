import{test,expect} from "@playwright/test";

test("test1",async({page})=>{
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
 await page.locator("input#userEmail").fill("ranajoy545@gmail.com");
 await page.locator("input#userPassword").fill("Test@123");
 await page.locator("input#login").click();
//  const firstitem = await page.locator(".card-body b").nth(1).textContent();
//  console.log(firstitem);
//await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents(); 
console.log(titles);
});

