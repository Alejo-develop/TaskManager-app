import {View} from 'react-native';
import UseCreateItem from './hook/useCreateItem.hook';
import FormItemComponent from './components/formItem.component';
import HeaderItemScreenComponent from './components/headerItemScreen.component';

const CreateItemScreen = () => {
  const {itemType, categories} = UseCreateItem();

  return (
    <View>
      <HeaderItemScreenComponent itemType={itemType} />
      <FormItemComponent itemType={itemType} />
    </View>
  );
}; 

export default CreateItemScreen;
