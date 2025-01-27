import {LoginRequest} from '../../core/domain/entities/user/request/loginRequest';
import { SignUpRequest } from '../../core/domain/entities/user/request/signUpRequest';
import {LoginResponse} from '../../core/domain/entities/user/response/loginResponse';
import { SignUpResponse } from '../../core/domain/entities/user/response/signUpResponse';
import apiAuth from '../api/apiAuth';

export const ApiService = {
  async login(data: LoginRequest): Promise<LoginResponse> {
    const res = await apiAuth.post<LoginResponse>('login', data);
    return res.data;
  },

  async SignUp(data: SignUpRequest): Promise<SignUpResponse> {
    const res = await apiAuth.post<SignUpResponse>('signUp', data);
    return res.data
  }
};
