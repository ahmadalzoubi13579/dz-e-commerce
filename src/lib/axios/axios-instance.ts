import axios from 'axios';

import { customAxiosInstanceConfigs } from './config';

const customAxiosInstance = axios.create(customAxiosInstanceConfigs);

export { customAxiosInstance };
