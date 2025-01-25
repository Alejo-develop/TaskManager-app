import {View} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import FirstOnboardingScreen from './components/firstOnboarding.screen';
import { redColor } from '../../../utils/style.constanst';
import SecondOnboardingScreen from './components/secondOnboarding.screen';
import ThirdOnboardingScreen from './components/thirdOnboarding.screen';
import FourthOnboardingScreen from './components/fourthOnboarding.screen';
import OnboardingHook from './hook/onboarding.hook';

const OnboardingScreen = () => {
  const {handlePassOnboarding} = OnboardingHook()
  
  return (
    <Onboarding
      bottomBarHighlight={false}
      bottomBarColor={redColor}
      onDone={() => handlePassOnboarding()}
      onSkip={() => handlePassOnboarding()}
      pages={[
        {
          backgroundColor: 'black',
          image: <View style={{width: 0, height: 0}} />,
          title: (<FirstOnboardingScreen />),
          subtitle: '',
        },
        {
          backgroundColor: 'black',
          image: <View style={{width: 0, height: 0}} />,
          title: (<SecondOnboardingScreen />),
          subtitle: '',
        },
        {
          backgroundColor: 'black',
          image: <View style={{width: 0, height: 0}} />,
          title: (<ThirdOnboardingScreen />),
          subtitle: '',
        },
        {
          backgroundColor: 'black',
          image: <View style={{width: 0, height: 0}} />,
          title: (<FourthOnboardingScreen />),
          subtitle: '',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
