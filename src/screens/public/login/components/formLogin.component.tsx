import {View} from 'react-native';
import {
  height,
  redColor,
} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';
import { LoginRequest } from '../../../../../core/domain/entities/user/request/loginRequest';

interface FormLoginProps{
  hanldeFormChange: (field: keyof LoginRequest, value: string) => void;
}

const FormLoginComponent = ({hanldeFormChange}: FormLoginProps) => {
  return (
    <View style={{gap: height * 0.04}}>
      <InputComponent
        color={redColor}
        placeholder="Email..."
        value="Email"
        entry={false}
        onChangeText={text => hanldeFormChange('email', text)}
      />
      <InputComponent
        color={redColor}
        placeholder="Password..."
        value="Password"
        entry={true}
        onChangeText={text => hanldeFormChange('password', text)}
      />
    </View>
  );
};

export default FormLoginComponent;
