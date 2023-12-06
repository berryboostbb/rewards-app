import {Formik} from 'formik';
import Header from '../header';
import {Text} from '@components';

import CustomButton from './button';
import TextInput from '../textInput';
import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {borderClr, GST, RF, typography} from '@theme';
import Custom_CheckRequirements from './customCheckRequirements';
import {ChangePasswordSchema, UpdatePasswordSchema} from '@utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialValues = {
  password: '',
  newPassword: '',
  confirmPassword: '',
};

const Change_Password = ({
  type,
  navigation,
  submitHandler,
}: {
  type?: any;
  navigation?: any;
  submitHandler?: any;
}) => {
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacters, setIsCharacters] = useState(false);
  const [new_Password, setNew_Password] = useState<any>('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isUpper_LowerCase, setIsUpper_LowerCase] = useState(false);

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const onHandleClick = (item: any, index: any, setFieldValue: any) => {
    if (type === 'profile') {
      setNew_Password(item);
    }
    setFieldValue('password', item);
  };
  const onHandleClickNew = (item: any, index: any, setFieldValue: any) => {
    setNew_Password(item);
    setFieldValue('newPassword', item);
  };
  useEffect(() => {
    let upper = /[A-Z]/.test(new_Password);
    let lower = /[a-z]/.test(new_Password);
    let number = /[0-9]/.test(new_Password);

    if (new_Password?.length >= 8) {
      setIsCharacters(true);
    }
    if (upper && lower) {
      setIsUpper_LowerCase(true);
    }
    if (number) {
      setIsNumber(true);
    }
    if (new_Password.length <= 0) {
      setIsNumber(false);
      setIsCharacters(false);
      setIsUpper_LowerCase(false);
    }
  }, [new_Password]);

  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={GST.flex}
        showsVerticalScrollIndicator={false}>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={
            type === 'profile' ? ChangePasswordSchema : UpdatePasswordSchema
          }>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <View style={GST.flex}>
              <View style={styles.mainContainer}>
                {type === 'profile' ? (
                  <Header
                    profile
                    showBackButton
                    navigation={navigation}
                    title={'Change Password'}
                  />
                ) : (
                  <Text size={typography.h32} regular align style={styles.mt}>
                    Update Password
                  </Text>
                )}
              </View>

              <View style={styles.emailView}>
                {type == 'profile' && (
                  <TextInput
                    margin
                    width={'100%'}
                    maxLength={40}
                    txtStyle={styles.txt}
                    secureTextEntry={true}
                    value={values.password}
                    txtInput={styles.inputView}
                    title={'*Current Password'}
                    onChangeText={(item: any, index: any) =>
                      onHandleClick(item, index, setFieldValue)
                    }
                    // onChangeText={()=>onChange(,setFieldValue('password'))}
                    error={
                      touched.password && errors.password ? errors.password : ''
                    }
                  />
                )}

                <TextInput
                  margin
                  width={'100%'}
                  maxLength={40}
                  title="*New Password"
                  txtStyle={styles.txt}
                  value={values.newPassword}
                  txtInput={styles.inputView}
                  onPress={updateSecureTextEntry}
                  onChangeText={(item: any, index: any) =>
                    onHandleClickNew(item, index, setFieldValue)
                  }
                  secureTextEntry={secureTextEntry ? true : false}
                  error={
                    touched.newPassword && errors.newPassword
                      ? errors.newPassword
                      : ''
                  }
                />
                <View style={{marginBottom: 10}}>
                  <Custom_CheckRequirements
                    isNumber={isNumber}
                    isCharacters={isCharacters}
                    isUpper_LowerCase={isUpper_LowerCase}
                    size={type === 'forgot' && typography.h2}
                    title={
                      type === 'profile'
                        ? 'Password requirements'
                        : 'Your password needs to be at least'
                    }
                  />
                </View>

                <TextInput
                  margin
                  width={'100%'}
                  maxLength={40}
                  txtStyle={styles.txt}
                  title="*Confirm Password"
                  txtInput={styles.inputView}
                  value={values.confirmPassword}
                  onPress={updateSecureTextEntry}
                  onChangeText={handleChange('confirmPassword')}
                  secureTextEntry={secureTextEntry ? true : false}
                  error={
                    touched.confirmPassword && errors.confirmPassword
                      ? errors.confirmPassword
                      : ''
                  }
                />
              </View>
              <CustomButton
                onPress={handleSubmit}
                text={type === 'profile' ? 'Save' : 'Update'}
                width={type === 'profile' ? RF(150) : RF(180)}
              />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mt: {marginTop: RF(30)},
  emailView: {marginTop: RF(50)},
  mainContainer: {marginTop: RF(40)},
  img: {
    width: RF(20),
    height: RF(20),
  },
  imgView: {
    width: RF(40),
    height: RF(40),
    borderWidth: 1,
    borderRadius: 40,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: borderClr,
  },
  txt: {
    marginLeft: -20,
    fontSize: RF(13),
    fontWeight: '700',
    fontFamily: 'Plus Jakarta Sans',
  },
  inputView: {
    height: RF(40),
    borderWidth: 1,
    paddingLeft: 20,
    borderRadius: 40,
    alignItems: 'center',
    borderColor: borderClr,
    justifyContent: 'center',
  },
});

export default Change_Password;
