import {useRoute} from '@react-navigation/native';
import {CreateItemRouteProp} from '../../../../types/navigation.type';
import {useEffect, useState} from 'react';
import {Category} from '../../../../../core/domain/entities/categories/category';
import { CategoriesController } from '../../../../../core/infrastructure/controllers/category.controller';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const UseCreateItem = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const route = useRoute<CreateItemRouteProp>();
  const {itemType} = route.params;
  const token = useSelector((state: RootState) => state.token)

  const getCategories = async () => {
    try {
      const response = await CategoriesController.findAll({token})
      console.log(response);
      
      if('data' in response){
        setCategories(response.data.categories)
      }
      console.log(response.message);
    } catch (error) {
      console.log(error); 
    }
  }

  useEffect(() => {
    getCategories()
  }, [categories]);

  return {
    itemType,
    categories
  };
};

export default UseCreateItem;
