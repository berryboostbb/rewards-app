import {Formik} from 'formik';
import styles from './styles';
import {timer} from '@assets';
import {navigate, sendSignUp_Otp, verifySignUp_Otp} from '@services';
import {useSelector} from 'react-redux';
import {GST, RF, typography} from '@theme';
import React, {useEffect, useState} from 'react';
import {Image, Pressable, View} from 'react-native';
import {
  CustomButton,
  CustomCodeField,
  CustomLoader,
  Text,
  TextInput,
  Wrapper,
} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CodeFogotSchema, EmailForgotSchema, showToast} from '@utils';

const initialValues = {
  email: '',
};

const ForgotPassword = ({navigation}: any) => {
  let smsInterval: any = '';
  let [counter, setCounter] = useState(59);
  const [codeTimer, setCodeTimer] = useState<any>(59);
  const [loading, setLoading] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const {user, colorCode} = useSelector((state: any) => state.root.user);
  const [code, setCode] = useState('');
  const [email, setEmail] = useState('');
  const [verifyCode, setVerifyCode] = useState(false);

  const submitHandler = (values: any) => {
    if (isEmailVerified == false) {
      setEmail(values?.email);
      sendOTP(values?.email);
    } else if (code.length === 4) {
      verifyOTP(values?.email);
    }
  };
  const onPressCancel = () => {
    navigation.goBack();
  };
  const setTimer = () => {
    smsInterval = setInterval(() => {
      if (counter <= 0) {
        clearInterval(smsInterval);
      } else {
        let m = Math.floor((counter / 60) % 60);
        let s = Math.floor(counter % 60);
        setCounter((counter -= 1));
        setCodeTimer('0' + m + ':' + s + 's');
      }
    }, 1000);
  };
  useEffect(() => {
    setTimer();
  }, []);
  const sendOTP = (email: any) => {
    setLoading(true);
    let params = {
      email: email,
      sendFor: 'forgot_password',
    };
    sendSignUp_Otp(params)
      .then((res: any) => {
        if (res?.data?.error) {
          showToast('Error', res?.data?.error, false);
        } else if (res?.data?.status === true) {
          showToast('Success', res?.data?.message, true);
          setIsEmailVerified(true);
        }
      })
      .catch((err: any) => {
        console.log('send error.nnnnn..', err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const verifyOTP = (email: any) => {
    let params = {
      totp: Number(code),
      email: email,
      verifyFor: 'forgot_password',
    };
    verifySignUp_Otp(params)
      .then((res: any) => {
        if (res.data.error) {
          showToast('Error', res.data.message, false);
          setVerifyCode(true);
        } else if (res.data.status === true) {
          showToast('Success', res.data.message, true);
          navigate('Update_Password', {type: 'forgot', email: email});
        }
      })
      .catch((err: any) => {
        console.log('error..', err.message);
      })
      .finally(() => {});
  };
  const onSubmit = (value: any) => {
    setCode(value);
  };
  const onResend = () => {
    sendOTP(email);
  };

  return (
    <Wrapper isMarginHorizontal>
      <KeyboardAwareScrollView
        contentContainerStyle={GST.flex}
        showsVerticalScrollIndicator={false}>
        <Formik
          onSubmit={submitHandler}
          initialValues={initialValues}
          validationSchema={EmailForgotSchema}>
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <View style={styles.container}>
              {isEmailVerified ? (
                <View style={styles.main}>
                  <Text
                    semiBold
                    size={typography.h2}
                    style={{marginLeft: RF(20)}}>
                    Please Check Your Email
                  </Text>
                  <Text medium style={styles.enter} size={typography.standard}>
                    Please enter the verification code that was sent to
                    ******plastk.ca
                  </Text>
                  <View style={styles.pin}>
                    <CustomCodeField
                      value={code}
                      setValue={(val: any) => onSubmit(val)}
                      // error={
                      //   code.length < 4 ? 'Please Enter 4 digits code' : ''
                      // }
                    />
                    {/* <Pin
                      errors={errors}
                      values={values}
                      touched={touched}
                      setFieldValue={setFieldValue}
                    /> */}
                  </View>
                  <View style={styles.timerStyle}>
                    {codeTimer ? (
                      <>
                        <Image
                          source={timer}
                          style={styles.tImg}
                          resizeMode="contain"
                        />
                        <Text semiBold size={typography.standard}>
                          {codeTimer}
                        </Text>
                      </>
                    ) : verifyCode === true ? (
                      <CustomButton text={'Resend'} onPress={onResend} />
                    ) : null}
                  </View>
                </View>
              ) : (
                <View style={GST.flex}>
                  <Text size={typography.h32} regular align style={styles.mt}>
                    Forgot Password?
                  </Text>
                  <Text
                    align
                    medium
                    style={styles.resetText}
                    size={typography.standard}>
                    To reset your password, please enter the email address you
                    used to create your account and we'll send you a link.
                  </Text>

                  <View style={styles.txtinput}>
                    <TextInput
                      margin
                      maxLength={40}
                      width={'100%'}
                      value={values.email}
                      title="Email Address"
                      txtStyle={styles.txt}
                      // txtInput={styles.inputView}
                      placeholderText="****@plastk.ca"
                      onChangeText={handleChange('email')}
                      error={touched.email && errors.email ? errors.email : ''}
                    />
                  </View>
                </View>
              )}

              <View style={styles.lastView}>
                <View style={styles.resendView}>
                  <Text medium size={typography.standard} align>
                    {isEmailVerified
                      ? null
                      : "Haven't received a verification code?"}
                  </Text>
                </View>
                <CustomButton text={'Submit'} onPress={handleSubmit} />
                <Pressable onPress={onPressCancel}>
                  <Text size={typography.standard}>Cancel</Text>
                </Pressable>
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
      {loading && <CustomLoader />}
    </Wrapper>
  );
};

export default ForgotPassword;
