import {useState} from 'react';

const UseDeleteItem = () => {
  const [isVisibleConfirmModal, setIsVisibleConfirmModal] =
    useState<boolean>(false);

  const deleteItem = (itemType: string, itemId: number) => {
    console.log(itemType, itemId);
  };

  return {
    isVisibleConfirmModal,
    setIsVisibleConfirmModal,
    deleteItem
  };
};

export default UseDeleteItem;
