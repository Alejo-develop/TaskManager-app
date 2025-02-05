import {StyleSheet, View} from 'react-native';
import {blueColor, height, redColor} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';

interface FormItemComponentProps {
  itemType: string;
}

const FormItemComponent = ({itemType}: FormItemComponentProps) => {
  return (
    <View style={styles.containerForm}>
      <InputComponent
        placeholder={
          itemType === `habit`
            ? `Habit Name...`
            : itemType === `challenge`
            ? `Name of Challenge...`
            : `Purpose Name...`
        }
        entry={false}
        color={redColor}
        value={itemType === `habit`
          ? `Habit Name`
          : itemType === `challenge`
          ? `Name of Challenge`
          : `Purpose Name`}
      />
      <InputComponent placeholder="Description..." entry={false} color={redColor} value='Description' />
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    height: height * 0.65,
    backgroundColor: blueColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25
  },
});

export default FormItemComponent;
