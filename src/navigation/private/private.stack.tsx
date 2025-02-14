import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/private/home/home.screen';
import MenuScreen from '../../screens/private/menu/menu.screen';
import StaticsScreen from '../../screens/private/statistics/statics.screen';
import MainScreen from '../../screens/private/main.screen';
import CreateItemScreen from '../../screens/private/createItem/createItem.screen';
import SeeItemByCategorieScreen from '../../screens/private/categoriesSection/seeItemByCategorie.screen';

const Stack = createNativeStackNavigator();

const PrivateStacks = () => {
  return (
    <Stack.Navigator initialRouteName="main">
      <Stack.Screen
        name="main"
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="menu"
        component={MenuScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="statics"
        component={StaticsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="createItem"
        component={CreateItemScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="seeItemByCategorie"
        component={SeeItemByCategorieScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PrivateStacks;
