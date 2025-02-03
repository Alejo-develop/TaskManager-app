import {StyleSheet} from 'react-native';
import {Text, View} from 'react-native';
import {
  blueColor,
  height,
  literataBold,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';
import ButtonMenuComponent from './buttonMenu.component';

const MenuOptionComponent = () => {
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
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.4,
    backgroundColor: blueColor,
    elevation: 6,
    paddingTop: 15,
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
    gap: 15
  }
});

export default MenuOptionComponent;
