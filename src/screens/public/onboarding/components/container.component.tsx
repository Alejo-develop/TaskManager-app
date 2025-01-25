import React from 'react';
import {View} from 'react-native';

interface ContainerPageComponentProps {
  children: React.ReactNode;
}

const ContainerPageComponent = ({children}: ContainerPageComponentProps) => {
  return (
    <View>
      <View></View>
      <View>{children}</View>
      <View></View>
    </View>
  );
};

export default ContainerPageComponent;
