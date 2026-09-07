import { test } from '../../src/fixtures/test.fixture';
import { ENV } from '../../config/env';

test.describe('Navegación - Carrito', () => {
  test('Dado que ingresa a sauce demo con login exitoso, debe navegar a la página de carrito', async ({
    loginPage }) => {
    await loginPage.goto();
    await loginPage.login(ENV.standardUser, ENV.standardPassword);
  });

  test('Y selecciona un producto', async ({ loginPage, cartPage }) => {
    await loginPage.goto();
    await loginPage.login(ENV.standardUser, ENV.standardPassword);
    await loginPage.assertIsLoaded();
    await cartPage.selectProduct();
    await cartPage.assertIsLoaded();
  });
});
