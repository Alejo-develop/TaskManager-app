import { RouteProp } from "@react-navigation/native";

export type PublicNavigationRoutes = {
  Login: undefined;
  SignUp: undefined;
};

export type PrivateNavigationRoutes = {
  main: undefined;
  createItem: {itemType: string};
  home: undefined;
  menu: undefined;
  statics: undefined;
  seeItemByCategorie: {categorieType: string}
}

export type CreateItemRouteProp = RouteProp<PrivateNavigationRoutes, 'createItem'>;
export type SeeItemRouteProp = RouteProp<PrivateNavigationRoutes, 'seeItemByCategorie'>;