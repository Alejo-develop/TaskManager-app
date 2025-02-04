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
import UseOptionMenu from '../hook/useOptionMenu.hook';
import InfoUserModal from './infoUser.modal';

const MenuOptionComponent = () => {
  const {sentence, isModalInfoUserVisible, setIsModaInfolUser, navigate} =
    UseOptionMenu();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      <View style={[{flexDirection: 'row'}]}>
        <View style={styles.containerButtons}>
          <ButtonMenuComponent
            text="Create new Habit"
            onPress={() => navigate('habit')}
          />
          <ButtonMenuComponent
            text="Make new Purpose"
            onPress={() => navigate('purpose')}
          />
          <ButtonMenuComponent
            text="Create new Challenge"
            onPress={() => navigate('challenge')}
          />
          <ButtonMenuComponent text="Change your Info" onPress={() => setIsModaInfolUser(true)}/>
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

      <InfoUserModal 
      isVisible={isModalInfoUserVisible}
      onClose={() => setIsModaInfolUser(false)}
      />
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
    alignItems: 'center',
  },
  sentence: {
    color: blueColor,
    textAlign: 'center',
    fontFamily: literataItalic,
    fontSize: 10,
    width: width * 0.6,
  },
});

export default MenuOptionComponent;
