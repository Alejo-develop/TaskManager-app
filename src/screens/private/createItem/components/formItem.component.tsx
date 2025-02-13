import {StyleSheet, View} from 'react-native';
import {
  blueColor,
  height,
  redColor,
  width,
} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';
import {Category} from '../../../../../core/domain/entities/categories/category';
import SelectComponent from '../../../../components/select/select.component';
import DateTimePicker from '@react-native-community/datetimepicker';
import UseFormItem from '../hook/useFormItem.hook';
import ButtonSelectDate from './buttonSelectDate.component';
import FooterCreateItemScreenComponent from './footer.component';

interface FormItemComponentProps {
  itemType: string;
  categories: Category[];
}

const FormItemComponent = ({itemType, categories}: FormItemComponentProps) => {
  const {
    date,
    endDate,
    isVisibleDatePicker,
    idCategorie,
    form,
    frecuency,
    setFrecuency,
    setIsVisibleDatePicker,
    handleFormChange,
    setIdCategorie,
    selectStartDate,
    selectEndDate,
    createItem,
  } = UseFormItem();

  return (
    <View style={styles.containerForm}>
      <View
        style={{
          gap: 20,
          paddingTop: height * 0.03,
          width: width * 1,
          alignItems: 'center',
        }}>
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
          onChangeText={text => handleFormChange('name', text)}
        />

        <InputComponent
          placeholder="Description..."
          entry={false}
          color={redColor}
          value="Description"
          onChangeText={text => handleFormChange('description', text)}
        />

        {isVisibleDatePicker && (
          <DateTimePicker
            mode="date"
            display="compact"
            value={date}
            onChange={selectStartDate}
          />
        )}

        {isVisibleDatePicker && (
            <DateTimePicker
              mode="date"
              display="compact"
              value={endDate}
              onChange={selectEndDate}
              accentColor={redColor}         
            />
        )}

        <SelectComponent data={categories} setId={setIdCategorie} />
        {(itemType === 'habit' || itemType === 'challenge') && (
          <InputComponent
            color={redColor}
            entry={false}
            placeholder="Frecuency..."
            value="Frecuency"
            keyBoardPad="decimal-pad"
            onChangeText={text => setFrecuency((text))}
          />
        )}
        {(itemType === 'habit' || itemType === 'challenge') && (
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              justifyContent: 'center',
              width: width * 1,
            }}>
            <ButtonSelectDate
              text="Start Date"
              onPress={() =>
                setIsVisibleDatePicker(!isVisibleDatePicker)
              }
            />
            <ButtonSelectDate
              text="End Date"
              onPress={() => setIsVisibleDatePicker(!isVisibleDatePicker)}
            />
          </View>
        )}
      </View>

      <FooterCreateItemScreenComponent
        itemType={itemType}
        onPress={() =>
          createItem(itemType, {
            ...form,
            startDate: date,
            endDate: endDate,
            categoryId: idCategorie,
            frequency: frecuency,
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
    height: height * 0.65,
    backgroundColor: blueColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: height * 0.05,
  },
});

export default FormItemComponent;
