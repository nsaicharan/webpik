import puppeteer from 'puppeteer-core';
import chrome from 'chrome-aws-lambda';

export default async function screenshot(req, res) {
  const exePath =
    process.platform === 'win32'
      ? 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe'
      : '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

  const browser = await puppeteer.launch(
    process.env.NODE_ENV === 'production'
      ? {
          args: chrome.args,
          executablePath: await chrome.executablePath,
          headless: chrome.headless,
          ignoreHTTPSErrors: true,
        }
      : {
          executablePath: exePath,
        }
  );

  const page = await browser.newPage();
  const url = req.body.url;
  await page.goto(url, { waitUntil: 'load', timeout: 0 });
  await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
  const pageTitle = await page.title();
  const screenshot = await page.screenshot({
    fullPage: true,
    encoding: 'base64',
  });
  console.log(pageTitle);
  await browser.close();

  res.json({ pageTitle, screenshot });
}
