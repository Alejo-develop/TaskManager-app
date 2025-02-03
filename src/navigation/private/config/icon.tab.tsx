import {Image, StyleSheet} from 'react-native';
import { height, whiteColor, width } from '../../../utils/style.constanst';

interface TabBarIconProps {
  routeName: string;
}

const TabBarIcon = ({routeName}: TabBarIconProps) => {
  let icon: any;

  switch (routeName) {
    case 'home':
      icon = require('../../../assets/img/home-icon.png');
      break;
    case 'menu':
      icon = require('../../../assets/img/menu-icon.png');
      break;
    default:
      icon = require('../../../assets/img/bar-chart-icon.png');
  }

  return <Image source={icon} style={style.icon} tintColor={whiteColor} />;
};

const style = StyleSheet.create({
  icon: { 
    height: height * 0.03,
    width: width * 0.1,
    color: whiteColor,
    resizeMode: 'contain',
    marginTop: 15,
  },
});

export default TabBarIcon;
