import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/public/login/login.screen';
import OnboardingScreen from '../../screens/public/onboarding/onboarding.scree';
import SignUpScreen from '../../screens/public/signup/singUp.screen';

const Stack = createNativeStackNavigator();

const PublicStacks = () => {
  return (
    <Stack.Navigator initialRouteName="onboarding">
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="singup"
        component={SignUpScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PublicStacks;
