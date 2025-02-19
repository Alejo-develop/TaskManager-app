import {StyleSheet} from 'react-native';
import {Text, TextInput, View} from 'react-native';
import {
  height,
  literataItalic,
  redColor,
  whiteColor,
  width,
} from '../../../utils/style.constanst';

interface DescriptionInputProps {
  info: string;
  title: string;
  onChangeText?: (text: string) => void;
}

const InputModalComponent = ({info, onChangeText}:DescriptionInputProps) => {
  return (
    <View style={{gap: 7}}>
      <Text style={styles.title}>Description</Text>
      <TextInput 
        style={styles.input}
        placeholder={info ? info : 'Description not available'}
        onChangeText={onChangeText}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: literataItalic,
    color: whiteColor,
  },
  input: {
    backgroundColor: redColor,
    elevation: 6,
    width: width * 0.4,
    height: height * 0.05,
    alignItems: 'flex-start',
  },
});

export default InputModalComponent;
