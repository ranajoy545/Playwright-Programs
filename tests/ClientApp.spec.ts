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

const products = page.locator(".card-body");

const count = await products.count()

console.log(count);

const productname ="ZARA COAT 3";

for(let i=0;i<count;i++){

    const text = await products.nth(i).locator("b").textContent();
    if(text === productname){
    await products.nth(i).locator("text=' Add To Cart'").click();
    break;
        
    }
}
await page.locator("button[routerlink*='cart']").click();
await page.locator("div li").first().waitFor();
await expect( page.locator("h3:has-text('ZARA COAT 3')")).toBeVisible();

await page.locator("text='Checkout'").click();

await page.locator("input[placeholder='Select Country']").pressSequentially("ind",{delay:150});


const dropdownoptions= page.locator(".ta-results");

await dropdownoptions.waitFor();
const optioncount = await dropdownoptions.locator("button").count();
console.log(optioncount);

for(let i =0;i<optioncount;i++){
  const text= await dropdownoptions.locator("button").nth(i).textContent();

  if(text?.trim() ==="India"){
   await dropdownoptions.locator("button").nth(i).click();
   break;

  }

}
await expect(page.locator("[class='user__name mt-5']  label")).toHaveText("ranajoy545@gmail.com");

await page.locator("a[class='btnn action__submit ng-star-inserted']").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");

const order_id = await page.locator("td[class='em-spacer-1'] label[class='ng-star-inserted']").textContent();

console.log(order_id);

await page.locator("button[routerlink='/dashboard/myorders']").click();

await page.locator("tbody").waitFor();

const rows= page.locator("tbody tr");

const rowCount= await rows.count();
console.log(rowCount);

for(let i = 0;i<rowCount;i++){
    const rowOrderId= await rows.nth(i).locator("th").textContent();
    if(rowOrderId){
      if(order_id?.includes(rowOrderId)){
       await rows.nth(i).locator("button").first().click();
       break;
    }
  
    } 
}

const orderdetailspageid = await page.locator("div[class='col-text -main']").textContent();
if(orderdetailspageid){
   expect(order_id?.includes(orderdetailspageid)).toBeTruthy();
}







});

