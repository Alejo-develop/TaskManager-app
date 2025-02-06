import { FindAllCategoriesRequest } from '../../domain/entities/categories/request/categoryRepuest';
import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../../domain/entities/categories/response/categoriesResponse';
import {CategoryRepository} from '../../domain/interfaces/categories.repository';

export const FindAllCategories = async (
  categoriesRepository: CategoryRepository, data: FindAllCategoriesRequest
): Promise<FindAllCategoriesResponse | FindAllCategoriesErrorResponse> => {
  return categoriesRepository.findAll(data);
};
