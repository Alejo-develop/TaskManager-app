import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../interface/button.pops';
import {height, literataBold, width} from '../../utils/style.constanst';

const ButtonComponent = ({text, backgroundColor, onPress}: ButtonProps) => {
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
    width: width * 0.4,
    height: height * 0.06,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
  },
  text: {
    fontSize: height * 0.018,
    fontFamily: literataBold,
    color: 'white',
  },
});

export default ButtonComponent;
