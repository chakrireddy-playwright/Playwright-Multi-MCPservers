# Playwright Multi MCP Servers

## Overview
This project demonstrates Playwright automation integrated with multiple MCP (Model Context Protocol) servers.

## Features
- Playwright with TypeScript
- Planner Agent
- Generator Agent
- Healer Agent
- Multiple MCP Servers
- GitHub Actions CI/CD
- Test Specifications
- End-to-End UI Automation

## Project Structure

```
.github/
specs/
tests/
playwright.config.ts
package.json
```

## Installation

```bash
npm install
```

## Run Tests

```bash
npx playwright test
```

## Run Specific Test

```bash
npx playwright test tests/cura/book-appointment-happy.spec.ts
```

## Generate HTML Report

```bash
npx playwright show-report
```

## Author

Chakri Reddy