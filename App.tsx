import Router from './src/navigation/router.navigation';
import Toast from 'react-native-toast-message';
import toastConfig from './src/components/alertMessage/alertMessage.config';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
      // loading={} Para agregar un loader mientras carga la app
        persistor={persistor}
      >
        <Router />
        <Toast config={toastConfig}/>
      </PersistGate>
    </Provider>
  );
};

export default App;
