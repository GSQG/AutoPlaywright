import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  private readonly usernameInput = '#user-name';
  private readonly passwordInput = '#password';
  private readonly loginButton = '#login-button';
  private readonly errorMessage = '[data-test="error"]';

  async goto(): Promise<void> {
    await super.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.loginButton).click();
  }

  async assertIsLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/saucedemo\.com/);
  }

  async assertIsLoadedInventory(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }

  async assertErrorMessage(expectedMessage: string): Promise<void> {
    const errorMessageLocator = this.page.locator(this.errorMessage);
    await expect(errorMessageLocator).toBeVisible();
    await expect(errorMessageLocator).toHaveText(expectedMessage);
  }
}
