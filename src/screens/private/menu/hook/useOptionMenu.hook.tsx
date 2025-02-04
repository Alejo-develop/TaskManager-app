import {useEffect, useState} from 'react';
import {getRandomSentence} from '../../../../services/random.services';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrivateNavigationRoutes} from '../../../../types/navigation.type';

const UseOptionMenu = () => {
  const goTo =
    useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>();
  const [sentence, setSentence] = useState<string>('');
  const [isModalInfoUserVisible, setIsModaInfolUser] = useState<boolean>(false);
  const getSentence = () => {
    setSentence(getRandomSentence());
  };

  const navigate = (route: string) => {
    goTo.navigate('createItem', {itemType: route});
  };

  useEffect(() => {
    getSentence();
  }, [sentence]);

  return {
    sentence,
    isModalInfoUserVisible,
    setIsModaInfolUser,
    navigate,
  };
};

export default UseOptionMenu;
