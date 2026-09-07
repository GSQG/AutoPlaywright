import dotenv from 'dotenv';

dotenv.config();

export const ENV = {
  environment: process.env.TEST_ENV || 'qa',
  baseURL: process.env.BASE_URL || 'https://www.saucedemo.com',
  standardUser: process.env.STANDARD_USER || '',
  standardPassword: process.env.STANDARD_PASSWORD || '',
};
