import{test,expect} from "@playwright/test";
test.skip("handleing simple Alert",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", dialog=>{
   console.log("dialog type:" +dialog.type());
   console.log("Dialog message:" +dialog.message());
   expect(dialog.type()).toContain("alert");
  expect(dialog.message()).toContain("I am an alert box!");
   dialog.accept();
  })

 await page.locator("#alertBtn").click();
 await page.waitForTimeout(5000);
})

test.skip("handleing confirmation Alert",async({page})=>{
  await page.goto("https://testautomationpractice.blogspot.com/");

  page.on("dialog", dialog=>{
   console.log("dialog type:" +dialog.type());
   console.log("Dialog message:" +dialog.message());
   expect(dialog.type()).toContain("confirm");
  expect(dialog.message()).toContain("Press a button!");
   //dialog.accept();
   dialog.dismiss();
  
  })

 await page.locator("#confirmBtn").click();
const text=await page.locator("#demo").innerText();
console.log(text);
 await page.waitForTimeout(5000);
})



test.only("handleing prompt Alert",async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/");

page.on("dialog",dialog=>{
console.log("dialog type:" +dialog.type());
console.log("dialog message:" +dialog.message());
dialog.accept("ranajoy mukherjee");
//dialog.dismiss();

})
await page.locator("#promptBtn").click();
const text=await page.locator("#demo").innerText();
console.log(text);
await expect( page.locator("#demo")).toHaveText("Hello ranajoy mukherjee! How are you today?");
await page.waitForTimeout(5000);
})

