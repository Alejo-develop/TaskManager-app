import {View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import FirstOnboardingScreen from './components/firstOnboarding.screen';

const OnboardingScreen = () => {
  return (
    <Onboarding
      bottomBarHighlight={false}
      pages={[
        {
          backgroundColor: '',
          image: <View style={{width: 0, height: 0}} />,
          title: (<FirstOnboardingScreen />),
          subtitle: '',
        },
        {
          backgroundColor: '',
          image: <View style={{width: 0, height: 0}} />,
          title: '',
          subtitle: '',
        },
        {
          backgroundColor: '',
          image: <View style={{width: 0, height: 0}} />,
          title: '',
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
