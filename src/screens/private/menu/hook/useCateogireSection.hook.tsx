import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PrivateNavigationRoutes} from '../../../../types/navigation.type';
import {useNavigation} from '@react-navigation/native';

const UseCategorieSection = () => {
  const goTo =
    useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>();

  const navigate = (route: string) => {
    goTo.navigate('seeItemByCategorie', {categorieType: route});
  };

  return {
    navigate
  };
};

export default UseCategorieSection;
