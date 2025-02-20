import {StyleSheet, Text, View} from 'react-native';
import {
  blueColor,
  height,
  literataBold,
  width,
} from '../../../../utils/style.constanst';
import CategorieButtonComponent from './buttonCategorie.component';
import {imgCloudinary} from '../../../../utils/img.constanst';
import UseCategorieSection from '../hook/useCateogireSection.hook';

const CategorieSectionComponent = () => {
  const {navigate} = UseCategorieSection();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>

      <View style={styles.containerButtos}>
        <CategorieButtonComponent
          text="Purposes"
          img={imgCloudinary.candle}
          onPress={() => navigate('purposes')}
        />
        <CategorieButtonComponent
          text="Habits"
          img={imgCloudinary.crown}
          onPress={() => navigate('habits')}
        />
        <CategorieButtonComponent
          text="Challenges"
          img={imgCloudinary.mirror}
          onPress={() => navigate('challenges')}
        />
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
    fontSize: 20,
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
