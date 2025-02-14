import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import ButtonComponent from '../../../components/button/button.component';
import {redColor} from '../../../utils/style.constanst';
import {clearSession} from '../../../redux/user.slice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(clearSession());
  };
  return (
    <View>
      <ButtonComponent
        text="Log Out"
        backgroundColor={redColor}
        onPress={logOut}
      />
    </View>
  );
};

export default HomeScreen;
