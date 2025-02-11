import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Category} from '../../../../../core/domain/entities/categories/category';
import {StyleSheet} from 'react-native';
import {
  height,
  literataBold,
  literataRegular,
  redColor,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';

interface SubCategoryCardComponentProps {
  data: Category;
}

const SubCategoryCardComponent = ({data}: SubCategoryCardComponentProps) => {
  return (
    <View style={style.containerCard}>
      <TouchableOpacity style={style.card}>
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
