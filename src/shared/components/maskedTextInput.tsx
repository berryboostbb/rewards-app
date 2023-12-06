import React from 'react';
import {flag} from '@assets';
import MaskInput from 'react-native-mask-input';
import {StyleSheet, View, ViewStyle, Image, Text} from 'react-native';
import {light_grey, RF, txt_gray} from '@theme';

interface Props {
  icon: any;
  mask: any;
  value: any;
  error: any;
  title?: any;
  optional: any;
  maxLength?: any;
  placeholder: any;
  containerStyle: ViewStyle;
  onChangeText: (txt: any) => void;
}

const MaskedTextInput = (props: Partial<Props>) => {
  const {
    icon,
    mask,
    title,
    error,
    value,
    optional,
    maxLength,
    placeholder,
    onChangeText,
    containerStyle,
  } = props;
  return (
    <>
      <View style={[styles.inputContainer, containerStyle]}>
        <View style={styles.textContainer}>
          <Text>{title}</Text>
          <View style={styles.txt}>
            <Text style={styles.OptionalText}>{optional}</Text>
          </View>
        </View>
        <View style={styles.iconInputContainer}>
          {icon && (
            <Image source={flag} resizeMode="contain" style={styles.icon} />
          )}
          <MaskInput
            // mask={[
            //   '(',
            //   /\d/,
            //   /\d/,
            //   /\d/,
            //   ')',
            //   ' - ',
            //   /\d/,
            //   /\d/,
            //   /\d/,
            //   ' - ',
            //   /\d/,
            //   /\d/,
            //   /\d/,
            //   /\d/,
            // ]}
            mask={mask}
            value={value}
            style={styles.ml}
            maxLength={maxLength}
            keyboardType="phone-pad"
            placeholder={placeholder}
            onChangeText={onChangeText}
            placeholderTextColor={txt_gray}
          />
        </View>
      </View>
      {!!error && <Text style={styles.errorStyle}>{error}</Text>}
    </>
  );
};

export default MaskedTextInput;

const styles = StyleSheet.create({
  ml: {marginLeft: 5},
  errorStyle: {
    color: 'red',
    paddingTop: 3,
    fontSize: RF(10),
    marginLeft: RF(20),
  },
  inputContainer: {},
  iconInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: light_grey,
    borderRadius: 40,
    height: RF(45),
    paddingLeft: 5,
  },
  input: {
    flex: 1,
    height: 40 > 50 ? 50 : 40,
    fontSize: 12.5,
  },
  icon: {width: RF(70), height: RF(40)},
  placeholderText: {},
  textContainer: {
    marginLeft: 20,
    marginTop: 15,
  },
  OptionalText: {
    color: '#a1c452',
    fontSize: 11,
  },
  txt: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
    paddingRight: 10,
  },
});
