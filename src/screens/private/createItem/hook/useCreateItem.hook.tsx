import {useRoute} from '@react-navigation/native';
import {CreateItemRouteProp} from '../../../../types/navigation.type';

const UseCreateItem = () => {
  const route = useRoute<CreateItemRouteProp>();
  const {itemType} = route.params;

  return{
    itemType
  }
};

export default UseCreateItem
