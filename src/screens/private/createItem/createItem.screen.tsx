import {Text, View} from 'react-native';
import UseCreateItem from './hook/useCreateItem.hook';

const CreateItemScreen = () => {
  const {itemType} = UseCreateItem();

  return (
    <View>
      <Text style={{color: 'black'}}>Create item {itemType}</Text>
    </View>
  );
};

export default CreateItemScreen;
