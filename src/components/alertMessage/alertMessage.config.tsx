import {StyleSheet, Text, View} from 'react-native';
import { height, width } from '../../utils/style.constanst';

const toastConfig = {
  tomatoToast: ({text1, text2, props}: any) => (
   <View style={styles.container}>
   
   </View>
  ),
};

const styles = StyleSheet.create({
 container:{
  width: width * 0.7,
  height: height * 0.1,
  backgroundColor: 'yellow'
 }
});

export default toastConfig;

    // <View style={styles.container}>
    //   <View style={styles.alert}>
    //     <View style={[styles.color, {backgroundColor: props.color}]}></View>
    //     <View style={styles.containerInfo}>
    //       <Text style={styles.title}>{text1}</Text>
    //       <Text style={styles.info}>{text2}</Text>
    //       <Text>{props.uuid}</Text>
    //     </View>
    //   </View>
    // </View>