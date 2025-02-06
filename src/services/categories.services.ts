import {AxiosError} from 'axios';
import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../../core/domain/entities/categories/response/categoriesResponse';
import apiCategories from '../api/apiCategories';

export const GetCategoriesServices = async (): Promise<
  FindAllCategoriesResponse | FindAllCategoriesErrorResponse
> => {
  try {
    const res = await apiCategories.get<FindAllCategoriesResponse>('');
    return res.data;
  } catch (error: any) {
    const axiosError = error as AxiosError<FindAllCategoriesErrorResponse>;
    if (axiosError.response) {
      const errorData = axiosError.response.data;
      throw errorData.message;
    }
    throw new Error(
      "Can't be posible get categories to unexpected error occurred.",
    );
  }
};
