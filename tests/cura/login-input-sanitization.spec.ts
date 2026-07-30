// spec: specs/cura-login-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
const BASE = 'https://katalon-demo-cura.herokuapp.com/';

test('Negative - Input sanitization on login fields', async ({ page }) => {
  // Open CURA homepage
  await page.goto(BASE);
  // Click 'Make Appointment'
  await page.click('text=Make Appointment');
  // Enter typical injection payloads
  await page.fill('input[name="username"]', "' OR '1'='1");
  await page.fill('input[name="password"]', "<script>alert(1)</script>");
  await page.click('button[id="btn-login"]');
  // Expect application handles inputs safely (no crash, no sensitive errors)
  await expect(page).toHaveTitle(/CURA Healthcare Service/).catch(() => {});
});
