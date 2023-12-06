import * as React from 'react';
import {Text} from '@components';
import {useSelector} from 'react-redux';
import {RF, typography, WHITE} from '@theme';
import {StyleSheet, TouchableOpacity} from 'react-native';

const CustomButton = ({
  text,
  onPress,
  btnStyle,
  disable,
  disabled,
  textStyle,
  children,
  bgClr,
  width,
}: {
  width?: any;
  bgClr?: any;
  text?: any;
  disable?: any;
  children?: any;
  btnStyle?: any;
  disabled?: any;
  textStyle?: any;
  onPress?: () => void;
}) => {
  const {colorCode} = useSelector((state: any) => state.root.user);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.container,
        btnStyle,
        disable && styles.disable,
        {
          backgroundColor: bgClr ? bgClr : colorCode,
          width: width ? width : RF(180),
        },
      ]}>
      <Text style={[styles.text, textStyle]} size={typography.normal} semiBold>
        {text}
      </Text>
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: RF(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(60),
    elevation: 3,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 0},
    marginTop: RF(10),
    marginBottom: RF(10),
    alignSelf: 'center',
  },
  disable: {
    flexDirection: 'row',
    width: '100%',
    height: RF(50),
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RF(10),
    elevation: 3,
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 0},
    marginTop: RF(10),
  },
  text: {
    color: WHITE,
    fontSize: RF(14),
    fontWeight: 'bold',
  },
});
