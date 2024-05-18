const wifi = require('node-wifi');
const puppeteer = require('puppeteer');
require('dotenv').config();

wifi.init({
  iface: null 
});

const connectToWiFi = (ssid, password, callback) => {
  wifi.connect({ ssid, password }, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Connected to Wi-Fi');
    setTimeout(callback, 1000); 
  });
};

const runPuppeteer = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--ignore-certificate-errors']
  });

  const page = await browser.newPage();

  await page.goto(`${[process.env.URI]}`, {
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
  console.log("authenticated")
  await browser.close();
};

connectToWiFi(`${process.env.WIFINAME}`, `${process.env.WIFIPASSWORD}`, runPuppeteer);
