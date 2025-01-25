import {KeyboardTypeOptions} from 'react-native';

export interface InputGenericProps {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  entry: boolean;
  keyBoardPad?: KeyboardTypeOptions;
  color: string;
}
