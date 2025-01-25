import {Image, StyleSheet, Text} from 'react-native';
import ContainerPageComponent from './container.component';
import {imgOnboarding} from '../../../../utils/img.constanst';
import { blueColor, height, literataBold, redColor, width } from '../../../../utils/style.constanst';

const SecondOnboardingScreen = () => {
  return (
    <ContainerPageComponent>
      <Image source={{uri: imgOnboarding.mirror}} style={styles.img}/>
      <Text style={styles.text}>
        We know that to <Text style={{color: blueColor}}>achieve</Text> what we <Text style={{color: redColor}}>dream</Text> of, it
        takes more than just
        <Text style={{color: blueColor}}>desire</Text>, and that's why we are <Text style={{color: redColor}}>here!</Text>
      </Text>
    </ContainerPageComponent>
  );
};

const styles = StyleSheet.create({
  img: {
    width: width * 0.36,
    height: height * 0.25,
    marginBottom: 20
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontFamily: literataBold,
    fontSize: height * 0.018,
    width: width * 0.75,
  },
});

export default SecondOnboardingScreen;
