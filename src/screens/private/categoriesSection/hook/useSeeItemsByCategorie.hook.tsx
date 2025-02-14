import {useFocusEffect, useRoute} from '@react-navigation/native';
import {SeeItemRouteProp} from '../../../../types/navigation.type';
import {useCallback, useState} from 'react';
import {Category} from '../../../../../core/domain/entities/categories/category';
import {CategoriesController} from '../../../../../core/infrastructure/controllers/category.controller';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const UseSeeItemByCategorie = () => {
  const route = useRoute<SeeItemRouteProp>();
  const {categoryType: categorieType} = route.params;
  const token = useSelector((state: RootState) => state.user.token)

  const [categories, setCategories] = useState<Category[]>([]);
  const getCategories = async () => {
    try {
      const response = await CategoriesController.findAll({token});

      if ('data' in response) {
        setCategories(response.data.reverse());
        return;
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useFocusEffect(
    useCallback(() => {
      getCategories();
    }, []),
  );

  return {
    categorieType,
    categories
  };
};

export default UseSeeItemByCategorie;
