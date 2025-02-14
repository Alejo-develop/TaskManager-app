import {useRoute} from '@react-navigation/native';
import {ItemListRouteProp} from '../../../../types/navigation.type';
import {useEffect, useState} from 'react';
import {Habit} from '../../../../../core/domain/entities/habits/habit';
import {Challenge} from '../../../../../core/domain/entities/challenges/challenge';
import {Purpose} from '../../../../../core/domain/entities/purposes/purpose';

const UseItemList = () => {
  const route = useRoute<ItemListRouteProp>();
  const {categoryId, itemType, categoryName} = route.params;
  const [itemName, setItemName] = useState<string>('');
  const [items, setItems] = useState<Habit[] | Challenge[] | Purpose[]>([]);

  const capitalizeFirstLetterOfItemType = (word: string) => {
    setItemName(word.charAt(0).toUpperCase() + word.slice(1));
    return;
  };

  useEffect(() => {
    capitalizeFirstLetterOfItemType(itemType);
  });

  return {
    categoryName,
    itemName,
    items
  };
};

export default UseItemList;
