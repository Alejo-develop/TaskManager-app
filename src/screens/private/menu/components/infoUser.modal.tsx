import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  blueColor,
  height,
  literataItalic,
  redColor,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';
import InputComponent from '../../../../components/input/input.component';
import ButtonComponent from '../../../../components/button/button.component';
import UseInfoUserModal from '../hook/useInfoUserModa.hook';

interface InfoUserModalProps {
  onClose: () => void;
  isVisible: boolean;
}

const InfoUserModal = ({isVisible, onClose}: InfoUserModalProps) => {
  const {nameUser, emailUser} = UseInfoUserModal();

  return (
    <Modal
      visible={isVisible}
      onRequestClose={onClose}
      animationType="slide"
      transparent={true}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={onClose} style={{position: 'absolute',
                left: width * -0.15
            }}>
              <Image
                style={styles.img}
                source={require('../../../../assets/img/arrow-back.png')}
                tintColor={redColor}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Your Personal Info</Text>
          </View>

          <View style={styles.containerInputs}>
            <InputComponent
              color={redColor}
              placeholder={`${nameUser}...`}
              entry={false}
              value="Name"
            />
            <InputComponent
              color={redColor}
              placeholder={`${emailUser}...`}
              entry={false}
              value="Email"
            />
          </View>

          <ButtonComponent text="Change" backgroundColor={redColor} />
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
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingBottom: height * 0.05,
  },
  modal: {
    width: width * 0.8,
    height: height * 0.4,
    backgroundColor: blueColor,
    elevation: 6,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  text: {
    fontFamily: literataItalic,
    color: whiteColor,
    fontSize: 20,
  },
  containerInputs: {
    gap: 25,
  },
  img: {
    width: width * 0.079,
    height: height * 0.035,
  },
});

export default InfoUserModal;
