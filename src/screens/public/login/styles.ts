import {StyleSheet} from 'react-native';
import {
  blueColor,
  height,
  literataBold,
  literataItalic,
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
    height: height * 0.35,
    justifyContent: 'center',
    alignItems: 'center',
    gap: height * 0.03,
  },
  img:{
    width: width * 0.37,
    height: height * 0.13
  },
  name: {
    fontFamily: titleBold,
    color: 'black',
    fontSize: height * 0.03,
  },
  title: {
    fontFamily: literataRegular,
    color: blueColor,
    fontSize: height * 0.025,
  },
  containerInputs: {
    height: height * 0.56,
    width: width * 1,
    elevation: 6,
    backgroundColor: blueColor,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.05
  },
  textFooter:{
    color: whiteColor,
    fontFamily: literataBold
  },
  buttonText:{
    color: redColor,
    fontFamily: literataBold,
    textAlign: 'center'
  },
  errorMessage: {
    fontFamily: literataItalic,
    color: whiteColor,
  }
});

export default styles;
