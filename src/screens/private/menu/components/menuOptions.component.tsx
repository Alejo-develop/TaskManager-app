import {Image, StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {
  blueColor,
  height,
  literataBold,
  literataItalic,
  redColor,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';
import ButtonMenuComponent from './buttonMenu.component';
import {imgOnboarding} from '../../../../utils/img.constanst';
import {useEffect, useState} from 'react';
import {getRandomSentence} from '../../../../services/random.services';

const MenuOptionComponent = () => {
  const [sentence, setSentence] = useState<string>('');
  const getSentence = () => {
    setSentence(getRandomSentence());
  };

  useEffect(() => {
    getSentence();
  }, [sentence]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <View style={[{flexDirection: 'row'}]}>
        <View style={styles.containerButtons}>
          <ButtonMenuComponent text="Create new Habit" />
          <ButtonMenuComponent text="Make new Purpose" />
          <ButtonMenuComponent text="Create new Challenge" />
          <ButtonMenuComponent text="Change your Info" />
        </View>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              width: width * 0.42,
              height: height * 0.28,
              paddingBottom: 4,
            },
          ]}>
          <Image source={{uri: imgOnboarding.angel}} style={styles.img} />
        </View>
      </View>

      <View style={styles.containerSentence}>
        <Text style={styles.sentence}>{sentence}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.42,
    backgroundColor: blueColor,
    elevation: 6,
    paddingTop: 15,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: whiteColor,
    fontFamily: literataBold,
    fontSize: 20,
  },
  containerButtons: {
    width: width * 0.57,
    height: height * 0.28,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  img: {
    height: height * 0.23,
    width: width * 0.32,
  },
  containerSentence: {
    width: width * 0.66,
    height: height * 0.06,
    backgroundColor: whiteColor,
    marginTop: 9,
    borderColor: redColor,
    borderWidth: 2,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sentence: {
    color: blueColor,
    textAlign: 'center',
    fontFamily: literataItalic,
    fontSize: 10, 
    width: width *  0.6
  }
});

export default MenuOptionComponent;
