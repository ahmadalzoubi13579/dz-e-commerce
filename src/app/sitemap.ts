import { MetadataRoute } from 'next';
import { APP_ENV, BASE_API_URL, BASE_URL } from '../config/constants';
import { productsUrl } from './features/products/services/configs';
import { GetProductsResponse } from './features/products/services/models';
import { PATHS } from './shared/constants/paths';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDomain = BASE_URL.slice(0, -1);

  // sitemap for static routes
  const basicSitemapPaths = ['', PATHS.PRODUCTS];
  const basicSitemap: MetadataRoute.Sitemap = basicSitemapPaths.map(path => ({
    url: `${currentDomain}${path}`,
  }));

  // sitemap for dynamic routes ex. products/:id (first 20 route)
  const productsListUrl = `${BASE_API_URL}${productsUrl}`;
  const res = await fetch(productsListUrl);
  const products: GetProductsResponse = await res.json();
  const productsSitemap: MetadataRoute.Sitemap = products?.data
    ? products.data.slice(0, 20).map(productItem => ({
        url: `${currentDomain}${PATHS.PRODUCTS}/${productItem.id}`,
      }))
    : [];

  // sitemap for dynamic routes ex. categories/:id (first 20 route), orders/:id all like previous one, ect.

  const completeSitemap: MetadataRoute.Sitemap = [...basicSitemap, ...productsSitemap];

  return APP_ENV === 'prod' ? completeSitemap : [];
}
