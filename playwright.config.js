// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests', 
  retries: 1,         
  use: {
    browserName: 'chromium',
    headless: false,         
    screenshot: 'on',       
  },
});
