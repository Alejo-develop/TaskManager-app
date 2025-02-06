import {FindAllCategories} from '../../application/useCases/categorie.useCase';
import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../../domain/entities/categories/response/categoriesResponse';
import {CategoriesRepositoryImp} from '../repositories/category.respositoryImp';

const categoryRepository_ = new CategoriesRepositoryImp();

export class CategoriesController {
  static async findAll(): Promise<
    FindAllCategoriesResponse | FindAllCategoriesErrorResponse
  > {
    try {
      const response = await FindAllCategories(categoryRepository_);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
