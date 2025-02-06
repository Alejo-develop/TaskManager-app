import AsyncStorage from '@react-native-async-storage/async-storage';
import {User} from '../../core/domain/entities/user/user';

export const GetTokenServices = async () => {
  try {
    const user = (await AsyncStorage.getItem('user')) as unknown as User;
    return user.token;
  } catch (error) {
    console.log(error);
  }
};
