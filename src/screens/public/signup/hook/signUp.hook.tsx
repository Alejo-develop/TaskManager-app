import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../../../../types/navigation.type';
import {useNavigation} from '@react-navigation/native';

const SignUpHook = () => {
  const goTo = useNavigation<NativeStackNavigationProp<NavigationRoutes>>();

  const goToLogin = () => {
    goTo.navigate('Login')
  }
  
  return {goToLogin};
};


export default SignUpHook