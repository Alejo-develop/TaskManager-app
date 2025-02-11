import {Image, StyleSheet, Text, View} from 'react-native';
import {height, literataItalic, whiteColor, width} from '../../../../utils/style.constanst';
import {imgOnboarding} from '../../../../utils/img.constanst';

interface HeaderSeeItemByCategorieScreenProps {
  itemType: string;
}

const HeaderSeeItemByCategorieScreen = ({
  itemType,
}: HeaderSeeItemByCategorieScreenProps) => {
  return (
    <View style={[styles.header, itemType === 'habits' ? {gap: height * 0.03} : {}]}>
      <Image
        style={[
          {
            width:
              itemType === 'habits'
                ? width * 0.375
                : itemType === 'challenges'
                ? width * 0.21
                : width * 0.21,
            height:
              itemType === 'habits'
                ? height * 0.12
                : itemType === 'challenges'
                ? height * 0.16
                : height * 0.16,
          },
        ]}
        source={{
          uri:
            itemType === 'habits'
              ? imgOnboarding.crown
              : itemType === 'challenges'
              ? imgOnboarding.mirror
              : imgOnboarding.candle,
        }}
      />
      <Text style={styles.text}>
        {itemType === `habits`
          ? `Habits`
          : itemType === `challenges`
          ? `Challenges`
          : `Purposes`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: height * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: whiteColor,
    fontFamily: literataItalic,
    fontSize: 22,
  },
});

export default HeaderSeeItemByCategorieScreen;
