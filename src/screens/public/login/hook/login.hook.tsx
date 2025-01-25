import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../../../../types/navigation.type';
import {useNavigation} from '@react-navigation/native';

const LoginHook = () => {
  const goTo = useNavigation<NativeStackNavigationProp<NavigationRoutes>>();

  const goToSignUp = () => {
    goTo.navigate('SignUp');
  };

  return {goToSignUp};
};

export default LoginHook
