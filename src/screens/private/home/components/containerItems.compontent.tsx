import {StyleSheet, Text, View} from 'react-native';
import {height, width} from '../../../../utils/style.constanst';

const ContainerItemsComponent = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.43,
  },
});

export default ContainerItemsComponent;
