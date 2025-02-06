import {GetCategoriesServices} from '../../../src/services/categories.services';
import {
  FindAllCategoriesResponse,
  FindAllCategoriesErrorResponse,
} from '../../domain/entities/categories/response/categoriesResponse';
import {CategoryRepository} from '../../domain/interfaces/categories.repository';

export class CategoriesRepositoryImp implements CategoryRepository {
  async findAll(): Promise<
    FindAllCategoriesResponse | FindAllCategoriesErrorResponse
  > {
    try {
      return await GetCategoriesServices();
    } catch (error) {
      throw error;
    }
  }
}
