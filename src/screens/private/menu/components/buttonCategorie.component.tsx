import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonCategorieProps} from '../../../../interface/button.pops';
import {
  blueColor,
  height,
  literataRegular,
  redColor,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';

const CategorieButtonComponent = ({
  text,
  img,
  onPress,
}: ButtonCategorieProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image style={styles.img} source={{uri: img}} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: blueColor,
    borderWidth: 2,
    borderColor: redColor,
    height: height * 0.25,
    width: width * 0.28,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  text: {
    color: whiteColor,
    fontFamily: literataRegular,
    fontSize: 12
  },
  img: {
    height: height * 0.065,
    width: width * 0.125,
  },
});

export default CategorieButtonComponent;
