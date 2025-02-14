import {StyleSheet, View} from 'react-native';
import UseItemList from './hooks/useItemList.hook';
import HeaderItemListComponent from './components/headerItemList.componment';
import { blueColor, height, width } from '../../../utils/style.constanst';

const ItemListScreen = () => {
  const {itemName, categoryName, items} = UseItemList()

  return (
    <View style={style.container}>
      <HeaderItemListComponent itemType={itemName} categoryName={categoryName}/>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.9,
    alignItems: 'center',
    backgroundColor: blueColor
  }
})

export default ItemListScreen;
