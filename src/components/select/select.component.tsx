import {StyleSheet, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Category} from '../../../core/domain/entities/categories/category';
import {
  height,
  literataItalic,
  redColor,
  whiteColor,
  width,
} from '../../utils/style.constanst';

interface SelectComponentProps {
  data: Category[] | [];
  setId: React.Dispatch<React.SetStateAction<string>>;
}

const SelectComponent = ({data, setId}: SelectComponentProps) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <Dropdown
        data={data}
        labelField={'name'}
        activeColor={redColor}
        dropdownPosition="bottom"
        onChange={item => {
          setId(item.id);
        }}
        style={styles.dropdown}
        valueField={'name'}
        containerStyle={styles.dropdownContainer}
        inputSearchStyle={[styles.inputSearchStyle]}
        itemContainerStyle={[styles.itemContainerStyle]}
        itemTextStyle={{color: whiteColor}}
        fontFamily={literataItalic}
        selectedTextStyle={{color: whiteColor, fontFamily: literataItalic}}
        placeholder='Select Categorie...'
        placeholderStyle={{color: whiteColor}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: height * 0.05,
    width: width * 0.6,
    paddingHorizontal: 8,
    backgroundColor: redColor,
    elevation: 6,
  },
  placeholderStyle: {
    fontSize: 16,
    color: whiteColor,
    borderRadius: 12,
    fontFamily: literataItalic,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'white',
    borderRadius: 12,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 12,
  },
  itemContainerStyle: {
    marginLeft: 12,
    width: width * 0.4,
    backgroundColor: redColor,
    color: whiteColor,
  },
  dropdownContainer: {
    backgroundColor: redColor,
    borderColor: redColor,
    height: height * 0.17
  },
});

export default SelectComponent;
