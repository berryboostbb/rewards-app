import React, {useState} from 'react';
import {Formik, useFormik} from 'formik';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  TextInput,
  CustomButton,
  MaskedTextInput,
  Custom_CheckRequirements,
} from '@components';
import {navigate} from '@services';
import {useSelector} from 'react-redux';
import {AccountDetailEmail} from '@utils';
import {colorRedDC143C, primaryDarkColor, RF} from '@theme';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SecondSlide = (props: any) => {
  const [securePassword, setSecurePassword] = useState(true);
  const [secure_CPassword, setSecure_CPassword] = useState(true);
  const {userFormData} = useSelector((state: any) => state.root.user);
  const formik = useFormik({
    initialValues: {
      email: userFormData.email,
      password: userFormData.password,
      phoneNumber: userFormData.phoneNumber,
      confirmPassword: userFormData.confirmPassword,
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });
  const {
    submitHandler,
    handleMask,
    isNumber,
    isCharacters,
    isUpper_LowerCase,
    onHandleClick_Password,
  } = props;

  const updateSecureTextEntry = (type: any) => {
    if (type === 'p') {
      setSecurePassword(!securePassword);
    }
    if (type === 'cp') {
      setSecure_CPassword(!secure_CPassword);
    }
  };

  return (
    <View style={{flex: 1, marginHorizontal: RF(20)}}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <Formik
          onSubmit={submitHandler}
          initialValues={formik.initialValues}
          validationSchema={AccountDetailEmail}>
          {({
            values,
            errors,
            touched,
            setTouched,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <View>
              <TextInput
                maxLength={40}
                value={values.email}
                title="Email Address"
                keyboardType="email-address"
                placeholderText="Email Address"
                onChangeText={handleChange('email')}
                error={touched.email && errors.email ? errors.email : ''}
              />

              <MaskedTextInput
                icon
                title={'Phone Number'}
                value={values.phoneNumber}
                mask={[
                  '(',
                  /\d/,
                  /\d/,
                  /\d/,
                  ')',
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                placeholder={'(000) - 000 - 0000'}
                onChangeText={(val: any) => handleMask(val, setFieldValue)}
                error={
                  touched.phoneNumber && errors.phoneNumber
                    ? errors.phoneNumber
                    : ''
                }
                maxLength={14}
              />

              <View style={{marginTop: RF(20)}}>
                <Custom_CheckRequirements
                  isNumber={isNumber}
                  isCharacters={isCharacters}
                  title={'Password requirements'}
                  isUpper_LowerCase={isUpper_LowerCase}
                />
              </View>

              <TextInput
                margin
                _secure
                txtMargin
                maxLength={25}
                title="Password"
                value={values.password}
                onPress={() => updateSecureTextEntry('p')}
                placeholderText="Enter Password"
                secureTextEntry={securePassword}
                onChangeText={(item: any, index: any) =>
                  onHandleClick_Password(item, index, setFieldValue)
                }
                error={
                  touched.password && errors.password ? errors.password : ''
                }
              />
              <TextInput
                margin
                _secure
                maxLength={25}
                title="Confirm Password"
                value={values.confirmPassword}
                placeholderText="Enter Password"
                secureTextEntry={secure_CPassword}
                onPress={() => updateSecureTextEntry('cp')}
                onChangeText={handleChange('confirmPassword')}
                error={
                  touched.confirmPassword && errors.confirmPassword
                    ? errors.confirmPassword
                    : ''
                }
              />

              <View style={styles.viewBtn}>
                <CustomButton
                  text={'Next'}
                  onPress={handleSubmit}
                  textStyle={styles.txt}
                />
                <View style={styles.view}>
                  <Text
                    color={primaryDarkColor}
                    semiBold
                    size={12}
                    onPress={() => navigate('EmailPassword')}>
                    {' '}
                    Cancel{' '}
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SecondSlide;

const styles = StyleSheet.create({
  emailView: {flex: 1, marginTop: RF(10)},
  txt: {fontSize: RF(12), fontWeight: '600'},
  viewTxt: {
    position: 'absolute',
    top: RF(80),
    alignSelf: 'center',
    flex: 1,
  },
  wText: {
    alignSelf: 'center',
  },
  viewBtn: {
    width: '100%',
    marginTop: RF(50),

    // marginTop: RF(30),
    alignSelf: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RF(40),
  },
  errorStyle: {
    color: colorRedDC143C,
    fontSize: RF(10),
    marginTop: 2,
    paddingLeft: RF(20),
    fontFamily: 'Plus Jakarta Sans',
  },
});

{
  /* <MaskedTextInput
                title={'Card Number'}
                value={values.cardNumber}
                mask={[
                  '(',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  ')',
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                placeholder={'(0000) - 0000 - 0000 - 0000'}
                onChangeText={(val: any) =>
                  handleMask_CardNumber(val, setFieldValue)
                }
                error={
                  touched.cardNumber && errors.cardNumber
                    ? errors.cardNumber
                    : ''
                }
              /> */
}
