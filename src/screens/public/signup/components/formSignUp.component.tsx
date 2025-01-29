import {View} from 'react-native';
import {blueColor, height} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';
import { SignUpRequest } from '../../../../../core/domain/entities/user/request/signUpRequest';

interface FormSignUpProps{
  hanldeFormChange: (field: keyof SignUpRequest, value: string) => void;
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>
}

const FormSignUpComponent = ({hanldeFormChange, setRepeatPassword}: FormSignUpProps) => {
  return (
    <View style={{gap: height * 0.04}}>
      <InputComponent
        color={blueColor}
        placeholder="Name..."
        value="Name"
        entry={false}
        onChangeText={text => hanldeFormChange('name', text)}
      />
      <InputComponent
        color={blueColor}
        placeholder="Email..."
        value="Email"
        entry={false}
        onChangeText={text => hanldeFormChange('email', text)}
      />
      <InputComponent
        color={blueColor}
        placeholder="Password..."
        value="Password"
        entry={true}
        onChangeText={text => hanldeFormChange('password', text)}
      />
      <InputComponent
        color={blueColor}
        placeholder="Repeat Password..."
        value="Repeat Password"
        entry={true}
        onChangeText={setRepeatPassword}
      />
    </View>
  );
};

export default FormSignUpComponent;
