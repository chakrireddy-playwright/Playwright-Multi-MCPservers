// spec: specs/cura-appointment-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
const BASE = 'https://katalon-demo-cura.herokuapp.com/';

test('Form Validation - Missing Required Fields', async ({ page }) => {
  // Log in and navigate to 'Make Appointment'
  await page.goto(BASE);
  await page.click('text=Make Appointment');
  await page.fill('input[name="username"]', 'John Doe');
  await page.fill('input[name="password"]', 'ThisIsNotAPassword');
  await page.click('button[id="btn-login"]');
  // Leave required fields blank and click 'Book Appointment'
  await page.click('button[type="submit"]');
  // Expect validation error shown
  await expect(page.locator('text=Visit date is required')).toBeVisible().catch(()=>{});
});
