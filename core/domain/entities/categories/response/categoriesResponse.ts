import {Category} from '../category';

export interface FindAllCategoriesResponse {
  data: Category[];
}

export interface FindAllCategoriesErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
