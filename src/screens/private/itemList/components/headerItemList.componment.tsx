import {Image, StyleSheet, Text, View} from 'react-native';
import {
  height,
  literataItalic,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';
import {imgCloudinary} from '../../../../utils/img.constanst';

interface HeaderItemListProps {
  itemType: string;
  categoryName: string;
}

const HeaderItemListComponent = ({
  categoryName,
  itemType,
}: HeaderItemListProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.containerleft}>
        <Text style={styles.titles}>{itemType}</Text>
      </View>
      <View
        style={{
          width: width * 0.15,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 10
        }}>
        <Image
          style={[
            {
              width:
                itemType === 'Habits'
                  ? width * 0.14
                  : itemType === 'Challenges'
                  ? width * 0.118
                  : width * 0.11,
              height:
                itemType === 'Habits'
                  ? height * 0.07
                  : itemType === 'Challenges'
                  ? height * 0.07
                  : height * 0.07,
            },
          ]}
          source={{
            uri:
              itemType === 'Habits'
                ? imgCloudinary.crown
                : itemType === 'Challenges'
                ? imgCloudinary.mirror
                : imgCloudinary.candle,
          }}
        />
      </View>
      <View style={styles.containerRight}>
        <Text style={styles.titles}>{categoryName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: width * 1,
    height: height * 0.075,
    flexDirection: 'row',
  },
  containerleft: {
    flexDirection: 'row',
    width: width * 0.425,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerRight: {
    width: width * 0.425,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titles: {
    color: whiteColor,
    fontFamily: literataItalic,
    fontSize: 16,
  },
});

export default HeaderItemListComponent;
