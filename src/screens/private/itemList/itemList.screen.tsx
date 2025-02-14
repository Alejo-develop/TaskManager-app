import {Text, View} from 'react-native';
import UseItemList from './hooks/useItemList.hook';

const ItemListScreen = () => {
  const {categoryType} = UseItemList()

  return (
    <View>
      <Text>Hola</Text>
    </View>
  );
};

export default ItemListScreen;
