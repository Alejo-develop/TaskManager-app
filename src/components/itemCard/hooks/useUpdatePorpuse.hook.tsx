import {useState} from 'react';
import {Purpose} from '../../../../core/domain/entities/purposes/purpose';
import AlertMessageComponent from '../../alertMessage/alertMessage.component';
import {PurposeController} from '../../../../core/infrastructure/controllers/purpose.controller';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrivateNavigationRoutes} from '../../../types/navigation.type';
import {useNavigation} from '@react-navigation/native';

const UseUpdatePurpose = (purposeDescription: string) => {
  const [newDescription, setNewDescription] =
    useState<string>(purposeDescription);
  const goTo =
    useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>();

  const updatePurpose = async (
    data: Partial<Purpose>,
    itemId: number,
    onClose: () => void,
  ) => {
    if (data.description === purposeDescription || data.description === '') {
      onClose();
      return;
    }

    try {
      await PurposeController.UpdatePurposes(itemId, data);
      AlertMessageComponent({
        type: 'success',
        text1: 'Succes',
        text2: 'Purpose updated successfully',
      });
      onClose();
      goTo.navigate('main');
    } catch (error) {
      AlertMessageComponent({
        type: 'error',
        text1: 'Error',
        text2: 'Cannot be posible updated purpose',
      });
      return;
    }
  };

  return {newDescription, setNewDescription, updatePurpose};
};

export default UseUpdatePurpose;
