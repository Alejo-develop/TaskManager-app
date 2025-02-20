import {Image, StyleSheet, Text, View} from 'react-native';
import ContainerPageComponent from './container.component';
import {imgCloudinary} from '../../../../utils/img.constanst';
import { blueColor, height, literataBold, literataItalic, redColor, titleBold, width } from '../../../../utils/style.constanst';

const FirstOnboardingScreen = () => {
  return (
    <ContainerPageComponent>
      <Text style={styles.text1}>Welcome to</Text>
      <View>
        <Image source={{uri: imgCloudinary.crown}} style={styles.img} />
      </View>
      <Text style={styles.title}>Task <Text style={{color: blueColor}}>Manager</Text></Text>
      <Text style={styles.slogan}>Why habits are the key to success</Text>
    </ContainerPageComponent>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: 'black',
    fontFamily: literataBold,
    fontSize: height * 0.017
  },
  img: {
    width: width * 0.37,
    height: height * 0.13
  },
  title: {
    color: redColor,
    fontFamily: titleBold,
    fontSize: height * 0.035
  },
  slogan: {
    color: 'black',
    fontFamily: literataItalic
  },
});

export default FirstOnboardingScreen;
