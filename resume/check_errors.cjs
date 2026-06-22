const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Capture console messages
    page.on('console', msg => {
      console.log(`[BROWSER CONSOLE] ${msg.type()}: ${msg.text()}`);
    });
    
    // Capture page errors (uncaught exceptions)
    page.on('pageerror', err => {
      console.log(`[BROWSER ERROR] ${err.toString()}`);
    });
    
    console.log('Navigating to https://resume.gijswillemsen.nl/');
    await page.goto('https://resume.gijswillemsen.nl/', { waitUntil: 'networkidle0' });
    
    // Get the HTML content of the root to see if it rendered
    const rootContent = await page.evaluate(() => {
      const root = document.getElementById('root');
      return root ? root.innerHTML : 'NO ROOT ELEMENT';
    });
    console.log('[ROOT CONTENT LENGTH]:', rootContent.length);
    console.log('[ROOT CONTENT SAMPLE]:', rootContent.slice(0, 200));

    await browser.close();
  } catch (error) {
    console.error('[SCRIPT ERROR]', error);
  }
})();
