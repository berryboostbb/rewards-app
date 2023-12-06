import Text from './text';
import {borderClr, RF} from '@theme';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Pin = ({
  errors,
  values,
  touched,
  setFieldValue,
}: {
  errors?: any;
  values?: any;
  touched?: any;
  setFieldValue?: any;
}) => {
  const [pin, setpin] = useState('');
  const {user, colorCode} = useSelector((state: any) => state.root.user);

  return (
    <>
      <OTPInputView
        pinCount={4}
        code={values.pin}
        style={styles.otp}
        autoFocusOnLoad={false}
        codeInputFieldStyle={styles.inputField}
        onCodeChanged={(code: any) => {
          setFieldValue('pin', code);
        }}
        keyboardType="number-pad"
        onCodeFilled={(code: any) => {
          setpin(code);
        }}
      />
      {touched.pin && errors.pin && <Text>* {errors.pin}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  otp: {
    width: '90%',
    alignItems: 'center',
    height: RF(10),
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  inputField: {
    color: '#000',
    borderWidth: 0,
    borderRadius: 10,
    width: RF(50),
    height: RF(50),
    backgroundColor: borderClr,
  },
  mainContainer: {
    marginTop: RF(20),
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default Pin;
