import { Category } from '~/src/types/app';

export interface GetCategoriesResponse {
  data: Category[];
}

export interface GetCategoryDetailsResponse {
  data: Category;
}

export interface GetCategoryDetailsPathParams {
  id: string;
}
