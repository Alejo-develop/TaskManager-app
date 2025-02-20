import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {blueColor, redColor} from '../../../utils/style.constanst';
import FormLoginComponent from './components/formLogin.component';
import ButtonComponent from '../../../components/button/button.component';
import {imgCloudinary} from '../../../utils/img.constanst';
import LoginHook from './hook/login.hook';

const LoginScreen = () => {
  const {form, loading, errMessage, login, handleFormChange, goToSignUp} =
    LoginHook();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: imgCloudinary.crown}} style={styles.img} />
          <Text style={styles.name}>
            <Text style={{color: blueColor}}>Task</Text> Manager
          </Text>
        </View>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.containerInputs}>
        {errMessage && (<View><Text style={styles.errorMessage}>{errMessage}</Text></ View>)}
        <FormLoginComponent hanldeFormChange={handleFormChange} />
        <ButtonComponent
          setLoading={loading}
          onPress={() => login(form)}
          backgroundColor={redColor}
          text="Login"
        />

        <View>
          <Text style={styles.textFooter}>Don’t have account yet?</Text>
          <TouchableOpacity onPress={goToSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;
