import Router from './src/navigation/router.navigation';
import Toast from 'react-native-toast-message';
import toastConfig from './src/components/alertMessage/alertMessage.config';
import {Provider} from 'react-redux';

const App = () => {
  return <Router />;
};

export default App;
