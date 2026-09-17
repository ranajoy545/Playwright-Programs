import{test,expect} from "@playwright/test";

test("test1",async({page})=>{
 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
 await page.getByPlaceholder("email@example.com").fill("ranajoy545@gmail.com");
 await page.getByPlaceholder("enter your passsword").fill("Test@123");
 await page.getByRole("button",{name:"Login"}).click();
//  const firstitem = await page.locator(".card-body b").nth(1).textContent();
//  console.log(firstitem);
//await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
const titles = await page.locator(".card-body b").allTextContents(); 
console.log(titles);
await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole("button",{name:"Add To Cart"}).click();
await page.getByRole("listitem").getByRole("button",{name:'Cart'}).click();
await page.locator("div li").first().waitFor();
await expect( page.getByText("ZARA COAT 3")).toBeVisible();
await page.getByRole("button",{name:"Checkout"}).click();
await page.locator("div[class='field small'] input").nth(0).fill("1234");
await page.locator("div[class ='field'] >input").nth(1).fill("Ranajoy Mukherjee");
await page.getByPlaceholder("Select Country").pressSequentially("ind",{delay:150});
await page.getByText('India', { exact: true }).click();
await page.getByText("PLACE ORDER").click();
await expect(page.getByText(" Thankyou for the order. ")).toHaveText(" Thankyou for the order. ");
await page.getByText(" Orders History Page ").click();
});

