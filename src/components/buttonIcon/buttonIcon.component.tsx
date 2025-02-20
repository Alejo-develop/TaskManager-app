import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../interface/button.pops';
import { blueColor, height, whiteColor, width } from '../../utils/style.constanst';

interface IconButtonProps extends Partial<ButtonProps> {
  width: string;
  height: string;
  img: any;
}

const IconButtonComponent = ({
  backgroundColor,
  height: height_,
  img,
  width: width_,
  onPress,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}
      onPress={onPress}>
      <Image
        tintColor={blueColor}
        source={img}
        style={[{height: height * parseFloat(height_), width: width * parseFloat(width_)}]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.11,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    color: whiteColor
  },
});

export default IconButtonComponent;
