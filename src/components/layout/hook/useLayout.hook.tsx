import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { clearSession } from '../../../redux/user.slice';

const UseLayout = () => {
  const [date, setDate] = useState<string>('');
  const dispatch = useDispatch();
  
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

  const logOut = () => {
    dispatch(clearSession());
  };

  useEffect(() => {
    getDay()
  }, [date])

  return {
    date,
    logOut
  };
};

export default UseLayout;
