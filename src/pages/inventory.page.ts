import { Page, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class InventoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async goto(): Promise<void> {
    await super.goto('/inventory.html');
  }

  async assertIsLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory\.html/);
  }
}
