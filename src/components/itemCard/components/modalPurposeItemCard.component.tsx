import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Purpose} from '../../../../core/domain/entities/purposes/purpose';
import {BaseModalProps} from '../../../interface/modal.interface';
import {
  blueColor,
  height,
  literataBold,
  literataItalic,
  redColor,
  whiteColor,
  width,
} from '../../../utils/style.constanst';
import ButtonComponent from '../../button/button.component';
import UseDeleteItem from '../../deleteModal/hooks/useDeleteItem';
import DeleteModal from '../../deleteModal/deleteItem.modal';
import UseUpdatePurpose from '../hooks/useUpdatePorpuse.hook';

interface ModalPurposeItemCardProps extends BaseModalProps {
  data: Purpose | {};
}

const ModalPurposeItemCard = ({
  data,
  isVisible,
  onClose,
}: ModalPurposeItemCardProps) => {
  const {isVisibleConfirmModal, deleteItem, setIsVisibleConfirmModal} =
    UseDeleteItem();

  const {newDescription, setNewDescription, updatePurpose} = UseUpdatePurpose(
    (data as Purpose).description,
  );

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled">
        <View style={styles.modal}>
          <Text style={styles.name}>{(data as Purpose).name}</Text>

          <TextInput
            style={styles.inputDescription}
            placeholderTextColor={whiteColor}
            placeholder={
              (data as Purpose).description
                ? (data as Purpose).description
                : 'Not Available'
            }
            onChangeText={text => setNewDescription(text)}
          />

          <View style={styles.containerbuttons}>
            <ButtonComponent
              backgroundColor={redColor}
              text="Delete"
              onPress={() => setIsVisibleConfirmModal(true)}
            />
            <ButtonComponent
              backgroundColor={redColor}
              text="Finished"
              onPress={() =>
                updatePurpose(
                  {description: newDescription},
                  (data as Purpose).id,
                  onClose,
                )
              }
            />
          </View>
        </View>

        <DeleteModal
          isVisible={isVisibleConfirmModal}
          onClose={() => setIsVisibleConfirmModal(false)}
          onPress={() => deleteItem('purpose', (data as Purpose).id)}
        />
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    width: width * 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    gap: height * 0.06,
  },
  name: {
    fontFamily: literataBold,
    color: whiteColor,
    fontSize: 18,
  },
  inputDescription: {
    width: width * 0.7,
    height: height * 0.12,
    elevation: 6,
    backgroundColor: redColor,
    textAlign: 'center',
    fontFamily: literataItalic,
  },
  containerbuttons: {
    flexDirection: 'row',
    gap: 25,
  },
});

export default ModalPurposeItemCard;
