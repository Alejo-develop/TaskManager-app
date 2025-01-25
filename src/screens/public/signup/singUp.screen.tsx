import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import { imgOnboarding } from '../../../utils/img.constanst';
import { blueColor, redColor } from '../../../utils/style.constanst';
import ButtonComponent from '../../../components/button/button.component';
import SignUpHook from './hook/signUp.hook';
import styles from './style';
import FormSignUpComponent from './components/formSignUp.component';

const SignUpScreen = () => {
  const {goToLogin} = SignUpHook()

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: imgOnboarding.crown}} style={styles.img} />
          <Text style={styles.name}>
            <Text style={{color: redColor}}>Task</Text> Manager
          </Text>
        </View>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.containerInputs}>
        <FormSignUpComponent /> 
        <ButtonComponent backgroundColor={blueColor} text="Sign Up" />

        <View>
          <Text style={styles.textFooter}>Already have an account?</Text>
          <TouchableOpacity onPress={goToLogin}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;