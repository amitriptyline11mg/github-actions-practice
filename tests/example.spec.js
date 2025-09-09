// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  console.log("Test 01");
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  console.log("Test 02");
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Test 3', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // console.log("This test will fail");
  console.log("This test will not fail");

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test.describe("Describe grouping", () => {
  
  test('Group Test 01', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    console.log("Inside group, test 01");

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Group Test 02', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    console.log("Inside group, test 02");

    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});


test('Test 4', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  console.log("Outside the group,test 4, this should pass");

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
