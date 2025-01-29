import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationRoutes} from '../../../../types/navigation.type';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {SignUpRequest} from '../../../../../core/domain/entities/user/request/signUpRequest';
import AlertMessageComponent from '../../../../components/alertMessage/alertMessage.component';
import {UserController} from '../../../../../core/infrastructure/controllers/user.controller';

const SignUpHook = () => {
  const goTo = useNavigation<NativeStackNavigationProp<NavigationRoutes>>();
  const [form, setForm] = useState<SignUpRequest>({
    name: '',
    email: '',
    password: '',
  });
  const [repeatPassword, setRepeatPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>();

  const handleFormChange = (field: keyof SignUpRequest, value: string) => {
    setForm(prevForm => ({
      ...prevForm,
      [field]: value,
    }));
  };

  const goToLogin = () => {
    goTo.navigate('Login');
  };

  const SignUp = async (form: SignUpRequest, repeatPassword: string) => {
    setLoading(true);
    setErrMessage('');

    if (!form.name || !form.email || !form.password) {
      setErrMessage('All inputs are required');
      setLoading(false);
      return;
    }

    if (form.password !== repeatPassword) {
      setErrMessage('The passwords must be the same');
      setLoading(false);
      return;
    }

    if (form.password.length < 8 && repeatPassword.length < 8) {
      setErrMessage('The password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    try {
      await UserController.SignUp(form);
      AlertMessageComponent({
        type: 'success',
        text1: 'Success',
        text2: 'Your account has been created successfully',
        position: 'bottom',
      });
      setLoading(false);
      goToLogin();
    } catch (err: any) {
      if (typeof err === 'string') {
        setErrMessage(err);
        setLoading(false);
        return;
      }
      setErrMessage('Unexpected error ocurred');
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    errMessage,
    repeatPassword,
    SignUp,
    goToLogin,
    handleFormChange,
    setRepeatPassword,
  };
};

export default SignUpHook;
