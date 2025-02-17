import {Modal, StyleSheet, View} from 'react-native';
import {Challenge} from '../../../../core/domain/entities/challenges/challenge';
import {Habit} from '../../../../core/domain/entities/habits/habit';
import {BaseModalProps} from '../../../interface/modal.interface';
import {blueColor, height, whiteColor, width} from '../../../utils/style.constanst';

interface ModalItemCardProps extends BaseModalProps {
  data: Habit | Challenge | {};
}

const ModalItemCard = ({data, isVisible, onClose}: ModalItemCardProps) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
            
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
    paddingBottom: height * 0.05,
  },
  modal: {
    width: width * 0.85,
    height: height * 0.7,
    backgroundColor: blueColor,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: whiteColor
  },
});

export default ModalItemCard;
