import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  blueColor,
  height,
  redColor,
  whiteColor,
  width,
} from '../../../../utils/style.constanst';
import {imgOnboarding} from '../../../../utils/img.constanst';

interface ContainerPageComponentProps {
  children: React.ReactNode;
}

const ContainerPageComponent = ({children}: ContainerPageComponentProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{uri: imgOnboarding.left}}
          style={styles.imgHeaderLeft}
        />
        <Image
          source={{uri: imgOnboarding.right}}
          style={styles.imgHeaderRight}
        />
      </View>
      <View style={styles.children}>{children}</View>
      <View style={styles.footer}>
      <Image
          source={{uri: imgOnboarding.left}}
          style={styles.imgBottomLeft}
        />
        <Image
          source={{uri: imgOnboarding.right}}
          style={styles.imgBottomRight}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 1,
    height: height * 0.945,
    backgroundColor: whiteColor,
  },
  header: {
    width: width * 1,
    height: height * 0.1,
    backgroundColor: blueColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: width * 0.44
  },
  children: {
    width: width * 1,
    height: height * 0.73,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    width: width * 1,
    height: height * 0.04,
    backgroundColor: redColor,
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: width * 0.44
  },
  imgHeaderLeft: {
    width: width * 0.28,
    height: height * 0.18,
    bottom: height * -0.1
  },
  imgHeaderRight: {
    width: width * 0.28,
    height: height * 0.18,
    bottom: height * -0.1
  },
  imgBottomRight:{
    width: width * 0.28,
    height: height * 0.18,
    top: height * -0.18,
    transform: [{ scaleY: -1 }]
  },
  imgBottomLeft:{
    width: width * 0.28,
    height: height * 0.18,
    top: height * -0.18,
    transform: [{ scaleY: -1 }],
  }
});

export default ContainerPageComponent;
