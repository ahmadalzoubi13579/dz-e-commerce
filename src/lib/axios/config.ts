import { CreateAxiosDefaults } from 'axios';
import { BASE_API_URL } from '~/src/config/constants';

const customAxiosInstanceConfigs: CreateAxiosDefaults = {
  // baseURL: process.env.NEXT_PUBLIC_BASE_API_URL,
  baseURL: BASE_API_URL,
};

export { customAxiosInstanceConfigs };
