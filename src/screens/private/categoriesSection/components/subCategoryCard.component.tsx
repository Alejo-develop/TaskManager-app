import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Category} from '../../../../../core/domain/entities/categories/category';
import {StyleSheet} from 'react-native';
import {
  height,
  literataRegular,
  redColor,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PrivateNavigationRoutes } from '../../../../types/navigation.type';

interface SubCategoryCardComponentProps {
  data: Category;
  categoryType: string;
}

const SubCategoryCardComponent = ({data, categoryType}: SubCategoryCardComponentProps) => {
  const goTo = useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>()

  const goToSeeItems = () => {
    goTo.navigate('itemList', {categoryType: categoryType})
  }

  return (
    <View style={style.containerCard}>
      <TouchableOpacity style={style.card} onPress={goToSeeItems}>
        <Image source={{uri: data.img}} style={style.img} />
      </TouchableOpacity>
      <Text style={style.title}>{data.name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  containerCard: {
    width: width * 0.39,
    height: height * 0.33,
    backgroundColor: redColor,
    marginHorizontal: 20,
    elevation: 6
  },
  card: {
    width: width * 0.37,
    height: height * 0.3,
    marginHorizontal: 20,
    elevation: 6
  },
  img: {
    width: width * 0.37,
    height: height * 0.3,
    bottom: 10,
    elevation: 6
  },
  title: {
    textAlign: 'center',
    fontFamily: literataRegular,
    bottom: 8,
    color: whiteColor
  },
});

export default SubCategoryCardComponent;
