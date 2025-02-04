import {StyleSheet, View} from 'react-native';
import { blueColor, height } from '../../../../utils/style.constanst';

interface FormItemComponentProps {
  itemType: string;
}

const FormItemComponent = ({itemType}: FormItemComponentProps) => {
  return <View style={styles.containerForm}></View>;
};

const styles = StyleSheet.create({
  containerForm: {
    height: height * 0.65,
    backgroundColor: blueColor
  },
});

export default FormItemComponent;
