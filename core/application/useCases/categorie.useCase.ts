import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../../domain/entities/categories/response/categoriesResponse';
import {CategoryRepository} from '../../domain/interfaces/categories.repository';

export const FindAllCategories = async (
  categoriesRepository: CategoryRepository,
): Promise<FindAllCategoriesResponse | FindAllCategoriesErrorResponse> => {
  return categoriesRepository.findAll();
};
