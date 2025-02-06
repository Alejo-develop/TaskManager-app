import {FindAllCategories} from '../../application/useCases/categorie.useCase';
import { FindAllCategoriesRequest } from '../../domain/entities/categories/request/categoryRepuest';
import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../../domain/entities/categories/response/categoriesResponse';
import {CategoriesRepositoryImp} from '../repositories/category.respositoryImp';

const categoryRepository_ = new CategoriesRepositoryImp();

export class CategoriesController {
  static async findAll(data: FindAllCategoriesRequest): Promise<
    FindAllCategoriesResponse | FindAllCategoriesErrorResponse
  > {
    try {
      const response = await FindAllCategories(categoryRepository_, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
