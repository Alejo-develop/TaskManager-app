import {Modal, StyleSheet, View} from 'react-native';
import {Purpose} from '../../../../core/domain/entities/purposes/purpose';
import {BaseModalProps} from '../../../interface/modal.interface';
import {
  blueColor,
  height,
  whiteColor,
  width,
} from '../../../utils/style.constanst';

interface ModalPurposeItemCardProps extends BaseModalProps {
  data: Purpose | {};
}

const ModalPurposeItemCard = ({
  data,
  isVisible,
  onClose,
}: ModalPurposeItemCardProps) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}></View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.91,
    width: width * 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    width: width * 0.99,
    height: height * 0.4,
    backgroundColor: blueColor,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: whiteColor,
  },
});

export default ModalPurposeItemCard;
