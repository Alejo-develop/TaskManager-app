import AlertMessageComponent from '../components/alertMessage/alertMessage.component';

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

export const validateFrequency = (frequency: number): boolean => {
  if (frequency === undefined || frequency === 0) {
    AlertMessageComponent({
      type: 'error',
      text1: 'Error',
      text2: 'Frequency is required',
    });
    return false;
  }
  return true;
};
