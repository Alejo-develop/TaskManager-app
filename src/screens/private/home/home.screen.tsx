import {View} from 'react-native';
import ItemsForTodaySliderContainer from './components/containerItemForToday.component';
import ContainerItemsComponent from './components/containerItems.compontent';

const HomeScreen = () => {
  return (
    <View>
      <ItemsForTodaySliderContainer />
      <ContainerItemsComponent />
    </View>
  );
};

export default HomeScreen;
