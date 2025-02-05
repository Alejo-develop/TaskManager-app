import {StyleSheet, Text, View} from 'react-native';
import {
  blueColor,
  height,
  literataItalic,
  redColor,
  whiteColor,
  width,
} from '../../utils/style.constanst';

const toastConfig = {
  tomatoToast: ({text1, text2}: any) => (
    <View style={styles.container}>
      <View style={styles.containerStyle}>
        <View style={styles.redColumn}></View>
        <View style={styles.redColumn}></View>
      </View>
      <View style={styles.containerMessage}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
      <View style={styles.containerStyle}>
        <View style={styles.redColumn}></View>
        <View style={styles.redColumn}></View>
      </View>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.7,
    height: height * 0.1,
    backgroundColor: blueColor,
    borderWidth: 5,
    borderColor: whiteColor,
    elevation: 6,
    flexDirection: 'row',
    marginBottom: height * 0.03
  },
  containerStyle:{
    width: width * 0.139,
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerMessage:{
    width: width * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  redColumn:{
    width: width * 0.03,
    height: height * 0.0892,
    backgroundColor: redColor
  },
  text1:{
    color: whiteColor,
    fontFamily: literataItalic,
    fontSize: 12
  },
  text2:{
    color: whiteColor,
    fontFamily: literataItalic,
    fontSize: 13,
    textAlign: 'center'
  }
});

export default toastConfig;