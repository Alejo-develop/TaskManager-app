import {Image, StyleSheet, Text} from 'react-native';
import ContainerPageComponent from './container.component';
import {blueColor, height, literataBold, redColor, width} from '../../../../utils/style.constanst';
import {imgCloudinary} from '../../../../utils/img.constanst';

const FourthOnboardingScreen = () => {
  return (
    <ContainerPageComponent>
      <Image source={{uri: imgCloudinary.stamp}} style={styles.img} />
      <Text style={styles.text}>
        <Text style={{color: blueColor}}>Last</Text> but not <Text style={{color: redColor}}>least...</Text> Keep track of how your
        <Text style={{color: redColor}}>habits</Text> are going, so you know <Text style={{color: blueColor}}>exactly</Text> how
        close you <Text style={{color: blueColor}}>are to reaching</Text> your <Text style={{color: redColor}}>goals!</Text>
      </Text>
    </ContainerPageComponent>
  );
};

const styles = StyleSheet.create({
  img: {
    width: width * 0.45,
    height: height * 0.23,
    marginBottom: 20,
  },
  text: {
    color: 'black',
    textAlign: 'center',
    fontFamily: literataBold,
    fontSize: height * 0.015,
    width: width * 0.75,
  },
});

export default FourthOnboardingScreen;
