import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from '../../../components/button/button.component';
import {redColor} from '../../../utils/style.constanst';
import {clearSession} from '../../../redux/user.slice';
import {HabitController} from '../../../../core/infrastructure/controllers/habit.controller';
import {RootState} from '../../../redux/store';
import { useEffect } from 'react';

const HomeScreen = () => {
  const id = useSelector((state: RootState) => state.user.id);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(clearSession());
  };

  const findHabits = async () => {
    try {
      const res = await HabitController.FindHabits(
        id,
        '0e966cf3-2eb1-4d08-aeee-e967cd6719f7',
      );
      console.log('habits', res);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    findHabits()
  })
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
