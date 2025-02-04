import {useNavigation} from '@react-navigation/native';
import {PublicNavigationRoutes} from '../../../../types/navigation.type';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OnboardingHook = () => {
  const goTo = useNavigation<NativeStackNavigationProp<PublicNavigationRoutes>>();

  const handlePassOnboarding = () => {
    goTo.navigate('Login');
  };

  return {
    handlePassOnboarding,
  };
};


export default OnboardingHook