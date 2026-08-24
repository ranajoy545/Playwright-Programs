import{test,expect} from "@playwright/test";

test("test1",async({page})=>{
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
 await page.locator("input#userEmail").fill("ranajoy545@gmail.com");
 await page.locator("input#userPassword").fill("Test@123");
 await page.locator("input#login").click();

 const firstitem = await page.locator("h5[style='text-transform: uppercase;']  b").first().textContent();
 console.log(firstitem);
 

 


});