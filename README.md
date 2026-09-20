# Playwright + TypeScript Automation Framework

This repository contains a **scalable Playwright framework** built with TypeScript, following Page Object Model (POM) design, fixtures, utilities, and CI/CD integration with GitHub Actions and Azure Pipelines.  
It is designed for industrial use, supporting data‑driven tests, reporting, screenshots, and parallel execution.

---

## 📂 Project Structure

```bash
playwright-framework/
│
├── .github/workflows/playwright.yml   # GitHub Actions workflow
├── azure-pipelines.yml                # Azure Pipelines config
├── src/
│   ├── pages/                         # Page Object classes
│   │      LoginPage.ts
│   │      InventoryPage.ts
│   ├── fixtures/                      # Base fixtures
│   │      baseFixture.ts
│   ├── utils/                         # Config, logger, wait utils
│   │      config.ts
│   │      logger.ts
│   │      waitUtils.ts
│   ├── testdata/                      # JSON test data
│   │      login.json
│   └── constants/                     # URLs and constants
│          urls.ts
├── tests/                             # Test specs
│      login.spec.ts
│      inventory.spec.ts
│      cart.spec.ts
│      error.spec.ts
├── reports/                           # Custom reports
├── allure-results/                    # Allure results
├── playwright-report/                 # Playwright HTML report
├── screenshots/                       # Captured screenshots
├── traces/                            # Playwright traces
├── .env                               # Environment variables
├── package.json                       # Dependencies
├── playwright.config.ts               # Playwright config
├── tsconfig.json                      # TypeScript config
└── README.md                          # Project documentation


---

## 🚀 Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/<your-repo>.git
   cd playwright-framework


2. Install dependencies:
   ```bash
   npm install
   npx playwright install --with-deps



3. Configure environment variables in .env:
   ```bash
   BASE_URL=https://www.saucedemo.com
   USERNAME=standard_user
   PASSWORD=secret_sauce


4. Run all tests:
   ```bash
   npx playwright test

5. Run a specific file:
   ```bash
   npx playwright test login.spec.ts

6. Run a specific test case:
   ```bash
   npx playwright test -g "Valid login"

7. HTML report
   ```bash
   npx playwright show-report


8. 👨‍💻 Author
   Developed by Nirbhaya Maheshwari  
   Automation Developer | Java, Selenium, Playwright, CI/CD
   







