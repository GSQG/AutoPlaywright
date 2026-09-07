import { test, expect } from '../../src/fixtures/test.fixture';

test.describe('Navegación - Login', () => {
  test('debe cargar la página de login', async ({ loginPage, page }) => {
    await loginPage.goto();
    await expect(page).toHaveURL(/saucedemo\.com/);
  });
});
