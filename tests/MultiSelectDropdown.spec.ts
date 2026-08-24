import{test,expect, Locator} from "@playwright/test";

test("multi select dropdown handle",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    //await page.locator('#colors').selectOption(['Red','Blue','Green']);//by visible text
    //await page.locator('#colors').selectOption(['red','blue','green']);//using value attribute
//await page.locator('#colors').selectOption([{label:"Green"},{label:"Red"},{label:"Blue"}]);//using label
    await page.locator('#colors').selectOption([{index:0},{index:1},{index:2}]);//using index
    //count the number of options in the dropdown.
    const dropdownoptions:Locator = page.locator("#colors >option");
    console.log("The number of options in the dropdown:" +await dropdownoptions.count());
    await expect(dropdownoptions).toHaveCount(7);
    await page.waitForTimeout(5000);
    let optionText:string[] = await dropdownoptions.allTextContents();
    console.log(optionText);
    let trimmedoption = optionText.map(text=>text.trim());
    console.log(trimmedoption);
    for(let option of trimmedoption){
     console.log(option);
    }
//sort the dropdown options
    const originallist = [...trimmedoption];
    const sortedlist = [...trimmedoption].sort();
    console.log(originallist);
    console.log(sortedlist);

    //how to fetch duplicate options from the dropdown
  const myset = new Set<String>();
  const duplicates:string[] = [];
  for(const text of trimmedoption){

    if(myset.has(text)){
        duplicates.push(text);
    }
    else{
       myset.add(text);

    }

  }
  console.log(duplicates);
  console.log(myset);
  
 if(duplicates.length > 0)
{
   console.log(duplicates);
}
else{
   console.log("no duplicates found");
}

})