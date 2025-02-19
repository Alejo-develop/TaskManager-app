import {useEffect, useState} from 'react';
import {Challenge} from '../../../../core/domain/entities/challenges/challenge';
import {Habit} from '../../../../core/domain/entities/habits/habit';
import {ItemInterface} from '../../../interface/item.interface';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {blueColor, whiteColor} from '../../../utils/style.constanst';

interface UseUpdateItemProps {
  frequency: string;
  endDate: Date;
  description: string;
  startDate: Date;
}

interface MarkedDates {
  [key: string]: {
    customStyles: {
      container: {
        backgroundColor: string;
      };
      text: {
        color: string;
        fontWeight: string;
      };
    };
  };
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
  const [maketDates, setMarketDates] = useState<MarkedDates>({})

  const getMarkedDates = (initialDate: Date, endDate: Date, frequency: string): MarkedDates => {
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
  ) => {
    const endDateValue = form.endDate ? new Date(form.endDate).getTime() : null;
    if (
      (form.frequency === frequency || form.frequency === '') &&
      endDateValue === new Date(endDate).getTime() &&
      (form.description === description || form.description === '')
    ) {
      onClose();
      return;
    }

    switch (itemType) {
      case 'habits':
        break;

      default:
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
