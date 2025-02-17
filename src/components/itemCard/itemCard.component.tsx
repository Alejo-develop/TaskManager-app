import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  height,
  literataBold,
  literataItalic,
  redColor,
  whiteColor,
  width,
} from '../../utils/style.constanst';
import {Habit} from '../../../core/domain/entities/habits/habit';
import {Challenge} from '../../../core/domain/entities/challenges/challenge';
import {Purpose} from '../../../core/domain/entities/purposes/purpose';
import ModalItemCard from './components/modalItemCard.component';
import {useState} from 'react';
import ModalPurposeItemCard from './components/modalPurposeItemCard.component';

interface ItemCardComponentProps {
  data: Habit | Challenge | Purpose;
  itemType: string;
  categoryName: string;
}

const ItemCardComponent = ({
  data,
  itemType,
  categoryName,
}: ItemCardComponentProps) => {
  const currentDate = new Date();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={[
        styles.card,
        itemType === 'purposes' ? {height: height * 0.08} : {},
      ]}
      onPress={() => setIsModalVisible(true)}>
      {itemType === 'purposes' ? (
        <View style={stylesPurposeItemType.containerInfo}>
          <View style={{width: width * 0.4}}>
            <Text style={stylesPurposeItemType.title}>{data.name}</Text>
            <Text style={stylesPurposeItemType.subTitle}>{categoryName}</Text>
          </View>

          <Text
            style={[
              stylesPurposeItemType.description,
              data.description ? {} : {color: '#E0E0E0'},
            ]}>
            {data.description
              ? data.description
              : 'Description no Aviable yet.'}
          </Text>
        </View>
      ) : (
        <View style={{flexDirection: 'row', width: width * 1}}>
          <View style={stylesHabitOrChallengeItemType.left}>
            <Text style={stylesHabitOrChallengeItemType.title}>
              {(data as Habit | Challenge).name}
            </Text>
            <View>
              <Text style={stylesHabitOrChallengeItemType.subTitle}>
                {currentDate <= new Date((data as Habit).endDate)
                  ? 'In Progress'
                  : 'Finished'}
              </Text>
              <Text style={stylesHabitOrChallengeItemType.subTitle}>
                {categoryName}
              </Text>
            </View>
          </View>

          <View style={stylesHabitOrChallengeItemType.right}>
            <Text style={stylesHabitOrChallengeItemType.streak}>
              {(data as Habit | Challenge).streak}
            </Text>
            <Text style={stylesHabitOrChallengeItemType.title}>
              Streak Days
            </Text>
          </View>
        </View>
      )}

      {itemType === 'habits' || itemType === 'challenges' ? (
        <ModalItemCard
          data={(data as Habit) || (data as Challenge) ? data : {}}
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      ) : null}

      {itemType === 'purposes' && (
        <ModalPurposeItemCard
          data={(data as Purpose)}
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: whiteColor,
    width: width * 0.8,
    height: height * 0.17,
    backgroundColor: redColor,
    elevation: 6,
  },
});

const stylesHabitOrChallengeItemType = StyleSheet.create({
  left: {
    width: width * 0.4,
    height: height * 0.17,
    justifyContent: 'center',
    paddingLeft: 10,
    gap: 20,
  },
  right: {
    width: width * 0.4,
    height: height * 0.17,
    paddingBottom: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streak: {
    fontFamily: literataBold,
    color: whiteColor,
    fontSize: height * 0.07,
  },
  title: {
    fontFamily: literataBold,
    color: whiteColor,
    fontSize: 15,
  },
  subTitle: {
    fontFamily: literataItalic,
    color: whiteColor,
  },
});

const stylesPurposeItemType = StyleSheet.create({
  containerInfo: {
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: width * 0.8,
  },
  title: {
    fontFamily: literataBold,
    color: whiteColor,
    fontSize: 15,
  },
  subTitle: {
    fontFamily: literataItalic,
    color: whiteColor,
    fontSize: 15,
  },
  description: {
    fontFamily: literataItalic,
    color: whiteColor,
    width: width * 0.35,
    textAlign: 'center',
    fontSize: 12,
  },
});

export default ItemCardComponent;
