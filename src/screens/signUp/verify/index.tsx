import {
  Text,
  Wrapper,
  CustomButton,
  CustomCodeField,
  Success,
} from '@components';
import styles from './styles';
import {created_p, timer} from '@assets';
import {
  setAuthToken,
  setColorCode,
  setIsLoggedIn,
  setStores,
  setUser,
} from '@redux';
import {useDispatch, useSelector} from 'react-redux';
import {Image, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  gray,
  light_grey,
  primaryDarkColor,
  RF,
  typography,
  WHITE,
} from '@theme';
import {RouteProp} from '@react-navigation/native';
import {
  fetchStoresByLocation,
  login,
  navigate,
  sendSignUp_Otp,
  verifySignUp_Otp,
} from '@services';
import {showToast} from '@utils';

interface Props {
  navigation: any;
  route: RouteProp<{
    params: {
      formData?: any;
    };
  }>;
}

const Verification = ({route}: Props) => {
  let smsInterval: any = '';
  const dispatch = useDispatch();
  // const formData: any = {};
  const {formData} = route?.params;
  const [value, setValue] = useState('');
  let [counter, setCounter] = useState(59);
  const [loading, setloading] = useState(false);
  const [activeBox, setActiveBox] = useState('');
  const [codeTimer, setCodeTimer] = useState('');
  const [selectedMsg, setSelectedMsg] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(true);
  const [resendDisable, setResendDisable] = useState(false);
  const {fcm_token} = useSelector((state: any) => state.root.user);

  const onPressBox = (type: any) => {
    if (type === 'email') {
      setSelectedEmail(true);
      setSelectedMsg(false);
    } else if (type === 'msg') {
      setSelectedMsg(true);
      setSelectedEmail(false);
    }
  };
  const onResend = () => {
    setCounter(59);
    setTimer();
    sendOTP();
  };
  const setTimer = () => {
    setResendDisable(true);
    smsInterval = setInterval(() => {
      console.log('kkkkkkk', counter);
      if (counter < 0) {
        clearInterval(smsInterval);
        setCounter(59);
        setResendDisable(false);
      } else {
        let m = Math.floor((counter / 60) % 60);
        let s = Math.floor(counter % 60);
        console.log('countr..', s);
        setCounter((counter -= 1));
        setCodeTimer('0' + m + ':' + s + 's');
      }
    }, 1000);
  };
  const onNext = () => {
    if (selectedEmail) {
      sendOTP();
      setActiveBox('email');
      setSelectedEmail(false);
    }
  };
  const onSubmit = (val: any) => {
    setValue(val);
  };
  const onVerificationCompleted = () => {
    Login();
  };
  const Login = () => {
    let params = {
      email: formData?.email,
      password: formData?.password,
      fcm_id: fcm_token,
    };
    setloading(true);
    login(params)
      .then(async (res: any) => {
        if (res?.data?.status == true) {
          dispatch(setAuthToken(res?.data?.data?.token));
          dispatch(setIsLoggedIn(true));
          dispatch(setUser(res?.data?.data));
          getStores_byLocation();
          dispatch(setColorCode('#19383A'));
          navigate('Home');
        } else {
          showToast('Error', res?.data?.error, false);
        }
      })
      .catch((err: any) => {
        showToast(
          'Error',
          err?.response?.data?.message
            ? err?.response?.data?.message
            : 'Something went wrong',
          false,
        );
      })
      .finally(() => {
        setloading(false);
      });
  };
  const getStores_byLocation = () => {
    let params = {
      getLogos: false,
    };
    fetchStoresByLocation(params)
      .then((res: any) => {
        dispatch(setStores(res?.data?.data));
      })
      .catch((err: any) => {})
      .finally(() => {});
  };
  useEffect(() => {
    if (activeBox === 'email') {
      setTimer();
    }
  }, [activeBox]);
  useEffect(() => {
    if (value.length === 4) {
      verifyOTP();
    }
  }, [value]);
  const sendOTP = () => {
    let params = {
      email: formData?.email,
      sendFor: 'email_verification',
    };
    sendSignUp_Otp(params)
      .then((res: any) => {
        showToast('Success', res.data.message, true);
      })
      .catch((err: any) => {
        console.log('send error.nnnnn..', err.message);
      })
      .finally(() => {});
  };
  const verifyOTP = () => {
    let params = {
      totp: Number(value),
      email: formData?.email,
      verifyFor: 'email_verification',
    };
    verifySignUp_Otp(params)
      .then((res: any) => {
        if (res.data.error) {
          console.log('vv...');
          setValue('');
          showToast('Error', res.data.message, false);
        } else if (res.data.status === true) {
          showToast('Success', res.data.message, true);
          setActiveBox('verificationDone');
        }
      })
      .catch((err: any) => {
        console.log('error..', err.message);
      })
      .finally(() => {});
  };
  // useEffect(() => {
  //   padFunction();
  // }, []);
  const padFunction = () => {
    let string = String(formData?.email);
    let sliced = string.slice(-14);
    let mask = String(sliced).padStart(string.length, '*');
    return mask;
  };

  return (
    <Wrapper isMarginHorizontal>
      {/* sms/email verification section */}
      {activeBox === 'email' ? (
        <View style={styles.e_view}>
          <Text size={typography.h32} semiBold align>
            Check Your Email
          </Text>
          <View style={styles.checkView}>
            <Text medium size={typography.standard} style={styles.innerText}>
              Please enter the verification code that was sent to{' '}
              {padFunction()}
            </Text>
            <CustomCodeField
              value={value}
              setValue={(val: any) => onSubmit(val)}
            />
            <View style={styles.timerStyle}>
              {codeTimer !== '' && (
                <>
                  <Image
                    source={timer}
                    resizeMode="contain"
                    style={styles.tImg}
                  />
                  <Text semiBold size={typography.standard}>
                    {codeTimer}
                  </Text>
                </>
              )}
            </View>
          </View>
        </View>
      ) : activeBox === 'verificationDone' ? (
        // thankYou section
        <View style={styles.e_view}>
          <Success
            title={
              'Congratulations! Your account has been successfully verified...'
            }
            onClick={onVerificationCompleted}
          />
        </View>
      ) : (
        // selection section
        <View style={styles.p_view}>
          <Text
            style={styles.wText}
            color={primaryDarkColor}
            size={typography.heading}
            semiBold
            align>
            Your Profile Has Been Created
          </Text>
          <View style={styles.viewTxt}>
            <Image source={created_p} style={styles.img} />
            <Text
              medium
              style={styles.text}
              color={primaryDarkColor}
              size={typography.subHeading}>
              Your account has been created. A verification email has been sent
              to kinza@plask.ca
              {/* {padFunction()} */}
              {/* {formData?.email} */}
            </Text>
          </View>
          {/* <View style={styles.viewStyle}>
            <BorderBox
              selected={selectedMsg}
              title={'Use Text Messages'}
              onPressRadioBtn={() => onPressBox('msg')}
            />
            <BorderBox
              selected={selectedEmail}
              title={'Use Email Address'}
              onPressRadioBtn={() => onPressBox('email')}
            />
          </View> */}
        </View>
      )}
      <View style={styles.viewBtn}>
        {activeBox === 'email' ? (
          <Text size={13} align style={{marginBottom: RF(25)}} regular>
            Haven't received a verification code?
          </Text>
        ) : null}

        {activeBox === 'verificationDone' ? null : (
          <CustomButton
            text={
              activeBox === 'email'
                ? 'Resend Code'
                : activeBox === 'verificationDone'
                ? 'Continue'
                : 'Next'
            }
            onPress={
              selectedEmail
                ? onNext
                : activeBox === 'verificationDone'
                ? onVerificationCompleted
                : onResend
            }
            textStyle={[styles.txt, {color: resendDisable ? gray : WHITE}]}
            disabled={resendDisable ? true : false}
            bgClr={resendDisable ? light_grey : primaryDarkColor}
          />
        )}

        {activeBox === 'email' || activeBox === 'verificationDone' ? null : (
          <View style={styles.view}>
            <Text color={primaryDarkColor} semiBold size={12}>
              {' '}
              Cancel{' '}
            </Text>
          </View>
        )}
      </View>
    </Wrapper>
  );
};

export default Verification;
