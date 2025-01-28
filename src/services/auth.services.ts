import axios, { AxiosError } from 'axios';
import {LoginRequest} from '../../core/domain/entities/user/request/loginRequest';
import {SignUpRequest} from '../../core/domain/entities/user/request/signUpRequest';
import {
  LoginErrorResponse,
  LoginResponse,
} from '../../core/domain/entities/user/response/loginResponse';
import {SignUpErrorResponse, SignUpResponse} from '../../core/domain/entities/user/response/signUpResponse';
import apiAuth from '../api/apiAuth';

export const LoginService = async (
  data: LoginRequest,
): Promise<LoginResponse | LoginErrorResponse> => {
  try {
    const res = await apiAuth.post<LoginResponse>('login', data);
    return res.data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<LoginErrorResponse>;
      if (axiosError.response) {
        const errorData = axiosError.response.data;
        throw errorData.message
      }
    }
    throw new Error('An unexpected error occurred during login.');
  }
};

export const SignUpService = async (
  data: SignUpRequest,
): Promise<SignUpResponse | SignUpErrorResponse> => {
  try {
    const res = await apiAuth.post<SignUpResponse>('signup', data);
    return res.data;
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      const axiosError = err as AxiosError<SignUpErrorResponse>;
      if (axiosError.response) {
        const errorData = axiosError.response.data;
        throw errorData.message
      }
    }
    throw new Error('An unexpected error occurred during Sign Up.');
  }
};
