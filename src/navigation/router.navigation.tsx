import {NavigationContainer} from '@react-navigation/native';
import PublicStacks from './public/public.stack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import PrivateStacks from './private/private.stack';

const Router = () => {
  const statusAuth = useSelector((state: RootState) => state.user.isAuthenticated);

  return (
    <NavigationContainer>
      {statusAuth ? <PrivateStacks /> : <PublicStacks />}
    </NavigationContainer>
  );
};

export default Router;
