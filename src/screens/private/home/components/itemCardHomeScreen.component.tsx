import {StyleSheet, Text, View} from 'react-native';
import {height, literataItalic, literataRegular, whiteColor, width} from '../../../../utils/style.constanst';
import {Purpose} from '../../../../../core/domain/entities/purposes/purpose';
import {Challenge} from '../../../../../core/domain/entities/challenges/challenge';

interface ItemCardHomeScreenProps {
  backagroundColor: string;
  data: Purpose | Challenge;
}

const ItemCardHomeScreen = ({
  backagroundColor,
  data,
}: ItemCardHomeScreenProps) => {
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: backagroundColor,
        },
      ]}>
      <Text style={styles.title}>{(data as Purpose | Challenge).name}</Text>

      {(data as Challenge).frequency && (
        <View>
          <Text style={styles.frequency}>Frequency: {(data as Challenge).frequency} days</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width * 0.35,
    height: height * 0.08,
    elevation: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: whiteColor,
    fontFamily: literataRegular,
    fontSize: 12
  },
  frequency: {
    color: whiteColor,
    fontFamily: literataItalic,
    fontSize: 10
  }
});

export default ItemCardHomeScreen;
