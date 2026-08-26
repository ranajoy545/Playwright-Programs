import { test, expect } from "@playwright/test";

test("window Handleing", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentlink = page.locator("a[href*='documents-request']");
    const [newwindow1] = await Promise.all([
        context.waitForEvent("page"),
        documentlink.click()

    ])




    const text = await newwindow1.locator("p[class='im-para red']").textContent();
    console.log(text);


})