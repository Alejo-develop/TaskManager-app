import {useFocusEffect, useRoute} from '@react-navigation/native';
import {ItemListRouteProp} from '../../../../types/navigation.type';
import {useCallback, useEffect, useState} from 'react';
import {Habit} from '../../../../../core/domain/entities/habits/habit';
import {Challenge} from '../../../../../core/domain/entities/challenges/challenge';
import {Purpose} from '../../../../../core/domain/entities/purposes/purpose';
import {HabitController} from '../../../../../core/infrastructure/controllers/habit.controller';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import {ChallengeController} from '../../../../../core/infrastructure/controllers/challenge.controller';
import {PurposeController} from '../../../../../core/infrastructure/controllers/purpose.controller';

const UseItemList = () => {
  const route = useRoute<ItemListRouteProp>();
  const userId = useSelector((state: RootState) => state.user.id);
  const {categoryId, itemType, categoryName} = route.params;
  const [itemName, setItemName] = useState<string>('');
  const [items, setItems] = useState<Habit[] | Challenge[] | Purpose[]>([]);

  const capitalizeFirstLetterOfItemType = (word: string) => {
    setItemName(word.charAt(0).toUpperCase() + word.slice(1));
    return;
  };

  const findItems = async () => {
    switch (itemType) {
      case 'habits':
        try {
          const habits = await HabitController.FindHabits(userId, categoryId);
          setItems(habits);
        } catch (err) {
          console.log(err);
        }
        break;

      case 'challenges':
        try {
          const challenges = await ChallengeController.FindChallenges(
            userId,
            categoryId,
          );
          setItems(challenges);
        } catch (err) {
          console.log(err);
        }
        break;

      default:
        try {
          const purposes = await PurposeController.FIndPurposes(
            userId,
            categoryId,
          );
          setItems(purposes);
        } catch (err) {
          console.log(err);
        }
        break;
    }

    return;
  };

  useFocusEffect(
    useCallback(() => {
      capitalizeFirstLetterOfItemType(itemType);
      findItems();
    }, []),
  );

  return {
    categoryName,
    itemName,
    items,
    itemType
  };
};

export default UseItemList;
