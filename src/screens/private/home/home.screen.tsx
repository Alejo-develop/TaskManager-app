import {View} from 'react-native';
import ItemsForTodaySliderContainer from './components/containerItemForToday.component';
import ContainerItemsComponent from './components/containerItems.compontent';
import UseHome from './hooks/useHomeScreen.hook';

const HomeScreen = () => {
  const {challenges, purposes} = UseHome();

  return (
    <View>
      <ItemsForTodaySliderContainer />
      <ContainerItemsComponent 
        challenges={challenges} 
        purposes={purposes}
      />
    </View>
  );
};

export default HomeScreen;
