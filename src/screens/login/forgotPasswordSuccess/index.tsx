import styles from './styles';
import {emailSent} from '@assets';
import {navigate} from '@services';
import React, {useState} from 'react';
import {GST, ligh_green} from '@theme';
import {openLink, showToast} from '@utils';
import {useTheme} from '@react-navigation/native';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {CustomButton, CustomLoader, Wrapper, Text} from '@components';

const ForgotPasswordSent = (props: any) => {
  const myTheme: any = useTheme();
  const {email} = props.route.params;
  const [loading, setloading] = useState(false);

  const reSendButtonPressed = () => {
    setloading(true);
    navigate('ForgotPassword');
    // let params = {email: email};
    // forgetPassword(params)
    //   .then(res => {
    //     if (res.data.code == 200) {
    //       if (res.data.success) {
    //         showToast('Success!', res.data.message, true);
    //       }
    //     }
    //   })
    //   .catch(err => console.log('err..', err))
    //   .finally(() => setloading(false));
  };

  return (
    <Wrapper>
      <ScrollView style={styles.container}>
        <View style={styles.imageView}>
          <Image source={emailSent} resizeMode="contain" style={styles.image} />
        </View>

        <Text style={styles.emailText} size={22} bold center>
          Email Sent
        </Text>

        <Text style={styles.txt} size={15}>
          Email successfully sent to{' '}
        </Text>

        <Text style={styles.text} bold size={16} color={ligh_green}>
          {props?.route?.params?.email}
        </Text>

        <Text style={GST.pt7} size={16}>
          Please check your email for password reset link{' '}
        </Text>

        <Text style={styles.contactText} size={16}>
          If you don’t receive the email, please contact{' '}
        </Text>

        <View style={styles.innerView}>
          <TouchableOpacity onPress={() => openLink('mailto:hello@plastk.ca')}>
            <Text bold size={17}>
              hello@plastk.ca
            </Text>
          </TouchableOpacity>
          <Text size={17}> or click the resend button</Text>
        </View>

        <CustomButton
          text="Resend Email"
          btnStyle={styles.resend_btn}
          textStyle={GST.fSize16}
          onPress={() => reSendButtonPressed()}
        />
        <CustomButton
          text="Ok!"
          btnStyle={styles.signIn}
          textStyle={GST.whiteClr}
          onPress={() => props.navigation.navigate('Login')}
        />
        {loading && <CustomLoader />}
      </ScrollView>
    </Wrapper>
  );
};

export default ForgotPasswordSent;
