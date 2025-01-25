import {View} from 'react-native';
import {
  height,
  redColor,
} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';

const FormLoginComponent = () => {
  return (
    <View style={{gap: height * 0.04}}>
      <InputComponent
        color={redColor}
        placeholder="Email..."
        value="Email"
        entry={true}
      />
      <InputComponent
        color={redColor}
        placeholder="Password..."
        value="Password"
        entry={true}
      />
    </View>
  );
};

export default FormLoginComponent;
