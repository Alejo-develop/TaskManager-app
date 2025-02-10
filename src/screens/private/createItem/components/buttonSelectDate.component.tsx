import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { height, literataItalic, redColor, whiteColor, width } from '../../../../utils/style.constanst';

interface ButtonSelectDateProps {
  text: string;
  onPress: () => void;
}

const ButtonSelectDate = ({onPress, text}: ButtonSelectDateProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.25,
    height: height * 0.05,
    elevation: 6,
    justifyContent: 'center',
    backgroundColor: redColor,
    borderWidth: 1,
    borderColor: whiteColor
  },
  textButton: {
    fontFamily: literataItalic,
    color: whiteColor,
    textAlign: 'center'
  },
});

export default ButtonSelectDate;
