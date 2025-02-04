import {useRoute} from '@react-navigation/native';
import {CreateItemRouteProp, SeeItemRouteProp} from '../../../../types/navigation.type';

const UseSeeItemByCategorie = () => {
  const route = useRoute<SeeItemRouteProp>();
  const {categorieType} = route.params;

  return{
    categorieType
  }
};

export default UseSeeItemByCategorie