import {Text, View} from 'react-native';
import {blueColor, height} from '../../../utils/style.constanst';
import UseSeeItemByCategorie from './hook/useSeeItemsByCategorie.hook';

const SeeItemByCategorieScreen = () => {
  const {categorieType} = UseSeeItemByCategorie()
  
    return (
    <View style={{backgroundColor: blueColor, height: height * 0.9}}>
      <Text style={{color: 'black'}}>See item by {categorieType}</Text>
    </View>
  );
};

export default SeeItemByCategorieScreen;
