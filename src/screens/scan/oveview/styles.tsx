import {ligh_green, RF} from '@theme';
import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centerText: {
    // flex: 1,
    color: '#777',
    fontSize: RF(14),
    marginBottom: RF(50),
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: ligh_green,
    position: 'absolute',
    paddingBottom: RF(70),
    alignItems: 'flex-start',
  },
  buttonTouchable: {
    opacity: 0.1,
    backgroundColor: '#000',
    width: '100%',
    position: 'absolute',
    paddingBottom: RF(100),
  },
});
export default styles;
