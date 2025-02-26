import {StyleSheet, Text, View} from 'react-native';
import {blueColor, height, width} from '../../../../utils/style.constanst';

const ItemsForTodaySliderContainer = () => {
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.35,
    backgroundColor: blueColor,
  },
});

export default ItemsForTodaySliderContainer;
