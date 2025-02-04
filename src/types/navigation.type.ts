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
}

export type CreateItemRouteProp = RouteProp<PrivateNavigationRoutes, 'createItem'>;