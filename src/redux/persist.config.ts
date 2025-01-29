import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import userReducer from './user.slice';

const persistSessionConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

export const persistedReducer = persistReducer(persistSessionConfig, userReducer);