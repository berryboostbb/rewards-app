import {
  View,
  Image,
  Pressable,
  ScrollView,
  ImageBackground,
  Platform,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {signOut} from '@redux';
import {navigate} from '@services';
import {RF, typography, WHITE} from '@theme';
import {useDispatch, useSelector} from 'react-redux';
import {card, p_b, p_c, p_i, p_m, p_o, p_p, p_r} from '@assets';
import {DropDown, Profile_Header, Text, Text_Image, Wrapper} from '@components';

const Profile = ({navigation}: any) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state: any) => state.root.user);

  const onOpen = () => {};

  return (
    <Wrapper isMarginHorizontal>
      <Profile_Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => navigate('Refer_A_Friend')}
          style={styles.pressable}>
          <ImageBackground
            source={p_r}
            resizeMode="contain"
            style={styles.imgBG}>
            <Image source={p_i} resizeMode="contain" style={styles.image} />
            <View>
              <Text color={WHITE} semiBold size={typography.h3}>
                Refer a Friend
              </Text>
              <Text
                color={WHITE}
                semiBold
                size={
                  Platform.OS === 'ios'
                    ? typography.normal
                    : typography.standard
                }>
                And Earn 2500 Plastk Reward Points{' '}
              </Text>
            </View>
          </ImageBackground>
        </Pressable>

        <Text_Image
          source={p_p}
          text={'Edit Profile'}
          onOpen={() => navigate('EditProfile')}
        />
        <Text_Image
          source={card}
          text={'My Cards'}
          onOpen={() => navigate('MyCard')}
        />
        <Text_Image
          source={p_b}
          text={'Notifications'}
          onOpen={() => navigate('Notifications')}
        />
        <Text_Image
          source={p_m}
          text={'Contact Us'}
          onOpen={() => navigate('Profile_ContactUs')}
        />
        <Text_Image source={p_c} text={'FAQ'} onOpen={() => navigate('FAQ')} />
        <Text_Image
          source={p_o}
          text={'Sign Out'}
          onOpen={() => dispatch(signOut())}
        />

        <View style={{marginBottom: RF(100)}}></View>
      </ScrollView>
    </Wrapper>
  );
};

export default Profile;
