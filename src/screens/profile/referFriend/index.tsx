import {
  p_i,
  p_s,
  copy,
  back,
  success,
  p_curve,
  doted_rec,
  referFriend,
} from '@assets';
import styles from './styles';
import {showToast} from '@utils';
import React, {useState} from 'react';
import Share from 'react-native-share';
import {useSelector} from 'react-redux';
import {RF, typography, WHITE} from '@theme';
import {CustomButton, Text, Wrapper} from '@components';
import Clipboard from '@react-native-community/clipboard';
import {Image, ImageBackground, Pressable, View} from 'react-native';

const Refer_A_Friend = ({navigation}: any) => {
  const [code, setCode] = useState('12345678');
  const {user} = useSelector((state: any) => state.root.user);

  const copyToClipBoard = () => {
    Clipboard.setString(user?.referral_code);
    showToast('Copied to Clipboard', '', success);
  };
  const shareOptions = {
    message: code,
  };

  const shareCode = () => {
    Share.open(shareOptions)
      .then(res => {})
      .catch(err => {
        err && console.log(err);
      });
  };

  const onBack = () => {
    navigation.goBack();
  };

  console.log('user,......', user);

  return (
    <Wrapper isTransparent>
      <ImageBackground
        // resizeMode="cover"
        source={referFriend}
        style={styles.topImgBG}>
        <Pressable onPress={onBack} style={styles.back}>
          <Image source={back} resizeMode="contain" style={styles.topImg} />
        </Pressable>
      </ImageBackground>

      <ImageBackground
        source={p_curve}
        style={styles.mainImage}
        // resizeMode="contain"
      >
        <View style={styles.mainView}>
          <Image source={p_i} resizeMode="contain" style={styles.IconImg} />
          <Text semiBold size={typography.heading} color={WHITE}>
            Refer a Friend
          </Text>
          <Text
            center
            semiBold
            color={WHITE}
            style={styles.wd}
            size={typography.standard}>
            to the Plastk Reward Points App and Earn 2500 Plastk Reward Points.
          </Text>
          <Text
            semiBold
            size={typography.normal}
            color={WHITE}
            style={{marginTop: RF(30), marginBottom: RF(10)}}>
            Your Referral Code
          </Text>
          <ImageBackground
            source={doted_rec}
            style={styles.imgBG}
            resizeMode="contain">
            <Text
              size={typography.h24}
              semiBold
              color={WHITE}
              style={{paddingHorizontal: 10}}>
              {user?.referral_code}
            </Text>
            <Pressable onPress={copyToClipBoard}>
              <Image source={copy} resizeMode="contain" style={styles.copy} />
            </Pressable>
          </ImageBackground>
          <Text
            semiBold
            size={typography.normal}
            color={WHITE}
            style={{
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
              textDecrationColor: WHITE,
            }}>
            Terms & Conditions Apply
          </Text>

          <CustomButton
            bgClr={WHITE}
            textStyle={styles.font}
            btnStyle={styles.btnView}
            text={'Share Referral Code'}
            onPress={shareCode}>
            <Image source={p_s} style={styles.btn} />
          </CustomButton>
        </View>
      </ImageBackground>
    </Wrapper>
  );
};

export default Refer_A_Friend;
