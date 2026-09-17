import{test,expect} from "@playwright/test";

test("Angular app test cases",async({page})=>{
const slowexpect=expect.configure({timeout:10000});//test level assertion timeout
test.setTimeout(90000);
page.setDefaultTimeout(30000);
await page.goto("https://rahulshettyacademy.com/angularpractice/");
await page.locator("div[class='form-group'] input[name='name']").fill("ranajoy");
await page.locator("div[class ='form-group'] input[name='email']").fill("ranajoy34@gmail.com");
await page.getByLabel("Student").click();
await page.getByLabel("Check me out if you Love IceCreams!").click({timeout:15000});
await page.getByLabel("Gender").selectOption("Female");
await page.getByRole("button",{name:"Submit"}).click({timeout:15000});
const boolean=await page.getByText("Success! The Form has been submitted successfully!").isVisible();
//step level assertion timeout
await slowexpect(page.getByText("Success! The Form has been submitted successfully!")).toBeVisible();
console.log(boolean);
await page.getByPlaceholder("Password").fill("rana@123");
await page.getByRole("link",{name:"Shop"}).click();
const s_name = page.getByText("Shop Name");
//step level assertion timeout.{timeout:10000}
await slowexpect(s_name).toHaveText("Shop Name");
await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button",{name:"Add "}).click();

})