import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {useState} from 'react';
import {
  CreateChallengeInterface,
  CreateHabitInterface,
  CreatePurposeInterface,
  FormTypes,
} from '../../../../interface/item.interface';
import AlertMessageComponent from '../../../../components/alertMessage/alertMessage.component';
import {
  normalizeDate,
  validateDates,
  validateFrequency,
} from '../../../../utils/function.utils';

const UseFormItem = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isVisibleDatePickerInitial, setIsVisibleDateInitialPicker] =
    useState<boolean>(false);
  const [isVisibleEndDatePicker, setIsVisibleEndDatePicker] =
    useState<boolean>(false);
  const [idCategorie, setIdCategorie] = useState<string>('');
  const [form, setForm] = useState<
    CreateHabitInterface | CreateChallengeInterface | CreatePurposeInterface
  >({
    name: '',
    description: '',
    idCategorie: idCategorie,
    frecuency: 0,
    startDate: new Date(),
    endDate: new Date(),
  });
  const [frecuency, setFrecuency] = useState<number>(0);

  const handleFormChange = <T extends FormTypes>(
    field: keyof T,
    value: any,
  ) => {
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
      setIsVisibleDateInitialPicker(false);
      return;
    }
    const currentDate = selectedDate || date;
    setIsVisibleDateInitialPicker(false);
    setDate(currentDate);
    return;
  };

  const selectEndDate = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (event.type === 'dismissed') {
      setIsVisibleEndDatePicker(false);
      return;
    }
    const currentDate = selectedDate || endDate;
    setIsVisibleEndDatePicker(false);
    setEndDate(currentDate);
    return;
  };

  const createItem = (
    itemType: string,
    data:
      | CreateHabitInterface
      | CreateChallengeInterface
      | CreatePurposeInterface,
  ) => {
    const currentDate = normalizeDate(new Date());
    if (!data.name) {
      AlertMessageComponent({
        type: 'error',
        text1: 'Error',
        text2: 'The Name is required',
      });
      return;
    }
    if (!data.idCategorie) {
      AlertMessageComponent({
        type: 'error',
        text1: 'Error',
        text2: 'The category is required',
      });
      return;
    }

    switch (itemType) {
      case 'habit':
        if (
          (data as CreateHabitInterface).startDate &&
          (data as CreateHabitInterface).endDate
        ) {
          const {startDate, endDate} = data as CreateHabitInterface;
        if (!validateDates(startDate, endDate, currentDate)) {
            return;
          }
        }
        if (!validateFrequency((data as CreateHabitInterface).frecuency)) {
          return;
        }
        console.log('habit', data);
        break;

      case 'challenge':
        if (
          (data as CreateHabitInterface).startDate &&
          (data as CreateHabitInterface).endDate
        ) {
          const {startDate, endDate} = data as CreateHabitInterface;
          if (!validateDates(startDate, endDate, currentDate)) {
            return;
          }
        }
        if (!validateFrequency((data as CreateHabitInterface).frecuency)) {
          return;
        }
        console.log('challenge', data);
        break;

      default:
        const formattedData = {
          name: data.name,
          description: data.description,
          idCategorie: data.idCategorie,
        };
        console.log('purpose', formattedData);
        break;
    }
  };

  return {
    date,
    endDate,
    isVisibleDatePickerInitial,
    isVisibleEndDatePicker,
    idCategorie,
    form,
    frecuency,
    setFrecuency,
    createItem,
    setIdCategorie,
    handleFormChange,
    setIsVisibleEndDatePicker,
    setIsVisibleDateInitialPicker,
    selectStartDate,
    selectEndDate,
  };
};

export default UseFormItem;