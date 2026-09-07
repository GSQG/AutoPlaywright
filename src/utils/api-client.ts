import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async get(url: string) {
    return this.request.get(url);
  }

  async post(url: string, data: Record<string, unknown>) {
    return this.request.post(url, { data });
  }
}
