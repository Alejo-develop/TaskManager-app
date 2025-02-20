import {useState} from 'react';
import {HabitController} from '../../../../core/infrastructure/controllers/habit.controller';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrivateNavigationRoutes} from '../../../types/navigation.type';
import AlertMessageComponent from '../../alertMessage/alertMessage.component';
import {ChallengeController} from '../../../../core/infrastructure/controllers/challenge.controller';
import {PurposeController} from '../../../../core/infrastructure/controllers/purpose.controller';

const UseDeleteItem = () => {
  const [isVisibleConfirmModal, setIsVisibleConfirmModal] =
    useState<boolean>(false);
  const goTo =
    useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>();

  const deleteItem = async (itemType: string, itemId: number) => {
    switch (itemType) {
      case 'habits':
        try {
          await HabitController.DeleteHabit(itemId);
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Habit deleted successfully',
          });
          setIsVisibleConfirmModal(false);
          goTo.navigate('main');
          return;
        } catch (error) {
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Habit cannot be remove',
          });
        }
        break;

      case 'challenges':
        try {
          await ChallengeController.DeleteChallenge(itemId);
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Challenge deleted successfully',
          });
          setIsVisibleConfirmModal(false);
          goTo.navigate('main');
          return;
        } catch (error) {
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Challenge cannot be remove',
          });
        }
        break;

      default:
        try {
          await PurposeController.DeletePurpose(itemId);
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Purpose deleted successfully',
          });
          setIsVisibleConfirmModal(false);
          goTo.navigate('main');
          return;
        } catch (error) {
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Purpose cannot be remove',
          });
        }
        break;
    }
    return;
  };

  return {
    isVisibleConfirmModal,
    setIsVisibleConfirmModal,
    deleteItem,
  };
};

export default UseDeleteItem;
