import {RF} from '@theme';
import {timer} from '@assets';
import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {CustomButton, CustomCodeField, Text, Wrapper} from '@components';
import {navigate, verifySignUp_Otp} from '@services';

const Scan_Verification = () => {
  let smsInterval: any = '';
  const [value, setValue] = useState('');
  let [counter, setCounter] = useState(59);
  const [codeTimer, setCodeTimer] = useState('');
  const [ocr_confirmed, setOcr_Confirmed] = useState(false);

  const onClick = () => {
    // setOcr_Confirmed(!ocr_confirmed);
    navigate('Home');
  };
  const onSubmit = (val: any) => {
    if (val > 1) {
      // setTimer();
    }
    setValue(val);
  };
  // const setTimer = () => {
  //   smsInterval = setInterval(() => {
  //     if (counter <= 0) {
  //       clearInterval(smsInterval);
  //     } else {
  //       let m = Math.floor((counter / 60) % 60);
  //       let s = Math.floor(counter % 60);
  //       setCounter((counter -= 1));
  //       setCodeTimer('0' + m + ':' + s + 's');
  //     }
  //   }, 1000);
  // };

  const verfiyOTP = () => {
    let params = {};
    verifySignUp_Otp(params)
      .then((res: any) => {
        console.log('otp....', res.data);
      })
      .catch((err: any) => {
        console.log('catch.nnnnn..', err.message);
      })
      .finally(() => {});
  };

  return (
    <Wrapper>
      {/* {!ocr_confirmed ? ( */}
      <View style={styles.view}>
        <Text size={18} semiBold>
          QR Code Success!
        </Text>
        <Text size={12} medium style={styles.wd}>
          You have successfully connected your Plastk Rewards Account to a
          Plastk Merchant Terminal.
        </Text>
        <Text size={12} medium style={styles.text}>
          Visit the Insights page on your Plastk Rewards App to see all purchase
          transactions!
        </Text>
      </View>
      {/* ) 
      : (
        <View style={styles.view}>
          <Text size={18} semiBold style={styles.txt}>
            One-Time Authenticator
          </Text>
          <Text size={12} medium style={styles.text2}>
            Please enter the code displayed on the Plastk Terminal in your
            Plastk Rewards App to continue.
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
                <Text>{codeTimer}</Text>
              </>
            )}
          </View>
        </View>
      )} */}

      <CustomButton
        text={'Home'}
        onPress={onClick}
        btnStyle={{marginBottom: '5%'}}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  txt: {marginLeft: RF(20)},
  text2: {width: '90%', marginBottom: RF(20), marginLeft: RF(20)},
  text: {marginTop: RF(15), width: '90%'},
  wd: {width: '90%', marginTop: 20},
  view: {
    flex: 0.9,
    justifyContent: 'center',
    marginHorizontal: RF(25),
  },
  tImg: {width: '10%', height: RF(18)},
  timerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: RF(30),
  },
});
export default Scan_Verification;
