import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  private readonly sauceShirt = '[data-test="shopping-cart-link"]';
 private readonly shoppingCartLink = '[data-test="shopping-cart-link"]';
 private readonly checkoutButton = '[data-test="checkout"]';
 private readonly firstNameInput = '[data-test="firstName"]';
 private readonly lastNameInput = '[data-test="lastName"]';
 private readonly postalCodeInput = '[data-test="postalCode"]';
 private readonly continueButton = '[data-test="continue"]';
 private readonly finishButton = '[data-test="finish"]';
 private readonly backToProductsButton = '[data-test="back-to-products"]';

  async goto(): Promise<void> {
    await super.goto('/cart.html');
  }

  async assertIsLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  async selectProduct(): Promise<void> {
    await this.page.click(this.sauceShirt);
    await this.page.click(this.shoppingCartLink);
    await this.page.click(this.checkoutButton);
    await this.page.fill(this.firstNameInput, 'John');
    await this.page.fill(this.lastNameInput, 'Doe');
    await this.page.fill(this.postalCodeInput, '12345');
    await this.page.click(this.continueButton);
    await this.page.click(this.finishButton);
    await this.page.click(this.backToProductsButton);
  }
}




