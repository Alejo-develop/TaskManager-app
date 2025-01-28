import {LoginService, SignUpService} from '../../../src/services/auth.services';
import {LoginRequest} from '../../domain/entities/user/request/loginRequest';
import {SignUpRequest} from '../../domain/entities/user/request/signUpRequest';
import {LoginErrorResponse, LoginResponse} from '../../domain/entities/user/response/loginResponse';
import {SignUpErrorResponse, SignUpResponse} from '../../domain/entities/user/response/signUpResponse';
import {UserRepository} from '../../domain/interfaces/user.repository';

export class UserRepositoryImp implements UserRepository {
  async login(data: LoginRequest): Promise<LoginResponse | LoginErrorResponse> {
    try {
      return await LoginService(data);
    } catch (err) {
      throw err;
    }
  }

  async signUp(data: SignUpRequest): Promise<SignUpResponse | SignUpErrorResponse> {
    try {
      return await SignUpService(data);
    } catch (err) {      
      throw err;
    }
  }
}
