import {View} from 'react-native';
import MenuOptionComponent from './components/menuOptions.component';
import CategorieSectionComponent from './components/categorieSection.component';

const MenuScreen = () => {
  return (
    <View>
      <MenuOptionComponent />
      <CategorieSectionComponent />
    </View>
  );
};

export default MenuScreen;
