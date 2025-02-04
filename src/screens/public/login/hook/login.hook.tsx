import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PublicNavigationRoutes} from '../../../../types/navigation.type';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {LoginRequest} from '../../../../../core/domain/entities/user/request/loginRequest';
import {UserController} from '../../../../../core/infrastructure/controllers/user.controller';
import AlertMessageComponent from '../../../../components/alertMessage/alertMessage.component';
import {useDispatch} from 'react-redux';
import {setSession} from '../../../../redux/user.slice';
import {
  PayloadInterface,
  SessionInfoInterface,
} from '../../../../interface/auth.interface';
import {extractPayload} from '../../../../services/jsonwebtoken.servies';
import {LoginErrorResponse} from '../../../../../core/domain/entities/user/response/loginResponse';

const LoginHook = () => {
  const goTo = useNavigation<NativeStackNavigationProp<PublicNavigationRoutes>>();
  const [form, setForm] = useState<LoginRequest>({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>();

  const dispatch = useDispatch();

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
    setErrMessage('');

    if (form.password.length < 8) {
      setErrMessage('The password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    if (!form.email || !form.password) {
      setErrMessage('All inputs are required');
      setLoading(false);
      return;
    }

    try {
      const response = await UserController.Login(form);

      if ('data' in response) {
        const {data, message} = response;
        const {accessToken} = data;

        const payload = extractPayload(accessToken) as PayloadInterface;

        if (!payload) {
          setErrMessage('Failed to decode token');
          setLoading(false);
          return;
        }

        const sessionInfo: SessionInfoInterface = {
          id: payload.id,
          name: payload.name,
          email: payload.email,
          token: accessToken,
          isAuthenticated: true,
        };

        dispatch(setSession(sessionInfo));

        AlertMessageComponent({
          type: 'success',
          text1: 'Success',
          text2: message,
          position: 'bottom',
        });
      } else {
        const {message} = response as LoginErrorResponse;
        setErrMessage(message || 'Unexpected error occurred');
      }

      setLoading(false);
    } catch (err: any) {
      if (typeof err === 'string') {
        setErrMessage(err);
        setLoading(false);
        return;
      }
      setErrMessage('Unexpected error occurred');
      setLoading(false);
    }
  };

  return {form, loading, errMessage, login, goToSignUp, handleFormChange};
};

export default LoginHook;
