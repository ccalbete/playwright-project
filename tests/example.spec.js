// example.spec.js
const { test, expect } = require('@playwright/test');

test('should display the correct title on Google', async ({ page }) => {
  // Go to Google
  await page.goto('https://www.google.com');

  // Expect the title to contain "Google"
  await expect(page).toHaveTitle(/Google/);
});
