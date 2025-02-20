import {Image, Modal, StyleSheet, Text, View} from 'react-native';
import {BaseModalProps} from '../../interface/modal.interface';
import {blueColor, height, literataBold, redColor, whiteColor, width} from '../../utils/style.constanst';
import ButtonComponent from '../button/button.component';
import { imgInProject } from '../../utils/img.constanst';

interface DeleteModalInterface extends BaseModalProps {
  onPress: () => void;
}

const DeleteModal = ({isVisible, onClose, onPress}: DeleteModalInterface) => {
  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.title}>Are your sure to remove this item?</Text>        
          <Image style={styles.img} source={imgInProject.devil}/>
          <View style={styles.containerInputs}>
            <ButtonComponent
              backgroundColor={redColor}
              text="Back"
              onPress={onClose}
            />
            <ButtonComponent
              backgroundColor={redColor}
              text="Confirm"
              onPress={onPress}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modal: {
    backgroundColor: blueColor,
    width: width * 0.9,
    height: height * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  img: {
    width: width * 0.59,
    height: height * 0.4
  },
  containerInputs:{
    flexDirection: 'row',
    width: width * 0.9,
    justifyContent: 'center',
    gap: width * 0.05
  },
  title: {
    fontFamily: literataBold,
    color: whiteColor,
    fontSize: 15
  }
});

export default DeleteModal;
