import {GetCategoriesServices} from '../../../src/services/categories.services';
import { FindAllCategoriesRequest } from '../../domain/entities/categories/request/categoryRepuest';
import {
  FindAllCategoriesResponse,
  FindAllCategoriesErrorResponse,
} from '../../domain/entities/categories/response/categoriesResponse';
import {CategoryRepository} from '../../domain/interfaces/categories.repository';

export class CategoriesRepositoryImp implements CategoryRepository {
  async findAll(data: FindAllCategoriesRequest): Promise<
    FindAllCategoriesResponse | FindAllCategoriesErrorResponse
  > {
    try {
      return await GetCategoriesServices(data);
    } catch (error) {
      throw error;
    }
  }
}
