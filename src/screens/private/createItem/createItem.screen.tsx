import {ScrollView} from 'react-native';
import UseCreateItem from './hook/useCreateItem.hook';
import FormItemComponent from './components/formItem.component';
import HeaderItemScreenComponent from './components/headerItemScreen.component';
import {height} from '../../../utils/style.constanst';

const CreateItemScreen = () => {
  const {itemType, categories} = UseCreateItem();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{height: height * 0.9}}>
      <HeaderItemScreenComponent itemType={itemType} />
      <FormItemComponent
        itemType={itemType}
        categories={categories}
      />
    </ScrollView>
  );
};

export default CreateItemScreen;
