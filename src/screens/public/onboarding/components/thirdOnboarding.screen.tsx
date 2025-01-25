import {Image, StyleSheet, Text, View} from 'react-native';
import ContainerPageComponent from './container.component';
import {imgOnboarding} from '../../../../utils/img.constanst';
import {
  blueColor,
  height,
  literataBold,
  redColor,
  width,
} from '../../../../utils/style.constanst';

const ThirdOnboardingScreen = () => {
  return (
    <ContainerPageComponent>
      <Image source={{uri: imgOnboarding.candle}} style={styles.img} />

      <Text style={styles.text}>
        In <Text style={{color: redColor}}>Task</Text>{' '}
        <Text style={{color: blueColor}}>Manager</Text> you will have everything
        you need to manage your way to
        <Text style={{color: blueColor}}>success!</Text>
      </Text>
      <Text style={styles.text}>
        You will be able to <Text style={{color: blueColor}}>create</Text>{' '}
        <Text style={{color: redColor}}>habits</Text> as well as{' '}
        <Text style={{color: blueColor}}>register</Text>{' '}
        <Text style={{color: redColor}}>goals</Text> and{' '}
        <Text style={{color: redColor}}>challenges</Text> for yourself!
      </Text>
    </ContainerPageComponent>
  );
};

const styles = StyleSheet.create({
  img: {
    width: width * 0.36,
    height: height * 0.25,
    marginBottom: 20,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontFamily: literataBold,
    fontSize: height * 0.01,
    width: width * 0.75,
    marginBottom: 20
  },
});

export default ThirdOnboardingScreen;
