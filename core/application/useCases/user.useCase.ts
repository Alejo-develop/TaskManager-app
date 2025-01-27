import {LoginRequest} from '../../domain/entities/user/request/loginRequest';
import {SignUpRequest} from '../../domain/entities/user/request/signUpRequest';
import {LoginResponse} from '../../domain/entities/user/response/loginResponse';
import {SignUpResponse} from '../../domain/entities/user/response/signUpResponse';
import {UserRepository} from '../../domain/interfaces/user.repository';

export const LoginUser = async (
  userRepository: UserRepository,
  data: LoginRequest,
): Promise<LoginResponse> => {
  return userRepository.login(data);
};

export const SingUpUser = async (
  userRepository: UserRepository,
  data: SignUpRequest,
): Promise<SignUpResponse> => {
  return userRepository.signUp(data);
};
