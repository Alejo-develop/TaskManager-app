import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonMenuProps} from '../../../../interface/button.pops';
import { height, literataRegular, redColor, whiteColor, width } from '../../../../utils/style.constanst';

const ButtonMenuComponent = ({text, onPress}: ButtonMenuProps) => {
  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    borderWidth: 2,
    borderColor: whiteColor,
    width : width * 0.45,
    height: height * 0.045,
    backgroundColor: redColor,
    elevation: 6,
    justifyContent: 'center'
  },
  text: {
    color: whiteColor,
    fontFamily: literataRegular,
    paddingLeft: 5
  },
});

export default ButtonMenuComponent;
