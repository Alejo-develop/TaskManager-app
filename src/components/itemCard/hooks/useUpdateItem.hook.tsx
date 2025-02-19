import {useState} from 'react';
import {Challenge} from '../../../../core/domain/entities/challenges/challenge';
import {Habit} from '../../../../core/domain/entities/habits/habit';
import {ItemInterface} from '../../../interface/item.interface';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';

interface UseUpdateItemProps {
  frequency: string;
  endDate: Date;
  description: string;
  name: string;
}

const UseUpdateItem = ({
  name,
  description,
  endDate,
  frequency,
}: UseUpdateItemProps) => {
  const [isModalDateVisible, setIsModalDateVisible] = useState<boolean>(false);
  const [form, setForm] = useState<Partial<Challenge | Habit>>({
    name: name,
    description: description,
    frequency: frequency,
    endDate: endDate,
  });

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
    console.log(itemType);
    
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

  return {
    form,
    isModalDateVisible,
    setIsModalDateVisible,
    handleFormChange,
    updateItem,
    selectEndDate,
  };
};

export default UseUpdateItem;
