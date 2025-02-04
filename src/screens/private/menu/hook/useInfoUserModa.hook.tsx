import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';

const UseInfoUserModal = () => {
  const nameUser = useSelector((state: RootState) => state.name);
  const emailUser = useSelector((state: RootState) => state.email);

  return {nameUser, emailUser};
};

export default UseInfoUserModal;
