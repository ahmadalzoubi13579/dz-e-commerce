import { CreateAxiosDefaults } from 'axios';
import { BASE_API_URL } from '~/src/config/constants';

const customAxiosInstanceConfigs: CreateAxiosDefaults = {
  baseURL: BASE_API_URL,
};

export { customAxiosInstanceConfigs };
