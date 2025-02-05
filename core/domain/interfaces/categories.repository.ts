import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../entities/categories/response/categoriesResponse';

export interface CategoryRepository {
  findAll(): Promise<
    FindAllCategoriesResponse | FindAllCategoriesErrorResponse
  >;
}
