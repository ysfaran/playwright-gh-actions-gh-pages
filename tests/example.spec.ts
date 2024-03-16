import {
  expect,
  test,
} from '@playwright/test';

test.beforeEach(({ page }) => page.goto("https://playwright.dev/"),)

test('should succeed', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/);
});

test('should fail', async ({ page }) => {
  await expect(page).not.toHaveTitle(/Playwright/);
});

test('should be flaky', async ({ page }) => {
  if(Math.random() > 0.5){
    await expect(page).toHaveTitle(/Playwright/);
  } else {
    await expect(page).not.toHaveTitle(/Playwright/);
  }
});

test('another flaky test', async ({ page }) => {
  if(Math.random() > 0.5){
    await expect(page).toHaveTitle(/Playwright/);
  } else {
    await expect(page).not.toHaveTitle(/Playwright/);
  }
});