import {View} from 'react-native';
import {blueColor, height} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';

const FormSignUpComponent = () => {
  return (
    <View style={{gap: height * 0.04}}>
      <InputComponent
        color={blueColor}
        placeholder="Name..."
        value="Name"
        entry={true}
      />
      <InputComponent
        color={blueColor}
        placeholder="Email..."
        value="Email"
        entry={true}
      />
      <InputComponent
        color={blueColor}
        placeholder="Password..."
        value="Password"
        entry={true}
      />
      <InputComponent
        color={blueColor}
        placeholder="Repeat Password..."
        value="Repeat Password"
        entry={true}
      />
    </View>
  );
};

export default FormSignUpComponent;
