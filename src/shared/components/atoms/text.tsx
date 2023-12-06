import React from 'react';
import {primaryDarkColor, RF} from '@theme';
import {StyleSheet, Text as RNText, TextProps} from 'react-native';

interface Props extends TextProps {
  top?: any;
  bold?: any;
  size?: any;
  right?: any;
  align?: any;
  style?: any;
  color?: any;
  bolder?: any;
  center?: any;
  medium?: any;
  boldest?: any;
  regular?: any;
  semiBold?: any;
  onPress?: () => void;
  numberOfLines?: number;
}
const Text = (props: Partial<Props>) => {
  const {
    top,
    bold,
    size,
    right,
    style,
    color,
    align,
    center,
    bolder,
    medium,
    boldest,
    onPress,
    regular,
    semiBold,
    numberOfLines,
  } = props;

  return (
    <RNText
      onPress={onPress}
      allowFontScaling={false}
      numberOfLines={numberOfLines && numberOfLines}
      style={[
        styles.text,
        bold && styles.bold,
        right && styles.right,
        center && styles.center,
        bolder && styles.bolder,
        medium && styles.medium,
        boldest && styles.boldest,
        regular && styles.regular,
        semiBold && styles.semiBold,
        size && size,
        {color: color ? color : primaryDarkColor},
        align && {textAlign: 'center'},
        top && {marginTop: RF(25)},
        style,
      ]}>
      {props.children}
    </RNText>
  );
};
export default Text;

const styles = StyleSheet.create({
  text: {
    fontSize: RF(12.5),
    fontFamily: 'Plus Jakarta Sans',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  regular: {
    fontFamily: 'PlusJakartaSans-Regular',
  },
  medium: {
    fontFamily: 'PlusJakartaSans-Medium',
  },
  semiBold: {
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  bold: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
  bolder: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  boldest: {
    fontFamily: 'PlusJakartaSans-ExtraBoldItalic',
  },
});
