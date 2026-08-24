import{test,expect, Locator} from "@playwright/test";

test("handle input boxes",async({page})=>{
 await page.goto("https://testautomationpractice.blogspot.com/");
 await page.getByPlaceholder('Enter Name').fill("ranajoy");
 await page.getByPlaceholder('Enter EMail').fill('ranajoy545@gmail.com');
 await page.getByPlaceholder('Enter Phone').fill('8240143795');
 await page.locator("textarea[id='textarea']").fill("234,kolkata road,agarpara");
 //await page.waitForTimeout(5000);
 //select the radiobuttons
 const radiobuttons:Locator=page.locator("input[type='radio']");
 const count = await radiobuttons.count();
 console.log(count);
 await radiobuttons.nth(1).check();
 await page.waitForTimeout(5000);
const maleradio = page.locator("input[id='male']"); 
await maleradio.check();//check the male radio button
//await maleradio.uncheck(); //uncheck the male radio button
//await expect.soft(maleradio).toBeChecked();
//select specific checkbox in the webpage.
let sundaycheckbox = page.locator("input[id='sunday']");
await sundaycheckbox.check();
console.log(await sundaycheckbox.isChecked());
let wednesdaycheckbox= page.locator("input[id='wednesday']");
await wednesdaycheckbox.check();
console.log(await wednesdaycheckbox.isChecked());
await page.waitForTimeout(5000);
await sundaycheckbox.uncheck();
await page.waitForTimeout(5000);

});