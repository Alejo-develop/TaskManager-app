import axios, {AxiosError} from 'axios';
import {
  FindAllCategoriesErrorResponse,
  FindAllCategoriesResponse,
} from '../../core/domain/entities/categories/response/categoriesResponse';
import { apiCategories } from '../api/apiCategories';
import { FindAllCategoriesRequest } from '../../core/domain/entities/categories/request/categoryRepuest';

export const GetCategoriesServices = async (data: FindAllCategoriesRequest): Promise<
  FindAllCategoriesResponse | FindAllCategoriesErrorResponse
> => {
  try {
    const res = await axios.get<FindAllCategoriesResponse>(apiCategories, {
      headers: {
        Authorization: `Bearer ${data.token}`
      }
    });
    return res.data;
  } catch (error: any) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<FindAllCategoriesErrorResponse>;
      if (axiosError.response) {
        const errorData = axiosError.response.data;
        throw errorData.message;
      }
    }
    throw new Error('An unexpected error occurred.');
  }
};
