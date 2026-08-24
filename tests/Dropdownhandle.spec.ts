import{test,expect} from "@playwright/test";
test("dropdown handle",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(5000);
   //await page.locator("select[id ='country']").selectOption("Germany");//visibletext
   //await page.locator("select[id ='country']").selectOption({value:"australia"});//value

   //await page.locator("select[id ='country']").selectOption({label:"Japan"});//label
   await page.locator("select[id ='country']").selectOption({index:6});//index
   //count the options inside the dropdown
   let dropdownoptions = page.locator("#country option");
   const count = await dropdownoptions.count();
   console.log(count);
   await expect(dropdownoptions).toHaveCount(10);
   await page.waitForTimeout(5000);
   const optiontext:string[]=await dropdownoptions.allTextContents();
   const trimmedoption = optiontext.map(text=>text.trim());
   console.log(trimmedoption);
   expect(trimmedoption).toContain("Brazil");
   for(const option of trimmedoption){
      console.log(option);
   }

});

