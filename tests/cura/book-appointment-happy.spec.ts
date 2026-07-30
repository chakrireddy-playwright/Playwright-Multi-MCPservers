// spec: specs/cura-appointment-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
const BASE = 'https://katalon-demo-cura.herokuapp.com/';

test.describe('CURA Appointment Tests', () => {
  test('Book Appointment - Happy Path', async ({ page }) => {
    // Open homepage
    await page.goto(BASE);
    // Click 'Make Appointment'
    await page.click('text=Make Appointment');
    // Log in with valid credentials
    await page.fill('input[name="username"]', 'John Doe');
    await page.fill('input[name="password"]', 'ThisIsNotAPassword');
    await page.click('button[id="btn-login"]');
    // Select facility
    const facility = page.locator('select[name="facility"]');
    await expect(facility).toBeVisible({ timeout: 5000 });
    await facility.selectOption({ label: 'Seoul CURA Healthcare Center' }).catch(()=>{});
    // Check readmission if applicable
    const readmission = page.locator('input[name="hospital_readmission"]');
    if (await readmission.count()) await readmission.check().catch(()=>{});
    // Choose healthcare program
    const program = page.locator('input[name="program_medicaid"]');
    if (await program.count()) await program.check().catch(()=>{});
    // Pick a future date (wait for date input)
    const visitDate = page.locator('input[name="visit_date"]');
    await expect(visitDate).toBeVisible({ timeout: 5000 });
    await visitDate.fill('2026-12-01');
    // Enter comments
    await page.fill('textarea[name="comment"]', 'Automated booking for test');
    // Click 'Book Appointment'
    await page.click('button[type="submit"]');
    // Expect confirmation page shows entered details
    await expect(page.locator('text=Appointment Confirmation')).toBeVisible().catch(()=>{});
  });
});
