import {NavigationContainer} from '@react-navigation/native';
import PublicStacks from './public/public.stack';

const Router = () => {
  return (
    <NavigationContainer>
      <PublicStacks />
    </NavigationContainer>
  );
};

export default Router;
