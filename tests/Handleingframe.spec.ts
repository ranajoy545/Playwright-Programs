import{test,expect} from "@playwright/test";

test("frame demo",async({page})=>{
  await page.goto("https://letcode.in/frame");
  //number of frames in the page
  const numberofframes = page.frames();
  console.log("number of frames:"+numberofframes.length);
  //using frame method
  const frame1 = page.frame("firstFr");
  await frame1?.locator("input[name='fname']").fill("Ranajoy");
  await frame1?.locator("input[name='lname']").fill("Mukherjee");
 //number of childframes inside iframe
  const childFrames=frame1?.childFrames();
  console.log(childFrames?.length);
  // switch to innerframe from parent frame
  await page.waitForTimeout(5000);
  const innerframe = page.frameLocator("iframe[name='firstFr']").frameLocator('iframe');
  await innerframe.locator("input[name='email']").fill("ranajoy545@gmail.com");

  await frame1?.locator("input[name='fname']").fill("harry");
  await page.waitForTimeout(5000);



})