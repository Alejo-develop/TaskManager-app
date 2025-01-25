import {StyleSheet, Text, View} from 'react-native';
import {
  blueColor,
  height,
  redColor,
  width,
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

const styles = StyleSheet.create({
  container: {
    height: height * 0.56,
    width: width * 1,
    elevation: 6,
    backgroundColor: blueColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FormLoginComponent;
