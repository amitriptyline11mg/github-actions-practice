// @ts-check
import { test, expect } from '@playwright/test';

test('Independent Test 1', async ({ page }) => {
  console.log("Independent Test 01");
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('Independent Test 2', async ({ page }) => {
  console.log("Independent Test 02");
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('Independent Test 3', async ({ page }) => {

  console.log("Independent Test 03");
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

    console.log("Inside group, test 01");

    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });

  test('Group Test 02', async ({ page }) => {
    console.log("Inside group, test 02");

    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Get started' }).click();
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});


test('Independent Test 4', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  console.log("Independent test 04");

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  console.log('$ git checkout -b "PYPD-YT"');
});
