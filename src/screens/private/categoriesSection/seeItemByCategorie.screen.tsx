import {FlatList, Text, View} from 'react-native';
import {blueColor, height, width} from '../../../utils/style.constanst';
import UseSeeItemByCategorie from './hook/useSeeItemsByCategorie.hook';
import HeaderSeeItemByCategorieScreen from './components/headerSeeItem.component';
import SubCategoryCardComponent from './components/subCategoryCard.component';

const SeeItemByCategorieScreen = () => {
  const {categorieType, categories} = UseSeeItemByCategorie();

  return (
    <View style={{backgroundColor: blueColor, height: height * 0.9}}>
      <HeaderSeeItemByCategorieScreen itemType={categorieType} />

      <View style={{paddingBottom: height * 0.3, width: width * 1}}>
        <FlatList
          data={categories}
          renderItem={({item}) => <SubCategoryCardComponent categoryType={categorieType} data={item} />}
          contentContainerStyle={{
            width: width * 1,
            alignItems: 'center',
            gap: height * 0.05,
            paddingTop: 10
          }}
          numColumns={2} 
        />
      </View>
    </View>
  );
};

export default SeeItemByCategorieScreen;
