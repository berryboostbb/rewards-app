import React from 'react';
import Text from './text';
import {back} from '@assets';
import UserAvatar from '../userAvatar';
import {useSelector} from 'react-redux';
import {RF, txt_gray, typography} from '@theme';
import {Image, View, StyleSheet, Pressable} from 'react-native';

const Profile_Header = ({navigation}: {navigation?: any}) => {
  const {user} = useSelector((state: any) => state.root.user);

  return (
    <>
      <Pressable onPress={() => navigation.goBack()}>
        <Image source={back} resizeMode="contain" style={styles.topImg} />
      </Pressable>
      <View style={styles.mainView}>
        <UserAvatar isProfile />
        <Text semiBold color={txt_gray} size={typography.h3} style={styles.txt}>
          {user.first_name} {user.last_name}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  topImg: {
    width: RF(20),
    height: RF(16),
    marginTop: RF(60),
  },
  mainView: {
    alignItems: 'center',
  },
  txt: {marginVertical: RF(10)},
});

export default Profile_Header;
