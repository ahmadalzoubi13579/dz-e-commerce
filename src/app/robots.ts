import { MetadataRoute } from 'next';
import { APP_ENV, BASE_URL } from '../config/constants';
import { PATHS } from './shared/constants/paths';

export default function robots(): MetadataRoute.Robots {
  return APP_ENV === 'prod'
    ? {
        rules: {
          userAgent: '*',
          allow: '/',
          disallow: [`${PATHS.CART}/`, `${PATHS.CHECKOUT}/`, `${PATHS.ORDERS}/`],
        },
        sitemap: `${BASE_URL}sitemap.xml`,
      }
    : {
        rules: {
          userAgent: '*',
          disallow: '/',
        },
      };
}
