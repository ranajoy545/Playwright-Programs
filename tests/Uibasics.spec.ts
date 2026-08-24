import{test,expect} from "@playwright/test";

test("test1",async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input#username").fill("ranajoy");
await page.locator("input#password").fill("ranajoy@123");
await page.locator("input#signInBtn").click();
await page.waitForTimeout(5000);
let errormessage1 = await page.locator("div[class='alert alert-danger col-md-12']").textContent();
console.log(errormessage1);

})

test.only("test2", async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("input#password").fill("Learning@830$3mK2");
await page.locator("input#signInBtn").click();

 await page.locator(".card-body a").first().waitFor();
 const titles= await page.locator(".card-body a").allTextContents();
 console.log(titles);
 
//const firstitem= await page.locator("h4.card-title > a").nth(1).textContent();
//console.log(firstitem);
//console.log(await items.allTextContents());



});