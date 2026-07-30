# CURA Appointment Test Plan

## Application Overview

CURA Healthcare Service demo app — appointment booking and account flows. Plan covers booking appointment happy path, form validation, authentication, session handling, and responsive checks. Assumes fresh state and network access.

## Test Scenarios

### 1. CURA Appointment Tests

**Seed:** `tests/seed.spec.ts`

#### 1.1. Book Appointment - Happy Path

**File:** `tests/cura/book-appointment-happy.spec.ts`

**Steps:**
  1. Open homepage
    - expect: Homepage loads with title 'CURA Healthcare Service'
    - expect: Main navigation visible
  2. Open menu and click 'Make Appointment'
    - expect: Login page displayed or 'Login' form visible
  3. Log in with valid credentials (username: 'John Doe', password: 'ThisIsNotAPassword')
    - expect: User is authenticated and redirected to 'Make Appointment' page
  4. Select facility, check 'Apply for hospital readmission' if applicable, choose healthcare program, pick a future visit date, enter comments
    - expect: Form fields accept input and reflect selected values
  5. Click 'Book Appointment'
    - expect: Appointment Confirmation page displays
    - expect: Entered facility, date, program, and comments are shown

#### 1.2. Form Validation - Missing Required Fields

**File:** `tests/cura/form-validation-missing.spec.ts`

**Steps:**
  1. Log in and navigate to 'Make Appointment'
    - expect: Make Appointment form visible
  2. Leave required fields blank (e.g., visit date) and click 'Book Appointment'
    - expect: Validation error shown or booking prevented
    - expect: No confirmation page displayed

#### 1.3. Invalid Date - Past Date

**File:** `tests/cura/invalid-past-date.spec.ts`

**Steps:**
  1. Log in and navigate to 'Make Appointment'
    - expect: Make Appointment form visible
  2. Enter a past date for visit and submit
    - expect: Validation or error preventing booking
    - expect: User remains on form with error message

#### 1.4. Login Failure - Wrong Credentials

**File:** `tests/cura/login-failure.spec.ts`

**Steps:**
  1. Open 'Make Appointment' and enter invalid username/password
    - expect: Login fails with error message like 'Login failed! Please ensure the username and password are valid.'
    - expect: User remains on login page

#### 1.5. Protected Pages Redirect When Not Authenticated

**File:** `tests/cura/protected-redirect.spec.ts`

**Steps:**
  1. Attempt to access 'History' or 'Profile' pages without login
    - expect: User redirected to login page or prompted to log in

#### 1.6. Session & Logout

**File:** `tests/cura/session-logout.spec.ts`

**Steps:**
  1. Log in, open menu and select 'Logout'
    - expect: User is logged out and returned to homepage or login screen
    - expect: Accessing protected pages redirects to login

#### 1.7. Responsive - Mobile View Appointment Booking

**File:** `tests/cura/mobile-booking.spec.ts`

**Steps:**
  1. Set viewport to mobile (e.g., 390x844) and open homepage
    - expect: Mobile menu present and usable
  2. Complete happy-path booking using mobile menu and form
    - expect: Booking completes and confirmation page displays correctly on mobile
