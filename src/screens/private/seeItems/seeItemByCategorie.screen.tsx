import {Text, View} from 'react-native';
import {blueColor, height} from '../../../utils/style.constanst';
import UseSeeItemByCategorie from './hook/useSeeItemsByCategorie.hook';
import HeaderSeeItemByCategorieScreen from './components/headerSeeItem.component';

const SeeItemByCategorieScreen = () => {
  const {categorieType} = UseSeeItemByCategorie()
  
    return (
    <View style={{backgroundColor: blueColor, height: height * 0.9}}>
      <HeaderSeeItemByCategorieScreen itemType={categorieType}/>
    </View>
  );
};

export default SeeItemByCategorieScreen;
