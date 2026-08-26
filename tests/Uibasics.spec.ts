import{test,expect} from "@playwright/test";

test.fixme("test1",async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input#username").fill("ranajoy");
await page.locator("input#password").fill("ranajoy@123");
await page.locator("input#signInBtn").click();
await page.waitForTimeout(5000);
let errormessage1 = await page.locator("div[class='alert alert-danger col-md-12']").textContent();
console.log(errormessage1);

})

test("test2", async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("input#username").fill("rahulshettyacademy");
await page.locator("input#password").fill("Learning@830$3mK2");
await page.locator(".customradio").nth(1).check();
await expect(page.locator(".customradio").nth(1)).toBeChecked();
await page.locator("select[class='form-control']").selectOption("Consultant");
await page.locator("#okayBtn").click();
await page.locator("#terms").check();
await expect(page.locator("#terms")).toBeChecked(); 
await page.locator("input#signInBtn").click();

 await page.locator(".card-body a").first().waitFor();
 const titles= await page.locator(".card-body a").allTextContents();
 console.log(titles);
 
//const firstitem= await page.locator("h4.card-title > a").nth(1).textContent();
//console.log(firstitem);
//console.log(await items.allTextContents());



});

test.skip("test123", async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const title12= await page.title();
console.log(title12);
expect(title12).toContain("Rahul Shetty Academy")
const documentlink= page.locator("[href*='documents-request']");
await expect(documentlink).toHaveAttribute("class","blinkingText");
const text=await documentlink.textContent();
console.log(text);

});