import { test } from '../../src/fixtures/test.fixture';
import { ENV } from '../../config/env';

test.describe('Navegación - Inventario', () => {
  test('debe navegar a la página de inventario', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(ENV.standardUser, ENV.standardPassword);
    await inventoryPage.goto();
    await inventoryPage.assertIsLoaded();
  });
});
