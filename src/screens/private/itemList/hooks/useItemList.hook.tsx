import {useRoute} from '@react-navigation/native';
import {ItemListRouteProp} from '../../../../types/navigation.type';
import { useEffect } from 'react';

const UseItemList = () => {
  const route = useRoute<ItemListRouteProp>();
  const {categoryType} = route.params;

  useEffect(() => {
    console.log(categoryType);
  })

  return{
    categoryType
  }
};

export default UseItemList;
