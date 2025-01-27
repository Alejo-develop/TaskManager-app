import {StyleSheet, Text, View} from 'react-native';

const toastConfig = {
  alertMessage: ({text1, text2, props}: any) => (
   <View></View>
  ),
};

const styles = StyleSheet.create({
 
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