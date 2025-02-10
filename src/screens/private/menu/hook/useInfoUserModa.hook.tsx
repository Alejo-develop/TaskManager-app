import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {useState} from 'react';
import {User} from '../../../../../core/domain/entities/user/user';

const UseInfoUserModal = () => {
  const {id, name, email} = useSelector((state: RootState) => state.user);
  const [form, setForm] = useState<Partial<User>>({
    id: id,
    name: name,
    email: email,
  });

  const handleFormChange = (field: keyof User, value: any) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const changeInfo = (data: Partial<User>) => {
    console.log(data);
  };

  return {
    nameUser: name,
    emailUser: email,
    form,
    changeInfo,
    handleFormChange,
  };
};

export default UseInfoUserModal;
