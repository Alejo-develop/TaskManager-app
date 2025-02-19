import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Challenge} from '../../../../core/domain/entities/challenges/challenge';
import {Habit} from '../../../../core/domain/entities/habits/habit';
import {BaseModalProps} from '../../../interface/modal.interface';
import {
  blueColor,
  height,
  literataBold,
  literataItalic,
  literataRegular,
  redColor,
  whiteColor,
  width,
} from '../../../utils/style.constanst';
import InputModalComponent from './descriptionInput.component';
import ButtonSelectDate from '../../../screens/private/createItem/components/buttonSelectDate.component';
import UseUpdateItem from '../hooks/useUpdateItem.hook';
import ButtonComponent from '../../button/button.component';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar} from 'react-native-calendars';

interface ModalItemCardProps extends BaseModalProps {
  data: Habit | Challenge | {};
  categoryName: string;
  itemType: string;
}

const ModalItemCard = ({
  data,
  isVisible,
  categoryName,
  itemType,
  onClose,
}: ModalItemCardProps) => {
  const currentDate = new Date();
  const {
    form,
    isModalDateVisible,
    maketDates,
    handleFormChange,
    updateItem,
    setIsModalDateVisible,
    selectEndDate,
  } = UseUpdateItem({
    startDate: (data as Habit | Challenge).startDate,
    description: (data as Habit | Challenge).description,
    frequency: (data as Habit | Challenge).frequency,
    endDate: (data as Habit | Challenge).endDate,
  });

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View>
            <Text style={styles.name}>{(data as Habit | Challenge).name}</Text>
          </View>

          <View style={styles.containerInputsAndInfo}>
            <View style={{gap: 14}}>
              <InputModalComponent
                info={(data as Habit | Challenge).description}
                onChangeText={text => handleFormChange('description', text)}
                title="Description"
              />
              <InputModalComponent
                info={(data as Habit | Challenge).frequency}
                onChangeText={text => handleFormChange('frequency', text)}
                title="Frecuency"
              />
              <ButtonSelectDate
                text="Change End Date"
                onPress={() => setIsModalDateVisible(true)}
              />
            </View>

            <View style={{gap: 10}}>
              <View style={styles.containerStreak}>
                <Text style={styles.numStreak}>
                  {(data as Habit | Challenge).streak}
                </Text>
                <Text style={styles.streakTitle}>Streak Days</Text>
              </View>

              <View>
                <Text style={styles.statusText}>
                  {currentDate <= new Date((data as Habit).endDate)
                    ? 'In Progress'
                    : 'Finished'}
                </Text>
                <Text style={styles.categoryTitle}>{categoryName}</Text>
              </View>
            </View>
          </View>

          <Calendar
            style={styles.containerCalendary}
            markedDates={maketDates}
            markingType="custom"
            theme={{
              calendarBackground: redColor,
              selectedDayBackgroundColor: blueColor,
              textDayFontFamily: literataBold,
              textSectionTitleColor: whiteColor,
              todayTextColor: blueColor,
              monthTextColor: whiteColor,
              arrowColor: whiteColor,
              dayTextColor: whiteColor,
              selectedDayTextColor: blueColor,
            }}
          />

          <ButtonComponent
            backgroundColor={redColor}
            text="Finished"
            onPress={() => updateItem(form, onClose, itemType)}
          />

          {isModalDateVisible && (
            <DateTimePicker
              mode="date"
              display="compact"
              value={new Date((data as Habit | Challenge).endDate)}
              onChange={selectEndDate}
              accentColor={redColor}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.91,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingBottom: height * 0.025,
  },
  modal: {
    width: width * 0.87,
    height: height * 0.83,
    backgroundColor: blueColor,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: whiteColor,
    gap: 25,
  },
  name: {
    fontFamily: literataBold,
    color: whiteColor,
    fontSize: 16,
  },
  containerInputsAndInfo: {
    flexDirection: 'row',
    gap: 20,
  },
  containerStreak: {
    gap: 5,
    width: width * 0.3,
    height: height * 0.18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numStreak: {
    fontFamily: literataBold,
    color: whiteColor,
    fontSize: height * 0.065,
  },
  streakTitle: {
    fontFamily: literataBold,
    color: whiteColor,
  },
  statusText: {
    fontFamily: literataItalic,
    color: whiteColor,
    textAlign: 'center',
  },
  categoryTitle: {
    fontFamily: literataRegular,
    color: whiteColor,
    textAlign: 'center',
  },
  containerCalendary: {
    width: width * 0.76,
    elevation: 6,
  },
});

export default ModalItemCard;
