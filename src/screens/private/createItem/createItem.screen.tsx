import {View, ScrollView} from 'react-native';
import UseCreateItem from './hook/useCreateItem.hook';
import FormItemComponent from './components/formItem.component';
import HeaderItemScreenComponent from './components/headerItemScreen.component';
import FooterCreateItemScreenComponent from './components/footer.component';
import {height} from '../../../utils/style.constanst';

const CreateItemScreen = () => {
  const {itemType, categories, setIdCategorie} = UseCreateItem();

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{height: height * 0.9}}>
      <HeaderItemScreenComponent itemType={itemType} />
      <FormItemComponent
        itemType={itemType}
        categories={categories}
        setId={setIdCategorie}
      />
      <FooterCreateItemScreenComponent itemType={itemType} />
    </ScrollView>
  );
};

export default CreateItemScreen;
