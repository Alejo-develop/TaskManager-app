import {ApiService} from '../../../src/services/auth.services';
import {LoginRequest} from '../../domain/entities/user/request/loginRequest';
import {SignUpRequest} from '../../domain/entities/user/request/signUpRequest';
import {LoginResponse} from '../../domain/entities/user/response/loginResponse';
import {SignUpResponse} from '../../domain/entities/user/response/signUpResponse';
import {UserRepository} from '../../domain/interfaces/user.repository';

export class UserRepositoryImp implements UserRepository {
  async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      return await ApiService.login(data);
    } catch (err) {
      throw err;
    }
  }

  async signUp(data: SignUpRequest): Promise<SignUpResponse> {
    try {
      return await ApiService.SignUp(data);
    } catch (err) {
      throw err;
    }
  }
}
