import {StyleSheet} from 'react-native';
import {
    blueColor,
  height,
  literataBold,
  literataRegular,
  redColor,
  titleBold,
  whiteColor,
  width,
} from '../../../utils/style.constanst';

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
  },
  header: {
    height: height * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    gap: height * 0.03,
  },
  img: {
    width: width * 0.37,
    height: height * 0.13,
  },
  name: {
    fontFamily: titleBold,
    color: 'black',
    fontSize: height * 0.03,
  },
  title: {
    fontFamily: literataRegular,
    color: redColor,
    fontSize: height * 0.025,
  },
  containerInputs: {
    height: height * 0.6,
    width: width * 1,
    elevation: 6,
    backgroundColor: redColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.03,
  },
  textFooter: {
    color: whiteColor,
    fontFamily: literataBold,
  },
  buttonText: {
    color: blueColor,
    fontFamily: literataBold,
    textAlign: 'center',
  },
});

export default styles;
