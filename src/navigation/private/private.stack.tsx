import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/private/home/home.screen';
import MenuScreen from '../../screens/private/menu/menu.screen';
import StaticsScreen from '../../screens/private/statistics/statics.screen';

const Stack = createNativeStackNavigator();

const PrivateStacks = () => {
  return (
    <Stack.Navigator initialRouteName="home">
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
    </Stack.Navigator>
  );
};

export default PrivateStacks;
