import {Image, StyleSheet, Text, View} from 'react-native';
import {imgCloudinary} from '../../../../utils/img.constanst';
import {
  height,
  literataItalic,
  width,
} from '../../../../utils/style.constanst';

interface HeaderItemScreenProps {
  itemType: string;
}

const HeaderItemScreenComponent = ({itemType}: HeaderItemScreenProps) => {
  return (
    <View style={styles.header}>
      <Image
        style={[
          {
            width:
              itemType === 'habit'
                ? width * 0.375
                : itemType === 'challenge'
                ? width * 0.21
                : width * 0.21,
            height:
              itemType === 'habit'
                ? height * 0.12
                : itemType === 'challenge'
                ? height * 0.16
                : height * 0.16,
          },
        ]}
        source={{
          uri:
            itemType === 'habit'
              ? imgCloudinary.crown
              : itemType === 'challenge'
              ? imgCloudinary.mirror
              : imgCloudinary.candle,
        }}
      />
      <Text style={styles.text}>
        {itemType === `habit`
          ? `Create new Habit`
          : itemType === `challenge`
          ? `Create new Challenge`
          : `Make new Purpose`}
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
    color: 'black',
    fontFamily: literataItalic,
    fontSize: 22,
  },
});

export default HeaderItemScreenComponent;
