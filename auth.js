require('dotenv').config();
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--ignore-certificate-errors']
  });

  const page = await browser.newPage();

  await page.goto(`${process.env.URI}`, {
    waitUntil: 'networkidle2',
    ignoreHTTPSErrors: true
  });

  await page.waitForSelector('#user');

  await page.type('#user', process.env.NAME);
  await page.type('#passwd', process.env.PASSWORD);

  await page.evaluate(() => {
    const submitButton = document.querySelector('#submit');
    submitButton.removeAttribute('disabled');
  });

  await page.click('#submit');
console.log("user authenticated");
  await page.waitForTimeout(3000); 
  await browser.close();
})();
