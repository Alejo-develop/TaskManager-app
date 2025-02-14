import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {useState} from 'react';
import {ItemInterface} from '../../../../interface/item.interface';
import AlertMessageComponent from '../../../../components/alertMessage/alertMessage.component';
import {
  normalizeDate,
  validateDates,
  validateFrequency,
} from '../../../../utils/function.utils';
import {HabitController} from '../../../../../core/infrastructure/controllers/habit.controller';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrivateNavigationRoutes} from '../../../../types/navigation.type';
import {ChallengeController} from '../../../../../core/infrastructure/controllers/challenge.controller';
import {PurposeController} from '../../../../../core/infrastructure/controllers/purpose.controller';

const UseFormItem = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isVisibleDatePicker, setIsVisibleDatePicker] =
    useState<boolean>(false);
  const [idCategorie, setIdCategorie] = useState<string>('');
  const [form, setForm] = useState<ItemInterface>({
    name: '',
    description: '',
    categoryId: '',
    frequency: '',
    startDate: new Date(),
    endDate: new Date(),
  });
  const [frecuency, setFrecuency] = useState<string>('');
  const userId = useSelector((state: RootState) => state.user.id);

  const navigate =
    useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>();

  const handleFormChange = (field: keyof ItemInterface, value: any) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const selectStartDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (event.type === 'dismissed') {
      setIsVisibleDatePicker(false);
      return;
    }
    const currentDate = selectedDate || date;
    setIsVisibleDatePicker(false);
    setDate(currentDate);
    return;
  };

  const selectEndDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (event.type === 'dismissed') {
      setIsVisibleDatePicker(false);
      return;
    }
    const currentDate = selectedDate || endDate;
    setIsVisibleDatePicker(false);
    setEndDate(currentDate);
    return;
  };

  const createItem = async (itemType: string, data: ItemInterface) => {
    const currentDate = normalizeDate(new Date());
    if (!data.name) {
      AlertMessageComponent({
        type: 'error',
        text1: 'Error',
        text2: 'The Name is required',
      });
      return;
    }
    if (!data.categoryId) {
      AlertMessageComponent({
        type: 'error',
        text1: 'Error',
        text2: 'The category is required',
      });
      return;
    }

    switch (itemType) {
      case 'habit':
        const {startDate: startDateHabit, endDate: endDateHabit} =
          data as ItemInterface;
        if (!validateDates(startDateHabit, endDateHabit, currentDate)) {
          return;
        }
        if (!validateFrequency((data as ItemInterface).frequency)) {
          return;
        }

        try {
          await HabitController.CreateHabit({...data, userId});
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Habit created succesfully',
          });
          navigate.navigate('main');
        } catch (error) {
          console.log(error);
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Cannot posible created a habit',
          });
        }
        break;

      case 'challenge':
        const {startDate, endDate} = data as ItemInterface;
        if (!validateDates(startDate, endDate, currentDate)) {
          return;
        }
        if (!validateFrequency((data as ItemInterface).frequency)) {
          return;
        }

        try {
          await ChallengeController.CreateChallenge({...data, userId});
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Challenge created succesfully',
          });
          navigate.navigate('main');
        } catch (error) {
          console.log(error);
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Cannot posible created a challenge',
          });
        }
        break;

      default:
        const formattedData = {
          userId,
          categoryId: data.categoryId,
          name: data.name,
          description: data.description,
        };
        try {
          await PurposeController.CreatePurpose(formattedData);
          AlertMessageComponent({
            type: 'success',
            text1: 'Succes',
            text2: 'Purpose created succesfully',
          });
          navigate.navigate('main');
        } catch (error) {
          console.log(error);
          AlertMessageComponent({
            type: 'error',
            text1: 'Error',
            text2: 'Cannot posible created a purpose',
          });
        }
        break;
    }
  };

  return {
    date,
    endDate,
    isVisibleDatePicker,
    idCategorie,
    form,
    frecuency,
    setFrecuency,
    createItem,
    setIdCategorie,
    handleFormChange,
    setIsVisibleDatePicker,
    selectStartDate,
    selectEndDate,
  };
};

export default UseFormItem;