const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('http://localhost:1234');
  await page.screenshot({path: 'images/podcast-1.png'});

  await browser.close();
})();