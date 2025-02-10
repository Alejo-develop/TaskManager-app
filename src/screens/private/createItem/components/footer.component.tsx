import {Image, StyleSheet, View} from 'react-native';
import ButtonComponent from '../../../../components/button/button.component';
import {
  blueColor,
  height,
  redColor,
  width,
} from '../../../../utils/style.constanst';
import {imgOnboarding} from '../../../../utils/img.constanst';

interface FooterCreateItemScreenComponentProps {
  itemType: string;
  onPress?: () => void;
}

const FooterCreateItemScreenComponent = ({
  itemType,
  onPress,
}: FooterCreateItemScreenComponentProps) => {
  return (
    <View style={styles.container}>
      <ButtonComponent
        text={itemType === 'purpose' ? 'Make' : 'Create'}
        backgroundColor={redColor}
      />
      <Image source={{uri: imgOnboarding.stamp}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: blueColor,
    width: width * 1,
    height: height * 0.17,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  img: {
    width: width * 0.2,
    height: height * 0.1,
  },
});

export default FooterCreateItemScreenComponent;
