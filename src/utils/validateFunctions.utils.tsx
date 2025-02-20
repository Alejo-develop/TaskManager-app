import AlertMessageComponent from '../components/alertMessage/alertMessage.component';
import {ItemInterface} from '../interface/item.interface';

export const normalizeDate = (date: Date): Date => {
  const normalizedDate = new Date(date);
  normalizedDate.setHours(0, 0, 0, 0);
  return normalizedDate;
};

export const validateDates = (
  startDate: Date,
  endDate: Date,
  currentDate: Date,
): boolean => {
  if (startDate < currentDate) {
    AlertMessageComponent({
      type: 'error',
      text1: 'Error',
      text2: 'Start dates cannot be in the past',
    });
    return false;
  }

  if (endDate < startDate) {
    AlertMessageComponent({
      type: 'error',
      text1: 'Error',
      text2: 'End date cannot be before start date',
    });
    return false;
  }

  if (endDate === startDate) {
    AlertMessageComponent({
      type: 'error',
      text1: 'Error',
      text2: 'Dates cannot be the same',
    });
    return false;
  }

  return true;
};

export const validateDatesUpdateItem = (
  startDate: Date,
  endDate: Date,
  currentDate: Date,
): boolean => {
  const endDate_ = new Date(endDate)
  if (endDate_ < currentDate) {
    AlertMessageComponent({
      type: 'error',
      text1: 'Error',
      text2: 'End date cannot be in the past',
    });
    return false;
  }

  if (endDate_ === startDate) {
    AlertMessageComponent({
      type: 'error',
      text1: 'Error',
      text2: 'Dates cannot be the same',
    });
    return false;
  }

  return true;
};

export const validateFrequency = (frequency: string): boolean => {
  if (frequency === undefined || parseInt(frequency) === 0) {
    AlertMessageComponent({
      type: 'error',
      text1: 'Error',
      text2: 'The frequency must be major than 0',
    });
    return false;
  }
  return true;
};

export const inputsValidatorUpdateItem = (
  form: Partial<ItemInterface>,
  frequency: string,
  endDate: Date,
  description: string,
) => {
  const endDateValue = form.endDate ? new Date(form.endDate).getTime() : null;
  if (
    (form.frequency === frequency || form.frequency === '') &&
    endDateValue === new Date(endDate).getTime() &&
    (form.description === description || form.description === '')
  ) {
    return false;
  }

  return true;
};
