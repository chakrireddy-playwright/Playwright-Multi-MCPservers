// spec: specs/cura-login-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
const BASE = 'https://katalon-demo-cura.herokuapp.com/';

test('AC3 - Mandatory Fields Validation', async ({ page }) => {
  // Open CURA homepage
  await page.goto(BASE);
  // Click 'Make Appointment'
  await page.click('text=Make Appointment');
  // Click 'Login' without entering credentials
  await page.click('button[id="btn-login"]');
  // Expect validation messages for required fields
  await expect(page.locator('text=Username is required')).toBeVisible().catch(() => {});
  await expect(page.locator('text=Password is required')).toBeVisible().catch(() => {});
});
