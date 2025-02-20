import {useEffect, useState} from 'react';
import {Challenge} from '../../../../core/domain/entities/challenges/challenge';
import {Habit} from '../../../../core/domain/entities/habits/habit';
import {ItemInterface} from '../../../interface/item.interface';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {blueColor, whiteColor} from '../../../utils/style.constanst';
import {MarkedDates} from '../../../utils/calendarConfig/dates.config.ts';
import {
  inputsValidatorUpdateItem,
  normalizeDate,
  validateDatesUpdateItem,
  validateFrequency,
} from '../../../utils/validateFunctions.utils.tsx';
import AlertMessageComponent from '../../alertMessage/alertMessage.component.tsx';
import {HabitController} from '../../../../core/infrastructure/controllers/habit.controller.ts';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrivateNavigationRoutes} from '../../../types/navigation.type.ts';
import {ChallengeController} from '../../../../core/infrastructure/controllers/challenge.controller.ts';

interface UseUpdateItemProps {
  frequency: string;
  endDate: Date;
  description: string;
  startDate: Date;
}

const UseUpdateItem = ({
  startDate,
  description,
  endDate,
  frequency,
}: UseUpdateItemProps) => {
  const [isModalDateVisible, setIsModalDateVisible] = useState<boolean>(false);
  const [form, setForm] = useState<Partial<Challenge | Habit>>({
    startDate: startDate,
    description: description,
    frequency: frequency,
    endDate: endDate,
  });
  const [maketDates, setMarketDates] = useState<MarkedDates>({});
  const currentDate = normalizeDate(new Date());
  const goTo =
    useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>();

  const getMarkedDates = (
    initialDate: Date,
    endDate: Date,
    frequency: string,
  ): MarkedDates => {
    let markedDates: MarkedDates = {};
    let currentDate = new Date(initialDate);
    const end = new Date(endDate);
    const freq = parseInt(frequency, 10);

    while (currentDate <= end) {
      const dateString = currentDate.toISOString().split('T')[0];
      markedDates[dateString] = {
        customStyles: {
          container: {
            backgroundColor: blueColor,
          },
          text: {
            color: whiteColor,
            fontWeight: 'bold',
          },
        },
      };

      currentDate.setDate(currentDate.getDate() + freq);
    }

    return markedDates;
  };

  const handleFormChange = (field: keyof ItemInterface, value: any) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const selectEndDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (event.type === 'dismissed') {
      setIsModalDateVisible(false);
      return;
    }
    const currentDate = selectedDate || endDate;
    setIsModalDateVisible(false);
    handleFormChange('endDate', currentDate);
    return;
  };

  const updateItem = async (
    formData: Partial<ItemInterface>,
    onClose: () => void,
    itemType: string,
    itemId: number,
  ) => {
    if (!inputsValidatorUpdateItem(formData, frequency, endDate, description)) {
      onClose();
      return;
    }
    if (
      !validateDatesUpdateItem(
        startDate,
        formData.endDate || new Date(),
        currentDate,
      )
    ) {
      onClose();
      return;
    }
    if (!validateFrequency(formData.frequency || '')) {
      onClose();
      return;
    }

    switch (itemType) {
      case 'habits':
        try {
          await HabitController.UpdateHbait(itemId, formData);
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Habit updated successfully',
          });
          onClose();
          goTo.navigate('main');
        } catch (error) {
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Cannot posible remove habit',
          });
        }
        break;

      default:
        try {
          await ChallengeController.UpdateChallenge(itemId, formData);
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Challenge updated successfully',
          });
          onClose();
          goTo.navigate('main');
        } catch (error) {
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Cannot posible remove challenge',
          });
        }
        break;
    }
    return;
  };

  useEffect(() => {
    const markedDates = getMarkedDates(startDate, endDate, frequency);
    setMarketDates(markedDates);
  }, [startDate, endDate, frequency]);

  return {
    form,
    isModalDateVisible,
    maketDates,
    setIsModalDateVisible,
    handleFormChange,
    updateItem,
    selectEndDate,
  };
};

export default UseUpdateItem;
