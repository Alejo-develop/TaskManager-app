import {useEffect, useState} from 'react';

const UseLayout = () => {
  const [date, setDate] = useState<string>('');

  const formatDate = (date_: Date): string => {
    const date = new Date(date_);
    const day = date.getDate();
    const month = date.toLocaleString('es-ES', { month: 'long' });
    const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
    const year = date.getFullYear();
  
    return `${day} / ${capitalizedMonth} / ${year}`;
  };
  
  const getDay = () => {
    const currentDate = new Date()
    const formattedDate = formatDate(currentDate)
    
    setDate(formattedDate)
  };

  useEffect(() => {
    getDay()
  }, [date])

  return {
    date
  };
};

export default UseLayout;
