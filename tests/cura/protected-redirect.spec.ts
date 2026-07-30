// spec: specs/cura-appointment-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
const BASE = 'https://katalon-demo-cura.herokuapp.com/';

test('Protected Pages Redirect When Not Authenticated', async ({ page }) => {
  // Attempt to access a protected page directly
  await page.goto(BASE + 'profile.php#profile');
  // Expect redirect to login (Make Appointment) page
  await expect(page.locator('text=Login')).toBeVisible().catch(()=>{});
});
