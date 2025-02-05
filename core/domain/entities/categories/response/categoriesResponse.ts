import {Category} from '../category';

export interface FindAllCategoriesResponse {
  message: string;
  data: {
    categories: Category[];
  };
}

export interface FindAllCategoriesErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
