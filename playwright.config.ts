import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  // Run all tests within a file in parallel to speed up test execution
  fullyParallel: true, 
  // Helpful for uncontrollable flaky tests, which are tests, occasionally failing for various reasons
  retries: 3, 
  // Generates a HTML report to ./playwright-report/
  reporter: 'html', 
  use: {
    // Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer
    trace: 'on-first-retry',
  },
  // Cross-browser testing setup
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },
  ],
};

export default config;
