import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../../../../types/navigation.type';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {LoginRequest} from '../../../../../core/domain/entities/user/request/loginRequest';
import { UserController } from '../../../../../core/infrastructure/controllers/user.controller';

const LoginHook = () => {
  const goTo = useNavigation<NativeStackNavigationProp<NavigationRoutes>>();
  const [form, setForm] = useState<LoginRequest>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>();

  const handleFormChange = (field: keyof LoginRequest, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const goToSignUp = () => {
    goTo.navigate('SignUp');
  };

  const login = async (form: LoginRequest) => {
    setLoading(true);

    if (!form.email || !form.password) {
      setErrMessage('All inputs are required');
      return;
    }

    try {
      const {data, message} = await UserController.Login(form)

      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  return {form, loading, errMessage, login, goToSignUp, handleFormChange};
};

export default LoginHook;