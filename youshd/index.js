const puppeteer=require("puppeteer");

async()=>{
    const browser=await puppeteer.launch({headless:false});
    const site=await browser.newPage();
    await site.goto("https://app-staging.youshd.com");
    await site.click('a[href="/login"]')
    await site.type("#button-continue", "")
    await site.click('input[value="continue"]')
    await site.waitForNavigation()
    await site.goto("https://app-staging.youshd.com/login");
    await site.click('a[href="/verify-otp"]')
    await site.type("#verify-input", "123456")
    await site.click('input[value="continue"]')
    await browser.close()
}

