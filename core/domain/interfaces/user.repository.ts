import {LoginRequest} from '../entities/user/request/loginRequest';
import {SignUpRequest} from '../entities/user/request/signUpRequest';
import {LoginErrorResponse, LoginResponse} from '../entities/user/response/loginResponse';
import {SignUpResponse} from '../entities/user/response/signUpResponse';

export interface UserRepository {
  signUp(data: SignUpRequest): Promise<SignUpResponse>;
  login(data: LoginRequest): Promise<LoginResponse | LoginErrorResponse>;
}
