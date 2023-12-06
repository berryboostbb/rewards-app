import React from 'react';
import {isIOS} from '@utils';
import {StyleSheet, View} from 'react-native';
import {hasNotch} from 'react-native-device-info';
import {WHITE} from '@theme';

interface NotchViewProps {
  colors: any;
}

const NotchView = (props: Partial<NotchViewProps>) => {
  return isIOS ? (
    <View style={[styles.notchView, {backgroundColor: WHITE}]} />
  ) : null;
};

const styles = StyleSheet.create({
  notchView: {
    width: '100%',
    height: hasNotch() ? 35 : 20,
  },
});
export default NotchView;
