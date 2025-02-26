import {Image, StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {
  height,
  literataRegular,
  redColor,
  whiteColor,
  width,
} from '../../utils/style.constanst';
import {imgCloudinary, imgInProject} from '../../utils/img.constanst';
import UseLayout from './hook/useLayout.hook';
import IconButtonComponent from '../buttonIcon/buttonIcon.component';

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutComponent = ({children}: LayoutProps) => {
  const {date, logOut} = UseLayout();

  return (
    <View style={styles.container}>
      <View style={styles.containerheader}>
        <View style={styles.sectionHeaders}>
          <Text style={styles.welcome}>Welcome</Text>
          <Image source={{uri: imgCloudinary.crown}} style={styles.crown} />
        </View>
        <View style={[styles.sectionHeaders, {paddingRight: 0}]}>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={[{paddingRight: 0, justifyContent: 'center', right: 15}]}>
          <IconButtonComponent
            img={imgInProject.logOut}
            height="0.03"
            width="0.067"
            onPress={logOut}
          />
        </View>
      </View>
      <View style={styles.children}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.9,
  },
  containerheader: {
    backgroundColor: redColor,
    height: height * 0.06,
    width: width * 1,
    flexDirection: 'row',
  },
  sectionHeaders: {
    width: width * 0.45,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.06,
    gap: 10,
    paddingRight: 20,
  },
  welcome: {
    fontFamily: literataRegular,
    color: whiteColor,
    fontSize: 15,
  },
  crown: {
    height: height * 0.04,
    width: width * 0.1,
  },
  date: {
    color: whiteColor,
    fontSize: 16,
    fontFamily: literataRegular,
  },
  children: {height: height * 0.84},
});

export default LayoutComponent;
