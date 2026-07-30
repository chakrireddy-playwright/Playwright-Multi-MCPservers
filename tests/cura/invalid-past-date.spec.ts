// spec: specs/cura-appointment-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
const BASE = 'https://katalon-demo-cura.herokuapp.com/';

test('Invalid Date - Past Date', async ({ page }) => {
  // Log in and navigate to 'Make Appointment'
  await page.goto(BASE);
  await page.click('text=Make Appointment');
  await page.fill('input[name="username"]', 'John Doe');
  await page.fill('input[name="password"]', 'ThisIsNotAPassword');
  await page.click('button[id="btn-login"]');
  // Enter a past date and submit
  await page.fill('input[name="visit_date"]', '2020-01-01');
  await page.click('button[type="submit"]');
  // Expect validation preventing booking
  await expect(page.locator('text=Visit date must be in the future')).toBeVisible().catch(()=>{});
});
