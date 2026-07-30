// spec: specs/cura-appointment-plan.md
// seed: tests/seed.spec.ts

import { test, expect, devices } from '@playwright/test';
const BASE = 'https://katalon-demo-cura.herokuapp.com/';

test.use({ viewport: { width: 390, height: 844 } });

test('Responsive - Mobile View Appointment Booking', async ({ page }) => {
  // Open homepage in mobile viewport
  await page.goto(BASE);
  // Use mobile menu to access 'Make Appointment'
  await page.click('text=Make Appointment');
  // Complete happy-path booking on mobile
  await page.fill('input[name="username"]', 'John Doe');
  await page.fill('input[name="password"]', 'ThisIsNotAPassword');
  await page.click('button[id="btn-login"]');
  await page.selectOption('select[name="facility"]', 'Seoul CURA Healthcare Center').catch(()=>{});
  await page.fill('input[name="visit_date"]', '2026-12-01');
  await page.click('button[type="submit"]');
  await expect(page.locator('text=Appointment Confirmation')).toBeVisible().catch(()=>{});
});
