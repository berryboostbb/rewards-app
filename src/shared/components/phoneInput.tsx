import Text from './atoms/text';
import React, {useRef} from 'react';
import {Image, StyleSheet} from 'react-native';
import {light_grey, RF, txt_gray, WHITE} from '@theme';
import PhoneInput from 'react-native-phone-number-input';
import MaskedTextInput from './maskedTextInput';
import {flag} from '@assets';

const CustomPhoneInput = ({
  values,
  onChangeText,
}: {
  values?: any;
  onChangeText?: any;
}) => {
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
      <Text bold size={12} color={txt_gray} style={styles.title}>
        Phone Number
      </Text>

      {/* <PhoneInput
        textInputProps={{
          value: values,
        }}
        // value={'values'}
        layout="first"
        ref={phoneInput}
        defaultCode="CA"
        disableArrowIcon
        // defaultValue={values}
        placeholder={'(000) - 000 - 0000'}
        onChangeText={text => {
          onChangeText(text);
          // handleMask(text);
        }}
        // onChangeFormattedText={text => {
        //   setFormattedValue(text);
        // }}
        textInputStyle={styles.txt}
        codeTextStyle={styles.codeText}
        containerStyle={styles.container}
        countryPickerButtonStyle={styles.flag}
        textContainerStyle={styles.txtContainer}
      /> */}
    </>
  );
};

const styles = StyleSheet.create({
  title: {marginLeft: RF(20), marginTop: RF(15)},
  codeText: {
    marginLeft: -30,
    fontSize: RF(10),
    position: 'absolute',
  },
  container: {
    backgroundColor: light_grey,
    width: '100%',
    marginTop: RF(10),
    borderRadius: RF(40),
    height: RF(45),
  },
  txt: {
    backgroundColor: light_grey,
    fontSize: RF(14),
    color: '#000',
    height: RF(40),
    fontWeight: '500',
    fontFamily: 'Plus Jakarta Sans',
  },
  txtContainer: {backgroundColor: light_grey, borderRadius: RF(40)},
  flag: {
    backgroundColor: WHITE,
    borderRadius: RF(100),
    width: RF(80),
    height: RF(32),
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: RF(5),
  },
});

export default CustomPhoneInput;
