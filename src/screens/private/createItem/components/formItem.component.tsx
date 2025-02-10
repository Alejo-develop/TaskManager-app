import {StyleSheet, View} from 'react-native';
import {blueColor, height, redColor} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';
import {Category} from '../../../../../core/domain/entities/categories/category';
import SelectComponent from '../../../../components/select/select.component';

interface FormItemComponentProps {
  itemType: string;
  categories: Category[];
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const FormItemComponent = ({
  itemType,
  categories,
  setId,
}: FormItemComponentProps) => {
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
        value={
          itemType === `habit`
            ? `Habit Name`
            : itemType === `challenge`
            ? `Name of Challenge`
            : `Purpose Name`
        }
      />
      <InputComponent
        placeholder="Description..."
        entry={false}
        color={redColor}
        value="Description"
      />

      <SelectComponent data={categories} setId={setId} />
      {(itemType === 'habit' || itemType === 'challenge') && (
        <InputComponent color={redColor} entry={false} placeholder='Frecuency...' value='Frecuency' />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    height: height * 0.48,
    backgroundColor: blueColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
});

export default FormItemComponent;
