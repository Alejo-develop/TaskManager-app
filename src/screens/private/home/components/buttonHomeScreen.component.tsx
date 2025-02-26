import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../../../interface/button.pops';
import {height, literataItalic, whiteColor, width} from '../../../../utils/style.constanst';

const ButtonHomeScreenComponent = ({
  backgroundColor,
  text,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.3,
    height: height * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6
  },
  text: {
    fontFamily: literataItalic,
    color: whiteColor
  },
});

export default ButtonHomeScreenComponent;
