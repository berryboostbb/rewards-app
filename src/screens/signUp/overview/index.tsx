import {
  Text,
  Picker,
  Header,
  Wrapper,
  TextInput,
  DatePicker,
  CustomButton,
  CustomLoader,
  MaskedTextInput,
  CustomModal,
} from '@components';
import {Formik} from 'formik';
import {useStyles} from './styles';
import React, {useState} from 'react';
import {navigate, signUp} from '@services';
import {Pressable, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {GST, LIGHT_GREY, ligh_green} from '@theme';
import {cardTypeList, firstCapitalize, showToast, SignUpSchema} from '@utils';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const initialValues = {
  dob: '',
  email: '',
  cardType: '',
  address: '',
  password: '',
  lastName: '',
  firstName: '',
  cardNumber: '',
  phoneNumber: '',
  confirmPassword: '',
};

const SignUpForm = ({navigation}: any) => {
  const myTheme: any = useTheme();
  const styles = useStyles(myTheme.colors);
  const [loading, setloading] = useState(false);
  const [error, setError] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);

  const submitHandler = (values: any) => {
    setloading(true);
    let index = cardTypeList.findIndex(t => t.label == values.cardType);
    let type = cardTypeList[index].value;

    let params = {
      email: values.email,
      password: values.password,
      user_type: type,
      last_name: values.lastName,
      first_name: values.firstName,
      cardNumber: values.cardNumber,
      contact_number: values.phoneNumber,
      dob: values.dob,
      home_address: values.address,
      // phone_number
      // interests
    };

    signUp(params)
      .then((res: any) => {
        showToast('Success', res.data.message, true);
        setError(res?.data?.message);
      })
      .catch((err: any) => {
        showToast('Error', err.response.data, false);
      })
      .finally(() => setloading(false));
  };
  const onSignIn = () => {
    navigate('Login');
  };

  const updateSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };
  const updateSecureConfirmTextEntry = () => {
    setSecureConfirmTextEntry(!secureConfirmTextEntry);
  };

  const showErrorModal = () => {
    if (error) {
      return (
        <CustomModal
          responseMessage={error}
          modalType=""
          onPress={() => {
            setError('');
            setTimeout(() => {
              navigate('SignUpSuccess');
              setloading(false);
            }, 1000);
          }}
        />
      );
    }
  };

  return (
    <Wrapper isMarginHorizontal>
      <Header title="Sign Up" showBackButton navigation={navigation} />
      <Text center size={16} style={GST.mv10}>
        Personal Information
      </Text>
      <Formik
        onSubmit={submitHandler}
        initialValues={initialValues}
        validationSchema={SignUpSchema}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
              <TextInput
                icon="email"
                title="Email*"
                placeholder="Email*"
                value={firstCapitalize(values.email)}
                keyboardType="email-address"
                onChangeText={(txt: any) => {
                  setFieldValue('email', txt);
                }}
                maxLength={40}
                error={touched?.email && errors?.email ? errors?.email : ''}
              />
              <TextInput
                icon="person"
                maxLength={40}
                title="First Name*"
                value={firstCapitalize(values.firstName)}
                onChangeText={handleChange('firstName')}
                error={
                  touched?.firstName && errors?.firstName
                    ? errors?.firstName
                    : ''
                }
              />
              <TextInput
                icon="person"
                maxLength={40}
                title="Last Name*"
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                error={
                  touched?.lastName && errors?.lastName ? errors?.lastName : ''
                }
              />

              <MaskedTextInput
                maxLength={20}
                mask={[
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  '- ',
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
                value={values.cardNumber}
                placeholder="Card Number*"
                containerStyle={styles.phoneInput}
                onChangeText={(formatted: any) => {
                  setFieldValue('cardNumber', formatted);
                }}
                error={
                  touched?.cardNumber && errors?.cardNumber
                    ? errors?.cardNumber
                    : ''
                }
              />

              <Picker
                fontawesome="vcard-o"
                values={cardTypeList}
                placeholder="Please select the Card Type*"
                onChange={(val: any, index: any) => {
                  setFieldValue('cardType', val);
                }}
                error={
                  touched?.cardType && errors?.cardType ? errors?.cardType : ''
                }
              />

              <DatePicker
                theme={myTheme}
                dateVisible={true}
                style={styles.dateView}
                placeholder="Date of Birth*"
                onChange={(val: any) => {
                  setFieldValue('dob', val);
                }}
              />
              {touched?.dob && errors?.dob ? (
                <Text style={styles.errorStyle}>{errors?.dob} </Text>
              ) : null}

              <MaskedTextInput
                icon="phone"
                maxLength={14}
                mask={[
                  '(',
                  /\d/,
                  /\d/,
                  /\d/,
                  ')',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                placeholder="Phone*"
                value={values.phoneNumber}
                containerStyle={styles.phoneInput}
                onChangeText={(formatted: any) => {
                  setFieldValue('phoneNumber', formatted);
                }}
                error={
                  touched?.phoneNumber && errors?.phoneNumber
                    ? errors?.phoneNumber
                    : ''
                }
              />

              <TextInput
                maxLength={25}
                antDesign="eye"
                title="Password*"
                ionicons="eye-off"
                icon="lock-outline"
                value={values.password}
                onPress={updateSecureTextEntry}
                onChangeText={handleChange('password')}
                secureTextEntry={secureTextEntry ? true : false}
                error={
                  touched?.password && errors?.password ? errors?.password : ''
                }
              />
              <TextInput
                antDesign="eye"
                maxLength={25}
                ionicons="eye-off"
                icon="lock-outline"
                title="Confirm Password*"
                value={values.confirmPassword}
                onPress={updateSecureConfirmTextEntry}
                onChangeText={handleChange('confirmPassword')}
                secureTextEntry={secureConfirmTextEntry ? true : false}
                error={
                  touched?.confirmPassword && errors?.confirmPassword
                    ? errors?.confirmPassword
                    : ''
                }
              />

              <CustomButton text={'SIGN UP'} onPress={handleSubmit} />

              <View style={styles.view}>
                <Text color={LIGHT_GREY}>Already have an account? </Text>
                <Pressable onPress={onSignIn}>
                  <Text color={ligh_green}>Sign In</Text>
                </Pressable>
              </View>
            </KeyboardAwareScrollView>
          </>
        )}
      </Formik>
      {showErrorModal()}
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default SignUpForm;
