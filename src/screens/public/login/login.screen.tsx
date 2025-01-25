import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {blueColor, redColor} from '../../../utils/style.constanst';
import FormLoginComponent from './components/form.component';
import ButtonComponent from '../../../components/button/button.component';
import {imgOnboarding} from '../../../utils/img.constanst';

const LoginScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: imgOnboarding.crown}} style={styles.img} />
          <Text style={styles.name}>
            <Text style={{color: blueColor}}>Task</Text> Manager
          </Text>
        </View>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.containerInputs}>
        <FormLoginComponent />
        <ButtonComponent backgroundColor={redColor} text="Login" />

        <View>
          <Text style={styles.textFooter}>Don’t have account yet?</Text>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
