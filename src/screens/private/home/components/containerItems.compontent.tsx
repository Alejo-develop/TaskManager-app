import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  blueColor,
  height,
  literataItalic,
  redColor,
  width,
} from '../../../../utils/style.constanst';
import {Challenge} from '../../../../../core/domain/entities/challenges/challenge';
import {Purpose} from '../../../../../core/domain/entities/purposes/purpose';
import ItemCardHomeScreen from './itemCardHomeScreen.component';
import ButtonHomeScreenComponent from './buttonHomeScreen.component';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PrivateNavigationRoutes } from '../../../../types/navigation.type';

interface ContainerItemsProps {
  challenges: Challenge[];
  purposes: Purpose[];
}

const ContainerItemsComponent = ({
  challenges,
  purposes,
}: ContainerItemsProps) => {
  const goTo =
    useNavigation<NativeStackNavigationProp<PrivateNavigationRoutes>>();
  const navigate = (route: string) => {
    goTo.navigate('seeItemByCategorie', {categoryType: route});
  };
  return (
    <View style={styles.container}>
      <View style={styles.sections}>
        <Text style={styles.title}>Purposes</Text>
        <ButtonHomeScreenComponent
          backgroundColor={blueColor}
          text="See all"
          onPress={() => navigate('purposes')}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={purposes}
          numColumns={1}
          renderItem={({item}) => (
            <ItemCardHomeScreen backagroundColor={blueColor} data={item} />
          )}
        />
      </View>
      <View style={styles.sections}>
        <Text style={[styles.title, {color: redColor}]}>Challenges</Text>
        <ButtonHomeScreenComponent
          backgroundColor={redColor}
          text="See all"
          onPress={() => navigate('challenges')}
        />
        <FlatList
          contentContainerStyle={styles.list}
          data={challenges}
          numColumns={1}
          renderItem={({item}) => (
            <ItemCardHomeScreen backagroundColor={redColor} data={item} />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.4,
    flexDirection: 'row',
    paddingTop: 5,
  },
  sections: {
    width: width * 0.5,
    height: height * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontFamily: literataItalic,
    color: blueColor,
    fontSize: 17,
  },
  list: {
    alignItems: 'center',
    gap: 15,
    height: height * 0.275,
  },
});

export default ContainerItemsComponent;
