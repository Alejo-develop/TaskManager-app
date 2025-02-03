import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';
import {
  blueColor,
  height,
  redColor,
  whiteColor,
  width,
} from '../../../utils/style.constanst';
import TabBarIcon from './icon.tab';
import HomeScreen from '../../../screens/private/home/home.screen';
import MenuScreen from '../../../screens/private/menu/menu.screen';
import StaticsScreen from '../../../screens/private/statistics/statics.screen';

const Tab = createBottomTabNavigator();

const TabIcon = () => (
  <Tab.Navigator
    initialRouteName="home"
    screenOptions={({route}) => ({
      tabBarIcon: () => <TabBarIcon routeName={route.name} />,
      tabBarInactiveTintColor: whiteColor,
      tabBarActiveTintColor: redColor,
      tabBarStyle: styles.tabBarStyle,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarItemStyle: styles.tabBarItemStyle,
      headerShown: false,
    })}>
    <Tab.Screen name="menu" component={MenuScreen} />
    <Tab.Screen name="home" component={HomeScreen} />
    <Tab.Screen name="static" component={StaticsScreen} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: blueColor,
    width: width * 1,
    height: 55,
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: blueColor,
  },
  tabBarLabelStyle: {
    fontSize: 0,
  },
  tabBarItemStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabIcon;
