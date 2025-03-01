import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {imgCloudinary} from '../../../utils/img.constanst';
import {blueColor, redColor} from '../../../utils/style.constanst';
import ButtonComponent from '../../../components/button/button.component';
import SignUpHook from './hook/signUp.hook';
import styles from './style';
import FormSignUpComponent from './components/formSignUp.component';

const SignUpScreen = () => {
  const {
    errMessage,
    form,
    loading,
    repeatPassword,
    goToLogin,
    SignUp,
    handleFormChange,
    setRepeatPassword,
  } = SignUpHook();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled">
      <View style={styles.header}>
        <View style={{alignItems: 'center'}}>
          <Image source={{uri: imgCloudinary.crown}} style={styles.img} />
          <Text style={styles.name}>
            <Text style={{color: redColor}}>Task</Text> Manager
          </Text>
        </View>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      <View style={styles.containerInputs}>
        {errMessage && (
          <View>
            <Text style={styles.errorMessage}>{errMessage}</Text>
          </View>
        )}
        <FormSignUpComponent
          hanldeFormChange={handleFormChange}
          setRepeatPassword={setRepeatPassword}
        />
        <ButtonComponent
          backgroundColor={blueColor}
          text="Sign Up"
          onPress={() => SignUp(form, repeatPassword)}
          setLoading={loading}
        />

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
