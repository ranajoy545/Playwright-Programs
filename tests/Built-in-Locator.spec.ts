import{test,expect, Locator} from "@playwright/test";

test("built in locator",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
 await page.getByRole("textbox",{name:"Username:"}).fill("admin");
 await page.waitForTimeout(5000);
 await page.getByRole("checkbox",{name:"Accept terms"}).check();
 //await page.getByRole("button",{name:"Toggle Button"}).click();
 await page.getByRole("button",{name:"Primary Action"}).click();
 await page.getByText('link', { exact: true }).click();
 await page.waitForTimeout(5000);
await page.getByText('Submit Form').click();
await page.waitForTimeout(5000);
await page.getByLabel("Email Address:").fill("aassd");
await page.waitForTimeout(5000);
await page.getByLabel("Password:").fill("Ranajoy@1234");
await page.getByLabel("Your Age:").fill("23");
await page.getByLabel("Standard").click();
//await page.waitForTimeout(5000);
await page.getByPlaceholder("Enter your full name").fill("Ranajoy Mukherjee");
await page.getByPlaceholder("Phone number (xxx-xxx-xxxx)").fill("8240143795");
//await page.waitForTimeout(5000);
const image:Locator = page.getByAltText("logo image");
await expect(image).toBeVisible();

await page.getByTitle("Home page link").click();



 
})
