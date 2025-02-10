import {useFocusEffect, useRoute} from '@react-navigation/native';
import {CreateItemRouteProp} from '../../../../types/navigation.type';
import {useCallback, useState} from 'react';
import {Category} from '../../../../../core/domain/entities/categories/category';
import { CategoriesController } from '../../../../../core/infrastructure/controllers/category.controller';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const UseCreateItem = () => {
  const token = useSelector((state: RootState) => state.token)
  const route = useRoute<CreateItemRouteProp>();
  const {itemType} = route.params;

  const [categories, setCategories] = useState<Category[]>([]);

  const getCategories = async () => {
    try {
      const response = await CategoriesController.findAll({token})
      
      if('data' in response){
        setCategories(response.data)
        return
      }else{
        return 
      }
      
    } catch (error) {
      console.log(error); 
      return
    }
  }

  useFocusEffect(
    useCallback(() => {
      getCategories();
    }, []),
  );

  return {
    itemType,
    categories
  };
};

export default UseCreateItem;
