import { FindAllCategoriesRequest } from '../entities/categories/request/categoryRepuest';
import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../entities/categories/response/categoriesResponse';

export interface CategoryRepository {
  findAll(data: FindAllCategoriesRequest): Promise<
    FindAllCategoriesResponse | FindAllCategoriesErrorResponse
  >;
}
