import {LoginUser, SingUpUser} from '../../application/useCases/user.useCase';
import {LoginRequest} from '../../domain/entities/user/request/loginRequest';
import { SignUpRequest } from '../../domain/entities/user/request/signUpRequest';
import {LoginResponse} from '../../domain/entities/user/response/loginResponse';
import { SignUpResponse } from '../../domain/entities/user/response/signUpResponse';
import {UserRepositoryImp} from '../repositories/user.repositorylmp';

const userRepository_ = new UserRepositoryImp();

export class UserController {
  static async Login(data: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await LoginUser(userRepository_, data);
      return response;
    } catch (error) {
      throw new Error('Failed to log in. Please check your credentials.');
    }
  }

  static async SignUp(data: SignUpRequest): Promise<SignUpResponse> {
    try {
      const response = await SingUpUser(userRepository_, data);
      return response;
    } catch (error) {
      throw new Error('Failed to log in. Please check your credentials.');
    }
  }
}
