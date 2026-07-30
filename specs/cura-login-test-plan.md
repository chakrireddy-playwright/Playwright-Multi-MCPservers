# CURA Login Test Plan

## Application Overview

Login feature for CURA Healthcare Service. This plan validates authentication behaviour: successful login, invalid credentials handling, and required-field validation. Assumes fresh state, network access, and standard test accounts.

## Test Scenarios

### 1. CURA Login Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. AC1 - Successful Login and Redirect

**File:** `tests/cura/login-success.spec.ts`

**Steps:**
  1. Open CURA homepage
    - expect: Homepage loads with title 'CURA Healthcare Service'
    - expect: 'Make Appointment' button visible
  2. Click 'Make Appointment'
    - expect: Login form displayed
  3. Enter valid username 'John Doe' and password 'ThisIsNotAPassword' and click 'Login'
    - expect: User is authenticated
    - expect: User is redirected to the 'Make Appointment' page
  4. Verify top-right hamburger menu expands when clicked
    - expect: Navigation menu expands
    - expect: Make Appointment page content remains visible
  5. Confirm presence of appointment form elements
    - expect: Facility selector, readmission checkbox, healthcare program options, date picker and comments textarea visible

#### 1.2. AC2 - Invalid Credentials shows error

**File:** `tests/cura/login-invalid-credentials.spec.ts`

**Steps:**
  1. Open CURA homepage and click 'Make Appointment'
    - expect: Login form displayed
  2. Enter invalid username/password and click 'Login'
    - expect: A clear error message is displayed indicating invalid credentials
    - expect: User remains on the login page

#### 1.3. AC3 - Mandatory Fields Validation

**File:** `tests/cura/login-mandatory-fields.spec.ts`

**Steps:**
  1. Open CURA homepage and click 'Make Appointment'
    - expect: Login form displayed
  2. Click 'Login' without entering username and/or password
    - expect: Validation messages shown for required fields
    - expect: Login not attempted; user remains on login page

#### 1.4. Negative - SQL/XSS input handling on login fields

**File:** `tests/cura/login-input-sanitization.spec.ts`

**Steps:**
  1. Open login form
    - expect: Login form visible
  2. Enter special characters and typical injection payloads into username and password fields and submit
    - expect: Application does not crash
    - expect: No sensitive error details exposed; inputs are handled or rejected safely

#### 1.5. UX - Remember state after failed login attempts

**File:** `tests/cura/login-failed-state.spec.ts`

**Steps:**
  1. Attempt login with invalid credentials
    - expect: Error message displayed
    - expect: Username field retains entered value, password cleared or masked depending on platform
