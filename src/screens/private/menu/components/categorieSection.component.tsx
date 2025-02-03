import {StyleSheet, Text, View} from 'react-native';
import {blueColor, height, literataBold, width} from '../../../../utils/style.constanst';
import CategorieButtonComponent from './buttonCategorie.component';
import { imgOnboarding } from '../../../../utils/img.constanst';

const CategorieSectionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <View style={styles.containerButtos}>
        <CategorieButtonComponent text='Purposes' img={imgOnboarding.candle}/>
        <CategorieButtonComponent text='Habits' img={imgOnboarding.crown}/>
        <CategorieButtonComponent text='Challenges' img={imgOnboarding.mirror}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.36,
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    color: blueColor,
    fontFamily: literataBold,
    fontSize: 20
  },
  containerButtos: {
    flexDirection: 'row',
    width: width * 1,
    height: height * 0.316,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
});

export default CategorieSectionComponent;
