import {LoginUser, SingUpUser} from '../../application/useCases/user.useCase';
import {LoginRequest} from '../../domain/entities/user/request/loginRequest';
import { SignUpRequest } from '../../domain/entities/user/request/signUpRequest';
import {LoginErrorResponse, LoginResponse} from '../../domain/entities/user/response/loginResponse';
import { SignUpErrorResponse, SignUpResponse } from '../../domain/entities/user/response/signUpResponse';
import {UserRepositoryImp} from '../repositories/user.repositorylmp';

const userRepository_ = new UserRepositoryImp();

export class UserController {
  static async Login(data: LoginRequest): Promise<LoginResponse | LoginErrorResponse> {
    try {
      const response = await LoginUser(userRepository_, data);

      return response;
    } catch (error) {
      throw  error
    }
  }

  static async SignUp(data: SignUpRequest): Promise<SignUpResponse | SignUpErrorResponse> {
    try {
      const response = await SingUpUser(userRepository_, data);
      return response;
    } catch (error) {
      throw error
    }
  }
}
